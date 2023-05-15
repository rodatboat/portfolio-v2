import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export { Page };

export const documentProps = {
  title: 'Ronaldo Suarez | Tools',
}

const ToolsSection = ({ sectionInfo }) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="border-b border-secondary/25 py-4">
          <h2 className="font-bold text-3xl mb-2">{sectionInfo.title}</h2>
          <p className="text-md text-secondary">{sectionInfo.description}</p>
        </div>
        <div className="flex flex-col gap-2">
          {sectionInfo.items.map((item, i) => <a key={i} className="text-md font-bold hover:text-primary transition-all duration-300 ease-in-out" href={item.link}>{item.name}</a>)}
        </div>
      </div>
    </>
  );
};

function Page(pageProps) {
  const { tools } = pageProps;

  return (
    <>
      <NavBar />

      <div className="my-14 pt-16">
        <h2 className="text-6xl font-bold text-center">Tools</h2>
        <p className="text-xl text-center text-secondary mt-8">
          A deep dive into my mind, experiences, interests, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {tools.map((t, i) => <ToolsSection key={i} sectionInfo={t} />)}
      </div>

      <Footer />
    </>
  );
}
