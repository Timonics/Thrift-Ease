import React, { useEffect } from "react";
import type { AppDispatch, RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchSelectedCategorySubCategory } from "../../../store/slices/category.slice";
import { Link, useLocation, useParams } from "react-router";
import CategoryIcon from "../../../utils/CategoryIcon";

const SelectedCategorySubCategories: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  
  const location = useLocation();
  const activeSubCategoryId = new URLSearchParams(location.search).get(
    "subcategory"
  );

  const { categoryID } = useParams<{ categoryID: string }>();
  const categoryId = Number(categoryID);
  if (isNaN(categoryId)) return "category id param is not a number";

  useEffect(() => {
    dispatch(fetchSelectedCategorySubCategory(categoryId));
  }, [dispatch, categoryId]);

  const { subCategories } = useSelector(
    (state: RootState) => state.categoriesReducer
  );

  return (
    <section className="py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground mb-6">
          Browse Subcategories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {subCategories.map((subcategory, index) => (
            <Link
              to={`?subcategory=${subcategory.id}`}
              key={index}
              className={`bg-background rounded-xl border-2 shadow-lg hover:shadow-xl ${
                activeSubCategoryId === String(subcategory.id)
                  ? "border-primary"
                  : "border-foreground/25 hover:border-[#7FC291]"
              }  transition-all duration-300 cursor-pointer`}
            >
              <div className="p-4 text-center">
                <div
                  className="w-12 h-12 bg-foreground/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors"
                  style={{
                    color: subcategory.iconColor,
                  }}
                >
                  <CategoryIcon iconKey={subcategory.icon} />
                </div>
                <h3 className="font-body font-semibold text-sm text-foreground mb-1">
                  {subcategory.name}
                </h3>
                <p className="font-secondary text-xs text-foreground/50">
                  100 items
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedCategorySubCategories;
