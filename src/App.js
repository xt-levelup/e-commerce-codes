// -----------------------------------------------------------------------
// ------SỬ DỤNG createBrowserRouter ĐỂ TẠO HỆ THỐNG ROUTER---------------
// -----------SỬ DỤNG RouterProvider ĐỂ KHAI BÁO CÁC ROUTER---------------
// ------SỬ DỤNG Navigate ĐỂ CHUYỂN HƯỚNG ĐẾN TRANG ĐÍCH TRONG route------
// --------SỬ DỤNG lazy ĐỂ TẢI DỮ LIỆU KHI ĐƯỢC TRUY CẬP ĐẾN route--------
// ------------SỬ DỤNG Suspense ĐỂ TẠO TRẠNG THÁI TẢI TRANG---------------
// -----------------------------------------------------------------------

import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import ShopProducts from "./components/shop-components/ShopProducts";
import IPhone from "./components/shop-components/product-list-components/IPhone";
import IPadComponent from "./components/shop-components/product-list-components/IPadLink";
import Macbook from "./components/shop-components/product-list-components/Macbook";
import Airpod from "./components/shop-components/product-list-components/Airpod";
import Watch from "./components/shop-components/product-list-components/Watch";
import Mouse from "./components/shop-components/product-list-components/Mouse";
import Keyboard from "./components/shop-components/product-list-components/Keyboard";
import Other from "./components/shop-components/product-list-components/Other";

const HomePage = lazy(() => import("./pages/HomePage.js"));
const ShopPage = lazy(() => import("./pages/ShopPage.js"));
const DetailPage = lazy(() => import("./pages/DetailPage.js"));
const CartPage = lazy(() => import("./pages/CartPage.js"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage.js"));
const LoginPage = lazy(() => import("./pages/LoginPage.js"));
const RegisterPage = lazy(() => import("./pages/RegisterPage.js"));

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            errorElement: <ErrorPage />,
            id: "items",
            loader: () =>
                import(
                    "./components/homepage-components/product-components/ProductItems.js"
                ).then((module) => module.loader()),
            children: [
                {
                    index: true,
                    element: (
                        <Suspense
                            fallback={
                                <p style={{ color: "black" }}>Loading...</p>
                            }
                        >
                            <HomePage />
                        </Suspense>
                    ),
                    loader: () =>
                        import(
                            "./components/homepage-components/product-components/ProductItems.js"
                        ).then((module) => module.loader()),
                },
                {
                    path: "/shop",
                    element: (
                        <Suspense
                            fallback={
                                <p style={{ color: "black" }}>Loading...</p>
                            }
                        >
                            <ShopPage />
                        </Suspense>
                    ),

                    children: [
                        {
                            index: true,

                            element: <ShopProducts />,
                        },
                        {
                            path: "ipad",
                            element: <IPadComponent />,
                        },
                        {
                            path: "iphone",
                            element: <IPhone />,
                        },
                        {
                            path: "macbook",
                            element: <Macbook />,
                        },
                        {
                            path: "airpod",
                            element: <Airpod />,
                        },
                        {
                            path: "watch",
                            element: <Watch />,
                        },
                        {
                            path: "mouse",
                            element: <Mouse />,
                        },
                        {
                            path: "keyboard",
                            element: <Keyboard />,
                        },
                        {
                            path: "other",
                            element: <Other />,
                        },
                    ],
                },

                {
                    path: "detail/:productId",
                    element: (
                        <Suspense
                            fallback={
                                <p style={{ color: "black" }}>Loading...</p>
                            }
                        >
                            <DetailPage />
                        </Suspense>
                    ),
                },
                {
                    path: "cart",
                    element: (
                        <Suspense
                            fallback={
                                <p style={{ color: "black" }}>Loading...</p>
                            }
                        >
                            <CartPage />
                        </Suspense>
                    ),
                },
                {
                    path: "checkout",
                    element: (
                        <Suspense
                            fallback={
                                <p style={{ color: "black" }}>Loading...</p>
                            }
                        >
                            <CheckoutPage />
                        </Suspense>
                    ),
                },
                {
                    path: "login",
                    element: (
                        <Suspense
                            fallback={
                                <p style={{ color: "black" }}>Loading...</p>
                            }
                        >
                            <LoginPage />
                        </Suspense>
                    ),
                },
                {
                    path: "register",
                    element: (
                        <Suspense
                            fallback={
                                <p style={{ color: "black" }}>Loading...</p>
                            }
                        >
                            <RegisterPage />
                        </Suspense>
                    ),
                },
                {
                    path: "*",
                    element: <Navigate to="/" />,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
