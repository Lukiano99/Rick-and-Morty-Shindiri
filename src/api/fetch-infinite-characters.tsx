import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Character } from "@/types";
import { rickAndMortyConfig } from "./rickAndMortyApi";
interface FetchCharactersResponse {
  info: {
    next: string | null;
  };
  results: Character[];
}

const fetchCharacters = async ({
  pageParam = 1,
  name = "",
}: {
  pageParam?: number;
  name?: string;
}): Promise<FetchCharactersResponse> => {
  console.log("Fetching characters page", pageParam);

  const response = await axios.get(`${rickAndMortyConfig.characters}`, {
    params: { page: pageParam, name },
  });

  return response.data;
};

export const useInfiniteCharacters = (name?: string) => {
  return useInfiniteQuery({
    queryKey: ["characters", name],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => fetchCharacters({ pageParam, name }),
    getNextPageParam: (lastPage) => {
      // Ako postoji sledeća stranica, izvuci broj iz URL-a
      if (lastPage.info.next) {
        const url = new URL(lastPage.info.next);
        return Number(url.searchParams.get("page"));
      }
      return undefined; // Kraj paginacije
    },

    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};

/**
   queryKey: ["characters", name],
    queryFn: ({ pageParam }) => fetchCharacters({ pageParam, name }),
    getNextPageParam: (lastPage) => {
      // Ako postoji sledeća stranica, izvuci broj iz URL-a
      if (lastPage.info.next) {
        const url = new URL(lastPage.info.next);
        return Number(url.searchParams.get("page"));
      }
      return undefined; // Kraj paginacije
    },
    staleTime: 1000 * 60 * 5, // 5 minuta cache-a
    refetchOnWindowFocus: false,
 */
