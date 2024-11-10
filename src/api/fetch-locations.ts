import { Location } from "@/types";
import { rickAndMortyConfig } from "./rick-and-morty-api";
import axios from "axios";
import buildEntityUrl from "./utils";

export const fetchLocation = async (
  ids: number | number[]
): Promise<Location[]> => {
  console.log("Locations fetching");

  const url = buildEntityUrl(rickAndMortyConfig.locations, ids);

  const response = await axios.get(url);
  return Array.isArray(response.data) ? response.data : [response.data];
};
