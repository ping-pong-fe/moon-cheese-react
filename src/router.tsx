import PageLayout from "@/layout/PageLayout";
import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <PageLayout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/product/:id",
				element: <ProductDetailPage />,
			},
			{
				path: "/shopping-cart",
				element: <ShoppingCartPage />,
			},
		],
	},
]);

export default router;
