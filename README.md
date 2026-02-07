# 🏪 متجر الكويت - Kuwait Store

متجر إلكتروني كويتي متكامل مع لوحة تحكم احترافية ونظام Code Snippets

[![Next.js](https://img.shields.io/badge/Next.js-15.3.0-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## ⚡ تشغيل سريع (أمر واحد!)

### Windows:
```bash
# الطريقة 1: نقرة مزدوجة
START.bat

# الطريقة 2: PowerShell
.\start.ps1

# الطريقة 3: NPM
npm run start:all
```

### بناء كل شيء من الصفر:
```powershell
# نسخ والصق في PowerShell
.\BUILD-ALL.ps1

# أو انقر نقراً مزدوجاً على
BUILD-ALL.bat
```

**أمر البناء الشامل سيقوم بـ:**
- ✅ تثبيت الحزم تلقائياً
- 🏗️ بناء المشروع لجميع المنصات (GitHub, Cloudflare, GitLab)
- 🔍 تحسين SEO وإنشاء Sitemap
- 📦 إنشاء 3 مجلدات جاهزة للنشر

**أمر التشغيل سيقوم بـ:**
- ✅ كل ما سبق +
- 🎨 فتح لوحة التحكم تلقائياً
- 🚀 تشغيل السيرفر على http://localhost:3000

---

## 🎯 المميزات الرئيسية

### 1. 🛒 متجر إلكتروني كامل
- ✅ عرض المنتجات مع الصور
- ✅ نظام سلة التسوق
- ✅ فلترة وبحث متقدم
- ✅ صفحات المنتجات الديناميكية
- ✅ دعم كامل للغة العربية (RTL)

### 2. 🎛️ لوحة تحكم شاملة
- ✅ **إدارة المنتجات** - إضافة/تعديل/حذف
- ✅ **Code Snippets Manager** - مثل WordPress تماماً!
- ✅ **إدارة SEO** - تحسين محركات البحث
- ✅ **نظام CMS** - إدارة المحتوى
- ✅ واجهة عصرية وسهلة الاستخدام

### 3. 💻 Code Snippets Manager
**الميزة الجديدة! مثل إضافة Code Snippets في WordPress**

#### المميزات:
- ✅ محرر أكواد احترافي (CodeMirror)
- ✅ دعم PHP, JavaScript, CSS, HTML
- ✅ تفعيل/تعطيل فوري
- ✅ نظام أولويات (1-100)
- ✅ مواقع تنفيذ متعددة (Header, Footer, Admin, Frontend)
- ✅ تصدير/استيراد الأكواد
- ✅ 8 أمثلة جاهزة للاستخدام
- ✅ بحث وفلترة
- ✅ حفظ تلقائي

#### الوصول السريع:
```bash
npm run snippets
```

### 4. 🔍 SEO محسّن
- ✅ Sitemap تلقائي
- ✅ RSS Feed
- ✅ Meta Tags محسّنة
- ✅ Schema.org Markup
- ✅ Open Graph
- ✅ Twitter Cards

### 5. 🚀 نشر متعدد المنصات
- ✅ **GitHub Pages** - نشر مجاني
- ✅ **Cloudflare Pages** - أداء عالي
- ✅ **GitLab Pages** - CI/CD تلقائي

---

## 📂 هيكل المشروع

```
kuwait-store/
├── admin/                      # 🎛️ لوحة التحكم
│   ├── dashboard.html         # اللوحة الرئيسية الشاملة
│   ├── code-snippets.html     # 💻 Code Snippets Manager
│   ├── snippets-examples.json # أمثلة جاهزة (8 أكواد)
│   ├── index.html             # إدارة المنتجات
│   ├── seo-admin.html         # إدارة SEO
│   └── ultimate-cms.html      # نظام CMS
├── pages/                      # صفحات Next.js
│   ├── index.js               # الصفحة الرئيسية
│   ├── product/[id].js        # صفحة المنتج
│   └── cart.js                # سلة التسوق
├── components/                 # مكونات React
├── data/                       # بيانات المنتجات
├── public/                     # ملفات عامة
├── start.ps1                  # 🚀 سكريبت التشغيل الشامل
├── START.bat                  # نقرة واحدة للتشغيل
├── OPEN-ADMIN.bat            # فتح لوحة التحكم
├── OPEN-SNIPPETS.bat         # فتح Code Snippets
└── package.json               # إعدادات المشروع
```

---

## 📖 التوثيق

### دليل البدء السريع:
- 📘 [QUICK-START-AR.md](QUICK-START-AR.md) - دليل شامل بالعربية
- 📗 [README-QUICK.md](README-QUICK.md) - دليل مختصر

### دليل Code Snippets:
- 💻 [CODE-SNIPPETS-GUIDE.md](CODE-SNIPPETS-GUIDE.md) - دليل كامل للـ Code Snippets

### أدلة إضافية:
- 🔍 [SEO-GUIDE.md](SEO-GUIDE.md) - دليل تحسين محركات البحث
- 📊 [MASS-SEO.md](MASS-SEO.md) - SEO جماعي

---

## 🎨 لوحة التحكم

### الوصول:
```bash
# فتح اللوحة الرئيسية
npm run admin

# فتح Code Snippets مباشرة
npm run snippets

# أو استخدم الملفات:
OPEN-ADMIN.bat
OPEN-SNIPPETS.bat
```

### الأقسام:
1. **📦 إدارة المنتجات**
   - إضافة/تعديل/حذف المنتجات
   - بحث وفلترة متقدم
   - تصدير/استيراد JSON & CSV
   - عمليات جماعية

2. **💻 Code Snippets**
   - إضافة أكواد مخصصة
   - محرر احترافي
   - أمثلة جاهزة
   - تصدير/استيراد

3. **🔍 إدارة SEO**
   - تحسين الصفحات
   - إنشاء Sitemap
   - تحليل الكلمات المفتاحية

4. **📝 نظام CMS**
   - إدارة المحتوى
   - تحرير الصفحات

---

## 💻 Code Snippets - أمثلة

### مثال 1: Google Analytics
```javascript
// نوع: JavaScript | موقع: Header | أولوية: 10
ga('create', 'UA-XXXXX-Y', 'auto');
ga('send', 'pageview');
```

### مثال 2: ألوان مخصصة
```css
/* نوع: CSS | موقع: Header | أولوية: 5 */
:root {
  --kuwait-green: #007A3D;
  --kuwait-red: #CE1126;
}
```

### مثال 3: زر واتساب
```html
<!-- نوع: HTML | موقع: Footer | أولوية: 20 -->
<a href="https://wa.me/96512345678" class="whatsapp-float">
  تواصل معنا
</a>
```

**للمزيد: راجع [CODE-SNIPPETS-GUIDE.md](CODE-SNIPPETS-GUIDE.md)**

---

## 🛠️ الأوامر المتاحة

### تشغيل وبناء:
```bash
npm run start:all      # 🚀 تشغيل شامل (موصى به)
npm run dev            # تطوير فقط
npm run build:all      # بناء جميع المنصات
npm run build:github   # بناء GitHub Pages
npm run build:cloudflare # بناء Cloudflare
npm run build:gitlab   # بناء GitLab
```

### لوحة التحكم:
```bash
npm run admin          # فتح لوحة التحكم
npm run snippets       # فتح Code Snippets
```

### SEO:
```bash
npm run seo            # تحسين SEO
npm run feed           # إنشاء RSS Feed
```

### تنظيف:
```bash
npm run clean          # حذف المجلدات القديمة
```

---

## 🚀 النشر

### GitHub Pages:
```bash
npm run build:github
# ارفع مجلد out-github إلى GitHub
```

### Cloudflare Pages:
```bash
npm run build:cloudflare
# اربط المشروع مع Cloudflare
```

### GitLab Pages:
```bash
npm run build:gitlab
# سيتم النشر تلقائياً عبر CI/CD
```

---

## 🔧 المتطلبات

- **Node.js** >= 18.0.0
- **NPM** >= 9.0.0
- **Windows** (للسكريبتات .bat و .ps1)

---

## 📦 التثبيت

```bash
# 1. استنساخ المشروع
git clone https://github.com/your-username/kuwait-store.git

# 2. الدخول للمجلد
cd kuwait-store

# 3. تشغيل كل شيء بأمر واحد!
.\start.ps1
```

---

## 🎯 الروابط بعد التشغيل

- **الموقع**: http://localhost:3000
- **لوحة التحكم**: `admin/dashboard.html`
- **Code Snippets**: `admin/code-snippets.html`
- **إدارة المنتجات**: `admin/index.html`
- **SEO**: `admin/seo-admin.html`

---

## 🌟 ميزات إضافية

- ✅ **PWA Ready** - يعمل كتطبيق
- ✅ **Mobile First** - متجاوب تماماً
- ✅ **Fast Performance** - Next.js Static Export
- ✅ **SEO Optimized** - محسّن للبحث
- ✅ **RTL Support** - دعم كامل للعربية
- ✅ **Dark Mode Ready** - جاهز للوضع الليلي

---

## 🔒 الأمان

### Code Snippets:
- ⚠️ لا تضع أكواد من مصادر غير موثوقة
- ⚠️ اختبر الأكواد في بيئة تطوير أولاً
- ⚠️ احتفظ بنسخة احتياطية دائماً

---

## 🤝 المساهمة

نرحب بالمساهمات! 

1. Fork المشروع
2. أنشئ Branch جديد
3. Commit التغييرات
4. Push للـ Branch
5. افتح Pull Request

---

## 📄 الترخيص

MIT License - استخدم المشروع بحرية!

---

## 📞 الدعم

- 📧 **Email**: support@kuwait-store.com
- 💬 **Issues**: [GitHub Issues](https://github.com/your-username/kuwait-store/issues)
- 📚 **Docs**: راجع ملفات التوثيق

---

## 🎉 شكر خاص

- **Next.js** - إطار العمل
- **React** - المكتبة الأساسية
- **CodeMirror** - محرر الأكواد
- **Font Awesome** - الأيقونات

---

## 📊 الإحصائيات

- ⭐ **8 أمثلة جاهزة** في Code Snippets
- 📦 **إدارة غير محدودة** للمنتجات
- 🌍 **3 منصات نشر** مدعومة
- 🎨 **4 أقسام** في لوحة التحكم

---

## 🗺️ خارطة الطريق

- [ ] دعم المزيد من اللغات
- [ ] نظام مستخدمين
- [ ] بوابة دفع
- [ ] تطبيق موبايل
- [ ] API متقدم

---

## 📸 لقطات الشاشة

### الموقع:
![الصفحة الرئيسية](screenshots/home.png)

### لوحة التحكم:
![لوحة التحكم](screenshots/dashboard.png)

### Code Snippets:
![Code Snippets](screenshots/snippets.png)

---

**صُنع بـ ❤️ في الكويت 🇰🇼**

**Kuwait Store © 2024 - جميع الحقوق محفوظة**

---

## 🚀 ابدأ الآن!

```bash
.\start.ps1
```

**أو انقر نقراً مزدوجاً على: `START.bat`**
