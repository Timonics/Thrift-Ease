import { configureStore, combineReducers } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";

import categoriesReducer from "./slices/category.slice";
import productsReducer from "./slices/product.slice";
import usersReducer from "./slices/user.slice";
import cartReducer from "./slices/cart.slice";
import orderReducer from "./slices/order.slice";
import draftReducer from "./slices/draft.slice";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["drafts"],
};

const rootReducer = combineReducers({
  drafts: draftReducer,
  categories: categoriesReducer,
  products: productsReducer,
  users: usersReducer,
  cart: cartReducer,
  orders: orderReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
