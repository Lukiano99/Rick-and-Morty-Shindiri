import { useState, useEffect, useMemo, useRef } from "react";
import axios from "axios";
import { Episode } from "@/types";
import { rickAndMortyConfig } from "@/api/rickAndMortyApi";

interface UseFetchEpisodesResult {
  episodes: Episode[] | null;
  isLoading: boolean;
}

export const useFetchEpisodes = (
  episodeIds: number[]
): UseFetchEpisodesResult => {
  const [episodes, setEpisodes] = useState<Episode[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const memoizedEpisodeIds = useMemo(() => episodeIds.join(","), [episodeIds]);
  const hasFetched = useRef(false);

  useEffect(() => {
    const fetchEpisodes = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `${rickAndMortyConfig.episodes}/${memoizedEpisodeIds}`
        );
        const episodesData = Array.isArray(response.data)
          ? response.data
          : [response.data];
        setEpisodes(episodesData);
        setIsLoading(false);
      } catch (err) {
        console.error({ err });
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    if (episodeIds.length > 0 && !hasFetched.current) {
      fetchEpisodes();
      hasFetched.current = true;
    }
  }, [episodeIds.length, memoizedEpisodeIds]);

  return { episodes, isLoading };
};
