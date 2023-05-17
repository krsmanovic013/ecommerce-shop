import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ProductsProvider } from "./context/products_context";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductsProvider>
    <App />
  </ProductsProvider>
);
