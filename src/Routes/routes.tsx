import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { lazy } from "react";
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";

const App = lazy(() => import("../App"));

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} ErrorBoundary={ErrorBoundary}>
      <Route index element={<h1></h1>} />
    </Route>
  )
);
