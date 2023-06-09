import React from 'react';
import { projects, other_projects, contributions } from "../../config/config.json";
import { RiGithubFill } from "react-icons/ri/index.js";

export default function Contributions() {
    const ContributionsLayout = () => {
        return (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-6 pt-10 md:pt-12">
              {contributions.map((p, i) => (
                <div key={i} className='flex p-[1px] bg-gradient-to-b from-secondary to-transparent shadow-sm shadow-white/25 hover:shadow-white/75 transition-all duration-300 rounded-xl'>
                  <div
                  className="flex flex-col md:flex-row gap-4 rounded-xl bg-black px-4 md:pr-0 md:pt-4 overflow-hidden"
                >
                  <div className="basis-2/3 pb-6 flex flex-col p-2">
                    <h2 className="text-3xl md:text-4xl text-white font-bold pb-8">
                      {p.title}
                    </h2>
                    <div className="flex flex-col h-full justify-between">
                    <p className="text-xl text-secondary">{p.description}</p>
                    <div className="flex flex-row items-center pt-10 text-xl gap-4 font-bold">
                      {!p.src ? null : (
                        <a
                          name="Project Source Preview"
                          href={p.src}
                          target="_blank"
                          className="rounded-lg text-white hover:text-primary bg-primary hover:bg-black transition-all duration-300 p-1"
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
                  {p.images.map((img, i) => (
                    <div key={i} className="basis-1/3">
                      <a
                        name="Project Image"
                        href={p.live ? p.live : p.src}
                        target="_blank"
                        className='p-1'
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
