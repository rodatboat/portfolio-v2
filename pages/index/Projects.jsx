import React, { useState } from 'react'
import { RiGithubFill } from "react-icons/ri/index.js";

const ProjectLayout1 = () => {
    const [projects, setProjects] = useState([1, 1]);

    return (
        <>
            {projects.map((p, i) =>
                <div key={i} className='flex flex-col md:flex-row gap-4 pt-32'>
                    <div className='basis-2/3'>
                        <h2 className='text-4xl font-bold py-10'>Northstar</h2>
                        <p className='text-xl text-secondary'>My current full-time role, where I lead our design efforts as the Head of Design.
                            I work on our product, am involved in strategic business decisions, and manage an
                            incredible design team of talented folks as we build the future of
                            financial wellness.
                        </p>
                        <div className='flex flex-row items-center pt-10 text-xl gap-4 font-bold'>
                            <a href="#" className='rounded-lg text-white hover:text-black bg-black hover:bg-white transition-all duration-300 p-1'><RiGithubFill size={24} /></a>
                            <a href="#" className='text-white hover:text-primary transition-all duration-300 hover:translate-x-1'>northstarmoney.com →</a>
                        </div>
                    </div>
                    <div className='basis-1/3 p-1'>
                        <a href="#"><img className='h-full w-full object-cover object-left-top rounded-t-lg' src="/lawnagency.png" /></a>
                    </div>
                </div>
            )
            }
        </>
    )
}

const ProjectLayout2 = () => {
    const [projects, setProjects] = useState([1, 1]);

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-6 pt-20'>
                {projects.map((p, i) =>
                    <div key={i} className='flex flex-col'>
                        <div className='basis-1/3 p-1'>
                            <a href="#"><img className='h-full w-full object-cover object-left-top border border-secondary rounded-lg' src="/lawnagency.png" /></a>
                        </div>
                        <div className='basis-2/3'>
                            <h2 className='text-2xl font-bold py-2'>Northstar</h2>
                            <p className='text-sm text-secondary'>My current full-time role, where I lead our design efforts as the Head of Design.
                                I work on our product, am involved in strategic business decisions, and manage an
                                incredible design team of talented folks as we build the future of
                                financial wellness.
                            </p>
                            <div className='flex flex-row items-center pt-3 text-xl gap-4 font-bold'>
                                <a href="#" className='rounded-lg text-white hover:text-black bg-black hover:bg-white transition-all duration-300 p-1'>
                                    <RiGithubFill size={22} />
                                </a>
                                <a href="#" className='text-md text-white hover:text-primary transition-all duration-300 hover:translate-x-1'>northstarmoney.com →</a>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </>
    )
}

const ProjectLayout3 = () => {
    const [projects, setProjects] = useState([1, 1]);

    return (
        <>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-6 pt-20'>
            {projects.map((p, i) =>
                <div key={i} className='flex flex-col md:flex-row gap-4 bg-primary rounded-xl pl-6 pt-6'>
                    <div className='basis-2/3 pb-6'>
                        <h2 className='text-4xl text-black font-bold py-10'>Northstar</h2>
                        <p className='text-xl text-black'>My current full-time role, where I lead our design efforts as the Head of Design.
                            I work on our product, am involved in strategic business decisions, and manage an
                            incredible design team of talented folks as we build the future of
                            financial wellness.
                        </p>
                        <div className='flex flex-row items-center pt-10 text-xl gap-4 font-bold'>
                            <a href="#" className='rounded-lg text-black hover:text-primary bg-primary hover:bg-black transition-all duration-300 p-1'><RiGithubFill size={24} /></a>
                            <a href="#" className='text-black transition-all duration-300 hover:translate-x-1'>northstarmoney.com →</a>
                        </div>
                    </div>
                    <div className='basis-1/3'>
                        <a href="#"><img className='h-full w-full object-cover object-left-top rounded-t-lg' src="/lawnagency.png" /></a>
                    </div>
                </div>
            )
            }
            </div>
        </>
    )
}

export default function Projects() {
    return (
        <>
            <div className='pt-32 pb-9'>
                <h2 className='text-6xl font-bold'>Select Work</h2>
            </div>
            <div className=''>
                <ProjectLayout1 />
                <ProjectLayout2 />
                <ProjectLayout3 />
            </div>
        </>
    )
}
