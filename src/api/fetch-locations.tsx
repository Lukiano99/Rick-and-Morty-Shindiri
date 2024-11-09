import { Location } from "@/types";
import { rickAndMortyConfig } from "./rickAndMortyApi";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchLocation = async (ids: number | number[]): Promise<Location[]> => {
  console.log("Locations fetching");

  const url = Array.isArray(ids)
    ? `${rickAndMortyConfig.locations}/${ids.join(",")}`
    : `${rickAndMortyConfig.locations}/${ids}`;

  const response = await axios.get(url);
  return Array.isArray(response.data) ? response.data : [response.data];
};

export const useLocation = (ids: number | number[]) => {
  return useQuery({
    queryFn: () => fetchLocation(ids),
    queryKey: ["location", ids],
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
