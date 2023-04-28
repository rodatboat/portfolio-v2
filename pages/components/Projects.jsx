import React, { useState } from "react";
import {
  projects,
  other_projects,
  contributions,
} from "../../config/config.json";
import { RiGithubFill } from "react-icons/ri/index.js";

export default function Projects() {
  const ProjectLayout = () => {
    return (
      <>
        {projects.map((p, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row gap-4 pt-10 md:pt-12"
          >
            <div className="flex flex-col space-between basis-2/3 order-2 md:order-1 py-2 justify-between">
              <div>
              <h2 className="text-3xl md:text-4xl font-bold pb-3 md:pb-10">
                {p.title}
              </h2>
              <p className="text-xl text-secondary">{p.description}</p>
              </div>
              <div className="flex-initial flex flex-row items-center pt-4 text-xl gap-4 font-bold">
                {!p.src ? null : (
                  <a
                    name="Project Source Preview"
                    href={p.src}
                    target="_blank"
                    className="rounded-lg text-white hover:text-black bg-black hover:bg-white transition-all duration-300 p-1"
                  >
                    <RiGithubFill size={24} />
                  </a>
                )}
                {!p.live ? null : (
                  <a
                    name="Project Live Preview"
                    href={p.live}
                    target="_blank"
                    className="text-white hover:text-primary transition-all duration-300 hover:translate-x-1"
                  >
                    {p.live.replace("https://www.", "")} →
                  </a>
                )}
              </div>
            </div>
            {p.images.map((img, i) => (
              <div key={i} className="basis-1/3 p-1 order-1">
                <a
                  name="Project image"
                  href={p.live ? p.live : p.src}
                  target="_blank"
                >
                  <img
                    className="h-full max-h-[250px] w-full object-cover object-top rounded-lg hover:scale-[101%] transition-all ease-in"
                    src={img}
                    alt={`${p.title} image`}
                    loading="lazy"
                  />
                </a>
              </div>
            ))}
          </div>
        ))}
      </>
    );
  };

  const OtherProjectsLayout = () => {
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-6 pt-10 md:pt-32">
          {other_projects.map((p, i) => (
            <div key={i} className="flex p-[1px] bg-gradient-to-b from-secondary via-black via-25% to-white to-100%  rounded-xl">
              <div
                className="flex flex-col bg-black self-stretch rounded-xl p-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold py-3 md:py-2">
                  {p.title}
                </h2>
                <div className="flex flex-col h-full justify-between">
                  <p className="text-lg text-secondary">{p.description}</p>
                  <div className="flex flex-row items-center pt-3 text-xl gap-4 font-bold">
                    {!p.src ? null : (
                      <a
                        name="Project Source Preview"
                        href={p.src}
                        target="_blank"
                        className="rounded-lg text-white hover:text-black bg-black hover:bg-white transition-all duration-300 p-1"
                      >
                        <RiGithubFill size={24} />
                      </a>
                    )}
                    {!p.live ? null : (
                      <a
                        name="Project Live Preview"
                        href={p.live}
                        target="_blank"
                        className="text-white hover:text-primary transition-all duration-300 hover:translate-x-1"
                      >
                        {p.live.replace("https://www.", "")} →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <div className="pt-32 pb-6 md:pb-9" id="projects">
        <h2 className="text-4xl md:text-6xl font-bold">Select Work</h2>
      </div>
      <div className="">
        <ProjectLayout />
        <OtherProjectsLayout />
      </div>
    </>
  );
}
