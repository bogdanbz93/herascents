import { useState } from "react";
import Home from "./pages/Home";
import Cookie from "./assets/Cookie";
import "./App.css";
import Loader from "./assets/Loader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Home />
      <Loader />
      <Cookie />
    </div>
  );
}

export default App;
