import { Link, useParams } from "react-router-dom";
import { Button } from "./ui/button";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  CalendarIcon,
  ClapperboardIcon,
  MapPinIcon,
  TvIcon,
  UsersIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { paths } from "@/routes/paths";
import { Separator } from "./ui/separator";
import SkeletonCharacter from "./skeletons/skeleton-character";
import { useCharacter } from "@/hooks/use-character";
import { useEpisode } from "@/hooks/use-episode";

const CharacterDetails = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: singleCharacter,
    isLoading,
    error,
  } = useCharacter(parseInt(id ?? ""));
  const character = singleCharacter && singleCharacter[0];

  const episodeIds = character
    ? character.episode.map((url) => {
        const parts = url.split("/");
        return parseInt(parts[parts.length - 1]);
      })
    : [];

  const { data: episodes } = useEpisode(episodeIds);

  if (isLoading || !character) return <SkeletonCharacter />;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="space-y-4">
      <Link to={"/"} className="">
        <Button variant="ghost">
          <ArrowLeftIcon className="mr-2 size-4" /> Back to all characters
        </Button>
      </Link>
      <div className="grid gap-6 md:grid-cols-[300px_1fr] w-full">
        <Card className="max-h-[460px] overflow-hidden">
          <img
            src={character?.image}
            alt={"Character image"}
            className="w-full h-[300px] object-cover"
          />
          <CardContent className="p-4">
            <Badge
              variant={
                character.status === "Alive"
                  ? "success"
                  : character?.status === "Dead"
                  ? "destructive"
                  : "secondary"
              }
              className="mb-2 capitalize"
            >
              {character?.status}
            </Badge>
            <CardTitle className="text-2xl mb-2">{character.name}</CardTitle>
            <CardDescription>
              #{id} • {character.species}
            </CardDescription>
          </CardContent>
        </Card>

        <div className="flex items-start gap-6 w-full md:flex-row flex-col">
          <Card className="md:w-2/5 w-full">
            <CardHeader>
              <CardTitle>Character Info</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <UsersIcon className="size-4 text-primary" />
                  <CardDescription>Gender: {character.gender}</CardDescription>
                </div>
                {character.type && (
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{character.type}</Badge>
                  </div>
                )}
              </div>
              {character.origin.url ? (
                <Link
                  to={paths.location.details(
                    character.origin.url.split("/").pop()!
                  )}
                  className="group"
                >
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="size-4 text-primary" />
                    <CardDescription className="flex items-center group-hover:text-primary group-hover:font-semibold transition-all">
                      Origin: {character.origin.name}
                      <ArrowUpRightIcon className="size-4 ml-2 scale-0 rotate-90 group-hover:rotate-0 group-hover:scale-100 duration-100" />
                    </CardDescription>
                  </div>
                </Link>
              ) : (
                <div className="flex items-center gap-2">
                  <MapPinIcon className="size-4 text-primary" />
                  <CardDescription>
                    Origin: {character.origin.name}
                  </CardDescription>
                </div>
              )}
              {character.location.url ? (
                <Link
                  to={paths.location.details(
                    character.location.url.split("/").pop()!
                  )}
                  className="group"
                >
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="size-4 text-primary" />
                    <CardDescription className="flex items-center group-hover:text-primary group-hover:font-semibold transition-all">
                      Current Location: {character.location.name}
                      <ArrowUpRightIcon className="size-4 ml-2 scale-0 rotate-90 group-hover:rotate-0 group-hover:scale-100 duration-100" />
                    </CardDescription>
                  </div>
                </Link>
              ) : (
                <div className="flex items-center gap-2">
                  <MapPinIcon className="size-4 text-primary" />
                  <CardDescription>
                    Current Location: {character.location.name}
                  </CardDescription>
                </div>
              )}

              <div className="flex items-center gap-2">
                <CalendarIcon className="size-4 text-primary" />
                <CardDescription>
                  Created: {new Date(character.created).toLocaleDateString()}
                </CardDescription>
              </div>
            </CardContent>
            <CardHeader>
              <CardTitle>Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              {episodes && (
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-2">
                    <CalendarIcon className="size-4 mt-0.5 text-primary" />
                    <CardDescription className="flex flex-col gap-1">
                      First Appearance:{" "}
                      <Link
                        to={paths.episode.details(episodes.at(0)!.id)}
                        className="group"
                      >
                        <p className="text-primary flex flex-col group-hover:text-blue-600 group-hover:underline transition-all">
                          {episodes[0].name}
                          <span className="text-muted-foreground italic group-hover:text-blue-600 ">
                            ({episodes[0].air_date})
                          </span>
                        </p>
                      </Link>
                    </CardDescription>
                  </div>
                  <div className="flex items-start gap-2">
                    <CalendarIcon className="size-4 mt-0.5 text-primary" />
                    <CardDescription className="flex flex-col gap-1">
                      Latest Appearance:{" "}
                      <Link
                        to={paths.episode.details(episodes.at(0)!.id)}
                        className="group"
                      >
                        <p className="text-primary flex flex-col group-hover:text-blue-600 group-hover:underline transition-all">
                          {episodes[episodes.length - 1].name}{" "}
                          <span className="text-muted-foreground italic group-hover:text-blue-600">
                            ({episodes[episodes.length - 1].air_date})
                          </span>
                        </p>
                      </Link>
                    </CardDescription>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="w-full md:w-3/5">
            <CardHeader className="gap-2">
              <CardTitle>Appearances</CardTitle>
              <div className="flex items-center gap-2">
                <ClapperboardIcon className="size-4 text-primary" />
                {episodes && (
                  <CardDescription>
                    Total episodes: {episodes.length}
                  </CardDescription>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {episodes && (
                <div className="mt-4 h-[320px] overflow-auto flex flex-col gap-2">
                  {episodes.map((ep) => (
                    <Link
                      to={paths.episode.details(ep.id)}
                      key={ep.id}
                      className="group"
                    >
                      <Button
                        className="flex justify-between items-center w-full hover:text-blue-600"
                        variant={"link"}
                      >
                        <div className="flex  gap-2">
                          <span># {ep.id}</span>
                          <TvIcon className="size-4" />
                          <span>{ep.name}</span>
                        </div>
                        <CardDescription>{ep.air_date}</CardDescription>
                      </Button>
                      <Separator />
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
