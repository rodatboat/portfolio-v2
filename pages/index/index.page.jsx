import React, { useState } from "react";
import Header from "./Header";
import Projects from "./Projects";
import Footer from "./Footer";
import Profile from "./Profile";
import { projects } from "../../me_config.json";

export { Page };

// export const documentProps = {
//   // This title and description will override the defaults
//   title: 'About SpaceX',
//   description: 'Our mission is to explore the galaxy.'
// }

function Page(pageProps) {
  return (
    <>
      <Header />
      {/* Add Image and Bio */}
      <Profile />
      <Projects />
      <Footer />
    </>
  );
}
