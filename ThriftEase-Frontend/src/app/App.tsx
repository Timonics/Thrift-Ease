import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import LandingPage from "../pages/landing";
import AppContainer from "../layouts/AppContainer";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ShopsPage from "../pages/shops";
import CategoriesPage from "../pages/categories";
import DashBoardPage from "../pages/dashboard";
import SelectedCategoryPage from "../pages/categories/SelectedCategoryPage";
import ProductPage from "../pages/products";

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
    ],
  },
]);

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
