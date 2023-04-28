import React from 'react'
import { blogs } from "../../config/config.json";

import { FiClock } from "react-icons/fi/index.js";

const BlogItem = (blogInfo) => {
  return (
    <>
      <a
        className="flex flex-col hover:text-primary [&_h2]:hover:decoration-dotted transition-all duration-300"
        href={`/blog/${blogInfo.slug}`}
      >
        <h2 className="text-xl md:text-2xl underline">
          {blogInfo.title}
        </h2>
        <p className="text-md my-2 !text-secondary">{blogInfo.desc}</p>
        <p className="flex flex-row items-center gap-1 text-sm !text-secondary">
          <FiClock size={12} />
          {blogInfo.date}
          {/* Insert view count here */}
        </p>


      </a>
    </>
  );
};

export default function FeaturedPosts() {
  return (
    <>
      <div className='pt-32 pb-6 md:pb-9' id="featured">
        <h2 className='text-4xl md:text-6xl font-bold'>Featured Posts</h2>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogs.map((b, i) => (
            <BlogItem key={b.slug} {...b} />
          ))}
        </div>
      </div>
    </>
  )
}
