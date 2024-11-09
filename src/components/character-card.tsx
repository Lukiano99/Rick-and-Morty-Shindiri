import { FC } from "react";
import { Character } from "@/types";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { EyeIcon, MapPinIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  const { id, name, image, status, species, location, episode } = character;
  return (
    <Card className="w-full max-w-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <Badge
          variant={
            status === "Alive"
              ? "success"
              : status === "Dead"
              ? "destructive"
              : "secondary"
          }
          className="absolute top-3 right-3 gap-2"
        >
          <div
            className={cn(
              "size-2 rounded-full",
              status === "Alive"
                ? "bg-green-800 animate-pulse"
                : status === "Dead"
                ? "bg-red-800"
                : "bg-muted-foreground"
            )}
          />
          {status}
        </Badge>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <CardTitle className="text-2xl font-bold mb-1">{name}</CardTitle>
            <CardDescription className="text-sm">
              #{id} • {species}
            </CardDescription>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-4 w-4 text-primary" />
            <CardDescription className="text-sm flex items-center gap-1 truncate">
              <p className="text-accent-foreground">Last known location:</p>
              {location.name}
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <EyeIcon className="h-4 w-4 text-primary" />
            <CardDescription className="text-sm flex items-center gap-1">
              <p className="text-accent-foreground">First seen in:</p>
              {episode[0].slice(32)}
            </CardDescription>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
