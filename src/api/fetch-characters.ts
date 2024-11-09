import axios from "axios";
import { Character } from "@/types";
import { rickAndMortyConfig } from "./rick-and-morty-api";

export const fetchCharacter = async (
  ids: number | number[]
): Promise<Character[]> => {
  console.log("Characters fetching");

  const url = Array.isArray(ids)
    ? `${rickAndMortyConfig.characters}/${ids.join(",")}`
    : `${rickAndMortyConfig.characters}/${ids}`;

  const response = await axios.get(url);
  return Array.isArray(response.data) ? response.data : [response.data];
};
