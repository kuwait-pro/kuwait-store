// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ar">
      <Head>
    
        {/* ارمي كود GA4 و GTM (جزء الـ Head) هنا زي ما هو كوبي بيست */}
    
        {<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-7Z3PNJVMGV"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7Z3PNJVMGV');
</script>}
  
    </Head>
      <body>
        {/* ارمي كود GTM (جزء الـ Body - noscript) هنا */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
