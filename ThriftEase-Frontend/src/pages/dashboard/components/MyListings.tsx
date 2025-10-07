import React, { useEffect } from "react";
import Card from "../../../components/card";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProducts } from "../../../store/slices/product.slice";
import type { RootState } from "../../../store/store";
import { CgSpinner } from "react-icons/cg";

import emptyProducts from "../../../assets/svg/empty-categories.svg";

const MyListings: React.FC = () => {
  const dispatch = useDispatch();

  const { userProducts, loading, error } = useSelector(
    (state: RootState) => state.productsReducer
  );

  useEffect(() => {
    fetchUserProducts();
  }, [dispatch]);

  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground/90 mb-2">
              My Listings
            </h2>
            <p className="font-body text-foreground/40">
              Manage all your thrift items -- upload, update or track how
              listings are performing.
            </p>
          </div>
          <button className={`border-primary text-primary hover:bg-primary hover:text-foreground bg-transparent ${!userProducts.length && "opacity-30"} px-2 py-0.5 rounded-md text-sm`}>
            View All Products
          </button>
        </div>
        {userProducts.length !== 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {userProducts.map((product, index) => (
              <Card
                key={index}
                className="bg-foreground/5 border border-[#D1D1D1] rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer group"
              >
                <div className="p-4">
                  <div className="relative mb-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-body font-semibold text-foreground mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <p className="font-heading font-bold text-primary text-lg">
                      {product.discountPrice
                        ? product.discountPrice
                        : product.price}
                    </p>
                    {product.discountPrice && (
                      <p className="font-secondary text-sm text-foreground/50 line-through">
                        {product.price}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="py-0.5 px-2 rounded-sm bg-foreground/10 outfit">
                      {product.condition}
                    </div>
                    <div className="py-0.5 px-2 rounded-sm bg-foreground/10 outfit">
                      {product.status}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 rounded-md bg-primary hover:bg-primary/90 text-white font-body p-2">
                      Edit Product
                    </button>
                    <button className="flex-1 bg-red-500 text-black rounded-md font-body p-2 hover:bg-red-600">
                      Delete
                    </button>
                  </div>
                  <button className="flex-1 border-primary text-primary hover:bg-primary hover:text-white rounded-md font-body bg-transparent p-2 mt-2 border w-full">
                    Mark as Sold
                  </button>
                </div>
              </Card>
            ))}
          </div>
        )}
        {loading && (
          <div className="min-h-[400px] flex items-center justify-center w-full">
            <CgSpinner className="w-12 h-12 text-foreground/75 animate-spin" />
          </div>
        )}
        {error ||
          (!userProducts.length && (
            <Card className="min-h-[400px] font-bold flex flex-col items-center justify-center w-full font-body text-2xl">
              <img src={emptyProducts} className="size-30 lg:size-50" />
              No Products Listed
              <p></p>
            </Card>
          ))}
      </div>
    </section>
  );
};

export default MyListings;
