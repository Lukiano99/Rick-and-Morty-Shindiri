// src/hooks/useFetchCharacters.ts
import { useState, useCallback } from "react";
import axios from "axios";
import { rickAndMortyConfig } from "@/api/rickAndMortyApi";
import { Character } from "@/types";

export const useFetchCharacters = (searchQuery: string) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  console.log({ characters });
  const fetchNextPage = useCallback(async () => {
    try {
      const response = await axios.get(rickAndMortyConfig.characters, {
        params: {
          page,
          name: searchQuery,
        },
      });

      if (response.data.results.length === 0) {
        setHasMore(false);
      } else {
        setCharacters((prev) => [...prev, ...response.data.results]);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Error fetching characters", error);
    }
  }, [searchQuery]);

  return { characters, fetchNextPage, hasMore };
};
