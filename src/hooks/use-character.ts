import { fetchCharacter } from "@/api/fetch-characters";
import { useQuery } from "@tanstack/react-query";

export const useCharacter = (ids: number | number[]) => {
  return useQuery({
    queryFn: () => fetchCharacter(ids),
    queryKey: ["character", ids],
    staleTime: 1000 * 60 * 5, // 5 minuta cache-a
    refetchOnWindowFocus: false,
  });
};
