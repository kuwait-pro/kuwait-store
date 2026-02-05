import { useState } from 'react';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Link from 'next/link';

export default function ProductPage({ product }) {
  // حالة لتغيير الصورة المعروضة عند النقر على الصور المصغرة
  const [selectedImage, setSelectedImage] = useState(product.media.main_image);

  if (!product) return <div style={{ textAlign: 'center', padding: '50px' }}>المنتج غير موجود</div>;

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif', direction: 'rtl' }}>
      <Head>
        <title>{product.title} | متجر الكويت</title>
        <meta name="description" content={product.description} />
      </Head>

      <Link href="/" style={{ textDecoration: 'none', color: '#333', marginBottom: '20px', display: 'inline-block', fontSize: '1.1rem' }}>
        &rarr; العودة للمتجر
      </Link>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginTop: '20px' }}>
        {/* قسم الصور */}
        <div style={{ flex: '1 1 400px' }}>
          <div style={{ border: '1px solid #eee', borderRadius: '10px', overflow: 'hidden' }}>
            <img 
              src={selectedImage} 
              alt={product.title} 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </div>
          
          {/* معرض الصور المصغرة */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '15px', overflowX: 'auto', paddingBottom: '5px' }}>
            {[product.media.main_image, ...product.media.gallery].map((img, index) => (
              <img 
                key={index}
                src={img}
                alt={`product-thumb-${index}`}
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  objectFit: 'cover', 
                  cursor: 'pointer', 
                  borderRadius: '5px', 
                  border: selectedImage === img ? '2px solid #0070f3' : '1px solid #ddd' 
                }}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* قسم التفاصيل */}
        <div style={{ flex: '1 1 400px' }}>
          <h1 style={{ marginTop: '0', fontSize: '2rem' }}>{product.title}</h1>
          <p style={{ color: '#666', fontSize: '0.9rem' }}>القسم: {product.category}</p>
          
          <div style={{ margin: '20px 0' }}>
            <span style={{ fontSize: '1.8rem', color: '#0070f3', fontWeight: 'bold' }}>
              {product.pricing.sale} {product.pricing.currency}
            </span>
            {product.pricing.regular > product.pricing.sale && (
              <span style={{ fontSize: '1.2rem', color: '#999', textDecoration: 'line-through', marginRight: '15px' }}>
                {product.pricing.regular} {product.pricing.currency}
              </span>
            )}
          </div>

          <button style={{
            width: '100%',
            padding: '15px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.2rem',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginBottom: '30px',
            transition: 'background 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#005bb5'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#0070f3'}
          >
            إضافة إلى السلة
          </button>
          
          <div style={{ lineHeight: '1.8', color: '#444', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0 }}>وصف المنتج:</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// دالة لجلب جميع مسارات المنتجات (IDs) لإنشاء الصفحات بشكل ثابت
export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'data', 'kuwait-products.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(jsonData);

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

// دالة لجلب بيانات المنتج بناءً على الـ ID
export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'data', 'kuwait-products.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(jsonData);
  
  const product = products.find((p) => p.id.toString() === params.id);

  return {
    props: {
      product,
    },
  };
}
