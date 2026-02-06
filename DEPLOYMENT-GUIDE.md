# دليل النشر - متجر الكويت

## ✅ المشروع جاهز للنشر على:
- GitLab Pages
- GitHub Pages
- Cloudflare Pages

---

## 🚀 النشر على GitLab Pages

### الخطوات:
1. **إنشاء مستودع GitLab**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://gitlab.com/USERNAME/kuwait-store.git
git push -u origin main
```

2. **التفعيل التلقائي**
- سيتم البناء والنشر تلقائياً عبر `.gitlab-ci.yml`
- الموقع سيكون على: `https://USERNAME.gitlab.io/kuwait-store`

3. **Domain مخصص**
- Settings > Pages > New Domain
- أضف: `kuwait-store.com`

---

## 🚀 النشر على GitHub Pages

### الخطوات:
1. **إنشاء مستودع GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/kuwait-store.git
git push -u origin main
```

2. **تفعيل GitHub Pages**
- Settings > Pages
- Source: GitHub Actions
- سيتم النشر تلقائياً عبر `.github/workflows/deploy.yml`

3. **Domain مخصص**
- Settings > Pages > Custom domain
- أضف: `kuwait-store.com`

---

## 🚀 النشر على Cloudflare Pages

### الطريقة الأولى: عبر Dashboard

1. **تسجيل الدخول**
- اذهب إلى: https://dash.cloudflare.com
- Pages > Create a project

2. **ربط Git**
- اختر GitHub أو GitLab
- اختر المستودع: `kuwait-store`

3. **إعدادات البناء**
```
Framework preset: Next.js
Build command: npm run build
Build output directory: out
Root directory: /
Node version: 22
```

4. **Environment Variables** (اختياري)
```
NODE_VERSION=22
```

5. **Deploy**
- اضغط "Save and Deploy"
- الموقع سيكون على: `kuwait-store.pages.dev`

### الطريقة الثانية: عبر Wrangler CLI

```bash
# تثبيت Wrangler
npm install -g wrangler

# تسجيل الدخول
wrangler login

# بناء المشروع
npm run build

# النشر
wrangler pages deploy out --project-name=kuwait-store
```

### Domain مخصص
- Pages > kuwait-store > Custom domains
- أضف: `kuwait-store.com`

---

## 📋 ملفات التكوين

### ✅ GitLab
- `.gitlab-ci.yml` - CI/CD configuration

### ✅ GitHub
- `.github/workflows/deploy.yml` - GitHub Actions

### ✅ Cloudflare
- `wrangler.toml` - Cloudflare configuration
- `public/_headers` - HTTP headers
- `public/_redirects` - URL redirects

### ✅ عام
- `.gitignore` - ملفات مستبعدة
- `next.config.js` - إعدادات Next.js
- `package.json` - معلومات المشروع

---

## 🔧 إعدادات DNS

### لـ Cloudflare Pages
```
Type: CNAME
Name: @
Target: kuwait-store.pages.dev
Proxy: Enabled (Orange Cloud)
```

### لـ GitHub/GitLab Pages
```
Type: A
Name: @
Value: [IP من الخدمة]

Type: CNAME
Name: www
Target: USERNAME.github.io (أو gitlab.io)
```

---

## ✅ قائمة التحقق قبل النشر

- [x] `npm run build` ينجح بدون أخطاء
- [x] `npm run lint` بدون تحذيرات
- [x] جميع الصفحات تعمل
- [x] الصور تظهر
- [x] روابط واتساب صحيحة
- [x] sitemap.xml موجود
- [x] robots.txt محدث
- [x] .gitignore محدث

---

## 🐛 استكشاف الأخطاء

### المشكلة: البناء يفشل
```bash
npm run clean
npm install
npm run build
```

### المشكلة: الصفحات لا تظهر
- تأكد من `output: 'export'` في `next.config.js`
- تأكد من `images.unoptimized: true`

### المشكلة: 404 على الصفحات
- تأكد من وجود `_redirects` في `public/`
- تأكد من البناء في مجلد `out/`

---

## 📊 بعد النشر

### اختبار الموقع
- ✅ افتح الموقع في المتصفح
- ✅ اختبر جميع الصفحات
- ✅ اختبر على الموبايل
- ✅ اختبر روابط واتساب

### إضافة إلى Google
- Google Search Console
- Google Analytics (اختياري)
- Google My Business

### المراقبة
- راقب الأخطاء في Console
- راقب سرعة التحميل
- راقب حركة المرور

---

## 🎉 تم!

الموقع الآن منشور ومتاح على الإنترنت!

**الدعم**: sherow1982@gmail.com
