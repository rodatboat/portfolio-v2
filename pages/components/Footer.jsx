import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='flex flex-row h-16 items-center justify-between'>
                <div className='flex flex-row gap-4'>
                <a 
                    name="LinkedIn"
                    href="https://www.linkedin.com/in/ronaldo-suarez/"
                    className="text-sm text-secondary hover:text-white  transition-all duration-300"
                    target="_blank">
                        LinkedIn
                    </a>
                    <a 
                    name="Github"
                    href="https://github.com/rodatboat"
                    className="text-sm text-secondary hover:text-white  transition-all duration-300"
                    target="_blank">
                        GitHub
                    </a>
                    <a 
                    name="Spotify"
                    href="https://open.spotify.com/user/ronaldo305"
                    className="text-sm text-secondary hover:text-white  transition-all duration-300"
                    target="_blank">
                        Spotify
                    </a>
                </div>

                <p className='text-sm text-secondary'>© 2023</p>
            </div>
        </>
    )
}
