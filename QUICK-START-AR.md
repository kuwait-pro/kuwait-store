# 🚀 دليل التشغيل السريع - متجر الكويت

## ⚡ تشغيل المشروع بأمر واحد

### Windows PowerShell:
```powershell
powershell -ExecutionPolicy Bypass -File .\start.ps1
```

أو ببساطة:
```powershell
.\start.ps1
```

---

## 📋 ما يفعله الأمر:

1. ✅ **التحقق من Node.js** - يتأكد من وجود Node.js
2. 📦 **تثبيت الحزم** - يثبت جميع المكتبات المطلوبة
3. 🗑️ **التنظيف** - يحذف المجلدات القديمة
4. 🏗️ **البناء الكامل** - يبني المشروع لـ:
   - GitHub Pages
   - Cloudflare Pages
   - GitLab Pages
5. 🔍 **تحسين SEO** - يولد Sitemap و RSS Feed
6. 🎨 **فتح لوحة التحكم** - يفتح Dashboard تلقائياً
7. 🚀 **تشغيل السيرفر** - يشغل الموقع على http://localhost:3000

---

## 🎛️ لوحة التحكم الشاملة

بعد تشغيل الأمر، ستفتح لوحة تحكم شاملة تحتوي على:

### 1. 📦 إدارة المنتجات
- إضافة/تعديل/حذف المنتجات
- البحث والفلترة
- التصدير والاستيراد
- إحصائيات شاملة

### 2. 💻 Code Snippets Manager
**مثل إضافة Code Snippets في WordPress تماماً!**

#### المميزات:
- ✅ إضافة أكواد PHP, JavaScript, CSS, HTML
- ✅ محرر أكواد احترافي (CodeMirror) مع تلوين الأكواد
- ✅ تفعيل/تعطيل الأكواد بضغطة واحدة
- ✅ تحديد موقع التنفيذ (Header, Footer, Admin, Frontend)
- ✅ نظام أولويات للأكواد
- ✅ البحث والفلترة
- ✅ تصدير/استيراد الأكواد
- ✅ حفظ تلقائي في LocalStorage
- ✅ إحصائيات مباشرة

#### كيفية الاستخدام:
1. افتح لوحة التحكم
2. اضغط على "Code Snippets" من القائمة الجانبية
3. اضغط "إضافة كود جديد"
4. املأ البيانات:
   - **اسم الكود**: اسم وصفي
   - **الوصف**: شرح مختصر
   - **نوع الكود**: PHP/JS/CSS/HTML
   - **موقع التنفيذ**: أين سيعمل الكود
   - **الأولوية**: ترتيب التنفيذ (1-100)
   - **تفعيل**: تشغيل/إيقاف الكود
5. اكتب الكود في المحرر
6. احفظ!

#### أمثلة على الأكواد:

**مثال 1: كود JavaScript لتتبع Google Analytics**
```javascript
// Google Analytics
(function() {
  var ga = document.createElement('script');
  ga.src = 'https://www.google-analytics.com/analytics.js';
  document.head.appendChild(ga);
})();
```

**مثال 2: كود CSS مخصص**
```css
/* تخصيص الألوان */
:root {
  --primary-color: #007A3D;
  --secondary-color: #CE1126;
}
body {
  font-family: 'Cairo', sans-serif;
}
```

**مثال 3: كود PHP (للمشاريع التي تدعم PHP)**
```php
<?php
// إضافة وظيفة مخصصة
function custom_greeting() {
    return "مرحباً بك في متجر الكويت!";
}
?>
```

### 3. 🔍 إدارة SEO
- تحسين محركات البحث
- إنشاء Sitemap تلقائي
- إدارة Meta Tags
- تحليل الكلمات المفتاحية

### 4. 📝 نظام CMS
- إدارة المحتوى
- تحرير الصفحات
- إدارة الوسائط

---

## 🛠️ أوامر إضافية

### تشغيل وضع التطوير فقط:
```bash
npm run dev
```

### بناء منصة واحدة:
```bash
npm run build:github
npm run build:cloudflare
npm run build:gitlab
```

### بناء الكل:
```bash
npm run build:all
```

### تحسين SEO فقط:
```bash
npm run seo
```

---

## 📂 هيكل المشروع

```
kuwait-store/
├── admin/                    # لوحة التحكم
│   ├── dashboard.html       # اللوحة الرئيسية الشاملة
│   ├── code-snippets.html   # إدارة الأكواد
│   ├── index.html           # إدارة المنتجات
│   ├── seo-admin.html       # إدارة SEO
│   └── ultimate-cms.html    # نظام CMS
├── data/                     # بيانات المنتجات
├── pages/                    # صفحات Next.js
├── components/               # مكونات React
├── public/                   # ملفات عامة
├── start.ps1                # 🚀 السكريبت الشامل
└── package.json             # إعدادات المشروع
```

---

## 🎯 الروابط المهمة

بعد التشغيل:
- **الموقع**: http://localhost:3000
- **لوحة التحكم**: `admin/dashboard.html`
- **Code Snippets**: `admin/code-snippets.html`
- **إدارة المنتجات**: `admin/index.html`
- **SEO**: `admin/seo-admin.html`

---

## 💾 حفظ الأكواد

جميع الأكواد في Code Snippets تُحفظ في:
- **LocalStorage** للمتصفح (تلقائي)
- **ملف JSON** عند التصدير

### لحفظ الأكواد بشكل دائم:
1. افتح Code Snippets
2. اضغط "تصدير"
3. احفظ الملف في مكان آمن
4. للاستيراد: اضغط "استيراد" واختر الملف

---

## 🔧 حل المشاكل

### إذا لم يعمل السكريبت:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### إذا كانت المنافذ مشغولة:
```bash
# غير المنفذ في package.json
"dev": "next dev -p 3001"
```

### إذا فشل البناء:
```bash
npm run clean
npm install
npm run build:all
```

---

## 📞 الدعم

للمساعدة أو الاستفسارات:
- افتح Issue على GitHub
- راجع التوثيق في `/docs`

---

## 🎉 ميزات إضافية

- ✅ دعم كامل للغة العربية (RTL)
- ✅ تصميم متجاوب (Mobile-First)
- ✅ أداء عالي (Next.js Static Export)
- ✅ SEO محسّن
- ✅ PWA جاهز
- ✅ نشر سهل على GitHub/Cloudflare/GitLab

---

**صُنع بـ ❤️ في الكويت 🇰🇼**
