import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import ProductCard from '../components/ProductCard';

export default function Home({ products }) {
  const [visibleCount, setVisibleCount] = useState(12);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const router = useRouter();
  const { search } = router.query;

  useEffect(() => {
    if (search) {
      const lowerSearch = search.toLowerCase();
      const filtered = products.filter(p => 
        p.title?.toLowerCase().includes(lowerSearch) || 
        p.description?.toLowerCase().includes(lowerSearch)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
    setVisibleCount(12);
  }, [search, products]);

  const showMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "متجر الكويت",
    "alternateName": "Kuwait Store",
    "url": "https://kuwait-store.com",
    "logo": "https://kuwait-store.com/logo.png",
    "description": "متجر إلكتروني كويتي رائد يقدم أفضل المنتجات المنزلية والعناية الشخصية والإلكترونيات بأسعار تنافسية وتوصيل سريع لجميع مناطق الكويت",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "شارع الخليج العربي",
      "addressLocality": "مدينة الكويت",
      "addressRegion": "العاصمة",
      "postalCode": "13001",
      "addressCountry": "KW"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+201110760081",
      "contactType": "customer service",
      "areaServed": "KW",
      "availableLanguage": ["ar", "en"]
    },
    "sameAs": [
      "https://wa.me/201110760081"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "متجر الكويت",
    "url": "https://kuwait-store.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://kuwait-store.com/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "الرئيسية",
      "item": "https://kuwait-store.com"
    }]
  };

  return (
    <div className="main-container">
      <Head>
        <title>متجر الكويت | تسوق أونلاين في الكويت - منتجات منزلية وإلكترونيات</title>
        <meta name="description" content="متجر إلكتروني كويتي رائد يوفر أكثر من 2000 منتج منزلي وإلكتروني بأسعار تنافسية. شحن مجاني وتوصيل سريع لجميع مناطق الكويت. استرجاع مجاني خلال 14 يوم." />
        <meta name="keywords" content="تسوق أونلاين الكويت, متجر إلكتروني كويتي, منتجات منزلية, إلكترونيات, عناية شخصية, شحن مجاني الكويت" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="متجر الكويت | تسوق أونلاين في الكويت" />
        <meta property="og:description" content="متجر إلكتروني كويتي رائد يوفر أكثر من 2000 منتج بأسعار تنافسية وشحن مجاني" />
        <meta property="og:url" content="https://kuwait-store.com" />
        <meta property="og:locale" content="ar_KW" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="geo.region" content="KW" />
        <meta name="geo.placename" content="Kuwait City" />
        <link rel="canonical" href="https://kuwait-store.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <header className="hero-header">
        <h1 className="hero-title">
          <span>متجر</span> الكويت
        </h1>
        <p className="hero-subtitle">الجودة . التوفير . الأصالة</p>
      </header>
      
      <div className="content-wrapper">
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
                style={{ cursor: 'pointer' }}
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
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'kuwait-products.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const allProducts = JSON.parse(jsonData);

  return {
    props: {
      products: allProducts,
    },
  };
}
