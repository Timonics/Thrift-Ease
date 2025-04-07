import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import ApiContextProvider from "../contexts/ApiContext";
import AuthContextProvider from "../contexts/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <AuthContextProvider>
        <ApiContextProvider>
          <App />
        </ApiContextProvider>
      </AuthContextProvider>
    </Router>
  </StrictMode>
);
