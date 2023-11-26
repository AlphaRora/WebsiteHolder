import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <title>Panaptico</title>
        <meta
          name='description'
          content='Secure Access & Usage Of Your Cloud Workloads & Applications'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/panaptico.png' />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
