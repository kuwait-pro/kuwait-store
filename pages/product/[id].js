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

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": [product.media?.main_image, ...(product.media?.gallery || [])],
    "description": product.description,
    "sku": product.id,
    "brand": {
      "@type": "Brand",
      "name": "Kuwait Store"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://kuwait-store.com/product/${product.id}`,
      "priceCurrency": "KWD",
      "price": salePrice > 0 ? salePrice : price,
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="product-page-container" style={{ maxWidth: '1200px', margin: '20px auto', padding: '20px' }}>
      <Head>
        <title>{product.title} | متجر الكويت</title>
        <meta name="description" content={product.description?.substring(0, 160)} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
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
