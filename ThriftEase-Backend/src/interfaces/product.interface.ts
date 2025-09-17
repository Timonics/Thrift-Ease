import { Optional } from "sequelize";

export enum ProductCondition {
  New = "New",
  LikeNew = "Like New",
  Good = "Good",
  Fair = "Fair",
  Poor = "Poor",
}

export enum ProductStatus {
  Available = "Available",
  Sold = "Sold",
  Reserved = "Reserved",
}

export interface ProductAttributes {
  id?: number;
  name: string;
  description: string;
  price: number;
  categoryId: number;
  subCategoryId: number;
  ownerId: number;
  image: string;
  images?: string[];
  stock: number;
  condition: ProductCondition;
  deliveryOptions: string[];
  location: string;
  status: ProductStatus;
  discountPrice?: number;
}

export interface ProductCreationAttributes
  extends Optional<ProductAttributes, "id" | "discountPrice" | "images"> {}
