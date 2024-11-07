import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "./routes/private-route";
import LoginPage from "./pages/login";
import CharactersPage from "./pages/characters";
import CharacterDetailsPage from "./pages/character-details";
import LocationDetailsPage from "./pages/location-details";
import EpisodeDetailsPage from "./pages/episode-details";
import { paths } from "./routes/paths";
import { useAuth } from "./hooks/use-auth";
import SignUpPage from "./pages/signup";

function App() {
  const { userLoggedIn } = useAuth();

  return (
    <Router
      future={{
        v7_startTransition: true,
      }}
    >
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
        {/* Private routes */}
        <Route element={<PrivateRoute />}>
          <Route path={paths.characters.root} element={<CharactersPage />} />
          <Route
            // path={paths.characters.details(":id")}
            path="/characters/:id"
            element={<CharacterDetailsPage />}
          />
          <Route
            // path={paths.location.details(":id")}
            path="/location/:id"
            element={<LocationDetailsPage />}
          />
          <Route
            // path={paths.episode.details(":id")}
            path="/episode/:id"
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
    </Router>
  );
}

export default App;
