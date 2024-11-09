import { Link, useParams } from "react-router-dom";
import { Button } from "./ui/button";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  CalendarIcon,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { paths } from "@/routes/paths";
import { Separator } from "./ui/separator";
import SkeletonCharacter from "./skeletons/skeleton-character";
import { useEpisode } from "@/api/fetch-episodes";
import { useCharacter } from "@/api/fetch-characters";

const CharacterDetails = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: singleCharacter,
    isLoading,
    error,
  } = useCharacter(parseInt(id || ""));
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
    <div className="container mx-auto p-4 max-w-4xl">
      <Link to={"/"}>
        <Button variant="ghost" className="mb-4">
          <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to all characters
        </Button>
      </Link>
      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        <Card className=" max-h-[430px]">
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
              className="mb-2"
            >
              {character?.status}
            </Badge>
            <CardTitle className="text-2xl mb-2">{character.name}</CardTitle>
            <CardDescription>
              #{id} • {character.species}
            </CardDescription>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Character Info</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <UsersIcon className="h-4 w-4 text-primary" />
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
                    <MapPinIcon className="h-4 w-4 text-primary" />
                    <CardDescription className="flex items-center group-hover:text-primary group-hover:font-semibold transition-all">
                      Origin: {character.origin.name}
                      <ArrowUpRightIcon className="size-4 ml-2 scale-0 rotate-90 group-hover:rotate-0 group-hover:scale-100 duration-100" />
                    </CardDescription>
                  </div>
                </Link>
              ) : (
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4 text-primary" />
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
                    <MapPinIcon className="h-4 w-4 text-primary" />
                    <CardDescription className="flex items-center group-hover:text-primary group-hover:font-semibold transition-all">
                      Current Location: {character.location.name}
                      <ArrowUpRightIcon className="size-4 ml-2 scale-0 rotate-90 group-hover:rotate-0 group-hover:scale-100 duration-100" />
                    </CardDescription>
                  </div>
                </Link>
              ) : (
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4 text-primary" />
                  <CardDescription>
                    Current Location: {character.location.name}
                  </CardDescription>
                </div>
              )}

              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4 text-primary" />
                <CardDescription>
                  Created: {new Date(character.created).toLocaleDateString()}
                </CardDescription>
              </div>
            </CardContent>
          </Card>

          <Card className="w-[600px]">
            <CardHeader>
              <CardTitle>Appearances</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="episodes" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="episodes">Episodes</TabsTrigger>
                  <TabsTrigger value="statistics">Statistics</TabsTrigger>
                </TabsList>
                {episodes && (
                  <TabsContent
                    value="episodes"
                    className="mt-4 max-h-[250px] overflow-auto flex flex-col gap-2"
                  >
                    {episodes.map((ep) => (
                      <Link to={paths.episode.details(ep.id)} key={ep.id}>
                        <Button
                          className="flex justify-between items-center w-full"
                          variant={"link"}
                        >
                          <div className="flex  gap-2">
                            <span className=""># {ep.id}</span>
                            <TvIcon className="h-4 w-4 text-primary" />
                            <span>{ep.name}</span>
                          </div>
                          <CardDescription>{ep.air_date}</CardDescription>
                        </Button>
                        <Separator />
                      </Link>
                    ))}
                  </TabsContent>
                )}
                {episodes && (
                  <TabsContent value="statistics" className="mt-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between w-full">
                        <p>Total Episodes: </p>
                        <p>{episodes.length}</p>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p>First Appearance:</p>
                        <p>
                          {episodes[0].name}{" "}
                          <span className="text-muted-foreground">
                            ({episodes[0].air_date})
                          </span>
                        </p>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <p>Latest Appearance:</p>
                        <p>
                          {episodes[episodes.length - 1].name}{" "}
                          <span className="text-muted-foreground">
                            ({episodes[episodes.length - 1].air_date})
                          </span>
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                )}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
