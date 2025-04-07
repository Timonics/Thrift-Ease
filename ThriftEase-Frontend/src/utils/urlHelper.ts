import { useLocation } from "react-router-dom";
import { CategoryData } from "../interfaces/thriftease-interfaces/category.interfaces";

export const useCategoryName = () => {
  const path = useLocation();
  const pathArr = path.pathname.split("/");
  const pathName = pathArr[pathArr.length - 1];

  const categoryPathArr = pathName.split("-");
  categoryPathArr[1] = "&";

  return categoryPathArr.join(" ");
};

export const useUrlCategoryName = (category: CategoryData) => {
  const categoryNameArr = category.name.split(" ");
  categoryNameArr[1] = "-and-";
  return categoryNameArr.join("").toLowerCase();
};
