import React from "react";
import Card from "../../../components/card";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import CategoryIcon from "../../../utils/CategoryIcon";
import { Link } from "react-router";
import { CgSpinner } from "react-icons/cg";

import emptyCategory from "../../../assets/svg/empty-categories.svg";

const ProductCategories: React.FC = () => {
  const { categories, error, loading } = useSelector(
    (state: RootState) => state.categoriesReducer
  );

  console.log(categories);

  return (
    <section className="py-8 lg:py-12 bg-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground/90 mb-2">
            Browse Categories
          </h2>
          <p className="font-body text-foreground/40">
            Discover amazing thrifted items in every category
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {categories.length &&
            categories
              .slice(0, 4)
              .map((category, index) => {
                return (
                  <Card
                    key={index}
                    className="bg-foreground/5 border border-[#D1D1D1] rounded-lg shadow-sm hover:shadow-lg hover:border-primary transition-all duration-300 cursor-pointer group"
                  >
                    <div className="p-4 lg:p-6 text-center items-center flex flex-col justify-between gap-5 h-full">
                      <div className="flex flex-col">
                        <div
                          style={{
                            backgroundColor: `${category.iconColor}20`,
                            color: category.iconColor,
                          }}
                          className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full flex flex-wrap items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                        >
                          <CategoryIcon iconKey={category.icon} />
                        </div>
                        <h3 className="font-body font-semibold text-sm lg:text-base text-foreground/90">
                          {category.name}
                        </h3>
                      </div>
                      <Link
                        onClick={() =>
                          window.scrollTo({ behavior: "smooth", top: 0 })
                        }
                        to={`/categories/${category.id}`}
                        className="bg-primary hover:bg-primary/90 transition hover:scale-105 duration-300 ease-in-out text-background font-body px-4 py-1 rounded-md mt-auto"
                      >
                        Explore
                      </Link>
                    </div>
                  </Card>
                );
              })}
          {loading && (
            <div className="min-h-[400px] flex items-center justify-center w-full">
              <CgSpinner className="w-12 h-12 text-foreground/75 animate-spin" />
            </div>
          )}
          {error ||
            (!categories.length && (
              <Card className="min-h-[400px] font-bold flex flex-col items-center justify-center w-full font-body text-2xl">
                <img src={emptyCategory} className="size-30 lg:size-50" />
                No Categories Found
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
