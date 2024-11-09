import { useState } from "react";
import CharacterCard from "./character-card";
import SearchBox from "./nav/search-box";
import { Link } from "react-router-dom";
import { paths } from "@/routes/paths";
import useDebounce from "@/hooks/use-debounce";
import { useInfiniteCharacters } from "@/api/fetch-infinite-characters";
import LoadingButton from "./loading-button";
import SkeletonCharacters from "./skeletons/skeleton-characters";

const CharacterList = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteCharacters(debouncedSearchQuery);

  const characters = data?.pages.flatMap((page) => page.results) || [];

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10">
      <div className="w-full flex items-center">
        <SearchBox onChange={handleSearchChange} />
      </div>
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-10">
        {characters &&
          !isLoading &&
          characters.map((char) => (
            <Link to={paths.characters.details(char.id)} key={char.id}>
              <CharacterCard character={char} />
            </Link>
          ))}
        {!characters && isLoading && <SkeletonCharacters />}
      </div>
      {hasNextPage && (
        <LoadingButton
          onClick={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
        >
          Load More
        </LoadingButton>
      )}
    </div>
  );
};

export default CharacterList;
