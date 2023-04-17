import React from "react";
import { projects } from "../../me_config.json";
import {RiShareForwardLine, RiGithubFill} from "react-icons/ri/index.js";

export default function Projects() {
  // Add images to projects
  return (
    <>
      <div className="mt-32" id="projects">
        <h2 className="text-3xl italic underline font-medium mb-8">my work</h2>
        <div className="flex flex-col space-y-4">
          {projects.map((p, i) => (
            <div key={i} className="flex flex-col sm:flex-row space-x-4">
              <div className="min-w-xs">
                {p.images.map((image, i) => (
                  <div
                    key={i}
                    className="max-w-full w-full md:max-w-sm p-2 md:p-0"
                  >
                    <a name="project image" href={p.live ? p.live : p.src}>
                      <img
                        src={image}
                        className="rounded-xl aspect-video h-auto max-w-full border-primary hover:border-secondary"
                        alt={`${p.title} image`}
                        loading="lazy"
                      />
                    </a>
                  </div>
                ))}
              </div>

              <div className="flex flex-col w-full justify-between pb-2">
                <div>
                  <h3 className="text-2xl font-bold italic font-black hover:text-secondary">
                    <a name="project title" href={p.live ? p.live : p.src}>{p.title}</a>
                  </h3>
                  <h3 className="text-md mb-1">{p.description}</h3>

                  <div className="flex flex-row w-full space-x-1 mb-4">
                    {p.stack.map((s, i) => (
                      <div
                        key={i}
                        className="text-xs text-secondary border-secondary border rounded px-1.5"
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-row w-full space-x-4">
                  {!p.src ? null : (
                    <div className="text-sm hover:text-secondary hover:border-secondary border-primary border rounded flex items-center px-1">
                      <a
                        className="font-bold flex flex-row items-center gap-x-1"
                        href={p.src}
                      >
                        <RiGithubFill /> Source
                      </a>
                    </div>
                  )}
                  {!p.live ? null : (
                    <div className="text-sm hover:text-secondary hover:border-secondary border-primary border rounded flex items-center px-1">
                      <a
                        className="font-bold flex flex-row items-center gap-x-1"
                        href={p.live}
                      >
                        <RiShareForwardLine /> Live
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
