import { Link, useParams } from "react-router-dom";
import { paths } from "@/routes/paths";
import { useCharacter } from "@/api/fetch-characters";
import { useEpisode } from "@/api/fetch-episodes";
import { Episode } from "@/types";

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import SkeletonDetailsPage from "./skeletons/skeleton-details-page";
import { ArrowLeftIcon, CalendarIcon, TvIcon, UsersIcon } from "lucide-react";

const EpisodeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: episodes, isLoading: isEpisodeLoading } = useEpisode(
    parseInt(id ?? "")
  );
  const episode: Episode | undefined = episodes?.at(0);

  const charactersIds =
    episode?.characters.map((url) => {
      const parts = url.split("/");
      return parseInt(parts[parts.length - 1]);
    }) || [];

  const { data: characters } = useCharacter(charactersIds);

  if (isEpisodeLoading) {
    return <SkeletonDetailsPage />;
  }
  return (
    <div className="container  w-full">
      <Link to="/">
        <Button variant="ghost" className="mb-4">
          <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to characters
        </Button>
      </Link>

      <Card className="mb-8 w-full">
        <CardHeader className="relative">
          <div className="absolute top-0 right-0 mt-4 mr-4">
            <Badge variant="secondary" className="text-lg font-bold">
              {episode?.episode}
            </Badge>
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold">
            {episode?.name}
          </CardTitle>
          <CardDescription className="text-lg">
            <div className="flex items-center mt-2">
              <CalendarIcon className="mr-2 size-4" />
              <p>Aired on {episode?.air_date}</p>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <TvIcon className="mr-2 size-4 text-primary" />
              <span className="text-lg font-medium">
                Season {episode?.episode.slice(1, 3)}, Episode{" "}
                {episode?.episode.slice(4)}
              </span>
            </div>
            <div className="flex items-center ">
              <UsersIcon className="mr-2 size-4 text-primary" />
              <span className="text-lg font-medium">
                {episode?.characters.length} Characters
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Featured Characters
          </CardTitle>
        </CardHeader>
        <CardContent className="max-h-[800px] overflow-auto">
          {characters && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {characters.map((character) => (
                <Link
                  to={paths.characters.details(character.id)}
                  key={character.id}
                >
                  <Card className="overflow-hidden">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-full h-40 object-cover"
                    />
                    <CardContent className="p-2">
                      <p className="font-medium text-sm truncate">
                        {character.name}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EpisodeDetails;
