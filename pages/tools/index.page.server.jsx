export { onBeforeRender };

import { tools } from "../../config/config.json";

async function onBeforeRender(pageContext) {

  const pageProps = 
  {
    tools
  };
  return {
    pageContext: {
      pageProps,
    },
  };
}
