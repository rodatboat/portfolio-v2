import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Projects from "./Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-green-light text-green min-h-screen w-screen">
      <Header />
      <Projects />
    </div>
  );
}

export default App;
