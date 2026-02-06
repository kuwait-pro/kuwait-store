import { useState } from 'react';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Link from 'next/link';
import { useCart } from '../../context/CartContext'; // استيراد السلة

export default function ProductPage({ product }) {
  const [selectedImage, setSelectedImage] = useState(product?.media?.main_image);
  const { addToCart } = useCart(); // استخدام السلة

  if (!product) return <div>المنتج غير موجود</div>;

  // إعداد بيانات السكيما (Schema.org)
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": [product.media.main_image, ...product.media.gallery],
    "description": product.description,
    "sku": product.id,
    "brand": {
      "@type": "Brand",
      "name": "متجر الكويت"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://yourstore.com/product/${product.id}`,
      "priceCurrency": product.pricing.currency,
      "price": product.pricing.sale,
      "availability": product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      <Head>
        <title>{product.title} | متجر الكويت</title>
        <meta name="description" content={product.description.substring(0, 160)} />
        {/* إضافة السكيما في الرأس */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginTop: '20px' }}>
        {/* الصور */}
        <div style={{ flex: '1 1 400px' }}>
          <img src={selectedImage || product.media.main_image} alt={product.title} style={{ width: '100%', borderRadius: '10px' }} />
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px', overflowX: 'auto' }}>
            {[product.media.main_image, ...product.media.gallery].map((img, idx) => (
              <img 
                key={idx} 
                src={img} 
                style={{ width: '70px', height: '70px', objectFit: 'cover', cursor: 'pointer', border: selectedImage === img ? '2px solid blue' : '1px solid #ddd' }} 
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* التفاصيل */}
        <div style={{ flex: '1 1 400px' }}>
          <h1>{product.title}</h1>
          <p style={{ fontSize: '1.5rem', color: '#0070f3', fontWeight: 'bold' }}>
            {product.pricing.sale} {product.pricing.currency}
          </p>
          
          <button 
            onClick={() => addToCart(product)}
            style={{ width: '100%', padding: '15px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', fontSize: '1.2rem', cursor: 'pointer', marginBottom: '15px' }}
          >
            إضافة إلى السلة
          </button>

          <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
            <h3>الوصف:</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'data', 'kuwait-products.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(jsonData);
  const paths = products.map((product) => ({ params: { id: product.id.toString() } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'data', 'kuwait-products.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(jsonData);
  const product = products.find((p) => p.id.toString() === params.id);
  return { props: { product } };
}
