import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./styles/index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root was not found.");
}

createRoot(rootElement).render(
  <StrictMode>
    <>
      <App />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3600,
          style: {
            borderRadius: "18px",
            padding: "14px 16px",
            background: "#fffdf8",
            color: "#1f2937",
            border: "1px solid rgba(148, 163, 184, 0.24)",
            boxShadow: "0 18px 45px rgba(15, 23, 42, 0.12)",
          },
          success: {
            iconTheme: {
              primary: "#0f766e",
              secondary: "#fffdf8",
            },
          },
          error: {
            iconTheme: {
              primary: "#b91c1c",
              secondary: "#fffdf8",
            },
          },
        }}
      />
    </>
  </StrictMode>,
);