import { useEffect, useState } from "react";
import CharacterCard from "./character-card";
import { Link } from "react-router-dom";
import { paths } from "@/routes/paths";
import useDebounce from "@/hooks/use-debounce";
import SkeletonCharacters from "./skeletons/skeleton-characters";
import { useInfiniteCharacters } from "@/hooks/use-infinite-characters";
import CharactersToolbar from "./characters-toolbar";
import { Status } from "@/types";
import useIsInViewport from "@/hooks/use-is-in-viewport";
import EmptySearch from "./empty-search";

const CharacterList = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const [statusesFilter, setStatusesFilter] = useState<Status[]>([]);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteCharacters(debouncedSearchQuery, statusesFilter);
  const characters = data?.pages.flatMap((page) => page.results) || [];

  const { isInViewport, observerRef } = useIsInViewport();
  useEffect(() => {
    if (isInViewport && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [isInViewport, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleStatusChange = (value: Status[]) => {
    setStatusesFilter(value);
  };

  return (
    <div className="flex flex-col items-start justify-center gap-10 w-full min-w-[1280px]">
      <div className="flex md:items-center md:gap-0 gap-4 md:flex-row flex-col items-start justify-between w-full">
        <CharactersToolbar
          onSearchChange={handleSearchChange}
          onStatusChange={handleStatusChange}
        />
        <p className="text-muted-foreground">
          Total characters on page:{" "}
          <span className="text-primary font-semibold">
            {" "}
            {characters.length}
          </span>
        </p>
      </div>
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-10">
        {characters &&
          !isLoading &&
          characters.map((char) => (
            <Link to={paths.characters.details(char.id)} key={char.id}>
              <CharacterCard character={char} />
            </Link>
          ))}
        {isLoading && !characters && <SkeletonCharacters />}
        {characters.length === 0 && (
          <div className="flex flex-row">
            <EmptySearch title="Character not found" description="Try again" />
          </div>
        )}
      </div>
      <div className="w-full flex items-center justify-center">
        <div ref={observerRef} className="w-full h-10" />
      </div>
    </div>
  );
};

export default CharacterList;
