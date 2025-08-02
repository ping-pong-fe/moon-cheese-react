import { HttpResponse, http } from 'msw';
import { gradePointList, gradeShippingList, products, user, type Product } from './data';

const ERROR_CHANCE = 0.33;

const EXCHANGE_RATE = Math.floor(Math.random() * (1400 - 1200 + 1)) + 1200;

let cartItems: {
  productId: number;
  quantity: number;
}[] = [];

export const handlers = [
  http.get('/api/product/list', async () => {
    return HttpResponse.json(
      {
        products: products,
      },
      { status: 200 }
    );
  }),

  http.get('/api/exchange-rate', async () => {
    return HttpResponse.json(
      {
        exchangeRate: EXCHANGE_RATE,
      },
      { status: 200 }
    );
  }),

  http.get('/api/me', async () => {
    const isError = isErrorRandomly(ERROR_CHANCE);
    if (isError) {
      return new HttpResponse(null, {
        status: 500,
        statusText: 'Internal Server Error',
      });
    }

    return HttpResponse.json(
      {
        id: user.id,
        name: user.name,
        email: user.email,
        point: user.point,
        grade: user.grade,
        wishList: user.wishList,
      },
      { status: 200 }
    );
  }),

  http.get('/api/grade/point', async () => {
    const isError = isErrorRandomly(ERROR_CHANCE);
    if (isError) {
      return new HttpResponse(null, {
        status: 500,
        statusText: 'Internal Server Error',
      });
    }

    return HttpResponse.json(
      {
        gradePointList,
      },
      { status: 200 }
    );
  }),

  http.get('/api/grade/shipping', async () => {
    return HttpResponse.json(
      {
        gradeShippingList,
      },
      { status: 200 }
    );
  }),

  http.get('/api/recent/product', async () => {
    const randomIndex = generateRandomIndex(products.length);

    return HttpResponse.json(
      {
        products: [products[randomIndex]],
      },
      { status: 200 }
    );
  }),

  http.get('/api/cart', async () => {
    return HttpResponse.json(
      {
        cartItems,
      },
      { status: 200 }
    );
  }),

  http.post('/api/cart/:productId', async ({ request, params }) => {
    const product = products.find(product => product.id === Number(params.productId));
    if (!product) {
      return new HttpResponse(null, { status: 404 });
    }

    if (!cartItems.some(item => item.productId === product.id)) {
      cartItems.push({
        productId: product.id,
        quantity: 1,
      });
    } else {
      cartItems = cartItems.map(item => {
        if (item.productId === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    }

    return HttpResponse.json(
      {
        success: true,
      },
      { status: 200 }
    );
  }),
];

function isErrorRandomly(threshold: number) {
  const randomNumber = Math.random();
  return randomNumber < threshold;
}

function generateRandomIndex(length: number) {
  return Math.floor(Math.random() * length);
}
