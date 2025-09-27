import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { User } from "../../interfaces/user.interface";
import type { Product } from "../../interfaces/product.interface";
import axios from "axios";

type AdminState = {
  users: User[] | null;
  products: Product[] | null;
};

const initialState: AdminState = {
  users: null,
  products: null,
};

const fetchAllUsers = createAsyncThunk(
  "admin/fetchAllUsers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:3002/users");
      const users = response.data as User[];
      return users;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.name);
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export default adminSlice.reducer;
