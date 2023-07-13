import { lazy } from "react";
import { createHashRouter, createBrowserRouter } from "react-router-dom";
import { isHashed } from "../config/router";

const routerCreateFn = isHashed ? createHashRouter : createBrowserRouter;

const LazyHome = lazy(() => import("../pages/Home"));
const LazyLogin = lazy(() => import("../pages/Login"));

export const Router = routerCreateFn([
  {
    path: "/login",
    element: <LazyLogin />,
  },
  {
    path: "/",
    element: <LazyHome />,
  },
]);
