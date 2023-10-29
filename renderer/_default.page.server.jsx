import ReactDOMServer from "react-dom/server";
import React from "react";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import "./index.css";
import { PageLayout } from "./PageLayout";

export const passToClient = ["pageProps", "urlPathname", "redirectTo", "errorInfo"];
export { render };

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const viewHtml = ReactDOMServer.renderToString(
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>
  );

  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || "Ronaldo Suarez";
  const desc =
    (documentProps && documentProps.description) ||
    "Software Engineer at JPMorgan Chase & Co. I craft engaging user experiences designed to help people meaningfully engage with data.";

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en-US">
      <head>
      <meta charset="utf-8">
      <title>${title}</title>
      
      <meta name="description" content="${desc}" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Ronaldo Suarez" />
      <meta property="og:url" content="https://ronaldosuarez.dev" />
      <meta property="og:site_name" content="Ronaldo Suarez" />
      <meta property="og:image" content="https://ronaldosuarez.dev/me.jpg" />
      <meta property="og:image:width" content="465" />
      <meta property="og:image:height" content="367" />
      <meta property="og:type" content="image/jpg" />
      <meta rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png">
      <link rel="android-chrome" sizes="96x96" href="/android-chrome-192x192.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
      <link rel="manifest" href="/site.webmanifest">

      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(viewHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
    },
  };
}
