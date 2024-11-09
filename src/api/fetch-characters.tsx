import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Character } from "@/types";
import { rickAndMortyConfig } from "./rickAndMortyApi";

const fetchCharacter = async (ids: number | number[]): Promise<Character[]> => {
  const url = Array.isArray(ids)
    ? `${rickAndMortyConfig.characters}/${ids.join(",")}`
    : `${rickAndMortyConfig.characters}/${ids}`;

  const response = await axios.get(url);
  return Array.isArray(response.data) ? response.data : [response.data];
};

export const useCharacter = (ids: number | number[]) => {
  return useQuery({
    queryFn: () => fetchCharacter(ids),
    queryKey: ["character", ids],
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
