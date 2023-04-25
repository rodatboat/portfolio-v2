import React, { useState } from "react";
import { projects } from "../../me_config.json";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

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
      
      <Contact />
      <Footer />
    </>
  );
}
