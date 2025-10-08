import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import App from "./App";
import { Provider } from "react-redux";
import { persistor, store } from "../store/store";
import StateProvider from "../contexts/StateProvider";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StateProvider>
          <App />
        </StateProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
