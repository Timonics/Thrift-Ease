import React from "react";
import BreadCrumbs from "./components/BreadCrumbs";
import CheckOutContent from "./components/CheckOutContent";
import Footer from "../../components/footer";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import AuthenticationMsg from "../../components/authentication-msg";

const CheckOutPage: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.usersReducer.isAuthenticated
  );

  return isAuthenticated ? (
    <>
      <BreadCrumbs />
      <CheckOutContent />
      <Footer />
    </>
  ) : (
    <>
      <div className="fixed bg-black/50 w-full h-full"/>
      <AuthenticationMsg page="proceed to checkout"/>
    </>
  );
};

export default CheckOutPage;
