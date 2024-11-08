import { Skeleton } from "../ui/skeleton";

const SkeletonCharacter = () => {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Skeleton className="mb-4 h-6 w-32" /> {/* Button-like Skeleton */}
      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        <div className="max-h-[430px]">
          <Skeleton className="w-full h-[300px] object-cover" />
          <div className="p-4">
            <Skeleton className="mb-2 w-24 h-4" />
            <Skeleton className="text-2xl mb-2 w-32 h-6" />
            <Skeleton className="w-28 h-4" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="grid gap-4 grid-cols-2">
              <Skeleton className="flex items-center gap-2 w-20 h-4" />
              <Skeleton className="w-16 h-4" />
            </Skeleton>
            <Skeleton className="flex items-center gap-2 w-40 h-4" />
            <Skeleton className="flex items-center gap-2 w-40 h-4" />
            <Skeleton className="flex items-center gap-2 w-40 h-4" />
          </div>

          <div className="space-y-4">
            <Skeleton className="h-6 w-32" />
            <div className="min-w-[500px]">
              <Skeleton className="w-full h-12 mb-2" />
              <Skeleton className="w-full h-10 mb-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCharacter;
