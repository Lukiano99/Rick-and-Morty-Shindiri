import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { paths } from "@/routes/paths";
import useDebounce from "@/hooks/use-debounce";
import SkeletonCharacters from "./skeletons/skeleton-characters";
import CharactersToolbar from "./characters-toolbar";
import useIsInViewport from "@/hooks/use-is-in-viewport";
import EmptySearch from "./empty-search";
import useInfiniteEpisodes from "@/hooks/use-infinite-episodes";
import EpisodeCard from "./episode-card";

const EpisodesList = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteEpisodes(debouncedSearchQuery);
  const episodes = data?.pages.flatMap((page) => page.results) || [];

  const { isInViewport, observerRef } = useIsInViewport();
  useEffect(() => {
    if (isInViewport && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [isInViewport, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <div className="flex flex-col items-start justify-center gap-10 w-full min-w-[1280px]">
      <div className="flex md:items-center md:gap-0 gap-4 md:flex-row flex-col items-start justify-between w-full">
        <CharactersToolbar
          onSearchChange={handleSearchChange}
          searchPlaceHolder={"Search for episode..."}
        />
        <p className="text-muted-foreground">
          Total characters on page:{" "}
          <span className="text-primary font-semibold"> {episodes.length}</span>
        </p>
      </div>
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-10">
        {episodes &&
          !isLoading &&
          episodes.map((episode) => (
            <Link to={paths.characters.details(episode.id)} key={episode.id}>
              <EpisodeCard episode={episode} />
            </Link>
          ))}
        {isLoading && !episodes && <SkeletonCharacters />}
        {episodes.length === 0 && (
          <div className="flex flex-row">
            <EmptySearch title="Character not found" description="Try again" />
          </div>
        )}
      </div>
      <div className="w-full flex items-center justify-center">
        <div ref={observerRef} className="w-full h-10" />
      </div>
    </div>
  );
};

export default EpisodesList;
