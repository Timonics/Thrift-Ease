import React from "react";
import AnalyticsWidget from "./components/AnalyticsWidget";
import ProductCategories from "./components/ProductCategories";
import Bidding from "./components/Bidding";
import ProductListing from "./components/ProductListing";
import Footer from "../../components/footer";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const DashBoardPage: React.FC = () => {
  const { userData } = useSelector((state: RootState) => state.usersReducer);

  console.log(userData);

  return (
    <>
      <AnalyticsWidget />
      <ProductCategories />
      <Bidding />
      <ProductListing />
      <Footer />
    </>
  );
};

export default DashBoardPage;
