import React from 'react'

export default function Landing() {
    return (
        <div className='pt-16 mt-14'>
            <div>
                <h2 className='text-secondary text-2xl'>Software Engineer at{" "}
                    <a
                        name="JPMorganChaseCo"
                        className="text-white hover:text-primary transition-all duration-300 font-bold"
                        href="https://www.jpmorganchase.com"
                        target="_blank"
                    >
                        JPMorgan Chase & Co.
                    </a>
                </h2>
                <h1 className='text-7xl font-bold leading-tight'>
                    I'm Ronaldo Suarez — a full-stack developer crafting engaging user experiences.
                </h1>
            </div>
            <div></div>
        </div>
    )
}
