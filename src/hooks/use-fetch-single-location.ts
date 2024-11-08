import { useState, useEffect, useMemo, useRef } from "react";
import axios from "axios";
import { rickAndMortyConfig } from "@/api/rickAndMortyApi";
import { Location } from "@/types";

interface UseFetchSingleLocationResult {
  location: Location | null;
  isLoading: boolean;
}

export const useFetchSingleLocation = (
  locationId: number
): UseFetchSingleLocationResult => {
  const [location, setLocation] = useState<Location | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const memoizedLocationId = useMemo(() => locationId, [locationId]);
  const hasFetched = useRef(false);

  useEffect(() => {
    const fetchLocation = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `${rickAndMortyConfig.locations}/${memoizedLocationId}`
        );
        setLocation(response.data);
        setIsLoading(false);
      } catch (err) {
        console.error({ err });
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    if (locationId && !hasFetched.current) {
      fetchLocation();
      hasFetched.current = true;
    }
  }, [locationId, memoizedLocationId]);

  return { location, isLoading };
};
