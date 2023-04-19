import React, { useState } from "react";
import Header from "./Header";
import Projects from "./Projects";
import Footer from "./Footer";
import Profile from "./Profile";
import Contributions from "./Contributions";
import { projects } from "../../me_config.json";
import
 { Analytics } 
from
 
'@vercel/analytics/react'
;

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
      <Contributions />
      <Footer />
      
      <Analytics />
    </>
  );
}
