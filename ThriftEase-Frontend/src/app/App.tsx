import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import LandingPage from "../pages/landing";
import AppContainer from "../layouts/AppContainer";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ShopsPage from "../pages/shops";
import CategoriesPage from "../pages/categories_temp";
import DashBoardPage from "../pages/dashboard_temp";
import SelectedCategoryPage from "../pages/categories_temp/SelectedCategoryPage";
import ProductPage from "../pages/products";
import CartPage from "../pages/cart";
import AboutUsPage from "../pages/about";
import CheckOutPage from "../pages/checkout";
import type { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { checkAuth } from "../store/slices/user.slice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    children: [
      { path: "", element: <LandingPage /> },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          { path: "", element: <Login /> },
          { path: "register", element: <Register /> },
        ],
      },
      {
        path: "shop",
        element: <ShopsPage />,
      },
      {
        path: "categories",
        element: <CategoriesPage />,
      },
      {
        path: "categories/:categoryID",
        element: <SelectedCategoryPage />,
      },
      {
        path: "products/:productID",
        element: <ProductPage />,
      },
      {
        path: "dashboard",
        element: <DashBoardPage />,
      },
      {
        path: "my-cart",
        element: <CartPage />,
      },
      {
        path: "checkout",
        element: <CheckOutPage />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
    ],
  },
]);

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
