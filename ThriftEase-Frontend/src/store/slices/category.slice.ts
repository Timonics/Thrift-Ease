import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import type {
  Category,
  CategoryResponse,
  CategoryState,
  SubCategory,
  SubCategoryResponse,
} from "../../interfaces/category.interface";
import { API_URL } from "../../utils/db_Url";

const initialState: CategoryState = {
  categories: [],
  subCategories: [],
  subCategoriesLoading: false,
  loading: false,
  error: null,
};

//fetching all categories
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}categories`);
      const categoryResponse = response.data as CategoryResponse;
      return categoryResponse.categories;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchSelectedCategorySubCategory = createAsyncThunk(
  "categories/:categoryID/sub-categories",
  async (categoryId: number, thunkAPI) => {
    try {
      const response = await axios.get(
        `${API_URL}categories/${categoryId}/sub-categories`
      );
      const subCategoryResponse = response.data as SubCategoryResponse;
      return subCategoryResponse.categories;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      (state.loading = true), (state.error = null);
    });
    builder.addCase(
      fetchCategories.fulfilled,
      (state, action: PayloadAction<Category[]>) => {
        (state.categories = action.payload), (state.loading = false);
      }
    );
    builder.addCase(fetchCategories.rejected, (state, action) => {
      (state.loading = false), (state.error = action.payload as string);
    });

    builder.addCase(fetchSelectedCategorySubCategory.pending, (state) => {
      (state.subCategoriesLoading = true), (state.error = null);
    });
    builder.addCase(
      fetchSelectedCategorySubCategory.fulfilled,
      (state, action: PayloadAction<SubCategory[]>) => {
        (state.subCategories = action.payload),
          (state.subCategoriesLoading = false);
      }
    );
    builder.addCase(
      fetchSelectedCategorySubCategory.rejected,
      (state, action) => {
        (state.subCategoriesLoading = false),
          (state.error = action.payload as string);
      }
    );
  },
});

export default categorySlice.reducer;
