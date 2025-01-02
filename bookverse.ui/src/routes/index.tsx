import { Navigate, RouteObject } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import {
  BookCreatePage,
  BookDetailsPage,
  BookListPage,
  LoginPage,
  RegisterPage,
} from "./routeComponents.ts";
// import ProtectedRoute from "./ProtectedRoute.tsx";

export const useRouteObject = (): RouteObject[] => {
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  console.log(isAuthenticated);
  return [
    {
      path: "/",
      element: isAuthenticated ? <Navigate to="/books" /> : <LoginPage />,
    },
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
      // element: <ProtectedRoute />,
      children: [
        { index: true, element: <BookListPage /> },
        { path: "create", element: <BookCreatePage /> },
        { path: ":id", element: <BookDetailsPage /> },
      ],
    },
  ];
};
