import { FrownIcon } from "lucide-react";

interface EmptySearchProps {
  title: string;
  description: string;
}

const EmptySearch = ({ title, description }: EmptySearchProps) => {
  return (
    <div className="flex flex-col h-full items-center justify-center text-center p-6 border rounded-lg shadow-sm bg-muted w-full">
      <h2 className="text-xl font-semibold text-accent-foreground mb-2">
        {title}
      </h2>
      <p className="text-muted-foreground">{description}</p>
      <div className="mt-4">
        <FrownIcon />
      </div>
    </div>
  );
};

export default EmptySearch;
