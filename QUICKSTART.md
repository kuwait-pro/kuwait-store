# البداية السريعة ⚡

## التثبيت في 3 خطوات

### 1️⃣ تثبيت الحزم
```bash
npm install
```

### 2️⃣ تشغيل المشروع
```bash
npm run dev
```

### 3️⃣ افتح المتصفح
```
http://localhost:3000
```

---

## الأوامر الأساسية 🛠️

```bash
# تشغيل المشروع محلياً
npm run dev

# بناء المشروع
npm run build

# تشغيل النسخة المبنية
npm start

# فحص الأكواد
npm run lint

# تنظيف المشروع
npm run clean
```

---

## التخصيص السريع 🎨

### تغيير رقم الواتساب
ابحث عن `201110760081` في المشروع واستبدله برقمك

### إضافة منتج جديد
عدّل `data/kuwait-products.json`:
```json
{
  "id": "new-product",
  "title": "منتج جديد",
  "description": "وصف المنتج",
  "category": "الفئة",
  "pricing": {
    "regular": 10.000,
    "sale": 8.000,
    "currency": "د.ك"
  },
  "media": {
    "main_image": "رابط الصورة",
    "gallery": []
  }
}
```

### تغيير الألوان
عدّل `styles/globals.css`:
```css
:root {
  --primary-color: #007A3D;    /* اللون الأساسي */
  --secondary-color: #000000;  /* اللون الثانوي */
  --accent-color: #CE1126;     /* لون التمييز */
}
```

---

## النشر السريع 🚀

### GitLab Pages
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

### Vercel
1. اذهب إلى [vercel.com](https://vercel.com)
2. استورد المشروع
3. اضغط Deploy

---

## حل المشاكل الشائعة 🔧

### المشكلة: الصور لا تظهر
```javascript
// تأكد من وجود هذا في next.config.js
images: {
  unoptimized: true,
}
```

### المشكلة: خطأ في البناء
```bash
# نظف المشروع وأعد البناء
rmdir /s /q .next out
npm install
npm run build
```

### المشكلة: السلة لا تحفظ
افتح Developer Tools > Application > Local Storage
تأكد من وجود `kuwait_store_cart`

---

## الملفات المهمة 📁

```
kuwait-store/
├── pages/
│   ├── index.js          ← الصفحة الرئيسية
│   ├── cart.js           ← صفحة السلة
│   └── product/[id].js   ← صفحة المنتج
├── components/
│   ├── Layout.js         ← التخطيط العام
│   └── ProductCard.js    ← بطاقة المنتج
├── context/
│   └── CartContext.js    ← إدارة السلة
├── data/
│   └── kuwait-products.json ← بيانات المنتجات
└── styles/
    └── globals.css       ← التنسيقات
```

---

## نصائح سريعة 💡

✅ استخدم `npm run dev` للتطوير
✅ اختبر على أجهزة مختلفة
✅ احفظ نسخة احتياطية من البيانات
✅ استخدم Git للتحكم بالإصدارات
✅ اقرأ التحذيرات في Console

❌ لا تعدّل ملفات `.next/`
❌ لا تحذف `node_modules/` يدوياً
❌ لا تنشر بدون اختبار
❌ لا تضع API keys في الكود

---

## الدعم السريع 📞

🔗 [README الكامل](README-AR.md)
🔗 [دليل المطورين](DEVELOPERS.md)
🔗 [دليل النشر](DEPLOYMENT.md)
🔗 [قائمة المهام](TODO.md)

📱 واتساب: +201110760081
📧 البريد: support@kuwait-store.com

---

**جاهز للبدء؟** 🚀
```bash
npm run dev
```
