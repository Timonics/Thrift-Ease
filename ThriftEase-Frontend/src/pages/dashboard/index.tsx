import React, { useEffect } from "react";
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
import MyDrafts from "./components/MyDrafts";
import { useAppState } from "../../contexts/StateProvider";

const DashBoardPage: React.FC = () => {
  const { isAuthenticated, userData } = useSelector(
    (state: RootState) => state.users
  );

  const { listingDrafts } = useSelector(
    (state: RootState) => state.drafts
  );

  const { isDrafted, setIsDrafted } = useAppState();

  useEffect(() => {
    setTimeout(() => {
      setIsDrafted(false);
    }, 3000);
  }, []);

  console.log(listingDrafts);

  return (
    <>
      {!isAuthenticated || !userData ? (
        <>
          <div className="fixed bg-background w-full h-full" />
          <AuthenticationMsg page="view your dashboard" />
        </>
      ) : (
        <>
          {isDrafted && (
            <div className="bg-green-600/20 border border-green-600 backdrop-blur-2xl text-green-400 p-3 rounded-md mb-4 outfit fixed top-4 left-1/2 -translate-x-1/2 w-[90%] text-center max-w-lg z-50">
              <strong>Successfully Drafted!</strong> Your message has been sent.
              I'll get back to you soon.
            </div>
          )}
          <WelcomeMsg user={userData} />
          <AnalyticsWidget />
          <Orders />
          {!userData.isSeller && <Listing />}
          <MyListings />
          {listingDrafts.length !== 0 && <MyDrafts />}
          <ProductCategories />
          {/* <Bidding /> */}
          <Footer />
        </>
      )}
    </>
  );
};

export default DashBoardPage;
