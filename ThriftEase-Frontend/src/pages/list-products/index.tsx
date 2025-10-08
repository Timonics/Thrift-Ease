import React from "react";
import Hero from "./components/Hero";
import MainForm from "./components/MainForm";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import AuthenticationMsg from "../../components/authentication-msg";

const ListMyProduct: React.FC = () => {
  const { userData, isAuthenticated } = useSelector(
    (state: RootState) => state.users
  );
  return (
    <>
      {!isAuthenticated || !userData ? (
        <>
          <div className="fixed bg-background w-full h-full" />
          <AuthenticationMsg page="list your product" />
        </>
      ) : (
        <>
          <Hero />
          <MainForm />
        </>
      )}
    </>
  );
};

export default ListMyProduct;
