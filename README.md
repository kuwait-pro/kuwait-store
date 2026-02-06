# متجر الكويت 🇰🇼

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://gitlab.com)
[![Next.js](https://img.shields.io/badge/Next.js-15.3-black)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

متجر إلكتروني متكامل مبني بتقنية Next.js لعرض وبيع المنتجات في الكويت.

![Kuwait Store](https://via.placeholder.com/800x400/007A3D/FFFFFF?text=Kuwait+Store)

---

## 🚀 البداية السريعة

```bash
# تثبيت الحزم
npm install

# تشغيل المشروع
npm run dev

# افتح المتصفح على
http://localhost:3000
```

📖 **للمزيد**: اقرأ [دليل البداية السريعة](QUICKSTART.md)

---

## ✨ المميزات

- 🛍️ **عرض احترافي** - واجهة عصرية وجذابة للمنتجات
- 🔍 **بحث ذكي** - نظام بحث متقدم وسريع
- 🛒 **سلة تسوق** - إدارة ذكية مع حفظ تلقائي
- 📱 **تصميم متجاوب** - يعمل على جميع الأجهزة
- 💬 **واتساب** - طلب مباشر عبر واتساب
- 🎨 **عربي 100%** - واجهة عربية بالكامل
- ⚡ **أداء عالي** - Static Site Generation
- 🔒 **SEO محسّن** - Schema.org markup

---

## 🛠️ التقنيات

- **Next.js 15.3** - React Framework
- **React 19** - UI Library
- **CSS3** - Styling
- **Context API** - State Management
- **GitLab Pages** - Hosting

---

## 📁 هيكل المشروع

```
kuwait-store/
├── components/          # المكونات
│   ├── Layout.js
│   ├── ProductCard.js
│   └── FloatingButtons.js
├── context/            # إدارة الحالة
│   └── CartContext.js
├── data/               # البيانات
│   └── kuwait-products.json
├── pages/              # الصفحات
│   ├── index.js
│   ├── cart.js
│   └── product/[id].js
├── public/             # الملفات الثابتة
├── styles/             # التنسيقات
│   └── globals.css
└── docs/               # التوثيق
```

---

## 📚 التوثيق

- 📖 [دليل شامل بالعربية](README-AR.md)
- ⚡ [البداية السريعة](QUICKSTART.md)
- 👨‍💻 [دليل المطورين](DEVELOPERS.md)
- 🚀 [دليل النشر](DEPLOYMENT.md)
- ✅ [قائمة المهام](TODO.md)
- 📋 [سجل التغييرات](CHANGELOG.md)
- 🔧 [ملخص التصحيحات](FIXES-SUMMARY.md)
- 📊 [التقرير النهائي](FINAL-REPORT.md)

---

## 🎯 الأوامر

```bash
npm run dev      # تشغيل المشروع محلياً
npm run build    # بناء المشروع
npm start        # تشغيل النسخة المبنية
npm run lint     # فحص الأكواد
npm run clean    # تنظيف المشروع
```

---

## 🚀 النشر

### GitLab Pages (تلقائي)
```bash
git push origin main
```

### Vercel (بنقرة واحدة)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

📖 **للمزيد**: اقرأ [دليل النشر](DEPLOYMENT.md)

---

## 🎨 التخصيص

### تغيير رقم الواتساب
ابحث عن `201110760081` واستبدله برقمك في:
- `components/FloatingButtons.js`
- `components/Layout.js`
- `pages/cart.js`
- `pages/product/[id].js`

### تغيير الألوان
عدّل `styles/globals.css`:
```css
:root {
  --primary-color: #007A3D;   /* أخضر الكويت */
  --accent-color: #CE1126;    /* أحمر الكويت */
}
```

### إضافة منتجات
عدّل `data/kuwait-products.json`

---

## 📊 الإحصائيات

- ✅ **1,580** صفحة مولدة
- ✅ **1,576** منتج
- ✅ **99.4 KB** حجم JavaScript
- ✅ **0** أخطاء ESLint
- ✅ **100%** جاهز للنشر

---

## 🤝 المساهمة

المساهمات مرحب بها!

1. Fork المشروع
2. أنشئ فرع للميزة (`git checkout -b feature/amazing`)
3. Commit التغييرات (`git commit -m 'Add amazing feature'`)
4. Push للفرع (`git push origin feature/amazing`)
5. افتح Pull Request

---

## 📄 الترخيص

هذا المشروع مفتوح المصدر ومتاح للاستخدام الحر.

---

## 📞 الدعم

- 📱 واتساب: [+201110760081](https://wa.me/201110760081)
- 📧 البريد: support@kuwait-store.com
- 🐛 المشاكل: [افتح Issue](https://gitlab.com/yourname/kuwait-store/issues)

---

## 🌟 شكر خاص

شكراً لاستخدامك متجر الكويت!

إذا أعجبك المشروع، لا تنسَ إعطائه ⭐

---

<div align="center">

**صُنع بـ ❤️ في الكويت 🇰🇼**

[الموقع](https://kuwait-store.com) • [التوثيق](README-AR.md) • [الدعم](https://wa.me/201110760081)

</div>
