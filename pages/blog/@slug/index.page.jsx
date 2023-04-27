import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";

import { FiClock } from "react-icons/fi/index.js";

export { Page };

// export const documentProps = {
//   // This title and description will override the defaults
//   title: 'About SpaceX',
//   description: 'Our mission is to explore the galaxy.'
// }

function Page(pageProps) {
  const { slug, blog } = pageProps;
  const [blogContent, setBlogContent] = useState("");

  useEffect(() => {
  }, [])

  return (
    <>
      <NavBar />

      <div className="mt-14 pt-16 max-w-xl mx-auto">
        <div className="text-secondary">
          <h1 className="text-5xl font-bold text-white">{blog.title}</h1>
          <p className="text-md border-b border-secondary my-2 pb-2">{blog.desc}</p>
          <p className="flex flex-row items-center gap-1 text-sm"><FiClock size={12} />{blog.date}</p>
            <div className="pt-10 flex flex-col gap-2 [&_code]:text-sm [&_pre]:border-secondary [&_pre]:border [&_pre]:rounded-xl [&_pre]:py-2 [&_pre]:px-3 [&_pre]:my-2 [&_strong]:font-bold text-md [&_h1]:text-4xl [&_h1]:text-white [&_h1]:font-bold [&_h2]:pt-4 [&_h3]:pt-4 [&_h3]:pb-1 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-white [&_h3]:text-3xl [&_h3]:text-white [&_a]:text-white hover:[&_a]:text-primary [&_code]:text-primary text-secondary [&_*]:transition-all [&_*]:duration-300">
              <div dangerouslySetInnerHTML={{__html: blog.content}} />

              <div className="flex flex-row gap-1">
                {blog.tags.map((t) => (
                  <a
                    name={`${t} tags`}
                    href={`/blog/tag/${t}`}
                    key={t}
                    className="p-1 px-2 !text-secondary !border-secondary border rounded text-xs transition-all duration-300 font-bold hover:!text-primary hover:!border-primary"
                  >
                    {t}
                  </a>
                ))}
              </div>
            </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
