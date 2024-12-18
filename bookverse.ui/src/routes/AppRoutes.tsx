import { useRouteObject } from "./index.tsx";
import { useRoutes } from "react-router-dom";

const AppRoutes = () => {
  const routes = useRouteObject();
  const elements = useRoutes(routes);
  return <>{elements}</>;
};
export default AppRoutes;
