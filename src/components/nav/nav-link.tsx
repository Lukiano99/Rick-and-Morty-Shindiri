import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";

interface NavLinkProps {
  selected: boolean;
  path: string;
  icon: LucideIcon;
  label: string;
}
const NavLink = ({ selected, path, icon: Icon, label }: NavLinkProps) => {
  return (
    <Link
      to={path}
      className={cn(
        "group text-sm font-medium transition-all hover:text-accent-foreground text-muted-foreground flex flex-col",
        selected && "text-accent-foreground"
      )}
    >
      <div className="flex items-center gap-2">
        <Icon className="size-4" />
        {label}
      </div>
      <Separator
        className={cn(
          "bg-red-600 h-[2px] scale-x-0 transition-all m-0 p-0",
          selected && "scale-x-100"
        )}
      />
    </Link>
  );
};

export default NavLink;
