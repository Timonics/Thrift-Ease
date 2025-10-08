import type { ReactNode } from "react";

export interface IState {
  children: ReactNode;
}

export interface AppState {
  activeSubCategoryId: number | null;
  setActiveSubCategoryId: React.Dispatch<React.SetStateAction<number | null>>;
  isDrafted: boolean
  setIsDrafted: React.Dispatch<React.SetStateAction<boolean>>
  isDraftedError: boolean
  setIsDraftedError: React.Dispatch<React.SetStateAction<boolean>>
}
