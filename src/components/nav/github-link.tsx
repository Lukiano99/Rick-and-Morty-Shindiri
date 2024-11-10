import { ExternalLinkIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { paths } from "@/routes/paths";

const GithubLink = () => {
  return (
    <Link to={`${paths.github.root}`} target="_blank">
      <Button variant={"link"}>
        <ExternalLinkIcon />
        View code
      </Button>
    </Link>
  );
};

export default GithubLink;
