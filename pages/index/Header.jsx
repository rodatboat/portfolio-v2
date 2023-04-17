import React from "react";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri/index.js";
import { BsMailbox } from "react-icons/bs/index.js";

export default function Header() {
  return (
    <>
      <div className="flex-col space-y-2">
        <p className="text-primary text-xl md:text-2xl">
          Software Engineer at{" "}
          <a
            name="jpmorganchase"
            className="hover:text-secondary underline decoration-secondary font-medium"
            href="https://www.jpmorganchase.com"
            target="_blank"
          >
            JPMorgan Chase & Co.
          </a>
        </p>
        <h1 className="text-primary text-3xl md:text-4xl">
          Hey, I'm{" "}
          <span className="font-semibold hover:text-secondary">
            Ronaldo Suarez
          </span>
          , a full-stack developer. I craft engaging user experiences designed
          to help people meaningfully engage with data.
        </h1>
        <div className="flex flex-row w-full space-x-4 items-center">
          <a
            name="github"
            href="https://github.com/rodatboat"
            className="hover:text-secondary"
            target="_blank"
          >
            <RiGithubFill size={24} />
          </a>
          <a
            name="linkedin"
            href="https://www.linkedin.com/in/ronaldo-suarez/"
            className="hover:text-secondary"
            target="_blank"
          >
            <RiLinkedinFill size={24} />
          </a>
          <a
            name="email"
            href="mailto:me@ronaldosuarez.dev"
            className="hover:text-secondary"
            target="_blank"
          >
            <BsMailbox size={24} />
          </a>
          {/* <a
            name="discord"
            href="https://www.discord.com"
            className="bg-primary rounded px-1 ml-1 text-primary-light hover:bg-secondary"
            target="_blank"
          >
            <span className="font-bold tracking-wider">Ro</span>#7940
          </a> */}
          <a
            className="text-2xl italic hover:underline font-medium pb-1 hover:text-secondary hover:decoration-secondary"
            name="Ronaldo Suarez's Resume"
            href="/Ronaldo_Suarez_Resume_v.pdf"
            target="_blank"
          >
            resume
          </a>
        </div>
      </div>
    </>
  );
}
