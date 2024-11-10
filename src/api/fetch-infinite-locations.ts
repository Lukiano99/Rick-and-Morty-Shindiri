import axios from "axios";
import { Location } from "@/types";
import { rickAndMortyConfig } from "./rick-and-morty-api";

interface FetchLocationsResponse {
  info: {
    next: string | null;
  };
  results: Location[];
}

export const fetchLocations = async ({
  pageParam = 1,
  name = "",
}: {
  pageParam?: number;
  name?: string;
}): Promise<FetchLocationsResponse> => {
  console.log("Fetching locations page", pageParam);

  const response = await axios.get(`${rickAndMortyConfig.locations}`, {
    params: { page: pageParam, name },
  });

  return response.data;
};
