import { Navigate, RouteObject } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import {
  BookDetailsPage,
  BookListPage,
  LoginPage,
  RegisterPage,
} from "./routeComponents.ts";

export const useRouteObject = (): RouteObject[] => {
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  return [
    // Login and Register routes
    {
      path: "/login",
      element: !isAuthenticated ? <LoginPage /> : <Navigate to="/" />,
    },
    {
      path: "/register",
      element: !isAuthenticated ? <RegisterPage /> : <Navigate to="/" />,
    },

    {
      path: "books",
      // element: <BookListPage />,
      children: [
        { index: true, element: <BookListPage /> },
        { path: ":id", element: <BookDetailsPage /> },
      ],
    },
  ];
};
