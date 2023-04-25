import React, { useState } from "react";
import { projects } from "../../me_config.json";
import Landing from "./Landing";
import
 { Analytics } 
from
 
'@vercel/analytics/react'
;
import NavBar from "./NavBar";

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
      
      <Analytics />
    </>
  );
}
