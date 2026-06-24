import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { CartProvider } from "./app/providers/CartProvider.tsx";

import "@mantine/core/styles.css";

import "./index.css";
import App from "./app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <CartProvider>
          <App />
      </CartProvider>
    </MantineProvider>
  </StrictMode>,
);
