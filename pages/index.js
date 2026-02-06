import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import ProductCard from '../components/ProductCard';
// import FloatingButtons from '../components/FloatingButtons'; // تم تعليقه لتجنب الأخطاء إذا لم تقم بإنشاء الملف بعد

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

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <Head>
        <title>متجر الكويت | تسوق أفضل المنتجات</title>
        <meta name="description" content="متجر الكويت يقدم أفضل المنتجات المنزلية والعناية الشخصية بأسعار مميزة." />
      </Head>

      {search ? (
        <h2 style={{ marginBottom: '20px', textAlign: 'right' }}>نتائج البحث عن: "{search}"</h2>
      ) : (
        <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>أحدث المنتجات</h1>
      )}
      
      {/* شبكة المنتجات */}
      {filteredProducts.length > 0 ? (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
          gap: '20px' 
        }}>
          {filteredProducts.slice(0, visibleCount).map((product) => (
            <div 
              key={product.id} 
              onClick={() => router.push(`/product/${product.id}`)} 
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  router.push(`/product/${product.id}`);
                }
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '50px', fontSize: '1.2rem', color: '#666' }}>
          لا توجد منتجات تطابق بحثك.
        </div>
      )}

      {/* زر تحميل المزيد يظهر فقط إذا كان هناك منتجات متبقية */}
      {visibleCount < filteredProducts.length && (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button 
            onClick={showMore}
            style={{
              padding: '10px 30px',
              fontSize: '16px',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#005bb5'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#0070f3'}
          >
            تحميل المزيد
          </button>
        </div>
      )}
      {/* <FloatingButtons /> */}
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
