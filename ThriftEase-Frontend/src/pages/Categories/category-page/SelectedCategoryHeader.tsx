import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import type { RootState } from "../../../store/store";
import { useParams } from "react-router";
import CategoryIcon from "../../../utils/CategoryIcon";

const SelectedCategoryHeader: React.FC = () => {
  const [showNotFound, setShowNotFound] = useState<boolean>(false);
  const { categoryID } = useParams<{ categoryID: string }>();

  const categoryId = Number(categoryID);
  if (isNaN(categoryId)) return "category id param is not a number";

  const { categories } = useSelector(
    (state: RootState) => state.categoriesReducer
  );

  if (!categories) {
    return <div>Category Not Found</div>; //undraw not found would be added here
  }

  const selectedCategory = categories.filter(
    (category) => category.id === categoryId
  );
  const [categoryData] = selectedCategory;

  if (!selectedCategory || selectedCategory.length === 0) {
    setTimeout(() => {
      setShowNotFound(true);
    }, 5000);
    return showNotFound ? (
      <div className="fixed top-0 min-h-screen bg-black/10 text-white flex items-center justify-center inset-0 backdrop-blur-md z-50">Category Not Found</div>
    ) : (
      <div className="fixed top-0 min-h-screen bg-black/10 text-white flex items-center justify-center inset-0 backdrop-blur-md z-50">
        Loading...
      </div>
    );
  }

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
          <span>/</span>
          <span className="text-foreground font-medium">
            {categoryData.name}
          </span>
        </div>

        {/* Category Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex flex-col lg:flex-row items-start gap-4">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center`}
              style={{
                color: categoryData.iconColor,
                backgroundColor: `${categoryData.iconColor}20`,
              }}
            >
              <CategoryIcon iconKey={categoryData.icon} />
            </div>
            <div>
              <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-2">
                {categoryData.name}
              </h1>
              <p className="font-body text-lg text-foreground/70 mb-2">
                {categoryData.description}
              </p>
              <div className="flex items-center space-x-4 text-sm text-foreground/50">
                <span className="font-secondary">100 items available</span>
                <span>•</span>
                <span className="font-body">Updated daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedCategoryHeader;
