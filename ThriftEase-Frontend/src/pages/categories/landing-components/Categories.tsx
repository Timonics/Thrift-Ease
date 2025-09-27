import React from "react";
import Card from "../../../components/card";
import type { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import CategoryIcon from "../../../utils/CategoryIcon";

import emptyCategory from "../../../assets/svg/empty-categories.svg";
import { CgSpinner } from "react-icons/cg";

const Categories: React.FC = () => {
  const { categories, loading, error } = useSelector(
    (state: RootState) => state.categoriesReducer
  );

  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {categories.length !== 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              return (
                <Card
                  key={index}
                  className="hover:border-primary transition-transform duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="p-6 transition-transform duration-300 hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}
                        style={{
                          color: category.iconColor,
                          backgroundColor: `${category.iconColor}10`,
                        }}
                      >
                        <CategoryIcon iconKey={category.icon} />
                      </div>
                      {category.trending && (
                        <div className="bg-primary py-0.5 px-2 rounded-md text-white font-body text-xs">
                          Trending
                        </div>
                      )}
                    </div>

                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                      {category.name}
                    </h3>
                    <p className="font-body text-sm text-foreground/50 mb-4 line-clamp-2">
                      {category.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      {/* <span className="font-secondary text-sm text-foreground/75">
                      {category.itemCount.toLocaleString()} items
                    </span> */}
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        <span className="font-body text-xs text-muted-foreground">
                          Active
                        </span>
                      </div>
                    </div>

                    <Link
                      to={`${category.id}`}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      className="w-full flex items-center justify-center bg-primary hover:bg-primary/80 text-background font-semibold font-body py-1 rounded-lg"
                    >
                      Browse {category.name}
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
        {loading && (
          <div className="min-h-[400px] flex items-center justify-center w-full">
            <CgSpinner className="w-12 h-12 text-foreground/75 animate-spin" />
          </div>
        )}
        {error && (
          <Card className="min-h-[400px] font-bold flex flex-col items-center justify-center w-full font-body text-2xl">
            <img src={emptyCategory} className="size-30 lg:size-50" />
            No Categories Found
          </Card>
        )}
      </div>
    </section>
  );
};

export default Categories;
