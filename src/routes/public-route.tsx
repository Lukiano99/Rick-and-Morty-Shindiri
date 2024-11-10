import { Navigate, Outlet } from "react-router-dom";
import { paths } from "./paths";
import { useAuth } from "@/hooks/use-auth";

const PublicRoute = () => {
  const { userLoggedIn } = useAuth();

  return !userLoggedIn ? <Outlet /> : <Navigate to={paths.characters.root} />;
};

export default PublicRoute;
