import React from "react";
import { RiArticleLine } from "react-icons/ri/index.js";

export default function Profile() {
  return (
    <div className="mt-12" id="profile">
      {/* <img src="me.jpg" className="w-60 rounded-2xl grayscale" loading="lazy" title="me" alt="portrait of Ronaldo" /> */}
      {/* <h2 className="text-3xl italic underline font-medium mb-8">about me</h2> */}
      <div className="flex flex-col space-y-4 text-primary text-md">
        <p>
          As a <strong>full-stack developer</strong> with over{" "}
          <strong>5+ years of experience</strong>, I've had the privilege of
          exploring various realms of the development universe, from front-end
          to back-end, product design, and project management. Always adapting
          to my surroundings!
        </p>

        <p>
          With a deep understanding of full-stack development, I'm comfortable
          diving into the front-end world, crafting{" "}
          <strong>immersive user experiences</strong>, as I am delving into the
          back-end realm, architecting{" "}
          <strong>robust and scalable solutions</strong> to tackle any problem.
          I thrive on the challenge of finding solutions that drive business
          success.
        </p>

        <p>
          As much as I love my technical prowess, I'm also a team player with{" "}
          <strong>killer communication skills</strong>. I thrive in
          collaborative environments, where I can bring my{" "}
          <strong>unique perspective</strong> and work seamlessly with teams to
          make some magic happen.
        </p>
      </div>
    </div>
  );
}
