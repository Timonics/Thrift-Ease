import React, { useEffect } from "react";
import ShopsHeader from "./components/ShopsHeader";
import FeaturedShops from "./components/FeaturedShops";
import Shops from "./components/AllShops";
import Footer from "../../components/footer";

const ShopsPage: React.FC = () => {
  const comingSoon = true;

  useEffect(() => {
    if (comingSoon) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [comingSoon]);

  return (
    <>
      <div className="min-h-screen fixed top-22 left-0 w-full bg-black/80 border-t-2 border-white/30 backdrop-blur-xs pointer-events-none z-50 font-heading text-3xl flex items-center justify-center font-bold text-white">
      Coming Soon !!!
      </div>
      <ShopsHeader />
      <FeaturedShops />
      <Shops />
      <Footer />
    </>
  );
};

export default ShopsPage;
