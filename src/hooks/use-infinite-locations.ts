import { fetchLocations } from "@/api/fetch-infinite-locations";
import { useInfiniteQuery } from "@tanstack/react-query";

const useInfiniteLocations = (name?: string) => {
  return useInfiniteQuery({
    queryKey: ["locations", name],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => fetchLocations({ pageParam, name }),
    getNextPageParam: (lastPage) => {
      if (lastPage.info.next) {
        const url = new URL(lastPage.info.next);
        return Number(url.searchParams.get("page"));
      }
      return undefined;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};

export default useInfiniteLocations;
