import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import type { RootState } from "../../../store/store";
import { useParams } from "react-router";
import CategoryIcon from "../../../utils/CategoryIcon";

const SelectedCategoryHeader: React.FC = () => {
  const { categoryID } = useParams<{ categoryID: string }>();

  const categoryId = Number(categoryID);
  if (isNaN(categoryId)) return "category id param is not a number";

  const { categories, loading } = useSelector(
    (state: RootState) => state.categories
  );

  const selectedCategory = categories.filter(
    (category) => category.id === categoryId
  );
  const [categoryData] = selectedCategory;

  

  return (
    <section className="py-8 lg:py-10 bg-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
        {/* Breadcrumb */}
        <div className="flex font-body items-center space-x-2 text-sm text-foreground/50 mb-6">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            to="/categories"
            className="hover:text-primary transition-colors"
          >
            Categories
          </Link>
          {categories && categories.length !== 0 && (
            <>
              <span>/</span>
              <span className="text-foreground font-medium">
                {categoryData.name}
              </span>
            </>
          )}
        </div>

        {/* Category Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex flex-col lg:flex-row items-start gap-4">
            {categories && categories.length !== 0 && (
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center`}
                style={{
                  color: categoryData.iconColor,
                  backgroundColor: `${categoryData.iconColor}20`,
                }}
              >
                <CategoryIcon iconKey={categoryData.icon} />
              </div>
            )}
            <div>
              <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-2">
                {!loading ? categories && categories.length !== 0 ? categoryData.name : "Category not found" : "Loading..."}
              </h1>
              {categories && categories.length !== 0 && (
                <>
                  <p className="font-body text-lg text-foreground/70 mb-2">
                    {categoryData.description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-foreground/50">
                    <span className="font-secondary">100 items available</span>
                    <span>•</span>
                    <span className="font-body">Updated daily</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedCategoryHeader;
