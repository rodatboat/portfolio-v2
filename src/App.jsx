import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Projects from "./Projects";

function App() {

  return (
    <div className="bg-green-light text-green min-h-screen w-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 md:pt-10">
      <Header />
      {/* Add Image and Bio */}
      <Projects />
      </div>
    </div>
  );
}

export default App;
