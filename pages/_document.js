import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ar">
      <Head>
        {/* Google Analytics (GA4) - G-RGKTDXQLP8 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RGKTDXQLP8" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RGKTDXQLP8');
            `
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
