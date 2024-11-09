import { fetchCharacters } from "@/api/fetch-infinite-characters";
import { useInfiniteQuery } from "@tanstack/react-query";

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
