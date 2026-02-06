import Head from 'next/head';
import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="page-container">
      <Head>
        <title>سياسة الخصوصية | متجر الكويت</title>
        <meta name="description" content="سياسة الخصوصية لمتجر الكويت - نحن نحترم خصوصيتك ونحمي بياناتك الشخصية وفقاً لقوانين دولة الكويت" />
        <link rel="canonical" href="https://kuwait-store.com/privacy" />
      </Head>

      <div className="content-wrapper" style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#007A3D', textAlign: 'center' }}>سياسة الخصوصية</h1>
        
        <div style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#333' }}>
          <p style={{ marginBottom: '20px', textAlign: 'center', color: '#666' }}>
            آخر تحديث: {new Date().toLocaleDateString('ar-KW')}
          </p>

          <section style={{ marginBottom: '30px' }}>
            <p style={{ marginBottom: '15px' }}>
              في متجر الكويت، نحن ملتزمون بحماية خصوصيتك وأمان معلوماتك الشخصية. توضح هذه السياسة كيفية جمعنا واستخدامنا وحماية بياناتك الشخصية وفقاً لقوانين دولة الكويت.
            </p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              1. المعلومات التي نجمعها
            </h2>
            <p style={{ marginBottom: '10px' }}>نقوم بجمع المعلومات التالية:</p>
            <ul style={{ marginRight: '20px', marginBottom: '15px' }}>
              <li style={{ marginBottom: '8px' }}><strong>معلومات الاتصال:</strong> الاسم، رقم الهاتف، العنوان</li>
              <li style={{ marginBottom: '8px' }}><strong>معلومات الطلب:</strong> تفاصيل المنتجات المطلوبة، تاريخ الطلب</li>
              <li style={{ marginBottom: '8px' }}><strong>معلومات التصفح:</strong> عنوان IP، نوع المتصفح، صفحات الزيارة</li>
            </ul>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              2. كيفية استخدام المعلومات
            </h2>
            <p style={{ marginBottom: '10px' }}>نستخدم معلوماتك للأغراض التالية:</p>
            <ul style={{ marginRight: '20px', marginBottom: '15px' }}>
              <li style={{ marginBottom: '8px' }}>معالجة وتنفيذ طلباتك</li>
              <li style={{ marginBottom: '8px' }}>التواصل معك بخصوص طلباتك</li>
              <li style={{ marginBottom: '8px' }}>تحسين خدماتنا ومنتجاتنا</li>
              <li style={{ marginBottom: '8px' }}>إرسال عروض وتحديثات (بموافقتك)</li>
              <li style={{ marginBottom: '8px' }}>الامتثال للمتطلبات القانونية</li>
            </ul>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              3. حماية المعلومات
            </h2>
            <p style={{ marginBottom: '15px' }}>
              نتخذ إجراءات أمنية صارمة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو الاستخدام غير القانوني. نستخدم تقنيات التشفير والحماية المتقدمة لضمان أمان بياناتك.
            </p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              4. مشاركة المعلومات
            </h2>
            <p style={{ marginBottom: '10px' }}>لا نقوم ببيع أو تأجير معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك فقط في الحالات التالية:</p>
            <ul style={{ marginRight: '20px', marginBottom: '15px' }}>
              <li style={{ marginBottom: '8px' }}>مع شركات الشحن لتوصيل طلباتك</li>
              <li style={{ marginBottom: '8px' }}>عند الطلب من الجهات الحكومية المختصة</li>
              <li style={{ marginBottom: '8px' }}>لحماية حقوقنا القانونية</li>
            </ul>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              5. ملفات تعريف الارتباط (Cookies)
            </h2>
            <p style={{ marginBottom: '15px' }}>
              نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح وتذكر تفضيلاتك. يمكنك تعطيل ملفات تعريف الارتباط من إعدادات متصفحك، لكن قد يؤثر ذلك على بعض وظائف الموقع.
            </p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              6. حقوقك
            </h2>
            <p style={{ marginBottom: '10px' }}>لديك الحق في:</p>
            <ul style={{ marginRight: '20px', marginBottom: '15px' }}>
              <li style={{ marginBottom: '8px' }}>الوصول إلى معلوماتك الشخصية</li>
              <li style={{ marginBottom: '8px' }}>تصحيح أو تحديث معلوماتك</li>
              <li style={{ marginBottom: '8px' }}>طلب حذف معلوماتك</li>
              <li style={{ marginBottom: '8px' }}>الاعتراض على معالجة بياناتك</li>
              <li style={{ marginBottom: '8px' }}>سحب موافقتك في أي وقت</li>
            </ul>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              7. الاحتفاظ بالبيانات
            </h2>
            <p style={{ marginBottom: '15px' }}>
              نحتفظ بمعلوماتك الشخصية طالما كان ذلك ضرورياً لتقديم خدماتنا أو للامتثال للمتطلبات القانونية. بعد ذلك، سيتم حذف أو إخفاء هوية بياناتك بشكل آمن.
            </p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              8. خصوصية الأطفال
            </h2>
            <p style={{ marginBottom: '15px' }}>
              خدماتنا غير موجهة للأطفال دون سن 18 عاماً. لا نجمع عن قصد معلومات شخصية من الأطفال. إذا علمنا أننا جمعنا معلومات من طفل، سنقوم بحذفها فوراً.
            </p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              9. التغييرات على السياسة
            </h2>
            <p style={{ marginBottom: '15px' }}>
              قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة مع تحديث تاريخ آخر تعديل. ننصحك بمراجعة هذه السياسة بشكل دوري.
            </p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              10. الامتثال للقوانين الكويتية
            </h2>
            <p style={{ marginBottom: '15px' }}>
              نلتزم بجميع قوانين حماية البيانات والخصوصية المعمول بها في دولة الكويت، بما في ذلك قانون التجارة الإلكترونية وقوانين حماية المستهلك.
            </p>
          </section>

          <section style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000' }}>تواصل معنا</h2>
            <p style={{ marginBottom: '10px' }}>
              إذا كان لديك أي أسئلة أو استفسارات بخصوص سياسة الخصوصية أو ترغب في ممارسة حقوقك، يرجى التواصل معنا:
            </p>
            <p style={{ marginBottom: '5px' }}><strong>واتساب:</strong> +201110760081</p>
            <p style={{ marginBottom: '5px' }}><strong>الموقع:</strong> kuwait-store.com</p>
            <p><strong>الموقع الجغرافي:</strong> دولة الكويت</p>
          </section>

          <div style={{ textAlign: 'center', marginTop: '40px', padding: '20px', background: '#007A3D', color: 'white', borderRadius: '10px' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '0' }}>
              نحن نقدر ثقتك بنا ونلتزم بحماية خصوصيتك
            </p>
          </div>

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
