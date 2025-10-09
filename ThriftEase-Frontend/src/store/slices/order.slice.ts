import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type {
  OrderResponse,
  OrderState,
} from "../../interfaces/order.interface";
import { API_URL } from "../../utils/db_Url";

const initialState: OrderState = {
  orders: [],
  loading: false,
  error: null,
};

export const fetchUserOrders = createAsyncThunk(
  "orders/fetchUserOrders",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `${API_URL}orders/my-orders`
      );
      const orderResponse = response.data as OrderResponse;
      return orderResponse.orders;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchUserOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default orderSlice.reducer;
