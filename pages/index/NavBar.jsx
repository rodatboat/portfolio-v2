import React from 'react'
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri/index.js";
import { BsMailbox } from "react-icons/bs/index.js";
import { CgLoadbarDoc } from "react-icons/cg/index.js";

export default function NavBar() {
  return (
    <>
    <div className='h-14'>NavBar</div>
    <div className='fixed bottom-0 end-0 m-6'>
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
  )
}
