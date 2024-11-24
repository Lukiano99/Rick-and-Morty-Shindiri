import { ArrowLeftIcon, FrownIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

interface EmptySearchProps {
  title: string;
  description: string;
}

const EmptySearch = ({ title, description }: EmptySearchProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex border border-dashed space-y-20 flex-col h-full border-muted-foreground md:w-full w-screen md:min-w-[1280px] items-center justify-center text-center p-6  rounded-lg">
      <div className="flex flex-col items-center justify-center mt-5">
        <h2 className="text-xl font-semibold text-accent-foreground">
          {title}
        </h2>
        <p className="text-muted-foreground">{description}</p>
        <div className="mt-4">
          <FrownIcon />
        </div>
      </div>
      <Button onClick={() => navigate(-1)} variant={"secondary"}>
        <ArrowLeftIcon />
        Go back
      </Button>
    </div>
  );
};

export default EmptySearch;
