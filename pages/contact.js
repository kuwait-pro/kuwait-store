import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="page-container">
      <Head>
        <title>اتصل بنا | متجر الكويت</title>
        <meta name="description" content="تواصل مع متجر الكويت عبر الواتساب أو الجوال أو البريد الإلكتروني. نحن هنا لخدمتك" />
        <link rel="canonical" href="https://kuwait-store.com/contact" />
      </Head>

      <div className="content-wrapper" style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#007A3D', textAlign: 'center' }}>اتصل بنا</h1>
        
        <div style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#333' }}>
          <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.2rem', color: '#666' }}>
            نحن هنا لخدمتك! تواصل معنا عبر أي من الطرق التالية
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginBottom: '40px' }}>
            <a 
              href="https://wa.me/201110760081" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                background: '#25D366', 
                color: 'white', 
                padding: '30px', 
                borderRadius: '15px', 
                textAlign: 'center',
                textDecoration: 'none',
                transition: '0.3s',
                boxShadow: '0 4px 15px rgba(37,211,102,0.3)'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📱</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>واتساب</h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '5px' }}>+201110760081</p>
              <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>تواصل فوري عبر واتساب</p>
            </a>

            <a 
              href="tel:+201110760081"
              style={{ 
                background: '#007A3D', 
                color: 'white', 
                padding: '30px', 
                borderRadius: '15px', 
                textAlign: 'center',
                textDecoration: 'none',
                transition: '0.3s',
                boxShadow: '0 4px 15px rgba(0,122,61,0.3)'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📞</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>جوال</h3>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '5px' }}>+201110760081</p>
              <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>اتصل بنا مباشرة</p>
            </a>

            <a 
              href="mailto:sherow1982@gmail.com"
              style={{ 
                background: '#CE1126', 
                color: 'white', 
                padding: '30px', 
                borderRadius: '15px', 
                textAlign: 'center',
                textDecoration: 'none',
                transition: '0.3s',
                boxShadow: '0 4px 15px rgba(206,17,38,0.3)'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📧</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>البريد الإلكتروني</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '5px', wordBreak: 'break-all' }}>sherow1982@gmail.com</p>
              <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>راسلنا عبر الإيميل</p>
            </a>
          </div>

          <section style={{ background: '#f8f9fa', padding: '30px', borderRadius: '15px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#007A3D', textAlign: 'center' }}>معلومات الشركة</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px' }}>
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🏢</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#000' }}>الإدارة</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  مصر - الجيزة<br/>
                  السادس من أكتوبر
                </p>
              </div>

              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🚚</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#000' }}>الشحن</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  يتم الشحن من داخل<br/>
                  دولة الكويت
                </p>
              </div>

              <div style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>⏰</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#000' }}>ساعات العمل</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  السبت - الخميس<br/>
                  9:00 ص - 6:00 م
                </p>
              </div>
            </div>
          </section>

          <section style={{ background: 'linear-gradient(135deg, #007A3D 0%, #005f2e 100%)', color: 'white', padding: '40px', borderRadius: '15px', textAlign: 'center', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '15px', color: 'white' }}>نحن في خدمتك دائماً</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '25px', lineHeight: '1.8' }}>
              فريقنا جاهز للرد على استفساراتك ومساعدتك في اختيار المنتجات المناسبة
            </p>
            <a 
              href="https://wa.me/201110760081?text=مرحباً، لدي استفسار" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-block',
                padding: '15px 40px', 
                background: 'white', 
                color: '#007A3D', 
                textDecoration: 'none', 
                borderRadius: '30px', 
                fontSize: '1.2rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
            >
              تواصل معنا الآن
            </a>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#000', textAlign: 'center' }}>الأسئلة الشائعة</h2>
            
            <div style={{ background: 'white', border: '1px solid #e1e1e1', borderRadius: '10px', overflow: 'hidden' }}>
              <details style={{ borderBottom: '1px solid #e1e1e1', padding: '20px' }}>
                <summary style={{ fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', color: '#007A3D' }}>
                  كيف يمكنني تتبع طلبي؟
                </summary>
                <p style={{ marginTop: '15px', color: '#666', lineHeight: '1.6' }}>
                  سيتم التواصل معك عبر واتساب لتزويدك بتفاصيل الشحن ورقم التتبع فور شحن طلبك.
                </p>
              </details>

              <details style={{ borderBottom: '1px solid #e1e1e1', padding: '20px' }}>
                <summary style={{ fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', color: '#007A3D' }}>
                  ما هي طرق الدفع المتاحة؟
                </summary>
                <p style={{ marginTop: '15px', color: '#666', lineHeight: '1.6' }}>
                  نقبل الدفع عند الاستلام والتحويل البنكي. تواصل معنا عبر واتساب لمعرفة التفاصيل.
                </p>
              </details>

              <details style={{ borderBottom: '1px solid #e1e1e1', padding: '20px' }}>
                <summary style={{ fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', color: '#007A3D' }}>
                  هل الشحن مجاني؟
                </summary>
                <p style={{ marginTop: '15px', color: '#666', lineHeight: '1.6' }}>
                  نعم، الشحن مجاني لجميع مناطق الكويت الرئيسية. المناطق النائية قد تخضع لرسوم إضافية.
                </p>
              </details>

              <details style={{ padding: '20px' }}>
                <summary style={{ fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', color: '#007A3D' }}>
                  كم تستغرق مدة التوصيل؟
                </summary>
                <p style={{ marginTop: '15px', color: '#666', lineHeight: '1.6' }}>
                  التوصيل يستغرق من 1 إلى 3 أيام عمل حسب منطقتك.
                </p>
              </details>
            </div>
          </section>

          <div style={{ textAlign: 'center', marginTop: '40px', padding: '20px', background: '#f8f9fa', borderRadius: '10px' }}>
            <Link href="/" style={{ color: '#007A3D', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold' }}>
              ← العودة للصفحة الرئيسية
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
