import { cn } from "@/lib/utils";
import { paths } from "@/routes/paths";
import { MapPinIcon, TvIcon, Users2Icon } from "lucide-react";
import { useLocation } from "react-router-dom";
import NavLink from "./nav-link";

const navLinks = [
  {
    label: "Characters",
    path: paths.characters.root,
    icon: Users2Icon,
  },
  {
    label: "Episodes",
    path: paths.episode.root,
    icon: TvIcon,
  },
  {
    label: "Locations",
    path: paths.location.root,
    icon: MapPinIcon,
  },
];

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
      {navLinks.map((link, idx) => (
        <NavLink
          key={idx}
          path={link.path}
          label={link.label}
          icon={link.icon}
          selected={location.pathname === link.path}
        />
      ))}
    </nav>
  );
};

export default MainNav;
