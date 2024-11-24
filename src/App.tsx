import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { myRoutes } from "./routes/routes.tsx";

function App() {
  const myRouter = createBrowserRouter(myRoutes);

  return (
    <RouterProvider
      router={myRouter}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}

export default App;
