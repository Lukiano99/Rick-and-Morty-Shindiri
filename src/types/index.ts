export type Character = {
  id: number;
  name: string;
  image: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  location: Location;
  episode: string[];
};
export type Location = {
  name: string;
  url: string;
};
