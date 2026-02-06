import Head from 'next/head';
import Link from 'next/link';

export default function Shipping() {
  return (
    <div className="page-container">
      <Head>
        <title>سياسة الشحن والتوصيل | متجر الكويت</title>
        <meta name="description" content="شحن مجاني لجميع مناطق الكويت. توصيل سريع خلال 1-3 أيام عمل. اطلع على سياسة الشحن والتوصيل الكاملة لمتجر الكويت" />
        <link rel="canonical" href="https://kuwait-store.com/shipping" />
      </Head>

      <div className="content-wrapper" style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#007A3D', textAlign: 'center' }}>سياسة الشحن والتوصيل</h1>
        
        <div style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#333' }}>
          <div style={{ background: '#e8f5e9', padding: '20px', borderRadius: '10px', marginBottom: '30px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', color: '#007A3D', marginBottom: '10px' }}>🚚 شحن مجاني لجميع مناطق الكويت</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '0' }}>توصيل سريع خلال 1-3 أيام عمل</p>
          </div>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              1. مدة التوصيل
            </h2>
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '15px' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#007A3D', marginBottom: '10px' }}>المناطق الرئيسية</h3>
              <ul style={{ marginRight: '20px' }}>
                <li style={{ marginBottom: '8px' }}>العاصمة: 1-2 يوم عمل</li>
                <li style={{ marginBottom: '8px' }}>حولي: 1-2 يوم عمل</li>
                <li style={{ marginBottom: '8px' }}>الفروانية: 1-2 يوم عمل</li>
                <li style={{ marginBottom: '8px' }}>الأحمدي: 2-3 أيام عمل</li>
                <li style={{ marginBottom: '8px' }}>الجهراء: 2-3 أيام عمل</li>
                <li style={{ marginBottom: '8px' }}>مبارك الكبير: 2-3 أيام عمل</li>
              </ul>
            </div>
            <div style={{ background: '#fff3cd', padding: '15px', borderRadius: '8px', border: '1px solid #ffc107' }}>
              <p style={{ marginBottom: '0' }}>
                <strong>⚠️ ملاحظة:</strong> المناطق النائية والبعيدة قد تستغرق وقتاً إضافياً وقد تخضع لرسوم شحن إضافية.
              </p>
            </div>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              2. رسوم الشحن
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginBottom: '15px' }}>
              <div style={{ background: '#e8f5e9', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.3rem', color: '#007A3D', marginBottom: '10px' }}>✅ شحن مجاني</h3>
                <p style={{ marginBottom: '5px' }}>جميع المناطق الرئيسية</p>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>العاصمة، حولي، الفروانية، الأحمدي، الجهراء، مبارك الكبير</p>
              </div>
              <div style={{ background: '#fff3cd', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.3rem', color: '#ff9800', marginBottom: '10px' }}>💰 رسوم إضافية</h3>
                <p style={{ marginBottom: '5px' }}>المناطق النائية والبعيدة</p>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>يتم تحديد الرسوم حسب الموقع</p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              3. طريقة الشحن
            </h2>
            <p style={{ marginBottom: '15px' }}>
              نعمل مع أفضل شركات الشحن في الكويت لضمان وصول طلبك بأمان وفي الوقت المحدد. يتم تعبئة جميع المنتجات بعناية فائقة لحمايتها أثناء النقل.
            </p>
            <ul style={{ marginRight: '20px', marginBottom: '15px' }}>
              <li style={{ marginBottom: '8px' }}>تغليف آمن ومحكم لجميع المنتجات</li>
              <li style={{ marginBottom: '8px' }}>تتبع الشحنة عبر واتساب</li>
              <li style={{ marginBottom: '8px' }}>التواصل المباشر مع مندوب التوصيل</li>
              <li style={{ marginBottom: '8px' }}>التوصيل حتى باب المنزل</li>
            </ul>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              4. معالجة الطلب
            </h2>
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
              <ol style={{ marginRight: '20px' }}>
                <li style={{ marginBottom: '12px' }}>
                  <strong>تأكيد الطلب:</strong> سيتم التواصل معك عبر واتساب لتأكيد الطلب وتفاصيل التوصيل
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>تجهيز الطلب:</strong> يتم تجهيز وتعبئة طلبك خلال 24 ساعة من التأكيد
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>الشحن:</strong> يتم شحن الطلب عبر شركة الشحن المعتمدة
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>التوصيل:</strong> سيتصل بك مندوب التوصيل قبل الوصول
                </li>
              </ol>
            </div>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              5. أيام العمل
            </h2>
            <p style={{ marginBottom: '15px' }}>
              نعمل من السبت إلى الخميس. الطلبات المستلمة يوم الجمعة أو العطلات الرسمية سيتم معالجتها في يوم العمل التالي.
            </p>
            <div style={{ background: '#e3f2fd', padding: '15px', borderRadius: '8px' }}>
              <p style={{ marginBottom: '5px' }}><strong>ساعات العمل:</strong></p>
              <p style={{ marginBottom: '0' }}>السبت - الخميس: 9:00 صباحاً - 6:00 مساءً</p>
            </div>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              6. التأخير في التوصيل
            </h2>
            <p style={{ marginBottom: '15px' }}>
              في حالات نادرة، قد يحدث تأخير في التوصيل بسبب ظروف خارجة عن إرادتنا مثل:
            </p>
            <ul style={{ marginRight: '20px', marginBottom: '15px' }}>
              <li style={{ marginBottom: '8px' }}>الأحوال الجوية السيئة</li>
              <li style={{ marginBottom: '8px' }}>الأعياد والعطلات الرسمية</li>
              <li style={{ marginBottom: '8px' }}>ظروف طارئة</li>
            </ul>
            <p>سنقوم بإبلاغك فوراً في حالة حدوث أي تأخير.</p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              7. الفحص عند الاستلام
            </h2>
            <p style={{ marginBottom: '15px' }}>
              ننصحك بفحص المنتج عند الاستلام للتأكد من:
            </p>
            <ul style={{ marginRight: '20px', marginBottom: '15px' }}>
              <li style={{ marginBottom: '8px' }}>سلامة التغليف الخارجي</li>
              <li style={{ marginBottom: '8px' }}>مطابقة المنتج للطلب</li>
              <li style={{ marginBottom: '8px' }}>عدم وجود أضرار ظاهرة</li>
            </ul>
            <div style={{ background: '#ffebee', padding: '15px', borderRadius: '8px', border: '1px solid #f44336' }}>
              <p style={{ marginBottom: '0' }}>
                <strong>⚠️ مهم:</strong> في حالة وجود أي مشكلة، يرجى عدم استلام الطلب والتواصل معنا فوراً عبر واتساب.
              </p>
            </div>
          </section>

          <section style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000' }}>تواصل معنا</h2>
            <p style={{ marginBottom: '15px' }}>
              لأي استفسارات بخصوص الشحن والتوصيل، تواصل معنا:
            </p>
            <a 
              href="https://wa.me/201110760081" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-block',
                padding: '12px 30px', 
                background: '#25D366', 
                color: 'white', 
                textDecoration: 'none', 
                borderRadius: '8px', 
                fontSize: '1.1rem',
                fontWeight: 'bold'
              }}
            >
              تواصل عبر واتساب
            </a>
          </section>

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <Link href="/" style={{ color: '#007A3D', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold' }}>
              ← العودة للصفحة الرئيسية
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
