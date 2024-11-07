// src/routes/PrivateRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { paths } from "./paths";
import { useAuth } from "@/hooks/use-auth";

const PrivateRoute = () => {
  const { userLoggedIn } = useAuth();

  return userLoggedIn ? <Outlet /> : <Navigate to={paths.auth.login} />;
};

export default PrivateRoute;
