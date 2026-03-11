import Head from "next/head";
import React from "react";

type Props = {
  description: string;
  title: string;
  path?: string;
  children?: React.ReactNode;
};

function HeadComponent({ description, path, title, children }: Props) {
  return (
    <Head>
      <meta charSet="utf-8b" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content={description} />
      <meta name="robots" content="follow,index,max-snippet:-1,max-video-preview:-1,max-image-preview:large" />
      <title>{title} | Gideon's Portfolio</title>
      {children}
    </Head>
  );
}

export default HeadComponent;
