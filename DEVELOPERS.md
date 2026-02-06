# دليل المطورين - متجر الكويت

## نظرة عامة على البنية

### المكونات (Components)

#### Layout.js
المكون الرئيسي الذي يحتوي على:
- الهيدر مع شعار المتجر
- نظام البحث
- أيقونة السلة مع عداد
- الفوتر

#### ProductCard.js
بطاقة عرض المنتج تحتوي على:
- صورة المنتج
- العنوان
- السعر (عادي أو مخفض)
- زر التفاصيل

#### FloatingButtons.js
أزرار عائمة في أسفل الصفحة:
- زر واتساب للتواصل
- زر السلة السريع

### إدارة الحالة (Context)

#### CartContext.js
يوفر الوظائف التالية:
- `addToCart(product)` - إضافة منتج للسلة
- `removeFromCart(productId)` - حذف منتج من السلة
- `updateQuantity(productId, quantity)` - تحديث الكمية
- `clearCart()` - إفراغ السلة
- `getCartTotal()` - حساب الإجمالي
- `getCartCount()` - عدد المنتجات

### الصفحات (Pages)

#### index.js (الصفحة الرئيسية)
- عرض جميع المنتجات
- نظام البحث
- تحميل تدريجي (Load More)
- SEO Schema للمتجر

#### cart.js (صفحة السلة)
- عرض المنتجات في السلة
- تعديل الكميات
- حذف المنتجات
- إرسال الطلب عبر واتساب

#### product/[id].js (تفاصيل المنتج)
- عرض تفاصيل المنتج
- معرض الصور
- إضافة للسلة
- طلب مباشر عبر واتساب
- SEO Schema للمنتج

## إضافة ميزات جديدة

### إضافة فئات المنتجات

1. أضف حقل `categories` في `kuwait-products.json`
2. أنشئ مكون `CategoryFilter.js`
3. أضف state للفئة المختارة في `index.js`
4. فلتر المنتجات حسب الفئة

### إضافة نظام التقييمات

1. أضف حقل `rating` في بيانات المنتج
2. أنشئ مكون `StarRating.js`
3. أضف العرض في `ProductCard` و `ProductDetails`

### إضافة المفضلة

1. أنشئ `FavoritesContext.js` مشابه لـ `CartContext`
2. أضف زر القلب في `ProductCard`
3. أنشئ صفحة `/favorites`

## أفضل الممارسات

### الأداء
- استخدم `getStaticProps` للبيانات الثابتة
- استخدم `Image` من Next.js للصور (مع unoptimized للـ static export)
- قلل حجم الصور قبل رفعها

### SEO
- أضف meta tags مناسبة لكل صفحة
- استخدم Schema.org markup
- أضف sitemap.xml
- أضف robots.txt

### الأمان
- لا تضع API keys في الكود
- استخدم متغيرات البيئة
- تحقق من المدخلات

### الصيانة
- اكتب تعليقات واضحة
- اتبع نمط كود موحد
- اختبر قبل النشر

## الأوامر المفيدة

```bash
# تشغيل المشروع
npm run dev

# بناء المشروع
npm run build

# فحص الأكواد
npm run lint

# تنظيف المشروع
npm run clean
```

## استكشاف الأخطاء

### المشكلة: الصور لا تظهر
**الحل**: تأكد من أن `images.unoptimized: true` في `next.config.js`

### المشكلة: السلة لا تحفظ البيانات
**الحل**: تحقق من localStorage في المتصفح

### المشكلة: خطأ في البناء
**الحل**: احذف مجلد `.next` و `out` ثم أعد البناء

### المشكلة: GitLab Pages لا يعمل
**الحل**: تأكد من أن `output: 'export'` موجود في `next.config.js`

## الموارد المفيدة

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/)
- [Schema.org](https://schema.org)

## المساهمة

نرحب بمساهماتك! يرجى:
1. Fork المشروع
2. إنشاء فرع للميزة الجديدة
3. Commit التغييرات
4. Push للفرع
5. فتح Pull Request

## الدعم

للأسئلة والمساعدة:
- افتح Issue في GitLab
- تواصل عبر واتساب: +201110760081
