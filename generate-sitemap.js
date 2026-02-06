const fs = require('fs');
const path = require('path');

// Read products
const productsPath = path.join(__dirname, 'data', 'kuwait-products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Generate sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://kuwait-pro.github.io/kuwait-store/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>
  <url>
    <loc>https://kuwait-pro.github.io/kuwait-store/cart</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
${products.map(product => `  <url>
    <loc>https://kuwait-pro.github.io/kuwait-store/product/${product.id}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    ${product.media?.main_image ? `<image:image>
      <image:loc>${product.media.main_image}</image:loc>
      <image:title>${product.title}</image:title>
    </image:image>` : ''}
  </url>`).join('\n')}
</urlset>`;

// Write sitemap
fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
console.log('✅ Sitemap generated with', products.length, 'products');
