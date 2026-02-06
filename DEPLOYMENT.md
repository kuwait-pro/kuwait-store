# دليل النشر - متجر الكويت

## النشر على GitLab Pages

### الخطوات

1. **إنشاء مستودع GitLab**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://gitlab.com/username/kuwait-store.git
   git push -u origin main
   ```

2. **تفعيل GitLab Pages**
   - انتقل إلى Settings > Pages في مشروعك
   - سيتم البناء تلقائياً عند كل push

3. **الوصول للموقع**
   - الموقع سيكون متاحاً على: `https://username.gitlab.io/kuwait-store`

### ملاحظات مهمة
- تأكد من أن `output: 'export'` موجود في `next.config.js`
- تأكد من أن `.gitlab-ci.yml` موجود في الجذر
- البناء يستغرق 2-5 دقائق

## النشر على Vercel

### الخطوات

1. **إنشاء حساب على Vercel**
   - اذهب إلى [vercel.com](https://vercel.com)
   - سجل دخول بحساب GitHub/GitLab

2. **استيراد المشروع**
   - اضغط "New Project"
   - اختر المستودع
   - اضغط "Deploy"

3. **الإعدادات**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `out`

### المميزات
- نشر تلقائي عند كل push
- معاينة للفروع
- SSL مجاني
- CDN عالمي

## النشر على Netlify

### الخطوات

1. **إنشاء حساب على Netlify**
   - اذهب إلى [netlify.com](https://netlify.com)

2. **استيراد المشروع**
   - اضغط "Add new site"
   - اختر "Import an existing project"
   - اختر المستودع

3. **إعدادات البناء**
   ```
   Build command: npm run build
   Publish directory: out
   ```

## النشر على استضافة خاصة

### متطلبات السيرفر
- Node.js 18+
- Nginx أو Apache
- SSL Certificate

### الخطوات

1. **بناء المشروع**
   ```bash
   npm run build
   ```

2. **رفع مجلد out**
   ```bash
   scp -r out/* user@server:/var/www/kuwait-store/
   ```

3. **إعداد Nginx**
   ```nginx
   server {
       listen 80;
       server_name kuwait-store.com;
       root /var/www/kuwait-store;
       index index.html;

       location / {
           try_files $uri $uri/ $uri.html =404;
       }
   }
   ```

4. **إعادة تشغيل Nginx**
   ```bash
   sudo systemctl restart nginx
   ```

## إعداد Domain مخصص

### GitLab Pages

1. اذهب إلى Settings > Pages
2. اضغط "New Domain"
3. أدخل اسم النطاق
4. أضف DNS Records:
   ```
   Type: A
   Name: @
   Value: 35.185.44.232
   ```

### Vercel

1. اذهب إلى Project Settings > Domains
2. أضف النطاق
3. أضف DNS Records حسب التعليمات

## التحقق من النشر

### قائمة التحقق
- [ ] الموقع يفتح بدون أخطاء
- [ ] الصور تظهر بشكل صحيح
- [ ] السلة تعمل
- [ ] البحث يعمل
- [ ] روابط واتساب تعمل
- [ ] الموقع متجاوب على الموبايل
- [ ] SSL مفعل (HTTPS)
- [ ] robots.txt موجود
- [ ] manifest.json موجود

## استكشاف مشاكل النشر

### المشكلة: 404 على الصفحات
**الحل**: تأكد من `output: 'export'` في next.config.js

### المشكلة: الصور لا تظهر
**الحل**: تأكد من `images.unoptimized: true`

### المشكلة: CSS لا يعمل
**الحل**: تحقق من مسارات الملفات

### المشكلة: البناء يفشل
**الحل**: 
```bash
rm -rf .next out node_modules
npm install
npm run build
```

## التحديثات المستقبلية

### عملية التحديث
1. عدّل الكود محلياً
2. اختبر التغييرات: `npm run dev`
3. ابنِ المشروع: `npm run build`
4. ارفع التغييرات:
   ```bash
   git add .
   git commit -m "وصف التحديث"
   git push
   ```

### النسخ الاحتياطي
- احتفظ بنسخة من `data/kuwait-products.json`
- احتفظ بنسخة من الصور
- استخدم Git للتحكم بالإصدارات

## الأمان

### قبل النشر
- [ ] لا توجد API keys في الكود
- [ ] لا توجد كلمات مرور
- [ ] تم تحديث رقم الواتساب
- [ ] تم تحديث معلومات المتجر

### بعد النشر
- راقب الأخطاء في Console
- راقب الأداء
- راقب حركة المرور

## الدعم

للمساعدة في النشر:
- واتساب: +201110760081
- البريد: support@kuwait-store.com
