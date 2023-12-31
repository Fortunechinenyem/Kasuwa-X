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

const KasuwaX = ({ Component, ...appProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
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

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Gordita:wght@400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>{metadata?.title}</title>
        <meta name="description" content={metadata?.description} />
        <meta property="og:type" content="website" />
      </Head>
      <CartProvider>
        <main>
          <Component {...appProps} />
        </main>
      </CartProvider>
    </>
  );
};

export default KasuwaX;
