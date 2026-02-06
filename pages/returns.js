import Head from 'next/head';
import Link from 'next/link';

export default function Returns() {
  return (
    <div className="page-container">
      <Head>
        <title>سياسة الاسترجاع والاستبدال | متجر الكويت</title>
        <meta name="description" content="استرجاع مجاني خلال 14 يوم من تاريخ الاستلام. اطلع على سياسة الاسترجاع والاستبدال الكاملة لمتجر الكويت" />
        <link rel="canonical" href="https://kuwait-store.com/returns" />
      </Head>

      <div className="content-wrapper" style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#007A3D', textAlign: 'center' }}>سياسة الاسترجاع والاستبدال</h1>
        
        <div style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#333' }}>
          <div style={{ background: '#e8f5e9', padding: '20px', borderRadius: '10px', marginBottom: '30px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', color: '#007A3D', marginBottom: '10px' }}>🔄 استرجاع مجاني خلال 14 يوم</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '0' }}>نضمن لك حق الاسترجاع أو الاستبدال بكل سهولة</p>
          </div>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              1. مدة الاسترجاع
            </h2>
            <p style={{ marginBottom: '15px' }}>
              يمكنك إرجاع أو استبدال المنتج خلال <strong>14 يوماً</strong> من تاريخ استلام الطلب، بشرط أن يكون المنتج في حالته الأصلية ولم يتم استخدامه.
            </p>
            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
              <p style={{ marginBottom: '0' }}>
                <strong>📅 مثال:</strong> إذا استلمت الطلب في 1 يناير، يمكنك إرجاعه حتى 14 يناير.
              </p>
            </div>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              2. شروط الاسترجاع
            </h2>
            <p style={{ marginBottom: '15px' }}>لقبول طلب الاسترجاع، يجب أن تتوفر الشروط التالية:</p>
            <ul style={{ marginRight: '20px', marginBottom: '15px' }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>✅ المنتج في حالته الأصلية:</strong> لم يتم استخدامه أو تلفه
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>✅ التغليف الأصلي:</strong> المنتج في علبته الأصلية مع جميع الملحقات
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>✅ الفاتورة:</strong> وجود فاتورة الشراء أو إثبات الطلب
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>✅ ضمن المدة:</strong> خلال 14 يوم من تاريخ الاستلام
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              3. المنتجات المستثناة من الاسترجاع
            </h2>
            <div style={{ background: '#ffebee', padding: '20px', borderRadius: '8px', border: '1px solid #f44336', marginBottom: '15px' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#d32f2f', marginBottom: '15px' }}>❌ لا يمكن إرجاع أو استبدال:</h3>
              <ul style={{ marginRight: '20px' }}>
                <li style={{ marginBottom: '10px' }}>
                  <strong>منتجات العناية الشخصية:</strong> مستحضرات التجميل، العطور، منتجات العناية بالبشرة والشعر
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>الملابس الداخلية:</strong> لأسباب صحية
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>المنتجات المستخدمة:</strong> أي منتج تم فتحه أو استخدامه
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>المنتجات المخصصة:</strong> المنتجات المصنوعة حسب الطلب
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>المنتجات المخفضة:</strong> المنتجات في التخفيضات النهائية (Final Sale)
                </li>
              </ul>
            </div>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              4. خطوات الاسترجاع
            </h2>
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
              <ol style={{ marginRight: '20px' }}>
                <li style={{ marginBottom: '15px' }}>
                  <strong>التواصل معنا:</strong> تواصل معنا عبر واتساب على +201110760081 وأخبرنا برغبتك في الإرجاع
                </li>
                <li style={{ marginBottom: '15px' }}>
                  <strong>تقديم التفاصيل:</strong> قدم رقم الطلب وسبب الإرجاع وصور للمنتج
                </li>
                <li style={{ marginBottom: '15px' }}>
                  <strong>الموافقة:</strong> سنراجع طلبك ونوافق عليه خلال 24 ساعة
                </li>
                <li style={{ marginBottom: '15px' }}>
                  <strong>الاستلام:</strong> سنرسل مندوب لاستلام المنتج من عنوانك (مجاناً)
                </li>
                <li style={{ marginBottom: '15px' }}>
                  <strong>الفحص:</strong> سنفحص المنتج للتأكد من مطابقته للشروط
                </li>
                <li style={{ marginBottom: '15px' }}>
                  <strong>الاسترداد:</strong> سيتم استرداد المبلغ أو استبدال المنتج خلال 3-5 أيام عمل
                </li>
              </ol>
            </div>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              5. طرق الاسترداد
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
              <div style={{ background: '#e3f2fd', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#1976d2', marginBottom: '10px' }}>💰 استرداد نقدي</h3>
                <p style={{ fontSize: '0.95rem' }}>يتم تحويل المبلغ إلى حسابك البنكي أو عبر الطريقة التي دفعت بها</p>
              </div>
              <div style={{ background: '#e8f5e9', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#388e3c', marginBottom: '10px' }}>🔄 استبدال</h3>
                <p style={{ fontSize: '0.95rem' }}>استبدال المنتج بمنتج آخر من نفس القيمة أو أعلى</p>
              </div>
              <div style={{ background: '#fff3e0', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#f57c00', marginBottom: '10px' }}>🎁 رصيد المتجر</h3>
                <p style={{ fontSize: '0.95rem' }}>الحصول على رصيد في المتجر لاستخدامه في مشترياتك القادمة</p>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              6. رسوم الاسترجاع
            </h2>
            <div style={{ background: '#e8f5e9', padding: '20px', borderRadius: '8px', marginBottom: '15px' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#007A3D', marginBottom: '10px' }}>✅ استرجاع مجاني في الحالات التالية:</h3>
              <ul style={{ marginRight: '20px' }}>
                <li style={{ marginBottom: '8px' }}>المنتج معيب أو تالف</li>
                <li style={{ marginBottom: '8px' }}>المنتج لا يطابق الوصف</li>
                <li style={{ marginBottom: '8px' }}>تم إرسال منتج خاطئ</li>
                <li style={{ marginBottom: '8px' }}>المنتج مفقود أجزاء</li>
              </ul>
            </div>
            <div style={{ background: '#fff3cd', padding: '15px', borderRadius: '8px', border: '1px solid #ffc107' }}>
              <p style={{ marginBottom: '0' }}>
                <strong>ℹ️ ملاحظة:</strong> في حالة الإرجاع لأسباب شخصية (تغيير رأي)، الاسترجاع مجاني أيضاً خلال فترة الـ 14 يوم.
              </p>
            </div>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              7. المنتجات التالفة أو المعيبة
            </h2>
            <p style={{ marginBottom: '15px' }}>
              إذا استلمت منتجاً تالفاً أو معيباً:
            </p>
            <ul style={{ marginRight: '20px', marginBottom: '15px' }}>
              <li style={{ marginBottom: '8px' }}>تواصل معنا فوراً عبر واتساب</li>
              <li style={{ marginBottom: '8px' }}>أرسل صوراً واضحة للعيب أو التلف</li>
              <li style={{ marginBottom: '8px' }}>سنقوم باستبدال المنتج أو استرداد المبلغ كاملاً</li>
              <li style={{ marginBottom: '8px' }}>لن تتحمل أي تكاليف شحن</li>
            </ul>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
              8. مدة معالجة الاسترجاع
            </h2>
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
              <ul style={{ marginRight: '20px', listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px', padding: '10px', background: 'white', borderRadius: '5px' }}>
                  <strong>📞 الموافقة على الطلب:</strong> خلال 24 ساعة
                </li>
                <li style={{ marginBottom: '12px', padding: '10px', background: 'white', borderRadius: '5px' }}>
                  <strong>🚚 استلام المنتج:</strong> 1-2 يوم عمل
                </li>
                <li style={{ marginBottom: '12px', padding: '10px', background: 'white', borderRadius: '5px' }}>
                  <strong>🔍 فحص المنتج:</strong> 1-2 يوم عمل
                </li>
                <li style={{ marginBottom: '12px', padding: '10px', background: 'white', borderRadius: '5px' }}>
                  <strong>💳 استرداد المبلغ:</strong> 3-5 أيام عمل
                </li>
              </ul>
            </div>
          </section>

          <section style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#000' }}>تواصل معنا</h2>
            <p style={{ marginBottom: '15px' }}>
              لبدء عملية الاسترجاع أو لأي استفسارات:
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

          <div style={{ background: '#007A3D', color: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center', marginBottom: '30px' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '0' }}>
              رضاك هو أولويتنا. نحن ملتزمون بتقديم أفضل خدمة استرجاع واستبدال في الكويت
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
