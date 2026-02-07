# 🎨 لوحة تحكم SEO احترافية - قابلة للنقل

## 📦 **الملفات المطلوبة:**

```
seo-admin/
├── index.html          (seo-admin.html)
├── style.css           (style.css)
├── script.js           (seo-script.js)
└── README.md           (هذا الملف)
```

---

## 🚀 **كيفية الاستخدام في أي مشروع:**

### **الخطوة 1: انسخ المجلد**
```
انسخ مجلد seo-admin كامل إلى مشروعك الجديد
```

### **الخطوة 2: غيّر مسار JSON**
افتح `script.js` وغيّر السطر:

```javascript
// من:
const response = await fetch('../data/kuwait-products.json');

// إلى:
const response = await fetch('المسار/الخاص/بك/products.json');
```

### **الخطوة 3: افتح اللوحة**
```
دبل كليك على index.html
```

---

## 🎯 **متطلبات ملف JSON:**

يجب أن يكون الملف بهذا الشكل:

```json
[
  {
    "id": 1,
    "title": "اسم المنتج",
    "description": "وصف المنتج",
    "category": "الفئة",
    "brand": "البراند",
    "pricing": {
      "regular": "10.500",
      "sale": "8.500",
      "currency": "KWD"
    },
    "media": {
      "main_image": "رابط الصورة",
      "gallery": []
    },
    "seo": {
      "focusKeyword": "الكلمة المفتاحية",
      "metaTitle": "عنوان SEO",
      "metaDescription": "وصف SEO",
      "canonicalUrl": "",
      "keywords": ["كلمة1", "كلمة2"],
      "score": 0
    }
  }
]
```

---

## ⚙️ **التخصيص:**

### **تغيير الألوان:**
في `style.css` غيّر:
```css
:root {
    --primary: #007A3D;  /* اللون الأساسي */
    --secondary: #CE1126; /* اللون الثانوي */
}
```

### **تغيير اسم المتجر:**
في `index.html` غيّر:
```html
<h2><i class="fas fa-store"></i> متجر الكويت</h2>
```

### **تغيير رابط الموقع:**
في `script.js` غيّر:
```javascript
document.getElementById('previewUrl').textContent = 'https://موقعك.com/product/123';
```

---

## 📋 **الميزات:**

- ✅ تحليل SEO (0-100)
- ✅ Meta Tags
- ✅ Focus Keyword
- ✅ معاينة Google
- ✅ Schema Markup
- ✅ Sitemap Generator
- ✅ Keywords Analysis
- ✅ عمليات جماعية
- ✅ تصدير JSON/CSV

---

## 🔧 **استخدامات:**

### **1. متاجر إلكترونية:**
- WooCommerce Alternative
- Shopify Alternative
- متاجر Next.js

### **2. مواقع المحتوى:**
- مدونات
- مواقع أخبار
- مواقع شركات

### **3. أي مشروع يستخدم JSON:**
- React
- Vue
- Angular
- HTML عادي

---

## 💡 **نصائح:**

1. **احتفظ بنسخة احتياطية** من JSON قبل التعديل
2. **اختبر التغييرات** قبل النشر
3. **استخدم Git** لتتبع التغييرات
4. **راجع SEO Score** بانتظام

---

## 🆘 **الدعم:**

لو واجهت مشكلة:
1. تأكد من مسار JSON صحيح
2. تأكد من صيغة JSON صحيحة
3. افتح Console في المتصفح (F12)
4. شوف الأخطاء

---

## 📄 **الترخيص:**

مجاني للاستخدام الشخصي والتجاري ✅

---

**🎉 جاهز للاستخدام في أي مشروع!**
