import type { Category, SubCategory } from "./category.interface";
import type { User } from "./user.interface";

export interface  Product {
  id?: number;
  name: string;
  description: string;
  price: number;
  categoryId: number;
  subCategoryId: number;
  ownerId: number;
  category: Category;
  subCategory: SubCategory;
  owner: User;
  image: string;
  images?: string[];
  stock: number;
  condition: string;
  deliveryOptions: string[];
  location: string;
  status: string;
  discountPrice?: number;
}

export interface ProductState {
  products: Product[];
  productDetails: Product | null;
  loading: boolean;
  error: string | null;
}

export interface CartState {
  items: Product[]
}

export interface ProductResponse {
  message: string;
  products: Product[];
}

export interface ProductDetailsResponse
  extends Omit<ProductResponse, "products"> {
  productDetails: Product;
}
