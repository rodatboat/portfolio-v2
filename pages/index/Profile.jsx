import React from "react";

export default function Profile() {
  return (
    <div className="mt-32" id="profile">
      {/* <img src="me.jpg" className="w-60 rounded-2xl grayscale" loading="lazy" title="me" alt="portrait of Ronaldo" /> */}
      <div className="flex flex-col space-y-4 text-primary text-lg italic">
        <p>
          As a full-stack developer with over 5+ years of experience, I've had
          the privilege of exploring various realms of the development universe,
          from front-end to back-end, product design, and project management.
          Always adapting to my surroundings!
        </p>
        <p>
          With a deep understanding of full-stack development, I'm comfortable
          diving into the front-end world, crafting immersive user experiences,
          as I am delving into the back-end realm, architecting robust and
          scalable solutions to tackle any problem. I thrive on the challenge of
          finding solutions that drive business success.{" "}
        </p>
        <p>
          As much as I love my technical prowess, I'm also a team player with
          killer communication skills. I thrive in collaborative environments,
          where I can bring my unique perspective and work seamlessly with teams
          to make some magic happen.
        </p>
      </div>
    </div>
  );
}
