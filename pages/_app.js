import '../styles/globals.css';
import Layout from '../components/Layout';
import { CartProvider } from '../context/CartContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#007A3D" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="language" content="Arabic" />
        <meta name="geo.region" content="KW" />
        <meta name="geo.placename" content="Kuwait" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" hrefLang="ar" href="https://kuwait-pro.github.io/kuwait-store/" />
        <title>متجر الكويت</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
