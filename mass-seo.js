const fs = require('fs');
const path = require('path');

// XML escape function
function escapeXml(unsafe) {
  if (!unsafe) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, ''); // Remove control characters
}

// Read products
const productsPath = path.join(__dirname, 'data', 'kuwait-products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log('🚀 Starting Mass SEO Generation...\n');

// 1. Generate Category Pages Sitemap
const categories = [...new Set(products.map(p => p.category).filter(Boolean))];
console.log(`✅ Found ${categories.length} categories`);

// 2. Generate Brand Pages (if exists)
const brands = [...new Set(products.map(p => p.brand).filter(Boolean))];
console.log(`✅ Found ${brands.length} brands`);

// 3. Generate Price Range Pages
const priceRanges = [
  { min: 0, max: 5, label: 'تحت-5-دينار' },
  { min: 5, max: 10, label: '5-10-دينار' },
  { min: 10, max: 20, label: '10-20-دينار' },
  { min: 20, max: 50, label: '20-50-دينار' },
  { min: 50, max: 999999, label: 'فوق-50-دينار' }
];

// 4. Generate Long-tail Keywords
const keywords = [];
products.forEach(p => {
  if (p.title && p.category) {
    keywords.push(`${p.title} الكويت`);
    keywords.push(`شراء ${p.title} اونلاين`);
    keywords.push(`${p.title} بسعر رخيص`);
    keywords.push(`${p.category} الكويت`);
  }
});

console.log(`✅ Generated ${keywords.length} long-tail keywords`);

// 5. Generate Mega Sitemap with all variations
let megaSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  
  <!-- Main Page -->
  <url>
    <loc>https://kuwait-pro.github.io/kuwait-store/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
  
  <!-- Cart Page -->
  <url>
    <loc>https://kuwait-pro.github.io/kuwait-store/cart</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Category Pages -->
${categories.map(cat => `  <url>
    <loc>https://kuwait-pro.github.io/kuwait-store/?search=${encodeURIComponent(cat)}</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`).join('\n')}
  
  <!-- All Products -->
${products.map(product => {
  const cleanTitle = escapeXml(product.title || '');
  const cleanDesc = escapeXml((product.description || '').substring(0, 100));
  const cleanImage = escapeXml(product.media?.main_image || '');
  
  return `  <url>
    <loc>https://kuwait-pro.github.io/kuwait-store/product/${product.id}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <lastmod>${new Date().toISOString()}</lastmod>${cleanImage ? `
    <image:image>
      <image:loc>${cleanImage}</image:loc>
      <image:title>${cleanTitle}</image:title>
      <image:caption>${cleanDesc}</image:caption>
    </image:image>` : ''}
  </url>`;
}).join('\n')}
  
</urlset>`;

// Save Mega Sitemap
fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), megaSitemap);
console.log(`✅ Mega Sitemap created with ${products.length + categories.length + 2} URLs`);

// 6. Generate Keywords File for Google Ads
const keywordsFile = keywords.slice(0, 1000).join('\n');
fs.writeFileSync(path.join(__dirname, 'public', 'keywords.txt'), keywordsFile);
console.log(`✅ Keywords file created (1000 keywords)`);

// 7. Generate SEO Report
const seoReport = {
  totalProducts: products.length,
  totalCategories: categories.length,
  totalBrands: brands.length,
  totalKeywords: keywords.length,
  totalSitemapURLs: products.length + categories.length + 2,
  averageProductTitleLength: Math.round(products.reduce((sum, p) => sum + (p.title?.length || 0), 0) / products.length),
  productsWithImages: products.filter(p => p.media?.main_image).length,
  productsWithDescriptions: products.filter(p => p.description).length,
  seoScore: Math.round((
    (products.filter(p => p.media?.main_image).length / products.length * 30) +
    (products.filter(p => p.description).length / products.length * 30) +
    (products.filter(p => p.title?.length > 10).length / products.length * 20) +
    (categories.length > 0 ? 20 : 0)
  ))
};

fs.writeFileSync(
  path.join(__dirname, 'public', 'seo-report.json'), 
  JSON.stringify(seoReport, null, 2)
);

console.log('\n📊 SEO Report:');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`📦 Total Products: ${seoReport.totalProducts}`);
console.log(`📁 Total Categories: ${seoReport.totalCategories}`);
console.log(`🏷️  Total Brands: ${seoReport.totalBrands}`);
console.log(`🔑 Total Keywords: ${seoReport.totalKeywords}`);
console.log(`🗺️  Sitemap URLs: ${seoReport.totalSitemapURLs}`);
console.log(`📸 Products with Images: ${seoReport.productsWithImages} (${Math.round(seoReport.productsWithImages/seoReport.totalProducts*100)}%)`);
console.log(`📝 Products with Descriptions: ${seoReport.productsWithDescriptions} (${Math.round(seoReport.productsWithDescriptions/seoReport.totalProducts*100)}%)`);
console.log(`⭐ SEO Score: ${seoReport.seoScore}/100`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

console.log('✅ Mass SEO Generation Complete!\n');
console.log('📋 Generated Files:');
console.log('   - public/sitemap.xml (Mega Sitemap)');
console.log('   - public/keywords.txt (1000 Keywords)');
console.log('   - public/seo-report.json (SEO Report)');
console.log('\n🚀 Next Steps:');
console.log('   1. npm run build');
console.log('   2. Deploy to GitHub Pages');
console.log('   3. Submit sitemap to Google Search Console');
console.log('   4. Use keywords.txt for Google Ads campaigns\n');
