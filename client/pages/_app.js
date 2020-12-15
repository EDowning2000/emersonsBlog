import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Emerson's Blog</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/x.y.z/css/bulma.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
