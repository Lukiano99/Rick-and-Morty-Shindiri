import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { rickAndMortyConfig } from "@/api/rickAndMortyApi";
import { Character } from "@/types";
import { toast } from "sonner";

export const useFetchCharacters = (searchQuery: string) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    setCharacters([]);
    setPage(1);
    setHasMore(true);
  }, [searchQuery]);

  const fetchNextPage = useCallback(async () => {
    try {
      const response = await axios.get(rickAndMortyConfig.characters, {
        params: { page, name: searchQuery },
      });
      toast.success("Fetched successfully");

      if (response.data.results.length === 0) {
        setHasMore(false);
      } else {
        setCharacters((prev) => [...prev, ...response.data.results]);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log({ error });
        toast.error(error.response?.data.error ?? error.message);
      }

      setHasMore(false);
    }
  }, [page, searchQuery]);

  return { characters, fetchNextPage, hasMore };
};
