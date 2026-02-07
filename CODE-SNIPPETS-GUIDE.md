# 💻 دليل Code Snippets Manager

## 📖 نظرة عامة

Code Snippets Manager هو نظام متكامل لإدارة الأكواد البرمجية، مشابه تماماً لإضافة Code Snippets الشهيرة في WordPress.

---

## ✨ المميزات الرئيسية

### 1. محرر أكواد احترافي
- ✅ **CodeMirror Editor** - محرر أكواد متقدم
- ✅ **تلوين الأكواد** - Syntax Highlighting
- ✅ **أرقام الأسطر** - Line Numbers
- ✅ **Theme Monokai** - ثيم احترافي
- ✅ **Auto-Indent** - مسافات تلقائية

### 2. دعم لغات متعددة
- 🟦 **PHP** - للوظائف والـ Hooks
- 🟨 **JavaScript** - للتفاعلات والـ Analytics
- 🟦 **CSS** - للتنسيقات المخصصة
- 🟧 **HTML** - للعناصر الإضافية

### 3. إدارة متقدمة
- ⚡ **تفعيل/تعطيل فوري** - بدون حذف الكود
- 🎯 **نظام أولويات** - ترتيب تنفيذ الأكواد (1-100)
- 📍 **مواقع التنفيذ** - Header, Footer, Admin, Frontend, Everywhere
- 💾 **حفظ تلقائي** - في LocalStorage
- 📤 **تصدير/استيراد** - نقل الأكواد بسهولة

### 4. واجهة سهلة
- 🎨 **تصميم عصري** - Material Design
- 📱 **متجاوب** - يعمل على جميع الأجهزة
- 🔍 **بحث وفلترة** - إيجاد الأكواد بسرعة
- 📊 **إحصائيات مباشرة** - عدد الأكواد والأنواع

---

## 🚀 البدء السريع

### الوصول إلى Code Snippets:

#### الطريقة 1: من لوحة التحكم
```
افتح: admin/dashboard.html
اضغط: Code Snippets من القائمة
```

#### الطريقة 2: مباشرة
```
افتح: admin/code-snippets.html
```

#### الطريقة 3: من CMD
```bash
npm run snippets
```

---

## 📝 إضافة كود جديد

### الخطوات:

1. **اضغط "إضافة كود جديد"**

2. **املأ البيانات:**
   - **اسم الكود**: اسم وصفي (مثل: Google Analytics)
   - **الوصف**: شرح مختصر للكود
   - **نوع الكود**: اختر اللغة (PHP/JS/CSS/HTML)
   - **موقع التنفيذ**: أين سيعمل الكود
   - **الأولوية**: رقم من 1-100 (الأقل يُنفذ أولاً)
   - **تفعيل**: شغّل أو أوقف الكود

3. **اكتب الكود** في المحرر

4. **احفظ!**

---

## 🎯 مواقع التنفيذ

### Header
- يُنفذ في `<head>` الصفحة
- مناسب لـ: CSS, Meta Tags, Analytics

### Footer
- يُنفذ قبل `</body>`
- مناسب لـ: JavaScript, Tracking Codes

### Admin Only
- يعمل فقط في لوحة التحكم
- مناسب لـ: تخصيصات الإدارة

### Frontend Only
- يعمل فقط في الواجهة الأمامية
- مناسب لـ: تحسينات المستخدم

### Everywhere
- يعمل في كل مكان
- مناسب لـ: الأكواد العامة

---

## 💡 أمثلة عملية

### مثال 1: Google Analytics

```javascript
// نوع: JavaScript
// موقع: Header
// أولوية: 10

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXX-Y', 'auto');
ga('send', 'pageview');
```

### مثال 2: ألوان مخصصة

```css
/* نوع: CSS
   موقع: Header
   أولوية: 5 */

:root {
  --kuwait-green: #007A3D;
  --kuwait-red: #CE1126;
}

body {
  font-family: 'Cairo', sans-serif;
}

.btn-primary {
  background: var(--kuwait-green) !important;
}
```

### مثال 3: زر واتساب عائم

```html
<!-- نوع: HTML
     موقع: Footer
     أولوية: 20 -->

<style>
.whatsapp-float {
  position: fixed;
  bottom: 20px;
  left: 20px;
  background: #25D366;
  color: white;
  border-radius: 50px;
  padding: 15px 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  z-index: 1000;
}
</style>

<a href="https://wa.me/96512345678" class="whatsapp-float" target="_blank">
  تواصل معنا
</a>
```

### مثال 4: تمرير سلس

```javascript
// نوع: JavaScript
// موقع: Footer
// أولوية: 15

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
```

---

## 📦 تحميل الأمثلة الجاهزة

### يتضمن 8 أمثلة جاهزة:

1. ✅ **Google Analytics** - تتبع الزوار
2. ✅ **Facebook Pixel** - تتبع التحويلات
3. ✅ **Kuwait Colors** - ألوان علم الكويت
4. ✅ **WhatsApp Button** - زر واتساب عائم
5. ✅ **Smooth Scroll** - تمرير سلس
6. ✅ **Print Styles** - تنسيقات الطباعة
7. ✅ **Cookie Banner** - إشعار الكوكيز
8. ✅ **Back to Top** - زر العودة للأعلى

