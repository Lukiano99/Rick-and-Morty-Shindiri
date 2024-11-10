import { fetchEpisodes } from "@/api/fetch-infinite-episodes";
import { useInfiniteQuery } from "@tanstack/react-query";

const useInfiniteEpisodes = (name?: string) => {
  return useInfiniteQuery({
    queryKey: ["episodes", name],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => fetchEpisodes({ pageParam, name }),
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

export default useInfiniteEpisodes;
