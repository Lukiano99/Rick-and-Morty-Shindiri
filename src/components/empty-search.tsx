import { SmileIcon } from "lucide-react";

interface EmptySearchProps {
  title: string;
  description: string;
}

const EmptySearch = ({ title, description }: EmptySearchProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 border rounded-lg shadow-sm bg-gray-50 w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4">
        <SmileIcon />
      </div>
    </div>
  );
};

export default EmptySearch;
