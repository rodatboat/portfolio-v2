import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='flex flex-row h-16 items-center justify-between'>
                <div className='flex flex-row gap-4'>
                    <a href="#">
                        <p className='text-sm text-secondary hover:-translate-x-1 transition-all duration-300'>LinkedIn</p>
                    </a>
                    <a href="#">
                        <p className='text-sm text-secondary hover:-translate-x-1 transition-all duration-300'>Github</p>
                    </a>
                    <a href="#">
                        <p className='text-sm text-secondary hover:-translate-x-1 transition-all duration-300'>Spotify</p>
                    </a>
                </div>

                <p className='text-sm text-secondary hover:-translate-x-1 transition-all duration-300'>© 2023</p>
            </div>
        </>
    )
}
