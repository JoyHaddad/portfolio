import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/profile.jpg" type="image/jpg" />
        <title>Joy Haddad</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
