import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import type {
  ProfileResponse,
  User,
  UserResponse,
  UserState,
} from "../../interfaces/user.interface";

const initialState: UserState = {
  userData: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  "users/register",
  async (
    registerData: {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    },
    thunkAPI
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:3002/users/register",
        registerData,
        { withCredentials: true }
      );
      const userResponse = response.data as UserResponse;
      return userResponse.user;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/login",
  async (loginData: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3002/users/login",
        loginData,
        { withCredentials: true }
      );
      const userResponse = response.data as UserResponse;
      return userResponse.user;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const logoutUser = createAsyncThunk("users/logout", async () => {
  const response = await axios.post("http://localhost:3002/users/logout");
  return response.data;
});

export const checkAuth = createAsyncThunk("users/check", async () => {
  const response = await axios.get("http://localhost:3002/users/my-profile", {
    withCredentials: true,
  });
  const userResponse = response.data as ProfileResponse;
  return userResponse.profile;
});

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      (state.loading = true), (state.error = null);
    });
    builder.addCase(
      registerUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        (state.loading = false),
          (state.isAuthenticated = true),
          (state.userData = action.payload),
          (state.error = null);
      }
    );
    builder.addCase(registerUser.rejected, (state, action) => {
      (state.error = action.payload as string),
        (state.isAuthenticated = false),
        (state.loading = false),
        (state.userData = null);
    });

    builder.addCase(loginUser.pending, (state) => {
      (state.loading = true), (state.error = null);
    });
    builder.addCase(
      loginUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        (state.loading = false),
          (state.isAuthenticated = true),
          (state.userData = action.payload),
          (state.error = null);
      }
    );
    builder.addCase(loginUser.rejected, (state, action) => {
      (state.error = action.payload as string),
        (state.isAuthenticated = false),
        (state.loading = false),
        (state.userData = null);
    });

    builder.addCase(checkAuth.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.isAuthenticated = true;
    });
    builder.addCase(checkAuth.rejected, (state) => {
      state.userData = null;
      state.isAuthenticated = false;
    });

    builder.addCase(logoutUser.pending, (state) => {
      (state.loading = true), (state.error = null);
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      (state.loading = false),
        (state.isAuthenticated = false),
        (state.userData = null),
        (state.error = null);
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      (state.error = action.payload as string), (state.loading = false);
    });
  },
});

export default userSlice.reducer;
