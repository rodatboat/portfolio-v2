import React, { useEffect, useState } from "react";
import { projects } from "../../config/config.json";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import "./index.css";
export { Page };

// export const documentProps = {
//   // This title and description will override the defaults
//   title: 'About SpaceX',
//   description: 'Our mission is to explore the galaxy.'
// }

const BlogItem = (blogInfo) => {
  return (
    <>
      <div>{blogInfo.title}</div>
    </>
  );
};

function Page(pageProps) {
  const { blogs, tags } = pageProps;

  useEffect(() => {
  }, []);

  return (
    <>
      <NavBar />

      <div className="mt-14 pt-16">
        <h2 className="text-4xl md:text-6xl font-bold text-center">Blog</h2>
        <p className="text-xl text-center text-secondary mt-8">
          A deep dive into my mind, experiences, interests, and more.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="flex flex-col gap-2 text-secondary pt-4 pb-8">
          <div className="flex flex-row gap-1">
            <a
              name={`All tags`}
              href={`/blog`}
              className={`p-1 px-2 border rounded text-xs transition-all duration-300 font-bold active-tag hover:text-primary hover:border-primary`}
            >
              {" "}
              All
            </a>
            {tags.map((t) => (
              <a
                name={`${t} tags`}
                href={`/blog/tag/${t}`}
                key={t}
                className="p-1 px-2 border rounded text-xs transition-all duration-300 font-bold hover:text-primary hover:border-primary"
              >
                {t}
              </a>
            ))}
          </div>
          <p>{blogs.length} posts</p>
        </div>

        <div className="flex flex-col gap-4">
          {blogs.map((b, i) => (
            <BlogItem key={b.slug} {...b} />
          ))}
        </div>
      </div>

      <Contact />
      <Footer />
    </>
  );
}
