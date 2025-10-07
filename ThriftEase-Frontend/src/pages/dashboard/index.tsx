import React from "react";
import AnalyticsWidget from "./components/AnalyticsWidget";
import ProductCategories from "./components/ProductCategories";
import Footer from "../../components/footer";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import AuthenticationMsg from "../../components/authentication-msg";
import WelcomeMsg from "./components/WelcomeMsg";
import Listing from "./components/Listing";
import Orders from "./components/Orders";
import MyListings from "./components/MyListings";

const DashBoardPage: React.FC = () => {
  const { isAuthenticated, userData } = useSelector(
    (state: RootState) => state.usersReducer
  );

  return (
    <>
      {!isAuthenticated || !userData ? (
        <>
          <div className="fixed bg-background w-full h-full" />
          <AuthenticationMsg page="view your dashboard" />
        </>
      ) : (
        <>
          <WelcomeMsg user={userData} />
          <AnalyticsWidget />
          <Orders />
          {!userData.isSeller && <Listing />}
          <MyListings />
          <ProductCategories />
          {/* <Bidding /> */}
          <Footer />
        </>
      )}
    </>
  );
};

export default DashBoardPage;
