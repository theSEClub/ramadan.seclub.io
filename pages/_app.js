import "@/styles/globals.css";
import React from "react";
import Head from "next/head";
import social from "../assets/social.jpg";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>المساعد الرمضاني</title>
        <meta
          name="twitter:image"
          content={`https://ramadan.seclub.io/${social.jpg}`}
        />
        <meta
          property="og:image"
          content={`https://ramadan.seclub.io/${social.jpg}`}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
