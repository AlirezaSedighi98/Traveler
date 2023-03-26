import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { lazy } from "react";

const App = lazy(() => import("../App"));

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<h1></h1>} />
    </Route>
  )
);
