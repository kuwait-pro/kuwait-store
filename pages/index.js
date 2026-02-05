import { useState } from 'react';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import ProductCard from '../components/ProductCard';

export default function Home({ products }) {
  // حالة لتحديد عدد المنتجات المعروضة (نبدأ بـ 12 منتج)
  const [visibleCount, setVisibleCount] = useState(12);
  const router = useRouter();

  // دالة لزيادة عدد المنتجات المعروضة
  const showMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>متجر الكويت</h1>
      
      {/* شبكة المنتجات */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '20px' 
      }}>
        {products.slice(0, visibleCount).map((product) => (
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

      {/* زر تحميل المزيد يظهر فقط إذا كان هناك منتجات متبقية */}
      {visibleCount < products.length && (
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
              fontWeight: 'bold'
            }}
          >
            تحميل المزيد
          </button>
        </div>
      )}
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
