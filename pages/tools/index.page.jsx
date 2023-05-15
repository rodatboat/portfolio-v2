import React, { useState } from "react";
import { projects } from "../../config/config.json";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export { Page };

export const documentProps = {
  title: 'Ronaldo Suarez | Tools',
}

function Page(pageProps) {
  return (
    <>
      <NavBar />
      
      <Footer />
    </>
  );
}
