/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // ضروري جداً عشان الصور تشتغل من غير سيرفر Next.js
  images: {
    unoptimized: true,
  },

  // عشان نتجاهل أخطاء الـ Lint والـ TypeScript أثناء الـ Build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // (اختياري) لو هترفع في Sub-path فعل دول
  // basePath: '/',
  // trailingSlash: true,
};

export default nextConfig;
