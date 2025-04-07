import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";

import Home from "../pages/Home";
import Intro from "../pages/Intro";
import SplashScreen from "../pages/Splash-Screen";
import Category from "../pages/Category";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ListLayout from "../layouts/ListLayout";
import CategoryLayout from "../layouts/CategoryLayout";
import { useApiContext } from "../contexts/ApiContext";
import Categories from "../pages/Categories";
import { useUrlCategoryName } from "../utils/urlHelper";
import CartLayout from "../layouts/CartLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Account from "../pages/Account";
import Settings from "../pages/Settings";
import Support from "../pages/Support";

const App: React.FC = () => {
  const { categories } = useApiContext();
  const [firstPageLoaded, setFirstPageLoaded] = useState(
    localStorage.getItem("firstVisit")
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setFirstPageLoaded(localStorage.getItem("firstVisit"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          firstPageLoaded ? <Intro /> : <Navigate to="/welcome" replace />
        }
      />
      <Route
        path="welcome"
        element={<SplashScreen setFirstPageLoaded={setFirstPageLoaded} />}
      />
      <Route path="home" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<DashboardLayout />} />
        <Route path="list-item" element={<ListLayout />} />
        <Route path="my-cart" element={<CartLayout />} />
        <Route path="category" element={<Category />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="sign-up" element={<Register />} />
        <Route path="log-in" element={<Login />} />
      </Route>
      <Route path="categories" element={<CategoryLayout />}>
        {categories.map((category) => {
          const categoryPath = useUrlCategoryName(category);
          return (
            <Route
              key={category.id}
              path={categoryPath}
              element={<Categories />}
            />
          );
        })}
      </Route>
      <Route path="account" element={<Account />} />
      <Route path="help-and-support" element={<Support />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
};

export default App;
