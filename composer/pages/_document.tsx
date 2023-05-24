import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import {
  revalidate,
  FlushedChunks,
  flushChunks,
} from "@module-federation/nextjs-mf/utils";


const MyDocument = (props) => {
  const { global }: { global: Global } = props;  

  return (
    <Html>
      <Head>
        <meta name="robots" content="noindex" />

        {/* @ts-ignore */}
        <FlushedChunks chunks={props.chunks} />

        <link rel="shortcut icon" href="" />

        <meta name="description" content="MFE AWS" />
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = async (context) => {
  if (
    process.env.NODE_ENV === "development" &&
    !context.req.url.includes("_next")
  ) {
    const shouldReload = await revalidate();

    if (shouldReload) {
      context.res.writeHead(302, { Location: context.req.url });
      context.res.end();
    }
  } else if (context && context?.res && context?.res?.on) {
    context?.res?.on("finish", () => {
      revalidate();
    });
  }

  const chunks = await flushChunks();
  const initialProps = await Document.getInitialProps(context);
  const global = {}

  return {
    ...initialProps,
    chunks,
    global,
  };
};

export default MyDocument;
