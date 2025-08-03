import { HttpResponse, http } from "msw";
import {
	GRADE_POINTS,
	gradePointList,
	gradeShippingList,
	type Product,
	products,
	recommendProductIdMap,
} from "./data";

const ERROR_CHANCE = 0.33;

type RecentProduct = {
	id: number;
	thumbnail: string;
	name: string;
	price: number;
};

const defaultRecentProducts = convertToRecentProduct([
	products[0],
	products[1],
	products[2],
]);

let userPoint = 0;
let userGrade = "EXPLORER";

let recentProducts: RecentProduct[] = defaultRecentProducts;

const KRW_EXCHANGE_RATE = Math.floor(Math.random() * (1400 - 1200 + 1)) + 1200;

export const handlers = [
	http.get("/api/product/list", async () => {
		return HttpResponse.json(
			{
				products: products,
			},
			{ status: 200 },
		);
	}),

	http.get("/api/product/:id", async ({ params }) => {
		const { id } = params;
		if (!id) {
			return new HttpResponse(null, {
				status: 400,
				statusText: "Bad Request",
			});
		}

		const isError = isErrorRandomly(ERROR_CHANCE);
		if (isError) {
			return new HttpResponse(null, {
				status: 500,
				statusText: "Internal Server Error",
			});
		}

		const product = products.find((product) => product.id === Number(id));
		if (!product) {
			return new HttpResponse(null, {
				status: 404,
				statusText: "Not Found",
			});
		}

		return HttpResponse.json(product, { status: 200 });
	}),

	http.get("/api/product/recommend/:id", async ({ params }) => {
		const isError = isErrorRandomly(ERROR_CHANCE);
		if (isError) {
			return new HttpResponse(null, {
				status: 500,
				statusText: "Internal Server Error",
			});
		}
		const { id } = params;
		if (!id) {
			return new HttpResponse(null, {
				status: 400,
				statusText: "Bad Request",
			});
		}

		const product = products.find((product) => product.id === Number(id));
		if (!product) {
			return new HttpResponse(null, {
				status: 404,
				statusText: "Not Found",
			});
		}

		const recommendProductIds =
			recommendProductIdMap[product.id as keyof typeof recommendProductIdMap];

		if (!recommendProductIds) {
			return new HttpResponse(null, {
				status: 404,
				statusText: "Not Found",
			});
		}

		return HttpResponse.json({ recommendProductIds }, { status: 200 });
	}),

	http.get("/api/exchange-rate", async () => {
		return HttpResponse.json(
			{
				exchangeRate: {
					KRW: KRW_EXCHANGE_RATE,
					USD: 1,
				},
			},
			{ status: 200 },
		);
	}),

	http.get("/api/me", async () => {
		const isError = isErrorRandomly(ERROR_CHANCE);
		if (isError) {
			return new HttpResponse(null, {
				status: 500,
				statusText: "Internal Server Error",
			});
		}

		return HttpResponse.json(
			{
				point: userPoint,
				grade: userGrade,
			},
			{ status: 200 },
		);
	}),

	http.get("/api/grade/point", async () => {
		const isError = isErrorRandomly(ERROR_CHANCE);
		if (isError) {
			return new HttpResponse(null, {
				status: 500,
				statusText: "Internal Server Error",
			});
		}

		return HttpResponse.json(
			{
				gradePointList,
			},
			{ status: 200 },
		);
	}),

	http.get("/api/grade/shipping", async () => {
		return HttpResponse.json(
			{
				gradeShippingList,
			},
			{ status: 200 },
		);
	}),

	http.get("/api/recent/product/list", async () => {
		return HttpResponse.json(
			{
				recentProducts,
			},
			{ status: 200 },
		);
	}),

	http.post<object, { productId: number; quantity: number }[]>(
		"/api/product/purchase",
		async ({ request }) => {
			const isError = isErrorRandomly(ERROR_CHANCE);
			if (isError) {
				return new HttpResponse(null, {
					status: 500,
					statusText: "Internal Server Error",
				});
			}
			const body = await request.json();
			if (!body) {
				return new HttpResponse(null, {
					status: 400,
					statusText: "Bad Request",
				});
			}

			const isAllProductExists = body.every(({ productId }) =>
				products.some((product) => product.id === productId),
			);

			const isAllProductStockEnough = body.every(({ productId, quantity }) => {
				const product = products.find((product) => product.id === productId);
				if (!product) {
					return false;
				}
				return product.stock >= quantity;
			});

			if (!isAllProductExists || !isAllProductStockEnough) {
				return new HttpResponse(null, {
					status: 400,
				});
			}

			const purshaedProducts = products.filter((product) =>
				body.some(({ productId }) => productId === product.id),
			);

			recentProducts = convertToRecentProduct(purshaedProducts);

			userPoint += purshaedProducts.reduce((acc, product) => {
				return acc + product.price * 0.1;
			}, 0);

			userGrade = calcGradeFromPoint(userPoint);

			return HttpResponse.json(null, { status: 200 });
		},
	),
];

function isErrorRandomly(threshold: number) {
	const randomNumber = Math.random();
	return randomNumber < threshold;
}

function calcGradeFromPoint(point: number) {
	if (point >= GRADE_POINTS.COMMANDER) {
		return "COMMANDER";
	}
	if (point >= GRADE_POINTS.PILOT) {
		return "PILOT";
	}
	return "EXPLORER";
}

function convertToRecentProduct(products: Product[]): RecentProduct[] {
	return products.map((product) => ({
		id: product.id,
		thumbnail: product.images[0],
		name: product.name,
		price: product.price,
	}));
}
