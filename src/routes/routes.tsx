import LoginPage from "@/pages/login-page";
import SignUpPage from "@/pages/signup-page";
import CharactersPage from "@/pages/characters-page";
import CharacterDetailsPage from "@/pages/character-details-page";
import EpisodesPage from "@/pages/episodes-page";
import EpisodeDetailsPage from "@/pages/episode-details-page";
import LocationsPage from "@/pages/locations-page";
import LocationDetailsPage from "@/pages/location-details-page";
import { Navigate } from "react-router-dom";
import PublicRoute from "./public-route";
import PrivateRoute from "./private-route";
import { paths } from "./paths";

export const myRoutes = [
  // Public routes
  {
    element: <PublicRoute />,
    children: [
      {
        path: paths.auth.login,
        element: <LoginPage />,
      },
      {
        path: paths.auth.signup,
        element: <SignUpPage />,
      },
    ],
  },

  // Private routes
  {
    element: <PrivateRoute />,
    children: [
      // Characters routes
      {
        path: paths.characters.root,
        element: <CharactersPage />,
      },
      {
        path: `${paths.characters.root}/:id`,
        element: <CharacterDetailsPage />,
      },

      // Episodes routes
      {
        path: paths.episode.root,
        element: <EpisodesPage />,
      },
      {
        path: `${paths.episode.root}/:id`,
        element: <EpisodeDetailsPage />,
      },

      // Locations routes
      {
        path: paths.location.root,
        element: <LocationsPage />,
      },
      {
        path: `${paths.location.root}/:id`,
        element: <LocationDetailsPage />,
      },
    ],
  },

  // Default route
  {
    path: "*",
    element: <Navigate to={paths.auth.login} />,
  },
];
