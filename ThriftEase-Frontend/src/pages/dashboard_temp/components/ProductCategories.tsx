import React from "react";
import Card from "../../../components/card";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import CategoryIcon from "../../../utils/CategoryIcon";
import { Link } from "react-router";

const ProductCategories: React.FC = () => {
  const { categories } = useSelector(
    (state: RootState) => state.categoriesReducer
  );

  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground/90 mb-2">
            Browse Categories
          </h2>
          <p className="font-body text-foreground/40">
            Discover amazing thrifted items in every category
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((category, index) => {
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
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
