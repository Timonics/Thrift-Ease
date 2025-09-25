import React from "react";
import AnalyticsWidget from "./components/AnalyticsWidget";
import ProductCategories from "./components/ProductCategories";
import Bidding from "./components/Bidding";
import ProductListing from "./components/ProductListing";
import Footer from "../../components/footer";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import AuthenticationMsg from "../../components/authentication-msg";
import AddProduct from "./components/AddProduct";

const DashBoardPage: React.FC = () => {
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.usersReducer
  );

  return (
    <>
      {!isAuthenticated ? (
        <AuthenticationMsg page="dashboard" />
      ) : (
        <>
          <AnalyticsWidget />
          <AddProduct />
          <ProductCategories />
          <Bidding />
          <ProductListing />
          <Footer />
        </>
      )}
    </>
  );
};

export default DashBoardPage;
