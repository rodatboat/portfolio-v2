import React, { useState } from "react";
import Header from "./Header";
import Projects from "./Projects";
import Footer from "./Footer";
import Profile from "./Profile";

export { Page };

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
