import { fetchLocation } from "@/api/fetch-locations";
import { useQuery } from "@tanstack/react-query";

export const useLocation = (ids: number | number[]) => {
  return useQuery({
    queryFn: () => fetchLocation(ids),
    queryKey: ["location", ids],
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