### كيفية التحميل:
```
اضغط زر "تحميل أمثلة" في شريط الأدوات
```

---

## 💾 التصدير والاستيراد

### تصدير الأكواد:
1. اضغط "تصدير"
2. سيتم تحميل ملف JSON
3. احفظه في مكان آمن

### استيراد الأكواد:
1. اضغط "استيراد"
2. اختر ملف JSON
3. سيتم استبدال الأكواد الحالية

---

## 🔍 البحث والفلترة

### البحث:
- اكتب في صندوق البحث
- يبحث في: الاسم، الوصف، النوع

### الفلترة:
- حسب النوع (PHP, JS, CSS, HTML)
- حسب الحالة (نشط/معطل)

---

## ⚙️ نظام الأولويات

### كيف يعمل:
- الأرقام الأقل تُنفذ أولاً
- مثال:
  - أولوية 5 → يُنفذ أولاً
  - أولوية 10 → يُنفذ ثانياً
  - أولوية 20 → يُنفذ ثالثاً

### متى تستخدمه:
- عندما يعتمد كود على كود آخر
- لترتيب تحميل المكتبات
- لتنظيم التنفيذ

---

## 🛡️ نصائح الأمان

### ⚠️ تحذيرات:

1. **لا تضع أكواد من مصادر غير موثوقة**
2. **اختبر الأكواد في بيئة تطوير أولاً**
3. **احتفظ بنسخة احتياطية قبل التعديل**
4. **لا تشارك أكواد تحتوي على مفاتيح API**

### ✅ أفضل الممارسات:

1. **استخدم أسماء وصفية للأكواد**
2. **أضف تعليقات في الكود**
3. **اختبر الكود قبل التفعيل**
4. **صدّر نسخة احتياطية بانتظام**
5. **استخدم الأولويات بحكمة**

---

## 🔧 استكشاف الأخطاء

### المشكلة: الكود لا يعمل
**الحل:**
- تأكد من تفعيل الكود
- تحقق من موقع التنفيذ
- افحص Console للأخطاء

### المشكلة: الأكواد اختفت
**الحل:**
- تحقق من LocalStorage
- استورد النسخة الاحتياطية
- حمّل الأمثلة الجاهزة

### المشكلة: المحرر لا يعمل
**الحل:**
- تحديث الصفحة
- تنظيف الكاش
- تحقق من الاتصال بالإنترنت (CodeMirror CDN)

---

## 📊 الإحصائيات

### ما تعرضه:
- **إجمالي الأكواد** - عدد جميع الأكواد
- **الأكواد النشطة** - الأكواد المفعّلة
- **PHP** - عدد أكواد PHP
- **JavaScript** - عدد أكواد JS

---

## 🎨 التخصيص

### تغيير الثيم:
```javascript
// في code-snippets.html
editor.setOption('theme', 'monokai'); // غيّر إلى: dracula, material, etc.
```

### تغيير حجم الخط:
```css
.CodeMirror {
  font-size: 14px; /* غيّر الحجم */
}
```

---

## 🔗 الربط مع المشروع

### لتطبيق الأكواد على الموقع:

1. **صدّر الأكواد** من Code Snippets
2. **أنشئ ملف** `snippets-loader.js`
3. **اقرأ الأكواد** من JSON
4. **طبّقها** حسب الموقع والأولوية

### مثال:
```javascript
// snippets-loader.js
async function loadSnippets() {
  const snippets = JSON.parse(localStorage.getItem('codeSnippets') || '[]');
  const activeSnippets = snippets
    .filter(s => s.active)
    .sort((a, b) => a.priority - b.priority);
  
  activeSnippets.forEach(snippet => {
    if (snippet.location === 'header' || snippet.location === 'everywhere') {
      applySnippet(snippet);
    }
  });
}

function applySnippet(snippet) {
  if (snippet.type === 'javascript') {
    const script = document.createElement('script');
    script.textContent = snippet.code;
    document.head.appendChild(script);
  } else if (snippet.type === 'css') {
    const style = document.createElement('style');
    style.textContent = snippet.code;
    document.head.appendChild(style);
  }
}

loadSnippets();
```

---

## 📚 موارد إضافية

### مكتبات مفيدة:
- **CodeMirror**: https://codemirror.net/
- **Prism.js**: https://prismjs.com/
- **Highlight.js**: https://highlightjs.org/

### أمثلة أكواد:
- **CSS Tricks**: https://css-tricks.com/
- **JavaScript.info**: https://javascript.info/
- **MDN Web Docs**: https://developer.mozilla.org/

---

## 🎓 دروس فيديو (قريباً)

- [ ] كيفية إضافة كود جديد
- [ ] استخدام الأولويات
- [ ] التصدير والاستيراد
- [ ] أمثلة عملية

---

## 📞 الدعم

### للمساعدة:
- افتح Issue على GitHub
- راجع التوثيق
- تحقق من الأمثلة الجاهزة

---

## 🎉 الخلاصة

Code Snippets Manager يوفر لك:
- ✅ إدارة احترافية للأكواد
- ✅ محرر متقدم
- ✅ تنظيم وترتيب
- ✅ أمان وسهولة
- ✅ أمثلة جاهزة

**ابدأ الآن وأضف أول كود لك! 🚀**

---

**صُنع بـ ❤️ للمطورين العرب**
