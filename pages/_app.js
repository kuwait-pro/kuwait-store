import '../styles/globals.css'; // تأكد من وجود هذا الملف أو قم بإنشائه فارغاً
import Layout from '../components/Layout';
import { CartProvider } from '../context/CartContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
