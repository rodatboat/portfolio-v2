import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsMailbox } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

export default function Header() {
  return (
    <>
      <div className="flex-col space-y-2">
        <p className="text-green text-xl md:text-2xl">
          Software Engineer at{" "}
          <a className="hover:text-orange underline decoration-orange" href="https://www.jpmorganchase.com">
            JPMorgan Chase & Co.
          </a>
        </p>
        <h1 className="text-green text-3xl md:text-4xl">
          Hey, I'm <span className="font-semibold">Ronaldo Suarez</span>, a full-stack developer. I craft engaging user experiences designed to help people
          meaningfully engage with data.
        </h1>
        <div className="flex flex-row w-full space-x-4 ">
          <a href="https://github.com/rodatboat">
            <AiFillGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/ronaldo-suarez/">
            <GrLinkedinOption size={24} />
          </a>
          <a href="mailto:ronaldo3055@gmail.com">
            <BsMailbox size={24} />
          </a>
        </div>
      </div>
    </>
  );
}
