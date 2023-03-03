import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./components/About/About.component";
import Contact from "./components/Contact/Contact.component";
import Login from "./components/Login/Login.component";
import Shop from "./components/Shop/Shop.component";
import Home from "./components/Home/Home.component";
import Signup from "./components/Signup/Signup.component";
import ErrorPage from "./components/Error/ErrorPage.component";
import ShoppingCart from "./components/Cart/Cart.component";
import Success from "./components/Success/Success.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <ShoppingCart /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "success", element: <Success /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
