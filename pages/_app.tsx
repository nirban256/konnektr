import type { AppProps } from "next/app";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import { AppContextProvider } from "../context/contextProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Konnektr | Find connections and grow your network easily and
          effectively while you earn crypto alongside it
        </title>
      </Head>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  );
}

export default MyApp;
