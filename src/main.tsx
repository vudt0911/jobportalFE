import "./config/i18n";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "@/components/globalStyles";
import { AuthProvider } from "@/context/authProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GlobalStyles>
    <AuthProvider>
      <App />
    </AuthProvider>
  </GlobalStyles>
);
