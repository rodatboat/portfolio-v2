import React, { useEffect, useState } from 'react'
import { Blurhash } from 'react-blurhash';

export default function LazyImage({ src, blurHash, alt, width, height, className }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setLoaded(true);
        }

        img.src = src;
    }, [src])
    return (
        <>
            <div className={`${loaded ? "hidden" : "inline"} h-full max-w-full`}>
                <Blurhash
                    hash={blurHash}
                    width={width}
                    height={height}
                    punch={1} />
            </div>
            <img
                className={`${loaded ? "inline" : "hidden"} object-cover object-center h-full max-w-full`}
                src={src}
                alt={alt}
                height={`${height}`}
                width={`${width}`}
            />
        </>
    )
};