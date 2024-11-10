import { Episode } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CalendarIcon, Users2Icon } from "lucide-react";

interface EpisodeCardProps {
  episode: Episode;
}
const EpisodeCard = ({ episode }: EpisodeCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">{episode.name}</CardTitle>
        <CardDescription>{episode.episode}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div className="flex items-center mb-2">
          <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
          <span>{episode.air_date}</span>
        </div>
        <div className="flex items-center">
          <Users2Icon className="mr-2 h-4 w-4 text-primary" />
          <span>{episode.characters.length} characters</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default EpisodeCard;
