import React from "react";
import Cart from "../../pages/Cart";
import AuthMsg from "../../components/auth-msg";
import { useAuthContext } from "../../contexts/AuthContext";

const CartLayout: React.FC = () => {
  const { isAuthenticated } = useAuthContext();
  return (
    <>{isAuthenticated ? <Cart /> : <AuthMsg message="view your cart" />}</>
  );
};
export default CartLayout;