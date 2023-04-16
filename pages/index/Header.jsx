import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsMailbox } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

export default function Header() {
  return (
    <>
      <div className="flex-col space-y-2">
        <p className="text-primary text-xl md:text-2xl">
          Software Engineer at{" "}
          <a className="hover:text-secondary underline decoration-secondary" href="https://www.jpmorganchase.com">
            JPMorgan Chase & Co.
          </a>
        </p>
        <h1 className="text-primary text-3xl md:text-4xl">
          Hey, I'm <span className="font-semibold hover:text-secondary">Ronaldo Suarez</span>, a full-stack developer. I craft engaging user experiences designed to help people
          meaningfully engage with data.
        </h1>
        <div className="flex flex-row w-full space-x-4 ">
          <a href="https://github.com/rodatboat" className="hover:text-secondary">
            <AiFillGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/ronaldo-suarez/" className="hover:text-secondary">
            <GrLinkedinOption size={24} />
          </a>
          <a href="mailto:me@ronaldosuarez.dev" className="hover:text-secondary">
            <BsMailbox size={24} />
          </a>
          <a className="bg-primary rounded px-1 ml-1 text-primary-light hover:bg-secondary" ><span className="font-bold tracking-wider">Ro</span>#7940</a>
        </div>
      </div>
    </>
  );
}
