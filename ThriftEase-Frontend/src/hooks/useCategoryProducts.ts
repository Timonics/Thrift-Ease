import { useEffect, useState } from "react";
import { CategoryData } from "../interfaces/thriftease-interfaces/category.interfaces";
import { useApiContext } from "../contexts/ApiContext";

export const useCategoryProducts = (filteredCategory: CategoryData[]) => {
  const [categoryID, setCategoryID] = useState<number | undefined>();
  const { getCategoryProducts } = useApiContext();

  useEffect(() => {
    if (filteredCategory.length > 0) {
      setCategoryID(filteredCategory[0].id);
    }
  }, [filteredCategory]);

  useEffect(() => {
    if (categoryID) {
      getCategoryProducts(categoryID);
    }
  }, [categoryID]);
};
