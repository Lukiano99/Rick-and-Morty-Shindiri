import {
  CodeIcon,
  ExternalLink,
  MapPinIcon,
  MenuIcon,
  TvIcon,
  Users2Icon,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { paths } from "@/routes/paths";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Characters", href: `${paths.characters.root}`, icon: Users2Icon },
  { name: "Episodes", href: `${paths.episode.root}`, icon: TvIcon },
  { name: "Locations", href: `${paths.location.root}`, icon: MapPinIcon },
  { name: "Github code", href: `${paths.github.root}`, icon: CodeIcon },
];

const MobileNavSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild aria-describedby="mobile-navigation">
        <MenuIcon className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] sm:w-[400px]"
        aria-describedby="mobile-navigation"
        aria-description="mobile-navigation"
      >
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <img src="/shindiri-logo.svg" alt="Logo" className="h-8 w-8" />
              <span className="font-bold text-xl">Shindiri X Lukiano</span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8">
          {isOpen && (
            <ul>
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="flex items-center space-x-2 px-4 py-3 relative text-lg hover:bg-accent rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                    target={item.name === "Github code" ? "_blank" : ""}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                    {item.name === "Github code" && (
                      <ExternalLink className="size-4 mb-0.5 absolute right-4" />
                    )}
                  </Link>
                  <Separator
                    className={cn(
                      "",
                      location.pathname.startsWith(item.href) && "bg-red-600"
                    )}
                  />
                </li>
              ))}
            </ul>
          )}
        </nav>
        <SheetDescription className=""></SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavSheet;
