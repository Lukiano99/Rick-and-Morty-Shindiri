import { cn } from "@/lib/utils";
import { paths } from "@/routes/paths";
import { Link, useLocation } from "react-router-dom";

const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const location = useLocation();
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        to={paths.characters.root}
        className={cn(
          "text-sm font-medium hover:text-primary transition-all text-muted-foreground",
          location.pathname === paths.characters.root && "text-primary"
        )}
      >
        Chacarters
      </Link>
    </nav>
  );
};

export default MainNav;
