import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";

export { Page };

// export const documentProps = {
//   // This title and description will override the defaults
//   title: 'About SpaceX',
//   description: 'Our mission is to explore the galaxy.'
// }

function Page(pageProps) {
    const {slug, blog} = pageProps;
    useEffect(() => {
    }, [])
    
  return (
    <>
      <NavBar />

      <div className="mt-14"></div>
      
      <Footer />
    </>
  );
}
