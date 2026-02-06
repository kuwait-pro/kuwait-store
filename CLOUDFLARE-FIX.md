# إصلاح Cloudflare Pages - 404

## ✅ الحل:

### في Cloudflare Dashboard:

1. **Build settings**:
   - Framework preset: `Next.js`
   - Build command: `npm run build`
   - Build output directory: `out`
   - Root directory: `/`

2. **Environment variables**:
   - `NODE_VERSION` = `22`

3. **إعادة النشر**:
   - Deployments > Retry deployment

### أو استخدم Wrangler:
```bash
npm run build
wrangler pages deploy out --project-name=kuwait-store
```

## ✅ الملفات المحدثة:
- `public/_redirects` - محدث
- `next.config.js` - trailingSlash: true

## 🎯 النتيجة:
سيعمل على: `https://kuwait-store.pages.dev` ✅
