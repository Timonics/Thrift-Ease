import React, { createContext, useContext, useState } from "react";
import type { AppState, IState } from "../interfaces/state.interface";

const AppContext = createContext<AppState | null>(null);

const StateProvider: React.FC<IState> = ({ children }) => {
  const [activeSubCategoryId, setActiveSubCategoryId] = useState<number | null>(
    null
  );

  const contextValues = {
    activeSubCategoryId,
    setActiveSubCategoryId,
  };
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export default StateProvider;

export const useAppState = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("context must be provided to the app");
  }

  return context;
};
