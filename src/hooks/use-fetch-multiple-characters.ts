import { useState, useEffect, useMemo, useRef } from "react";
import axios from "axios";
import { Character } from "@/types";
import { rickAndMortyConfig } from "@/api/rickAndMortyApi";

interface UseFetchMultipleCharactersResult {
  characters: Character[] | null;
  isLoading: boolean;
  error: string | null;
}

export const useFetchMultipleCharacters = (
  characterIds: number[]
): UseFetchMultipleCharactersResult => {
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const memoizedCharacterIds = useMemo(
    () => characterIds.join(","),
    [characterIds]
  );

  const hasFetched = useRef(false);
  console.log("Fetching multiple characters");
  useEffect(() => {
    const fetchCharacters = async () => {
      if (hasFetched.current) return;

      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `${rickAndMortyConfig.characters}/${memoizedCharacterIds}`
        );

        const charactersData = Array.isArray(response.data)
          ? response.data
          : [response.data];

        setCharacters(charactersData);
      } catch (err) {
        setError("Failed to fetch characters.");
        console.error(err);
      } finally {
        setIsLoading(false);
        hasFetched.current = true;
      }
    };

    if (characterIds.length > 0) {
      fetchCharacters();
    }
  }, [characterIds, memoizedCharacterIds]);

  return { characters, isLoading, error };
};
