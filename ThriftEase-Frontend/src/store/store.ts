import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from "./slices/category.slice";
import productsReducer from "./slices/product.slice";
import usersReducer from "./slices/user.slice";

export const store = configureStore({
  reducer: {
    categoriesReducer,
    productsReducer,
    usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
