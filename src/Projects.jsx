import React from "react";
import { projects } from "../me_config.json";
import { AiFillGithub } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";

export default function Projects() {
  // Add images to projects
  return (
    <>
      <div className="mt-32">
        <h2 className="text-3xl font-medium mb-4">my work</h2>
        <div className="flex flex-col space-y-12">
          {projects.map((p, i) => (
            <div key={i} className="flex flex-col sm:flex-row">
              {/* <div>
                {p.images.map((image, i) => 
                <img src={image} className="rounded-xl" loading="lazy"/>)}
              </div> */}
              
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold mb-1">{p.title}</h3>
                <h3 className="text-md mb-1">{p.description}</h3>

                <div className="flex flex-row w-full space-x-1 mb-4">
                  {p.stack.map((s, i) => (
                    <div
                      key={i}
                      className="text-xs text-orange border-orange border rounded px-1.5"
                    >
                      {s}
                    </div>
                  ))}
                </div>

                <div className="flex flex-row w-full space-x-4">
                  {!p.src ? null : (
                    <div className="text-sm hover:text-orange hover:border-orange border-green border rounded flex items-center px-1">
                      <a
                        className="font-bold flex flex-row items-center gap-x-1"
                        href={p.src}
                      >
                        <AiFillGithub /> Source
                      </a>
                    </div>
                  )}
                  {!p.live ? null : (
                    <div className="text-sm hover:text-orange hover:border-orange border-green border rounded flex items-center px-1">
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
