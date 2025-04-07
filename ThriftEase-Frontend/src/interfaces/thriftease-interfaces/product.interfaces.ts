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

export interface ProductData {
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
  negotiable: boolean;
  deliveryOptions: string[];
  location: string;
  status: ProductStatus;
  discountPrice?: number;
}

export interface CategoryProductsResponse {
  message: string;
  products: ProductData[];
}

export interface ListingProductResponse {
  message: string,
}