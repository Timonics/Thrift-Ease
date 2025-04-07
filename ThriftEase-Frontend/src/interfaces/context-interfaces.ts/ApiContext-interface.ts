import { ReactNode } from "react";
import { CategoryData } from "../thriftease-interfaces/category.interfaces";
import { SubCategoryData } from "../thriftease-interfaces/subcategory.interface";
import { ProductData } from "../thriftease-interfaces/product.interfaces";

export interface ApiProps {
  children: ReactNode;
}

export interface ApiState {
  message: string;
  categories: CategoryData[];
  subCategories: SubCategoryData[];
  categoryProducts: ProductData[];
  getSubCategoriesByCategory: (categoryID: number) => Promise<void>;
  getCategoryProducts: (categoryId: number) => Promise<void>;
  listProduct: (formData: ProductData) => Promise<void>;
}
