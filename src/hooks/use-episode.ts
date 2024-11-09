import { fetchEpisode } from "@/api/fetch-episodes";
import { useQuery } from "@tanstack/react-query";

export const useEpisode = (ids: number | number[]) => {
  return useQuery({
    queryFn: () => fetchEpisode(ids),
    queryKey: ["episode", ids],
    staleTime: 1000 * 60 * 5, // Cache na 5 minuta
    refetchOnWindowFocus: false,
  });
};
