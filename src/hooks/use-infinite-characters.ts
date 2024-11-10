import { fetchCharacters } from "@/api/fetch-infinite-characters";
import { useInfiniteQuery } from "@tanstack/react-query";

const useInfiniteCharacters = (name?: string, status?: string[]) => {
  return useInfiniteQuery({
    queryKey: ["characters", name, status],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => fetchCharacters({ pageParam, name, status }),
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
export default useInfiniteCharacters;
