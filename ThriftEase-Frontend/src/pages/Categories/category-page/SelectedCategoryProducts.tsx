import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store/store";
import { fetchProductsByCategory } from "../../../store/slices/product.slice";
import { Link, useLocation, useParams } from "react-router";
import {
  ArrowUpDown,
  ChevronDown,
  Filter,
  Grid3X3,
  Heart,
  List,
} from "lucide-react";
import Card from "../../../components/card";
import placeholderImg from "../../../assets/leather-jacket.png";
import { CgSpinner } from "react-icons/cg";

const SelectedCategoryProducts: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { categoryID } = useParams<{ categoryID: string }>();

  const location = useLocation();
  const activeSubCategoryId = new URLSearchParams(location.search).get(
    "subcategory"
  );

  const categoryId = Number(categoryID);
  if (isNaN(categoryId)) {
    return "category id param is not a number";
  }

  useEffect(() => {
    dispatch(fetchProductsByCategory(categoryId));
  }, [dispatch]);

  const { products, loading } = useSelector(
    (state: RootState) => state.productsReducer
  );

  const baseProducts = activeSubCategoryId
    ? products.filter(
        (product) => String(product.subCategoryId) === activeSubCategoryId
      )
    : products;

  return (
    <section className="py-8 lg:py-10 bg-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter and Sort Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <button className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent flex items-center border px-2 py-1 rounded-md ">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
            <button className="border px-2 py-1 rounded-md flex items-center text-foreground/50 hover:bg-background/50 bg-transparent">
              <ArrowUpDown className="w-4 h-4 mr-2" />
              Sort by Price
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-secondary text-sm text-foreground/50">
              Showing 10 of 100 products
            </span>
            <button className="hover:bg-primary/10 hover:text-primary ml-5">
              <Grid3X3 className="w-6 h-6" />
            </button>
            <button className="hover:bg-primary/10 hover:text-primary">
              <List className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="h-[210px] flex items-center justify-center gap-3 font-heading text-2xl font-bold">
            <CgSpinner size={24} className="animate-spin" />
            loading...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
            {baseProducts.length ? (
              baseProducts.map((product) => (
                <Card
                  key={product.id}
                  className="shadow-sm hover:shadow-lg hover:border-primary transition-all duration-300 cursor-pointer group overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={placeholderImg}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 flex space-x-2">
                      <button
                        className={`w-8 h-8 p-0 rounded-full bg-white/90 hover:bg-white text-red-500 flex items-center justify-center`}
                      >
                        <Heart className={`w-4 h-4 fill-current`} />
                      </button>
                    </div>
                    <div className="absolute bottom-3 left-3 flex space-x-2">
                      <div className="bg-foreground font-medium text-background text-xs px-2 py-1 rounded-md font-heading">
                        {product.condition}
                      </div>
                      {/* <div className="bg-primary text-white font-roboto text-xs">
                    {product.subcategory}
                  </div> */}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-body font-semibold text-foreground line-clamp-2 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="font-heading font-bold text-lg text-primary">
                        $
                        {product.discountPrice && product.discountPrice > 0
                          ? product.discountPrice
                          : product.price}
                      </span>
                      {product.discountPrice && product.discountPrice > 0 && (
                        <span className="font-body text-sm text-foreground/50 line-through">
                          ${product.price}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-sm text-foreground/50 mb-3">
                      <div className="flex items-center space-x-1"></div>
                      {/* <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span className="font-roboto">{product.views}</span>
                  </div> */}
                    </div>
                    {/* <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span className="font-roboto">{product.seller}</span>
                  <span className="font-roboto">{product.postedTime}</span>
                </div> */}
                    <Link
                      to={`/products/${product.id}`}
                      className="w-full bg-primary hover:bg-primary/90 text-white font-body px-2 py-1 rounded-md cursor-pointer"
                    >
                      View Details
                    </Link>
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-lg font-body flex">
                No products found for this filter
              </div>
            )}
          </div>
        )}

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="border-primary text-primary hover:bg-primary hover:text-white px-8 bg-transparent border py-1 rounded-md font-body font-semibold">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default SelectedCategoryProducts;
