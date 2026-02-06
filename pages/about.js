import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div className="page-container">
      <Head>
        <title>من نحن | متجر الكويت</title>
        <meta name="description" content="متجر الكويت - متجر إلكتروني كويتي رائد. الإدارة في مصر والشحن من داخل الكويت" />
        <link rel="canonical" href="https://kuwait-store.com/about" />
      </Head>

      <div className="content-wrapper" style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#007A3D', textAlign: 'center' }}>من نحن</h1>
        
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#333' }}>
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              متجر الكويت - وجهتك الأولى للتسوق الإلكتروني
            </h2>
            <p style={{ marginBottom: '15px' }}>
              نحن متجر إلكتروني كويتي رائد متخصص في توفير أفضل المنتجات المنزلية والإلكترونيات ومنتجات العناية الشخصية بأسعار تنافسية وجودة عالية.
            </p>
          </section>

          <section style={{ marginBottom: '40px', background: '#f8f9fa', padding: '30px', borderRadius: '10px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#000' }}>معلومات الشركة</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div style={{ padding: '15px', background: 'white', borderRadius: '8px' }}>
                <h3 style={{ color: '#007A3D', marginBottom: '10px', fontSize: '1.2rem' }}>🏢 الإدارة</h3>
                <p>مصر - الجيزة<br/>السادس من أكتوبر</p>
              </div>
              <div style={{ padding: '15px', background: 'white', borderRadius: '8px' }}>
                <h3 style={{ color: '#007A3D', marginBottom: '10px', fontSize: '1.2rem' }}>🚚 الشحن</h3>
                <p>يتم الشحن من داخل<br/>دولة الكويت</p>
              </div>
              <div style={{ padding: '15px', background: 'white', borderRadius: '8px' }}>
                <h3 style={{ color: '#007A3D', marginBottom: '10px', fontSize: '1.2rem' }}>📞 التواصل</h3>
                <p>جوال: +201110760081<br/>إيميل: sherow1982@gmail.com</p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '40px', background: '#007A3D', color: 'white', padding: '30px', borderRadius: '10px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'white' }}>التزامنا تجاهك</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              نلتزم بتقديم أفضل تجربة تسوق إلكترونية في الكويت. رضاك هو هدفنا الأول.
            </p>
          </section>

          <section style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#000' }}>تواصل معنا</h2>
            <p style={{ marginBottom: '10px' }}>📞 جوال: +201110760081</p>
            <p style={{ marginBottom: '10px' }}>📧 إيميل: sherow1982@gmail.com</p>
            <p style={{ marginBottom: '20px' }}>🏢 الإدارة: مصر - الجيزة - السادس من أكتوبر</p>
            <a 
              href="https://wa.me/201110760081" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-block',
                padding: '15px 40px', 
                background: '#25D366', 
                color: 'white', 
                textDecoration: 'none', 
                borderRadius: '8px', 
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }}
            >
              تواصل عبر واتساب
            </a>
          </section>

          <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px', background: '#f8f9fa', borderRadius: '10px' }}>
            <Link href="/" style={{ color: '#007A3D', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold' }}>
              ← العودة للصفحة الرئيسية
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
