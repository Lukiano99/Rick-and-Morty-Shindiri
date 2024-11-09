import { useAuth } from "@/hooks/use-auth";
import MainNav from "./main-nav";
import UserNav from "./user-nav";
import Logo from "./logo";
import { Separator } from "../ui/separator";
import NavLayout from "../layout/nav-layout";

const Header = () => {
  const { userLoggedIn } = useAuth();

  return (
    <header className="border-b absolute w-full max-h-16 z-40 t-0 left-0">
      <NavLayout>
        {userLoggedIn && (
          <div className="flex items-center w-full space-x-4 ">
            <Logo />
            <div className="flex h-16 items-center justify-between w-full">
              <div className="ml-auto flex items-center space-x-4 h-full">
                <MainNav />
                <Separator orientation="vertical" className=" h-4/5" />
                <UserNav />
              </div>
            </div>
          </div>
        )}
        {!userLoggedIn && (
          <div className="flex h-16 items-center ">
            <h1 className="text-xl font-medium">Welcome</h1>
            <div className="ml-auto flex items-center space-x-4"></div>
          </div>
        )}
      </NavLayout>
    </header>
  );
};

export default Header;
