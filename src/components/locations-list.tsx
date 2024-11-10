import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { paths } from "@/routes/paths";
import useDebounce from "@/hooks/use-debounce";
import SkeletonSearch from "./skeletons/skeleton-characters";
import ListToolbar from "./characters-toolbar";
import useIsInViewport from "@/hooks/use-is-in-viewport";
import EmptySearch from "./empty-search";
import useInfiniteLocations from "@/hooks/use-infinite-locations";
import LocationCard from "./location-card";
import { Loader2Icon } from "lucide-react";

const LocationsList = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteLocations(debouncedSearchQuery);
  const locations = data?.pages.flatMap((page) => page.results) || [];

  const { isInViewport, observerRef } = useIsInViewport();
  useEffect(() => {
    if (isInViewport && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [isInViewport, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <div className="flex flex-col items-start justify-center gap-10 w-full md:min-w-[1280px]">
      <div className="flex md:items-center md:gap-0 gap-4 md:flex-row flex-col items-start justify-between w-full">
        <ListToolbar
          onSearchChange={handleSearchChange}
          searchPlaceHolder={"Search for locations..."}
        />
        <p className="text-muted-foreground flex items-center gap-4">
          Total locations on page:{" "}
          {isLoading && <Loader2Icon className="animate-spin size-4" />}
          {!isLoading && (
            <span className="text-primary font-semibold">
              {locations.length}
            </span>
          )}
        </p>
      </div>
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-10">
        {locations &&
          !isLoading &&
          locations.map((location) => (
            <Link to={paths.location.details(location.id)} key={location.id}>
              <LocationCard location={location} />
            </Link>
          ))}
        {isLoading && <SkeletonSearch />}
        {locations.length === 0 && !isLoading && (
          <div className="flex flex-row ">
            <EmptySearch title="Location not found" description="Try again" />
          </div>
        )}
      </div>
      {(isFetchingNextPage || isLoading) && (
        <div className="w-full flex items-center justify-center">
          <Loader2Icon className="animate-spin" />
        </div>
      )}
      <div className="w-full flex items-center justify-center">
        <div ref={observerRef} className="w-full h-10" />
      </div>
    </div>
  );
};

export default LocationsList;
