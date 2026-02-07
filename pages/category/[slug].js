import { useState } from 'react';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import ProductCard from '../../components/ProductCard';

export default function CategoryPage({ category, products }) {
  const router = useRouter();
  const [visibleCount, setVisibleCount] = useState(12);

  const showMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <div className="main-container">
      <Head>
        <title>{category} | متجر الكويت</title>
        <meta name="description" content={`تسوق ${category} من متجر الكويت. ${products.length} منتج متوفر بأسعار تنافسية وشحن مجاني.`} />
        <meta name="keywords" content={`${category}, ${category} الكويت, شراء ${category}, ${category} اونلاين`} />
        <link rel="canonical" href={`https://kuwait-store.storesads.shop/category/${encodeURIComponent(category)}`} />
      </Head>

      <div className="content-wrapper">
        <h1 style={{ fontSize: '2rem', marginBottom: '30px', textAlign: 'right', borderRight: '4px solid #007A3D', paddingRight: '15px' }}>
          {category}
        </h1>
        <p style={{ marginBottom: '30px', color: '#666', textAlign: 'right' }}>
          {products.length} منتج متوفر
        </p>

        <div className="products-grid">
          {products.slice(0, visibleCount).map((product) => (
            <div 
              key={product.id} 
              onClick={() => router.push(`/product/${product.id}`)} 
              style={{ cursor: 'pointer' }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {visibleCount < products.length && (
          <div style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px' }}>
            <button onClick={showMore} className="load-more-btn">
              عرض المزيد من المنتجات
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'data', 'kuwait-products.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(jsonData);

  const categories = [...new Set(products.map(p => p.category).filter(Boolean))];

  const paths = categories.map((category) => ({
    params: { slug: category },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'data', 'kuwait-products.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const allProducts = JSON.parse(jsonData);

  const category = params.slug;
  const products = allProducts.filter(p => p.category === category);

  return {
    props: {
      category,
      products,
    },
  };
}
