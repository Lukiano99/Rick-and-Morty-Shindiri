import { Card } from "../ui/card";

const SkeletonSearch = () => {
  return (
    <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-[90dvw] gap-10 md:min-w-[1280px] animate-pulse">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card
          key={index}
          className="w-full max-w-md overflow-hidden transition-all duration-300 hover:shadow-lg"
        >
          <div className="bg-gray-300 h-48 mb-4 w-full"></div>
          <div className="p-6 space-y-4">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SkeletonSearch;
