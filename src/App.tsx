// import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const test = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID;
  return (
    <>
      <Button>Shindiri Click</Button>
      <h2>{test}</h2>
    </>
  );
}

export default App;
