export { onBeforeRender };


import { RenderErrorPage } from 'vike/RenderErrorPage'
import { blogs } from "../../../config/config.json";
import { marked } from "marked";

async function onBeforeRender(pageContext) {
  const { slug } = pageContext.routeParams;

  let filteredBlogs = blogs.filter((b) => b.slug === slug);
  const blog = filteredBlogs.length > 0 ? filteredBlogs[0] : null;

  if (blog === null) {
    throw RenderErrorPage({
      pageContext: {
        pageProps:{
          errorInfo: `Blog with slug '${slug}' doesn't exist`,
        },
        redirectTo: '/blog'
      }
    })
  }

  const blogData = atob(blog.content);
  const parsedMarkdown = marked.parse(blogData);
  
  const pageProps = {
    slug,
    blog:{
      ...blog,
      content:parsedMarkdown
    }
  };
  return {
    pageContext: {
      pageProps,
    },
  };
}
