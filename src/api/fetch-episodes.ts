import axios from "axios";
import { Episode } from "@/types";
import { rickAndMortyConfig } from "./rick-and-morty-api";
import buildEntityUrl from "./utils";

export const fetchEpisode = async (
  ids: number | number[]
): Promise<Episode[]> => {
  console.log("Episodes fetching");

  const url = buildEntityUrl(rickAndMortyConfig.episodes, ids);

  const response = await axios.get(url);
  return Array.isArray(response.data) ? response.data : [response.data];
};
