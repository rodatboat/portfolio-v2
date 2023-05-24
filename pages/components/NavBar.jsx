import React from "react";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri/index.js";
import { BsMailbox } from "react-icons/bs/index.js";
import { CgLoadbarDoc } from "react-icons/cg/index.js";
import LazyImage from "./LazyImage";

export default function NavBar() {
  return (
    <>
      <div className="z-50 h-14 fixed top-0 -mx-4 sm:-mx-6 md:-mx-8 font-bold bg-black/40 backdrop-blur-lg">
        <div className="flex flex-row gap-8 h-full w-screen items-center justify-start text-secondary pl-4 sm:pl-6 md:pl-8">
          <a name="Go Home" href="/#">
          <div className="h-9 overflow-hidden rounded-full object-cover aspect-square hover:scale-105 transition-all duration-100 ease-in">
          <LazyImage
            src={"/me.jpg"}
            blurHash={"LDF?2@E00J-:00kDtmM{9D-;~qNG"}
            alt={`Portrait of me`}
            height={50}
            width={50}
            />
          </div>
          </a>
          {/* <a name="More About Me" href="/#about" className="hover:text-primary transition-all duration-300">
            About
          </a> */}
          <a name="My Projects" href="/#projects" className="hover:text-primary transition-all duration-300">
            Projects
          </a>
          <a name="My Tools" href="/tools" className="hover:text-primary transition-all duration-300">
            Tools
          </a>
          <a name="My Blog" href="/blog" className="hover:text-primary transition-all duration-300">
            Blog
          </a>
        </div>
      </div>
      <div className="fixed bottom-0 end-0 m-4">
        <div className="flex flex-col space-y-4 items-center text-secondary">
          <a
            name="My Github"
            href="https://github.com/rodatboat"
            className="hover:text-white transition-all duration-300"
            target="_blank"
          >
            <RiGithubFill size={28} />
          </a>
          <a
            name="My LinkedIn"
            href="https://www.linkedin.com/in/ronaldo-suarez/"
            className="hover:text-white transition-all duration-300"
            target="_blank"
          >
            <RiLinkedinFill size={28} />
          </a>
          <a
            name="Email Me"
            href="mailto:me@ronaldosuarez.dev"
            className="hover:text-white"
            target="_blank"
          >
            <BsMailbox size={28} />
          </a>
          <a
            className="hover:text-white transition-all duration-300"
            name="Ronaldo Suarez's Resume"
            href="/Ronaldo_Suarez_Resume_v.pdf"
            target="_blank"
          >
            <CgLoadbarDoc size={28} />
          </a>
        </div>
      </div>
    </>
  );
}
