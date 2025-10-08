import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../interfaces/product.interface";

interface DraftState {
  listingDrafts: Partial<Product>[];
}

const initialState: DraftState = {
  listingDrafts: [],
};

const draftSlice = createSlice({
  name: "drafts",
  initialState,
  reducers: {
    addToDrafts(state, action: PayloadAction<Partial<Product>>) {
      state.listingDrafts.push(action.payload);
    },
    removeFromDrafts(state, action: PayloadAction<Partial<Product>>) {
      state.listingDrafts = state.listingDrafts.filter(
        (draft) => draft?.id !== action.payload.id
      );
    },
  },
});

export const { addToDrafts, removeFromDrafts } = draftSlice.actions;
export default draftSlice.reducer;
