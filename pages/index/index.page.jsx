import React, { useState } from "react";
import { projects } from "../../me_config.json";
import Landing from "./Landing";
import
 { Analytics } 
from
 
'@vercel/analytics/react'
;
import NavBar from "./NavBar";
import Projects from "./Projects";
import Footer from "./Footer";
import Contributions from "./Contributions";
import FeaturedPosts from "./FeaturedPosts";
import Contact from "./Contact";

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
      <Projects />
      <Contributions />
      <FeaturedPosts />
      <Contact />
      <Footer />
      
      <Analytics />
    </>
  );
}
