import React from "react";
import ReactDOM from "react-dom/client";
import Cart from "./routes/Cart";
import Root from "./routes/root";
import Checkout from "./routes/Checkout";
import CartProvider from "./Contex/CartContex";

//ROUTES
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemRoot from "./routes/item";
import "./firebase/config";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/category/:id",
        element: <Root />,
      },
      {
        path: "/item/:id",
        element: <ItemRoot />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
