import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div className="page-container">
      <Head>
        <title>من نحن | متجر الكويت - متجرك الإلكتروني الموثوق</title>
        <meta name="description" content="متجر الكويت هو متجر إلكتروني كويتي رائد يوفر أكثر من 2000 منتج منزلي وإلكتروني بأسعار تنافسية. نفخر بخدمة عملائنا منذ سنوات بجودة عالية وتوصيل سريع." />
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
              نحن متجر إلكتروني كويتي رائد متخصص في توفير أفضل المنتجات المنزلية والإلكترونيات ومنتجات العناية الشخصية بأسعار تنافسية وجودة عالية. نفخر بخدمة عملائنا في جميع أنحاء دولة الكويت بكل احترافية وتميز.
            </p>
          </section>

          <section style={{ marginBottom: '40px', background: '#f8f9fa', padding: '30px', borderRadius: '10px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#000' }}>رؤيتنا</h2>
            <p>
              أن نكون المتجر الإلكتروني الأول والأكثر ثقة في الكويت، نوفر لعملائنا تجربة تسوق استثنائية تجمع بين الجودة والسعر المناسب والخدمة المتميزة.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              لماذا تختار متجر الكويت؟
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div style={{ padding: '20px', background: '#fff', border: '2px solid #007A3D', borderRadius: '8px' }}>
                <h3 style={{ color: '#007A3D', marginBottom: '10px' }}>🛍️ تشكيلة واسعة</h3>
                <p>أكثر من 2000 منتج متنوع يلبي جميع احتياجاتك المنزلية والشخصية</p>
              </div>
              <div style={{ padding: '20px', background: '#fff', border: '2px solid #007A3D', borderRadius: '8px' }}>
                <h3 style={{ color: '#007A3D', marginBottom: '10px' }}>💰 أسعار تنافسية</h3>
                <p>نقدم أفضل الأسعار مع عروض وخصومات مستمرة على منتجاتنا</p>
              </div>
              <div style={{ padding: '20px', background: '#fff', border: '2px solid #007A3D', borderRadius: '8px' }}>
                <h3 style={{ color: '#007A3D', marginBottom: '10px' }}>🚚 توصيل سريع</h3>
                <p>شحن مجاني وتوصيل سريع خلال 1-3 أيام عمل لجميع مناطق الكويت</p>
              </div>
              <div style={{ padding: '20px', background: '#fff', border: '2px solid #007A3D', borderRadius: '8px' }}>
                <h3 style={{ color: '#007A3D', marginBottom: '10px' }}>✅ جودة مضمونة</h3>
                <p>جميع منتجاتنا أصلية ومضمونة بأعلى معايير الجودة</p>
              </div>
              <div style={{ padding: '20px', background: '#fff', border: '2px solid #007A3D', borderRadius: '8px' }}>
                <h3 style={{ color: '#007A3D', marginBottom: '10px' }}>🔄 استرجاع مجاني</h3>
                <p>سياسة استرجاع مرنة خلال 14 يوم من تاريخ الاستلام</p>
              </div>
              <div style={{ padding: '20px', background: '#fff', border: '2px solid #007A3D', borderRadius: '8px' }}>
                <h3 style={{ color: '#007A3D', marginBottom: '10px' }}>💬 دعم متميز</h3>
                <p>فريق خدمة عملاء محترف جاهز لمساعدتك عبر واتساب</p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              منتجاتنا
            </h2>
            <p style={{ marginBottom: '15px' }}>نوفر تشكيلة متنوعة من المنتجات تشمل:</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>🏠 <strong>أدوات منزلية:</strong> أجهزة مطبخ، أدوات تنظيف، ديكورات منزلية</li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>💄 <strong>عناية شخصية:</strong> منتجات تجميل، عناية بالشعر، عناية بالبشرة</li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>📱 <strong>إلكترونيات:</strong> إكسسوارات هواتف، أجهزة ذكية، شواحن</li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>👗 <strong>أزياء وإكسسوارات:</strong> ملابس، حقائب، إكسسوارات نسائية</li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>🎁 <strong>هدايا ومناسبات:</strong> هدايا مميزة لجميع المناسبات</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px', background: '#007A3D', color: 'white', padding: '30px', borderRadius: '10px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'white' }}>التزامنا تجاهك</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              نلتزم بتقديم أفضل تجربة تسوق إلكترونية في الكويت. رضاك هو هدفنا الأول، ونعمل باستمرار على تحسين خدماتنا وتوسيع تشكيلة منتجاتنا لنلبي جميع احتياجاتك.
            </p>
          </section>

          <section style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#000' }}>تواصل معنا</h2>
            <p style={{ marginBottom: '20px' }}>نحن هنا لخدمتك! تواصل معنا عبر واتساب للاستفسارات والطلبات</p>
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
