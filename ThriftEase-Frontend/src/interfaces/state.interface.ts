import type { ReactNode } from "react";

export interface IState {
  children: ReactNode;
}

export interface AppState {
  activeSubCategoryId: number | null;
  setActiveSubCategoryId: React.Dispatch<React.SetStateAction<number | null>>;
}
