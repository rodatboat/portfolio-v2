export { onBeforeRender };
import { blogs } from "../../../../config/config.json";

async function onBeforeRender(pageContext) {
  const { tag } = pageContext.routeParams;

  let tags = [];
  blogs.map((b) => {
    b.tags.map((t) => {
      return !tags.includes(t) ? tags.push(t) : null;
    });
  });

  const filteredBlogs = blogs.filter((b)=>b.tags.includes(tag));

  const pageProps = {
    tags,
    tag,
    filteredBlogs
  };
  return {
    pageContext: {
      pageProps,
    },
  };
}
