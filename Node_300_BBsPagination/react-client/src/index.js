import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { RouterProvider } from "react-router-dom";
import mainRouter from "./layout/MainRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={mainRouter} />
  </React.StrictMode>
);
