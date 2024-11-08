// src/hooks/use-fetch-single-character.ts
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Character } from "@/types";
import { rickAndMortyConfig } from "@/api/rickAndMortyApi";

interface UseFetchSingleCharacterResult {
  character: Character | null;
  isLoading: boolean;
  error: string | null;
}

export const useFetchSingleCharacter = (
  id: string
): UseFetchSingleCharacterResult => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  console.log("Fethcing single character");

  const hasFetched = useRef(false);

  useEffect(() => {
    const fetchCharacter = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `${rickAndMortyConfig.characters}/${id}`
        );
        setCharacter(response.data);
        hasFetched.current = true;
      } catch (err) {
        setError("Failed to fetch character details.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (id && !hasFetched.current) {
      fetchCharacter();
    }
  }, [id]);

  return { character, isLoading, error };
};
