import { useRouteObject } from "./index.tsx";
import { useRoutes } from "react-router-dom";
import { Suspense } from "react";

const AppRoutes = () => {
  const routes = useRouteObject();
  const elements = useRoutes(routes);
  return <Suspense fallback={<div>loading...</div>}>{elements}</Suspense>;
};
export default AppRoutes;
