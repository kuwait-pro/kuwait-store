import { useState } from 'react';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import { useCart } from '../../context/CartContext';
import FloatingButtons from '../../components/FloatingButtons';

export default function ProductDetails({ product }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [mainImage, setMainImage] = useState(product?.media?.main_image || '');

  if (router.isFallback) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>جاري التحميل...</div>;
  }

  if (!product) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>المنتج غير موجود</div>;
  }

  const price = parseFloat(product.pricing?.regular || 0);
  const salePrice = parseFloat(product.pricing?.sale || 0);
  const currency = product.pricing?.currency || 'KWD';
  const finalPrice = salePrice > 0 && salePrice < price ? salePrice : price;

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": [product.media?.main_image, ...(product.media?.gallery || [])].filter(Boolean),
    "description": product.description,
    "sku": product.id,
    "brand": {
      "@type": "Brand",
      "name": "متجر الكويت"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://kuwait-store.com/product/${product.id}`,
      "priceCurrency": "KWD",
      "price": finalPrice.toFixed(3),
      "priceValidUntil": new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0],
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "متجر الكويت"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "KWD"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "KW"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 3,
            "unitCode": "DAY"
          }
        }
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 14,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": "https://kuwait-store.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": product.category || "منتجات",
        "item": `https://kuwait-store.com?search=${product.category}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.title,
        "item": `https://kuwait-store.com/product/${product.id}`
      }
    ]
  };

  return (
    <div className="product-page-container" style={{ maxWidth: '1200px', margin: '20px auto', padding: '20px' }}>
      <Head>
        <title>{product.title} | متجر الكويت - شحن مجاني</title>
        <meta name="description" content={`اشتري ${product.title} بسعر ${finalPrice.toFixed(3)} د.ك من متجر الكويت. شحن مجاني وتوصيل سريع (1-3 أيام). استرجاع مجاني خلال 14 يوم. ${product.description?.substring(0, 100)}`} />
        <meta name="keywords" content={`${product.title}, ${product.category}, تسوق أونلاين الكويت, شحن مجاني`} />
        <meta property="og:type" content="product" />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description?.substring(0, 160)} />
        <meta property="og:image" content={product.media?.main_image} />
        <meta property="og:url" content={`https://kuwait-store.com/product/${product.id}`} />
        <meta property="product:price:amount" content={finalPrice.toFixed(3)} />
        <meta property="product:price:currency" content="KWD" />
        <link rel="canonical" href={`https://kuwait-store.com/product/${product.id}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <div className="product-details-wrapper" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
        <div className="product-gallery" style={{ flex: '1', minWidth: '300px' }}>
          <div className="main-image-frame" style={{ marginBottom: '15px', border: '1px solid #eee', borderRadius: '10px', overflow: 'hidden' }}>
            <img src={mainImage} alt={product.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div className="thumbnails" style={{ display: 'flex', gap: '10px', overflowX: 'auto' }}>
            <img 
              src={product.media?.main_image} 
              onClick={() => setMainImage(product.media?.main_image)} 
              style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '5px', cursor: 'pointer', border: mainImage === product.media?.main_image ? '2px solid #007A3D' : '1px solid #eee' }}
              alt="Main"
            />
            {(product.media?.gallery || []).map((img, idx) => (
              <img 
                key={idx} 
                src={img} 
                onClick={() => setMainImage(img)} 
                style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '5px', cursor: 'pointer', border: mainImage === img ? '2px solid #007A3D' : '1px solid #eee' }}
                alt={`Gallery ${idx}`}
              />
            ))}
          </div>
        </div>

        <div className="product-info" style={{ flex: '1', minWidth: '300px' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '10px', color: '#333' }}>{product.title}</h1>
          <div style={{ color: '#888', marginBottom: '20px' }}>{product.category}</div>
          
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '25px', color: '#007A3D' }}>
            {salePrice > 0 && salePrice < price ? (
              <>
                <span style={{ color: '#CE1126', marginLeft: '15px' }}>{salePrice.toFixed(3)} {currency}</span>
                <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '1.2rem' }}>{price.toFixed(3)} {currency}</span>
              </>
            ) : (
              <span>{price.toFixed(3)} {currency}</span>
            )}
          </div>

          <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#555' }}>
            <p>{product.description}</p>
          </div>

          <div style={{ background: '#f0f9f4', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
            <p style={{ margin: '5px 0', color: '#007A3D' }}>✅ شحن مجاني لجميع مناطق الكويت</p>
            <p style={{ margin: '5px 0', color: '#007A3D' }}>✅ توصيل سريع (1-3 أيام عمل)</p>
            <p style={{ margin: '5px 0', color: '#007A3D' }}>✅ استرجاع مجاني خلال 14 يوم</p>
          </div>

          <div className="actions" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <button 
              onClick={() => {
                addToCart(product);
                alert('تمت الإضافة للسلة بنجاح!');
              }}
              style={{ padding: '15px', backgroundColor: '#000', color: 'white', border: 'none', borderRadius: '5px', fontSize: '1.1rem', cursor: 'pointer', fontWeight: 'bold' }}
            >
              أضف إلى السلة
            </button>
            <button 
              className="whatsapp-order-btn"
              onClick={() => window.open(`https://wa.me/201110760081?text=مرحباً، أريد طلب المنتج: ${product.title}`, '_blank')}
              style={{ padding: '15px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '5px', fontSize: '1.1rem', cursor: 'pointer', fontWeight: 'bold' }}
            >
              اطلب عبر واتساب
            </button>
          </div>
        </div>
      </div>
      <FloatingButtons />
    </div>
  );
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'data', 'kuwait-products.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(jsonData);

  const paths = products.map((product) => ({
    params: { id: String(product.id) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'data', 'kuwait-products.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(jsonData);
  const product = products.find((p) => String(p.id) === params.id);

  return {
    props: {
      product: product || null,
    },
  };
}
