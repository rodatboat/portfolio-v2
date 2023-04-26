import React, { useState, useEffect } from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import Contact from "../../../components/Contact";

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
  const { tag, tags, filteredBlogs } = pageProps;
  useEffect(() => {
    console.log(window.location.href)
  }, []);

  return (
    <>
      <NavBar />

      <div className="mt-14 py-16">
        <h2 className="text-4xl md:text-6xl font-bold text-center">Blog</h2>
        <p className="text-xl text-center text-secondary mt-8">
          A deep dive into my mind, experiences, interests, and more.
        </p>

        <div className="block gap-2 text-secondary mt-8">
          <div className="flex flex-row gap-1 max-w-md">
            <a
              name={`All tags`}
              href={`/blog`}
              className={`p-1 px-2 border rounded text-xs ${window.location.href.endsWith("/blog") ? "active-tag" : ""}`}
            >
              {" "}
              All
            </a>
            {tags.map((t) => (
              <a
                name={`${t} tags`}
                href={`/blog/tag/${t}`}
                key={t}
                className="p-1 px-2 border rounded text-xs"
              >
                {t}
              </a>
            ))}
          </div>
          <p>{filteredBlogs.length} posts</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {filteredBlogs.map((b, i) => (
          <BlogItem key={b.slug} {...b} />
        ))}
      </div>

      <Contact />
      <Footer />
    </>
  );
}
