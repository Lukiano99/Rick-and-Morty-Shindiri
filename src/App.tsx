import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "./routes/private-route";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import CharactersPage from "./pages/characters";
import CharacterDetailsPage from "./pages/character-details";
import LocationDetailsPage from "./pages/location-details";
import EpisodeDetailsPage from "./pages/episode-details";
import { paths } from "./routes/paths";

function App() {
  const isAuthenticated = !!localStorage.getItem("firebaseToken");

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route
          path={paths.auth.login}
          element={
            !isAuthenticated ? (
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
              to={
                isAuthenticated ? paths.characters.root : paths.characters.root
              }
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
