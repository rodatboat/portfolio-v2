import React from 'react';
import { projects, other_projects, contributions } from "../../config/config.json";
import { RiGithubFill } from "react-icons/ri/index.js";

export default function Contributions() {
    const ContributionsLayout = () => {
        return (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-6 pt-20">
              {contributions.map((p, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row gap-4 bg-primary rounded-xl px-6 md:pr-0 pt-6"
                >
                  <div className="basis-2/3 pb-6 flex flex-col">
                    <h2 className="text-3xl md:text-4xl text-black font-bold py-10">
                      {p.title}
                    </h2>
                    <div className="flex flex-col h-full justify-between">
                    <p className="text-xl text-black">{p.description}</p>
                    <div className="flex flex-row items-center pt-10 text-xl gap-4 font-bold">
                      {!p.src ? null : (
                        <a
                          name="Project Source Preview"
                          href={p.src}
                          target="_blank"
                          className="rounded-lg text-black hover:text-primary bg-primary hover:bg-black transition-all duration-300 p-1"
                        >
                          <RiGithubFill size={24} />
                        </a>
                      )}
                      {!p.live ? null : (
                        <a
                          name="Project Live Preview"
                          href={p.live}
                          target="_blank"
                          className="text-black transition-all duration-300 hover:translate-x-1"
                        >
                          {p.live.replace("https://www.", "")} →
                        </a>
                      )}
                    </div>
                    </div>
                  </div>
                  {p.images.map((img, i) => (
                    <div key={i} className="basis-1/3">
                      <a
                        name="Project Image"
                        href={p.live ? p.live : p.src}
                        target="_blank"
                      >
                        <img
                          className="h-[250px] md:h-full max-h-[250px] md:max-h-full w-full object-cover object-top md:rounded-none md:rounded-tl-lg rounded-t-lg hover:scale-[101%] transition-all ease-in"
                          src={img}
                          alt={`${p.title} image`}
                          loading="lazy"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </>
        );
      };
    return (
        <>
            <div className='pt-32 pb-6 md:pb-9' id="contributions">
                <h2 className='text-4xl md:text-6xl font-bold'>Contributions</h2>
            </div>
            <div>
                <ContributionsLayout />
            </div>
        </>
    )
}
