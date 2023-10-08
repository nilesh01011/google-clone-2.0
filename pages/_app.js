import Footer from '@/components/Footer';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Google Clone 2.0 Next js 13</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Google clone created by Next js 13" />
        <link rel="icon" href="/google.svg" />
      </Head>
      <Component {...pageProps} />
      {/* Footer */}
      <Footer />
    </>
  );
}
