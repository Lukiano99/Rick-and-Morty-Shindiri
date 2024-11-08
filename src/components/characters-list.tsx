import { useEffect, useRef, useState } from "react";
import CharacterCard from "./character-card";
import { useFetchCharacters } from "@/hooks/use-fetch-characters";
import SearchBox from "./nav/search-box";
import { Link } from "react-router-dom";
import { paths } from "@/routes/paths";
import { Button } from "./ui/button";
import useDebounce from "@/hooks/use-debounce";

const CharacterList = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const { characters, fetchNextPage, hasMore } =
    useFetchCharacters(debouncedSearchQuery);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current && characters.length === 0) {
      fetchNextPage();
      hasFetched.current = true; // Obeležava da je inicijalno fetchovanje obavljeno
    }
  }, [fetchNextPage, characters.length]);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10">
      <div className="w-full flex items-center">
        <SearchBox onChange={handleSearchChange} />
      </div>
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-10">
        {characters.map((char) => (
          <Link to={paths.characters.details(char.id)} key={char.id}>
            <CharacterCard character={char} />
          </Link>
        ))}
      </div>
      {hasMore && <Button onClick={fetchNextPage}>Load More</Button>}
    </div>
  );
};

export default CharacterList;
