/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import { Character } from "@/types";
import { Card, CardDescription, CardTitle } from "./ui/card";
import { DotIcon, EyeIcon, MapPinIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  const { id, name, image, status, species, location, episode } = character;

  return (
    <Card className=" min-w-[300px] hover:-translate-y-2 transition-all">
      <div className="flex w-full p-2 pl-4 justify-between">
        <div className="w-1/2 flex flex-col gap-2">
          <CardDescription>#{id}</CardDescription>
          <CardTitle className="min-h-12">{name}</CardTitle>
          <CardDescription className="flex gap-1 items-center">
            <MapPinIcon size={14} className="flex-shrink-0" />
            <p className="truncate">{location.name}</p>
          </CardDescription>
          <CardDescription className="flex gap-1 items-center">
            <EyeIcon size={14} className="flex-shrink-0" />
            <p className="truncate">First seen in: {episode[0]}</p>
          </CardDescription>
          <CardDescription
            className={cn(
              "flex gap-1 items-center ml-1",
              status === "Alive" && "text-green-500",
              status === "Dead" && "text-red-500",
              status === "unknown" && "text-muted-foreground"
            )}
          >
            <div
              className={cn(
                "size-2 rounded-full",
                status === "Alive" && "bg-green-500 animate-pulse",
                status === "Dead" && "bg-red-500",
                status === "unknown" && "bg-muted-foreground"
              )}
            />
            <p className="truncate">
              {status} - {species}
            </p>
          </CardDescription>
        </div>
        <div className="">
          <img src={image} className="size-32  object-cover rounded-md" />
        </div>
      </div>
    </Card>
  );
};

export default CharacterCard;
