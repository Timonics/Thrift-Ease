import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type {
  Product,
  ProductDetailsResponse,
  ProductResponse,
  ProductState,
} from "../../interfaces/product.interface";
import axios from "axios";

const initialState: ProductState = {
  products: [],
  userProducts: [],
  productDetails: null,
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:3002/products");
      const productResponse = response.data as ProductResponse;
      return productResponse.products;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.name);
    }
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProducts/category/:categoryID",
  async (categoryId: number, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:3002/products/category/${categoryId}`
      );
      const productResponse = response.data as ProductResponse;
      return productResponse.products;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.name);
    }
  }
);

export const fetchProductDetails = createAsyncThunk(
  "products/fetchProduct/id/:productID",
  async (productId: number, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:3002/products/${productId}`
      );
      const productResponse = response.data as ProductDetailsResponse;
      return productResponse.productDetails;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.name);
    }
  }
);

export const fetchUserProducts = createAsyncThunk(
  "products/fetchUserProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "http://localhost:3002/products/my-products",
        { withCredentials: true }
      );
      const productResponse = response.data as ProductResponse;
      return productResponse.products;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.name);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      (state.loading = true), (state.error = null);
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        (state.products = action.payload), (state.loading = false);
      }
    );
    builder.addCase(fetchProducts.rejected, (state, action) => {
      (state.loading = false), (state.error = action.payload as string);
    });

    builder.addCase(fetchProductsByCategory.pending, (state) => {
      (state.loading = true), (state.error = null);
    });
    builder.addCase(
      fetchProductsByCategory.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        (state.products = action.payload), (state.loading = false);
      }
    );
    builder.addCase(fetchProductsByCategory.rejected, (state, action) => {
      (state.loading = false), (state.error = action.payload as string);
    });

    builder.addCase(fetchProductDetails.pending, (state) => {
      (state.loading = true), (state.error = null);
    });
    builder.addCase(
      fetchProductDetails.fulfilled,
      (state, action: PayloadAction<Product>) => {
        (state.loading = false), (state.productDetails = action.payload);
      }
    );
    builder.addCase(fetchProductDetails.rejected, (state, action) => {
      (state.loading = false), (state.error = action.payload as string);
    });

    builder.addCase(fetchUserProducts.pending, (state) => {
      (state.loading = true), (state.error = null);
    });
    builder.addCase(
      fetchUserProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        (state.loading = false), (state.userProducts = action.payload);
      }
    );
    builder.addCase(fetchUserProducts.rejected, (state, action) => {
      (state.loading = false), (state.error = action.payload as string);
    });
  },
});

export default productSlice.reducer;
