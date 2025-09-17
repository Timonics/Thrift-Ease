import React from "react";
import ShopsHeader from "./components/ShopsHeader";
import FeaturedShops from "./components/FeaturedShops";
import Shops from "./components/AllShops";
import Footer from "../../components/footer";

const ShopsPage: React.FC = () => {
  return (
    <>
      <ShopsHeader />
      <FeaturedShops />
      <Shops />
      <Footer />
    </>
  );
};

export default ShopsPage;
