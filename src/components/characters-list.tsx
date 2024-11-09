import { useState } from "react";
import CharacterCard from "./character-card";
// import SearchBox from "./nav/search-box";
import { Link } from "react-router-dom";
import { paths } from "@/routes/paths";
import useDebounce from "@/hooks/use-debounce";
import LoadingButton from "./loading-button";
import SkeletonCharacters from "./skeletons/skeleton-characters";
import { useInfiniteCharacters } from "@/hooks/use-infinite-characters";
import CharactersToolbar from "./characters-toolbar";
import { Status } from "@/types";

const CharacterList = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const [statusesFilter, setStatusesFilter] = useState<Status[]>([]);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteCharacters(debouncedSearchQuery, statusesFilter);

  const characters = data?.pages.flatMap((page) => page.results) || [];

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleStatusChange = (value: Status[]) => {
    setStatusesFilter(value);
  };

  return (
    <div className="w-full flex flex-col items-start justify-center gap-10 min-w-[1280px]">
      <div className="flex items-center justify-between w-full">
        <CharactersToolbar
          onSearchChange={handleSearchChange}
          onStatusChange={handleStatusChange}
        />
        <p className="text-muted-foreground">
          Total characters:{" "}
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
        {isLoading && <SkeletonCharacters />}
      </div>
      <div className="w-full flex items-center justify-center">
        {hasNextPage && (
          <LoadingButton
            onClick={() => fetchNextPage()}
            isLoading={isFetchingNextPage}
          >
            Load More
          </LoadingButton>
        )}
      </div>
    </div>
  );
};

export default CharacterList;
