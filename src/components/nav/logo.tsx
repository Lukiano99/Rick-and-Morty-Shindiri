import { paths } from "@/routes/paths";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={paths.characters.root}>
      <div className="size-12 rounded-full bg-red-700 border-2 border-primary flex items-center gap-4">
        <img src="/src/assets/shindiri-logo-2.svg" className="drop-shadow-md" />
        <h1 className="font-semibold text-2xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
          SHINDIRI
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
