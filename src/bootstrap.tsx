import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";

function Root() {
  return (
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>
  );
}

const target = document.getElementById("root");
if (!target) {
  throw new Error("Root element #root not found");
}

if (import.meta.env.DEV) {
  createRoot(target).render(<Root />);
} else {
  hydrateRoot(target, <Root />);
}
