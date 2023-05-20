import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import App from "./App";
//Login provider
import { Auth0Provider } from "@auth0/auth0-react";

//domain
//dev-b1t18sqyynyhhics.us.auth0.com

//client id
//ICVufBvENvX4uAoo9TRENSSao7b1M56c

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-b1t18sqyynyhhics.us.auth0.com"
    clientId="ICVufBvENvX4uAoo9TRENSSao7b1M56c"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
