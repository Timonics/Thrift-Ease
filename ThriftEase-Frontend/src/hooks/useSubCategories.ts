import { useEffect, useState } from "react";
import { useApiContext } from "../contexts/ApiContext";
import { CategoryData } from "../interfaces/thriftease-interfaces/category.interfaces";

export const useSubCategories = (filteredCategory: CategoryData[]) => {
  const { getSubCategoriesByCategory } = useApiContext();
  const [categoryID, setCategoryID] = useState<number | undefined>();

  useEffect(() => {
    if (filteredCategory.length > 0) {
      setCategoryID(filteredCategory[0].id);
    }
  }, [filteredCategory]);

  useEffect(() => {
    if (categoryID) {
      getSubCategoriesByCategory(categoryID);
    }
  }, [categoryID]);
};
