import { Location } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { GlobeIcon, MapPinIcon, Users2Icon } from "lucide-react";
import { Button } from "./ui/button";

interface LocationCardProps {
  location: Location;
}
const LocationCard = ({ location }: LocationCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">{location.name}</CardTitle>
        <CardDescription>{location.type}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex items-center">
            <GlobeIcon className="mr-2 h-4 w-4 text-primary" />
            <span>{location.dimension}</span>
          </div>
          <div className="flex items-center">
            <Users2Icon className="mr-2 h-4 w-4 text-primary" />
            <span>{location.residents.length} residents</span>
          </div>
        </div>
        <Button variant="outline" className="mt-4 w-full">
          <MapPinIcon className="mr-2 h-4 w-4" /> View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default LocationCard;
