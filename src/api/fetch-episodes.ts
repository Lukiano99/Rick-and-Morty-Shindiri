import axios from "axios";
import { Episode } from "@/types";
import { rickAndMortyConfig } from "./rick-and-morty-api";

export const fetchEpisode = async (
  ids: number | number[]
): Promise<Episode[]> => {
  console.log("Episodes fetching");

  const url = Array.isArray(ids)
    ? `${rickAndMortyConfig.episodes}/${ids.join(",")}`
    : `${rickAndMortyConfig.episodes}/${ids}`;

  const response = await axios.get(url);
  return Array.isArray(response.data) ? response.data : [response.data];
};
