import { paths } from "@/routes/paths";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={paths.characters.root} className="w-full flex items-center gap-2">
      <div className="size-12 rounded-full bg-red-700 border-2 border-primary flex items-center gap-4">
        <img src="/shindiri-logo-2.svg" className="drop-shadow-md size-10" />
      </div>
      <h1 className="font-semibold text-2xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
        SHINDIRI{" "}
        <span className="text-sm text-muted-foreground font-light font-mono">
          by Lukiano
        </span>
      </h1>
    </Link>
  );
};

export default Logo;
