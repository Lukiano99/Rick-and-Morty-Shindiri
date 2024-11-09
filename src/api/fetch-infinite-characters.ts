import axios from "axios";
import { Character } from "@/types";
import { rickAndMortyConfig } from "./rick-and-morty-api";
interface FetchCharactersResponse {
  info: {
    next: string | null;
  };
  results: Character[];
}

export const fetchCharacters = async ({
  pageParam = 1,
  name = "",
  status = [],
}: {
  pageParam?: number;
  name?: string;
  status?: string[];
}): Promise<FetchCharactersResponse> => {
  console.log("Fetching characters page", pageParam);

  const response = await axios.get(`${rickAndMortyConfig.characters}`, {
    params: { page: pageParam, name, status },
  });

  return response.data;
};
