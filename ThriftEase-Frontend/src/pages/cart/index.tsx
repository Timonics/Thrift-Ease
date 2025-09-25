import React from "react";
import BreadCrumbs from "./components/BreadCrumbs";
import CartContent from "./components/CartContent";
import Footer from "../../components/footer";

const CartPage: React.FC = () => {
  return (
    <>
      <BreadCrumbs />
      <CartContent />
      <Footer />
    </>
  );
};

export default CartPage;
