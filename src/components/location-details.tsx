import { Link, useParams } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowLeft, GlobeIcon, MapIcon, UsersIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import SkeletonDetailsPage from "./skeletons/skeleton-details-page";
import { paths } from "@/routes/paths";
import { useLocation } from "@/hooks/use-location";
import { useCharacter } from "@/hooks/use-character";

const LocationDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: singleLocation, isLoading } = useLocation(parseInt(id ?? ""));
  const location = singleLocation && singleLocation[0];

  const charactersIds =
    location?.residents.map((url) => {
      const parts = url.split("/");
      return parseInt(parts[parts.length - 1]);
    }) ?? [];

  const { data: residents } = useCharacter(charactersIds);

  if (isLoading) {
    return <SkeletonDetailsPage />;
  }

  return (
    <div className="container">
      <Link to="/">
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="mr-2 size-4" /> Back to all characters
        </Button>
      </Link>

      <Card className="mb-8">
        <CardHeader className="relative">
          <div className="absolute top-0 right-0 mt-4 mr-4">
            <Badge variant="secondary" className="text-lg font-bold">
              ID: {location?.id}
            </Badge>
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold">
            {location?.name}
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            <div className="flex items-center">
              <GlobeIcon className="mr-2 size-4 text-primary" />
              Type: {location?.type}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center">
              <MapIcon className="mr-2 size-4 text-primary" />
              <span className="text-lg font-medium">
                Dimension: {location?.dimension}
              </span>
            </div>
            <div className="flex items-center">
              <UsersIcon className="mr-2 size-4 text-primary" />
              <span className="text-lg font-medium">
                {location?.residents.length} Residents
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Residents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[500px] pr-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {residents &&
                residents.map((resident) => (
                  <Link
                    to={paths.characters.details(resident.id)}
                    key={resident.id}
                    className="hover:drop-shadow-lg transition-all"
                  >
                    <Card className="overflow-auto">
                      <img
                        src={resident.image}
                        alt={resident.name}
                        className="w-full h-40 object-cover "
                      />
                      <CardContent className="p-2">
                        <p className="font-medium text-sm truncate">
                          {resident.name}
                        </p>
                        <Badge
                          variant={
                            resident.status === "Alive"
                              ? "success"
                              : resident.status === "Dead"
                              ? "destructive"
                              : "secondary"
                          }
                          className="mt-1"
                        >
                          {resident.status}
                        </Badge>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocationDetails;
