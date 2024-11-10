const SkeletonSearch = () => {
  return (
    <div className="min-w-[1280px] grid grid-cols-1 md:grid-cols-3 gap-10">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="w-full max-w-md rounded overflow-hidden shadow-lg animate-pulse"
        >
          <div className="bg-gray-300 h-48 w-full mb-4"></div>
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
        </div>
      ))}
    </div>
  );
};

export default SkeletonSearch;
