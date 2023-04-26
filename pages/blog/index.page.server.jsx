export { onBeforeRender };

import { blogs } from "../../config/config.json";

async function onBeforeRender(pageContext) {
  // `.page.server.js` files always run in Node.js; we could use SQL/ORM queries here.
  //   const response = await fetch('https://movies.example.org/api')
  //   let movies = await response.json()

  // `movies` will be serialized and passed to the browser; we select only the data we
  // need in order to minimize what is sent to the browser.
  //   movies = movies.map(({ title, release_date }) => ({title, release_date}))

  // We make `movies` available as `pageContext.pageProps.movies`
  let tags = []
  blogs.map((b)=>{
    b.tags.map((t)=>{
      // tags.push(t);
      return !tags.includes(t) ? tags.push(t) : null;
    })
  })

  const pageProps = 
  {
    blogs,
    tags
  };
  return {
    pageContext: {
      pageProps,
    },
  };
}
