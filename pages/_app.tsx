import { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";
import React from "react";
import { Metadata } from "next";
import { CartProvider } from "@/app/Components/CartContext";

export const metadata: Metadata | any = {
  title: "Kasuwa",
  description: "An E-Commerce Platform",
};

const KasuwaX = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
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
