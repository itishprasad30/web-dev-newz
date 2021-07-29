import React from "react";
import Head from "next/dist/next-server/lib/head";

const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Web-Dev-News ",
  keywords: "Web development & programming",
  description: "Get the latest newz here about web dev",
};
export default Meta;
