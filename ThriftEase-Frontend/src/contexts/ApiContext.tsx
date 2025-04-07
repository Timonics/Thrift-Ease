import React, { createContext, useContext, useEffect, useState } from "react";
import {
  ApiProps,
  ApiState,
} from "../interfaces/context-interfaces.ts/ApiContext-interface";
import { dbURL } from "../lib/dbUrl";
import axios from "axios";
import { CategoryData } from "../interfaces/thriftease-interfaces/category.interfaces";
import { SubCategoryData } from "../interfaces/thriftease-interfaces/subcategory.interface";
import {
  CategoryProductsResponse,
  ListingProductResponse,
  ProductData,
} from "../interfaces/thriftease-interfaces/product.interfaces";

const ApiContext = createContext<ApiState | null>(null);

const ApiContextProvider: React.FC<ApiProps> = ({ children }) => {
  const categoryURL = `${dbURL}categories`;
  const subCategoryURL = `${dbURL}subcategories`;
  const productURL = `${dbURL}products`;
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategoryData[]>([]);
  const [categoryProducts, setCategoryProducts] = useState<ProductData[]>([]);
  const [message, setMessage] = useState<string>("");

  const getCategories = async () => {
    try {
      const categoryResponse = await axios.get(categoryURL);
      const categoryData: any = categoryResponse.data;
      setCategories(categoryData.categories as CategoryData[]);
    } catch (err: any) {
      if (err.response) {
        console.error("Error: ", err.response.data.message);
      } else if (err.request) {
        console.error("Error: No response received", err.request);
      } else {
        console.error("Error: ", err);
      }
    }
  };

  const getSubCategoriesByCategory = async (categoryID: number) => {
    try {
      const subCategoryResponse = await axios.get(
        `${subCategoryURL}/category/${categoryID}`
      );
      const subCategoryData: any = subCategoryResponse.data;
      setSubCategories(subCategoryData.categories as SubCategoryData[]);
    } catch (err: any) {
      if (err.response) {
        console.error("Error: ", err.response.data.message);
      } else if (err.request) {
        console.error("Error: No response received", err.request);
      } else {
        console.error("Error: ", err);
      }
    }
  };

  const getCategoryProducts = async (categoryId: number) => {
    try {
      const categoryProductResponse = await axios.get(
        `${productURL}/category-products/${categoryId}`
      );
      const categoryProductData: any = categoryProductResponse.data;
      setCategoryProducts(
        (categoryProductData as CategoryProductsResponse).products
      );
    } catch (err: any) {
      if (err.response) {
        console.error("Error: ", err.response.data.message);
        setCategoryProducts([]);
      } else if (err.request) {
        console.error("Error: No response received", err.request);
      } else {
        console.error("Error: ", err);
      }
    }
  };

  const listProduct = async (formData: ProductData) => {
    try {
      const listingResponse = await axios.post(
        `${productURL}/new-product`,
        formData,
        {
          withCredentials: true,
        }
      );

      const listingData: any = listingResponse.data;
      setMessage((listingData as ListingProductResponse).message);
    } catch (err: any) {
      if (err.response) {
        console.error("Error: ", err.response.data.message, err);
      } else if (err.request) {
        console.error("Error: No response received", err.request);
      } else {
        console.error("Error: ", err);
      }
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const contextValues = {
    message,
    categories,
    subCategories,
    categoryProducts,
    getSubCategoriesByCategory,
    getCategoryProducts,
    listProduct,
  };

  return (
    <ApiContext.Provider value={contextValues}>{children}</ApiContext.Provider>
  );
};

export const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApiContext must be used within a ApiContextProvider");
  }
  return context;
};

export default ApiContextProvider;
