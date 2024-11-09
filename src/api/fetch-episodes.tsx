import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Episode } from "@/types";
import { rickAndMortyConfig } from "./rickAndMortyApi";

const fetchEpisode = async (ids: number | number[]): Promise<Episode[]> => {
  console.log("Episodes fetching");

  const url = Array.isArray(ids)
    ? `${rickAndMortyConfig.episodes}/${ids.join(",")}`
    : `${rickAndMortyConfig.episodes}/${ids}`;

  const response = await axios.get(url);
  return Array.isArray(response.data) ? response.data : [response.data];
};

export const useEpisode = (ids: number | number[]) => {
  return useQuery({
    queryFn: () => fetchEpisode(ids),
    queryKey: ["episode", ids],
    staleTime: 1000 * 60 * 5, // Cache na 5 minuta
    refetchOnWindowFocus: false,
  });
};
