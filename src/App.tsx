import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "./routes/private-route";
import LoginPage from "./pages/login-page";
import CharactersPage from "./pages/characters-page";
import CharacterDetailsPage from "./pages/character-details-page";
import LocationDetailsPage from "./pages/location-details-page";
import EpisodeDetailsPage from "./pages/episode-details-page";
import { paths } from "./routes/paths";
import { useAuth } from "./hooks/use-auth";
import SignUpPage from "./pages/signup-page";
import Header from "./components/nav/header";
import MainLayout from "./components/layout/main-layout";
import EpisodesPage from "./pages/episodes-page";
import LocationsPage from "./pages/locations-page";

function App() {
  const { userLoggedIn } = useAuth();

  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Header />
      <MainLayout>
        <Routes>
          {/* Public routes */}
          <Route
            path={paths.auth.login}
            element={
              !userLoggedIn ? (
                <LoginPage />
              ) : (
                <Navigate to={paths.characters.root} />
              )
            }
          />
          <Route path={paths.auth.signUp} element={<SignUpPage />} />
          <Route path={paths.auth.signUp} element={<SignUpPage />} />
          {/* Private routes */}
          <Route element={<PrivateRoute />}>
            <Route path={paths.characters.root} element={<CharactersPage />} />
            <Route path={paths.episode.root} element={<EpisodesPage />} />
            <Route path={paths.location.root} element={<LocationsPage />} />
            <Route
              path={`${paths.characters.root}/:id`}
              element={<CharacterDetailsPage />}
            />
            <Route
              path={`${paths.location.root}/:id`}
              element={<LocationDetailsPage />}
            />
            <Route
              path={`${paths.episode.root}/:id`}
              element={<EpisodeDetailsPage />}
            />
          </Route>

          {/* Default route */}
          <Route
            path="*"
            element={
              <Navigate
                to={userLoggedIn ? paths.characters.root : paths.auth.login}
              />
            }
          />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
