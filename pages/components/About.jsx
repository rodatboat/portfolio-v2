import React from 'react'

export default function About() {
  return (
      <>
      <div className='pt-24 md:pt-36' id="about">
      <div className='flex flex-col md:flex-row gap-32 md:gap-48'>
      <div className="flex flex-col gap-8 [&_p]:leading-relaxed text-secondary text-xl [&>p>strong]:font-bold [&>p>strong]:text-white">
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
      <div className='rounded-3xl h-full overflow-hidden'>
        <img 
        className='scale-110 object-cover object-top'
        src="/portrait.jpg"
        height="2560"
        width="1920"
        alt={`my portrait`}
        loading="lazy" />
      </div>
      </div>
      </div>
      </>
  )
}
