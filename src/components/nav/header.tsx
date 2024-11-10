import { useAuth } from "@/hooks/use-auth";
import MainNav from "./main-nav";
import UserNav from "./user-nav";
import Logo from "./logo";
import { Separator } from "../ui/separator";
import NavLayout from "../layout/nav-layout";
import MobileNavSheet from "./mobile-nav-sheet";
import GithubLink from "./github-link";

const Header = () => {
  const { userLoggedIn } = useAuth();

  return (
    <header className="border-b absolute w-full max-h-16 z-40 t-0 left-0">
      <NavLayout>
        {userLoggedIn && (
          <>
            {/* Desktop nav */}
            <div className="md:flex hidden items-center justify-between w-full">
              <Logo />

              <GithubLink />

              <div className="flex h-16 items-center w-full">
                <div className="ml-auto flex items-center space-x-4 h-full">
                  <MainNav />
                  <Separator orientation="vertical" className=" h-4/5" />
                  <UserNav />
                </div>
              </div>
            </div>

            {/* Mobile nav */}
            <div className="md:hidden h-16 flex items-center w-full justify-between">
              <MobileNavSheet />
              <UserNav />
            </div>
          </>
        )}
        {!userLoggedIn && (
          <div className="flex h-16 items-center ">
            <h1 className="text-xl font-semibold">Welcome</h1>
            <div className="ml-auto flex items-center space-x-4"></div>
          </div>
        )}
      </NavLayout>
    </header>
  );
};

export default Header;
