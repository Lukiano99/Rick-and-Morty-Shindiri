import { Navigate, Outlet } from "react-router-dom";
import { paths } from "./paths";
import { useAuth } from "@/hooks/use-auth";
import Header from "@/components/nav/header";
import MainLayout from "@/components/layout/main-layout";

const PublicRoute = () => {
  const { userLoggedIn } = useAuth();

  return (
    <>
      <Header />
      <MainLayout>
        {!userLoggedIn ? <Outlet /> : <Navigate to={paths.characters.root} />}
      </MainLayout>
    </>
  );
};

export default PublicRoute;
