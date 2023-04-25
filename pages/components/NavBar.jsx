import React from "react";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri/index.js";
import { BsMailbox } from "react-icons/bs/index.js";
import { CgLoadbarDoc } from "react-icons/cg/index.js";

export default function NavBar() {
  return (
    <>
      <div className="z-50 h-14 fixed top-0 -mx-4 sm:-mx-6 md:-mx-8 font-bold bg-black/40 backdrop-blur-lg">
        <div className="flex flex-row gap-8 h-full w-screen items-center justify-start text-secondary pl-4 sm:pl-6 md:pl-8">
          <a href="/#">
            <img src="/me.jpg" className="h-9 rounded-full object-cover aspect-square hover:scale-105 transition-all duration-100 ease-in"/>
          </a>
          <a name="More About Me" href="/#about" className="hover:text-white transition-all duration-300">
            <p>About</p>
          </a>
          <a name="My Projects" href="/#projects" className="hover:text-white transition-all duration-300">
            <p>Projects</p>
          </a>
          <a name="My Tools" href="/tools" className="hover:text-white transition-all duration-300">
            <p>Tools</p>
          </a>
          <a name="My Blog" href="/blog" className="hover:text-white transition-all duration-300">
            <p>Blog</p>
          </a>
        </div>
      </div>
      <div className="fixed bottom-0 end-0 m-4">
        <div className="flex flex-col space-y-4 items-center text-secondary">
          <a
            name="github"
            href="https://github.com/rodatboat"
            className="hover:text-white transition-all duration-300"
            target="_blank"
          >
            <RiGithubFill size={28} />
          </a>
          <a
            name="linkedin"
            href="https://www.linkedin.com/in/ronaldo-suarez/"
            className="hover:text-white transition-all duration-300"
            target="_blank"
          >
            <RiLinkedinFill size={28} />
          </a>
          <a
            name="email"
            href="mailto:me@ronaldosuarez.dev"
            className="hover:text-white"
            target="_blank"
          >
            <BsMailbox size={28} />
          </a>
          {/* <a
            name="discord"
            href="https://www.discord.com"
            className="bg-white transition-all duration-300"
            target="_blank"
          >
            <span className="font-bold tracking-wider">Ro</span>#0000
          </a> */}
          <a
            className="hover:text-white transition-all duration-300"
            name="Ronaldo Suarez's Resume"
            href="/Ronaldo_Suarez_Resume_v.pdf"
            target="_blank"
          >
            <CgLoadbarDoc size={28} />
            {/* resume */}
          </a>
        </div>
      </div>
    </>
  );
}
