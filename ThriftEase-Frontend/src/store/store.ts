import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from "./slices/category.slice";
import productsReducer from "./slices/product.slice";
import usersReducer from "./slices/user.slice";
import cartReducer from "./slices/cart.slice"

export const store = configureStore({
  reducer: {
    categoriesReducer,
    productsReducer,
    usersReducer,
    cartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
