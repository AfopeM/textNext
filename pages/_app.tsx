import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS Practice</title>
        <meta
          name="description"
          content="Practicing NextJs without experimental app folder"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-row items-center p-8">
        <Component {...pageProps} />
      </div>
    </>
  );
}
