import { useAuth } from "@/hooks/use-auth"; // Koristimo useAuth za pristup korisniku
import MainNav from "./main-nav";
import SearchBox from "./search-box";
import UserNav from "./user-nav";
import MainLayout from "../layout/main-layout";

const Header = () => {
  const { userLoggedIn } = useAuth();

  return (
    <header className="border-b">
      <MainLayout>
        {userLoggedIn && (
          <div className="flex h-16 items-center ">
            <MainNav />
            <div className="ml-auto flex items-center space-x-4">
              <SearchBox />
              <UserNav />
            </div>
          </div>
        )}
        {!userLoggedIn && (
          <div className="flex h-16 items-center ">
            <h1 className="text-xl font-medium">Welcome</h1>
            <div className="ml-auto flex items-center space-x-4"></div>
          </div>
        )}
      </MainLayout>
    </header>
  );
};

export default Header;
