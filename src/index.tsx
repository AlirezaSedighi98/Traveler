import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { routes } from "./Routes/routes";
import "./styles/main.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
