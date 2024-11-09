import { Location } from "@/types";
import { rickAndMortyConfig } from "./rick-and-morty-api";
import axios from "axios";

export const fetchLocation = async (
  ids: number | number[]
): Promise<Location[]> => {
  console.log("Locations fetching");

  const url = Array.isArray(ids)
    ? `${rickAndMortyConfig.locations}/${ids.join(",")}`
    : `${rickAndMortyConfig.locations}/${ids}`;

  const response = await axios.get(url);
  return Array.isArray(response.data) ? response.data : [response.data];
};
