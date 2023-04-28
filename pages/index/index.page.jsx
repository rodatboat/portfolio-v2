import React, { useState } from "react";
import Landing from "../components/Landing";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Contributions from "../components/Contributions";
import FeaturedPosts from "../components/FeaturedPosts";
import Contact from "../components/Contact";
import About from "../components/About";

export { Page };

// export const documentProps = {
//   // This title and description will override the defaults
//   title: 'About SpaceX',
//   description: 'Our mission is to explore the galaxy.'
// }

function Page(pageProps) {
  return (
    <>
      <NavBar />
      <Landing />
      <About />
      <Projects />
      <Contributions />
      <FeaturedPosts />
      <Contact />
      <Footer />
    </>
  );
}
