type Origin = {
  name: string;
  url: string;
};

type Location = {
  name: string;
  url: string;
};

export type Character = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Male" | "Female" | "Genderless" | "unknown";
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
};