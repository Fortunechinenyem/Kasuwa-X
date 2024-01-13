import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";

import { Metadata } from "next";
import { CartProvider } from "@/app/Components/CartContext";

export const metadata: Metadata | any = {
  title: "Kasuwa-X",
  description: "An E-Commerce Platform",
};

const KasuwaX = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>{metadata?.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content="website" />
      </Head>
      <CartProvider>
        <main>
          <Component {...pageProps} />
        </main>
      </CartProvider>
    </>
  );
};

export default KasuwaX;
