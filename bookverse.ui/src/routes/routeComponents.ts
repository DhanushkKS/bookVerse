import { lazy } from "react";

export const LoginPage = lazy(() => import("../pages/Login/Login.tsx"));
export const RegisterPage = lazy(
  () => import("../pages/Register/Register.tsx"),
);

export const BookListPage = lazy(() => import("../pages/Books/index.tsx"));
export const BookDetailsPage = lazy(() => import("../pages/Books/details"));
