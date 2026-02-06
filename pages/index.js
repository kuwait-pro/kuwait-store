﻿import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import ProductCard from '../components/ProductCard';
import FloatingButtons from '../components/FloatingButtons';

export default function Home({ products }) {
  // حالة لتحديد عدد المنتجات المعروضة (نبدأ بـ 12 منتج)
  const [visibleCount, setVisibleCount] = useState(12);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const router = useRouter();
  const { search } = router.query;

  // تصفية المنتجات بناءً على البحث
  useEffect(() => {
    if (search) {
      const lowerSearch = search.toLowerCase();
      const filtered = products.filter(p => 
        p.title.toLowerCase().includes(lowerSearch) || 
        p.description.toLowerCase().includes(lowerSearch)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
    // إعادة تعيين عدد المنتجات المعروضة عند تغيير البحث
    setVisibleCount(12);
  }, [search, products]);

  // دالة لزيادة عدد المنتجات المعروضة
  const showMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  // بيانات السكيما للمتجر (Store Schema)
  const storeSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "متجر الكويت",
    "image": "https://example.com/logo.png", // استبدل برابط الشعار
    "description": "أفضل المنتجات المنزلية والعصرية في الكويت بأسعار مميزة.",
    "telephone": "+201110760081",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "شارع الخليج",
      "addressLocality": "مدينة الكويت",
      "addressRegion": "العاصمة",
      "postalCode": "12345",
      "addressCountry": "KW"
    }
  };

  return (
    <div className="main-container">
      <Head>
        <title>متجر الكويت | تسوق بذكاء وأناقة</title>
        <meta name="description" content="متجر الكويت يقدم تشكيلة واسعة من المنتجات العصرية، أدوات منزلية، وإلكترونيات بتوصيل سريع لجميع مناطق الكويت." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
        />
      </Head>

      {/* هيدر بسيط للصفحة الرئيسية */}
      <header style={{ textAlign: 'center', padding: '40px 20px', background: '#f8f9fa', marginBottom: '30px', borderRadius: '0 0 20px 20px' }}>
        <h1 style={{ color: '#000', fontSize: '2.5rem', fontWeight: '800', marginBottom: '10px' }}>
          <span style={{ color: '#007A3D' }}>متجر</span> الكويت
        </h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>الجودة . التوفير . الأصالة</p>
      </header>
      
      <div className="products-wrapper" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        {search && (
          <h2 style={{ marginBottom: '20px', textAlign: 'right', borderRight: '4px solid #007A3D', paddingRight: '10px' }}>
            نتائج البحث عن: "{search}"
          </h2>
        )}
        
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.slice(0, visibleCount).map((product) => (
              <div 
                key={product.id} 
                onClick={() => router.push(`/product/${product.id}`)} 
                className="product-card-container"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            لا توجد منتجات تطابق بحثك.
          </div>
        )}

        {visibleCount < filteredProducts.length && (
          <div style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px' }}>
            <button onClick={showMore} className="load-more-btn">
              عرض المزيد من المنتجات
            </button>
          </div>
        )}
      </div>
      
      <FloatingButtons />
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'kuwait-products.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(jsonData);

  return {
    props: {
      products,
    },
  };
}
