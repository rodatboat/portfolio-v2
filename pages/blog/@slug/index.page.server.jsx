export { onBeforeRender };


import { RenderErrorPage } from 'vite-plugin-ssr/RenderErrorPage'
import { blogs } from "../../../config/config.json";

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

  // `.page.server.js` files always run in Node.js; we could use SQL/ORM queries here.
  //   const response = await fetch('https://movies.example.org/api')
  //   let movies = await response.json()

  // `movies` will be serialized and passed to the browser; we select only the data we
  // need in order to minimize what is sent to the browser.
  //   movies = movies.map(({ title, release_date }) => ({title, release_date}))

  // We make `movies` available as `pageContext.pageProps.movies`
  const pageProps = {
    slug,
    blog,
  };
  return {
    pageContext: {
      pageProps,
    },
  };
}
