import ReactDOM from "react-dom";
import React from "react";
import { hydrateRoot } from 'react-dom/client'
import './index.css'
import { PageLayout } from "./PageLayout";

export { render };

async function render(pageContext) {
  const { Page, pageProps } = pageContext
  hydrateRoot(
    document.getElementById("root"),
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>
  );
}