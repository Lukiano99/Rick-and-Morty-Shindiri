import axios from "axios";
import { Episode } from "@/types";
import { rickAndMortyConfig } from "./rick-and-morty-api";

interface FetchEpisodesResponse {
  info: {
    next: string | null;
  };
  results: Episode[];
}

export const fetchEpisodes = async ({
  pageParam = 1,
  name = "",
}: {
  pageParam?: number;
  name?: string;
}): Promise<FetchEpisodesResponse> => {
  console.log("Fetching episodes page", pageParam);

  const response = await axios.get(`${rickAndMortyConfig.episodes}`, {
    params: { page: pageParam, name },
  });

  return response.data;
};
