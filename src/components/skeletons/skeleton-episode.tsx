import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const SkeletonEpisode = () => {
  return (
    <div className="container w-full">
      <Skeleton className="mb-4 h-8 w-40" /> {/* Back button-like Skeleton */}
      <Card className="mb-8 w-full">
        <CardHeader className="relative">
          <div className="absolute top-0 right-0 mt-4 mr-4">
            <Skeleton className="h-8 w-20" /> {/* Episode badge Skeleton */}
          </div>
          <Skeleton className="h-8 w-1/2 md:w-3/4 mb-4" />{" "}
          {/* Episode name Skeleton */}
          <CardDescription className="text-lg">
            <div className="flex items-center mt-2">
              <Skeleton className="mr-2 h-4 w-4" />{" "}
              {/* Calendar Icon Skeleton */}
              <Skeleton className="h-4 w-48" /> {/* Aired on text Skeleton */}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Skeleton className="mr-2 h-4 w-4" /> {/* Tv Icon Skeleton */}
              <Skeleton className="h-4 w-36" />{" "}
              {/* Season and episode text Skeleton */}
            </div>
            <div className="flex items-center ">
              <Skeleton className="mr-2 h-4 w-4" /> {/* Users Icon Skeleton */}
              <Skeleton className="h-4 w-24" />{" "}
              {/* Characters count Skeleton */}
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-48 mb-4" />{" "}
          {/* Featured Characters title Skeleton */}
        </CardHeader>
        <CardContent className="max-h-[800px] overflow-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, idx) => (
              <Card key={idx} className="overflow-hidden">
                <Skeleton className="w-full h-40" />{" "}
                {/* Character image Skeleton */}
                <CardContent className="p-2">
                  <Skeleton className="h-4 w-24" />{" "}
                  {/* Character name Skeleton */}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default SkeletonEpisode;
