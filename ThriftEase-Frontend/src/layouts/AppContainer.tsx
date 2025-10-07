import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Nav from "../components/nav";
import type { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../store/slices/category.slice";

const AppContainer: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  
  return (
    <div className="min-h-scren bg-background text-foreground flex flex-col">
      <Nav />
      <Outlet />
    </div>
  );
};

export default AppContainer;
