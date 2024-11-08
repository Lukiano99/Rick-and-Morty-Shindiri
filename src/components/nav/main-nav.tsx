import { cn } from "@/lib/utils";
import { paths } from "@/routes/paths";
import { UsersRoundIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Separator } from "../ui/separator";

const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const location = useLocation();
  const selected = location.pathname === paths.characters.root;
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        to={paths.characters.root}
        className={cn(
          "group text-sm font-medium hover:text-primary transition-all text-muted-foreground flex flex-col",
          selected && "text-primary"
        )}
      >
        <div className="flex items-center gap-2">
          <UsersRoundIcon className="size-4" />
          Chacarters
        </div>
        <Separator
          className={cn(
            "bg-red-600 h-[2px] scale-x-0 transition-all group-hover:scale-x-100 m-0 p-0",
            selected && "scale-x-100"
          )}
        />
      </Link>
    </nav>
  );
};

export default MainNav;
