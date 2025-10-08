import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchProductDetails } from "../../store/slices/product.slice";
import type { AppDispatch, RootState } from "../../store/store";
import ProductDetails from "./ProductDetails";
import ProductBreadCrumbs from "./ProductBreadCrumbs";
import { FaSpinner } from "react-icons/fa";
import Footer from "../../components/footer";

const ProductPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { productID } = useParams<{ productID: string }>();

  const productId = Number(productID);
  if (isNaN(productId)) return "product id param is not a number";

  // Fetch product details from the Redux store
  const { productDetails, loading, error } = useSelector(
    (state: RootState) => state.products
  );
  useEffect(() => {
    dispatch(fetchProductDetails(productId));
  }, [dispatch, productId]);

  if (loading) {
    return <div className="absolute w-full min-h-screen flex items-center justify-center">
      <FaSpinner className="animate-spin" />
    </div>;
  }

  if (error || !productDetails) {
    return <div className="absolute border w-full min-h-screen flex items-center justify-center outfit">No product details found...</div>;
  }

  return (
    <>
      <ProductBreadCrumbs product={productDetails} />
      <ProductDetails productDetails={productDetails} />
      <Footer />
    </>
  );
};

export default ProductPage;
