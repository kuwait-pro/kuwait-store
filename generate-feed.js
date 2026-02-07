const fs = require('fs');
const path = require('path');

// Read products
const productsPath = path.join(__dirname, 'data', 'kuwait-products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

const BASE_URL = process.env.SITE_URL || 'https://kuwait-store.storesads.shop';

console.log(`🛍️ Generating Google Merchant Feed for ${BASE_URL}...\n`);

function generateFeed(baseUrl) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>متجر الكويت - Kuwait Store</title>
    <link>${baseUrl}</link>
    <description>متجر إلكتروني كويتي رائد يقدم أفضل المنتجات المنزلية والإلكترونيات بأسعار تنافسية</description>
${products.map(product => {
  const price = parseFloat(product.pricing?.regular || 0);
  const salePrice = parseFloat(product.pricing?.sale || 0);
  const finalPrice = salePrice > 0 && salePrice < price ? salePrice : price;
  const currency = product.pricing?.currency || 'KWD';
  
  const description = (product.description || product.title || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .substring(0, 5000);
  
  const title = (product.title || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .substring(0, 150);
  
  const imageUrl = product.media?.main_image || '';
  const category = product.category || 'منتجات عامة';
  const brand = product.brand || 'متجر الكويت';
  
  // Map Arabic categories to Google Product Category IDs
  const categoryMap = {
    'أدوات منزلية': '632',
    'عناية شخصية': '567',
    'إلكترونيات': '222',
    'ملابس': '166',
    'أحذية': '187',
    'إكسسوارات': '167',
    'رياضة': '499',
    'ألعاب': '1253',
    'كتب': '784',
    'صحة': '491'
  };
  const googleCategory = categoryMap[category] || '632'; // Default: Home & Garden
  
  return `    <item>
      <g:id>${product.id}</g:id>
      <g:title>${title}</g:title>
      <g:description>${description}</g:description>
      <g:link>${baseUrl}/product/${product.id}</g:link>
      <g:image_link>${imageUrl}</g:image_link>
      ${product.media?.gallery?.slice(0, 10).map((img, idx) => 
        `<g:additional_image_link>${img}</g:additional_image_link>`
      ).join('\n      ') || ''}
      <g:condition>new</g:condition>
      <g:availability>in stock</g:availability>
      <g:price>${finalPrice.toFixed(3)} ${currency}</g:price>
      ${salePrice > 0 && salePrice < price ? `<g:sale_price>${salePrice.toFixed(3)} ${currency}</g:sale_price>` : ''}
      <g:brand>${brand}</g:brand>
      <g:gtin></g:gtin>
      <g:mpn>${product.id}</g:mpn>
      <g:google_product_category>${googleCategory}</g:google_product_category>
      <g:product_type>${category}</g:product_type>
      <g:shipping>
        <g:country>KW</g:country>
        <g:service>Standard</g:service>
        <g:price>0.000 KWD</g:price>
      </g:shipping>
      <g:shipping_weight>1 kg</g:shipping_weight>
      <g:identifier_exists>no</g:identifier_exists>
    </item>`;
}).join('\n')}
  </channel>
</rss>`;
}

// Save feed
const feed = generateFeed(BASE_URL);
fs.writeFileSync(path.join(__dirname, 'public', 'feed.xml'), feed);
console.log(`✅ Google Merchant Feed created with ${products.length} products`);
console.log(`📍 Feed URL: ${BASE_URL}/feed.xml\n`);
