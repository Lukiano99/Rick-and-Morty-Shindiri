import { useState, useEffect, FC } from "react";
import CharacterCard from "./character-card";
import { useFetchCharacters } from "@/hooks/use-fetch-characters";
import SearchBox from "./nav/search-box";

const CharacterList: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { characters, fetchNextPage, hasMore } = useFetchCharacters("");

  useEffect(() => {
    fetchNextPage();
  }, [fetchNextPage, searchQuery]);

  // const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchQuery(event.target.value);
  // };
  console.log({ setSearchQuery });

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 mt-20">
      <SearchBox />
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-10">
        {characters.map((char, idx) => (
          // <Link to={`/characters/${char.id}`} key={`${char.id}_${idx}`}>
          // </Link>
          <CharacterCard character={char} key={`${char.id}_${idx}`} />
        ))}
      </div>
      {hasMore && <button onClick={fetchNextPage}>Load More</button>}
    </div>
  );
};

export default CharacterList;
