import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Projects from "./Projects";
import Footer from "./Footer";
import Profile from "./Profile";

function App() {

  return (
    <div className="bg-primary-light text-primary min-h-screen h-full w-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
      <Header />
      {/* Add Image and Bio */}
      <Profile />
      <Projects />
      <Footer />
      </div>
    </div>
  );
}

export default App;
