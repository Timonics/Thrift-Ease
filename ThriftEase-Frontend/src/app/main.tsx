import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "../store/store";
import StateProvider from "../contexts/StateProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <StateProvider>
        <App />
      </StateProvider>
    </Provider>
  </StrictMode>
);
