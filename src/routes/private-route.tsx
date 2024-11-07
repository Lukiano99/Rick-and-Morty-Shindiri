// src/routes/PrivateRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { paths } from "./paths";

const PrivateRoute = () => {
  const isAuthenticated = !!localStorage.getItem("firebaseToken");

  return isAuthenticated ? <Outlet /> : <Navigate to={paths.auth.login} />;
};

export default PrivateRoute;
