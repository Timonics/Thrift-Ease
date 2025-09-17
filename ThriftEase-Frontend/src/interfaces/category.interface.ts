export interface Category {
  id: number;
  name: string;
  description: string;
  icon: string;
  iconColor: string;
  trending?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface SubCategory
  extends Omit<
    Category,
    "description" | "trending" | "createdAt" | "updatedAt"
  > {
  categoryId: number;
}

export interface CategoryState {
  categories: Category[];
  subCategories: SubCategory[];
  loading: boolean;
  error: string | null;
}

export interface CategoryResponse {
  message: string;
  categories: Category[];
}

export interface SubCategoryResponse {
  message: string;
  categories: SubCategory[];
}
