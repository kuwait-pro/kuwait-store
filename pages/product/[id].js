// c:\Users\sherow\Desktop\next-js-kuwait\kuwait-store\pages\product\[id].js

import { useState } from 'react';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Image from 'next/image';
import { useCart } from '../../context/CartContext';
import FloatingButtons from '../../components/FloatingButtons';

export default function ProductDetails({ product }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [mainImage, setMainImage] = useState(product.media.main_image);

  if (router.isFallback) {
    return <div>جاري التحميل...</div>;
  }

  // سكيما المنتج (Product Schema) لتحسين السيو والنتائج الغنية
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": [product.media.main_image, ...product.media.gallery],
    "description": product.description,
    "sku": product.id,
    "brand": {
      "@type": "Brand",
      "name": "Kuwait Store"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://your-domain.com/product/${product.id}`,
      "priceCurrency": "KWD",
      "price": product.pricing.sale || product.pricing.regular,
      "availability": product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };

  return (
    <div className="product-page-container">
      <Head>
        <title>{product.title} | متجر الكويت</title>
        <meta name="description" content={product.description.substring(0, 160)} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </Head>

      <div className="product-details-wrapper">
        {/* قسم الصور */}
        <div className="product-gallery">
          <div className="main-image-frame">
            <img src={mainImage} alt={product.title} />
          </div>
          <div className="thumbnails">
            <img 
              src={product.media.main_image} 
              onClick={() => setMainImage(product.media.main_image)} 
              className={mainImage === product.media.main_image ? 'active' : ''}
              alt="Main"
            />
            {product.media.gallery.map((img, idx) => (
              <img 
                key={idx} 
                src={img} 
                onClick={() => setMainImage(img)} 
                className={mainImage === img ? 'active' : ''}
                alt={`Gallery ${idx}`}
              />
            ))}
          </div>
        </div>

        {/* قسم المعلومات */}
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <div className="product-category">{product.category}</div>
          
          <div className="product-price">
            {product.pricing.sale ? (
              <>
                <span className="sale-price">{product.pricing.sale} د.ك</span>
                <span className="regular-price">{product.pricing.regular} د.ك</span>
              </>
            ) : (
              <span className="normal-price">{product.pricing.regular} د.ك</span>
            )}
          </div>

          <div className="product-description">
            <p>{product.description}</p>
          </div>

          <div className="actions">
            <button 
              className="add-to-cart-btn"
              onClick={() => {
                addToCart(product);
                alert('تمت الإضافة للسلة بنجاح!');
              }}
            >
              أضف إلى السلة
            </button>
            <button 
              className="whatsapp-order-btn"
              onClick={() => window.open(`https://wa.me/96500000000?text=مرحباً، أريد طلب المنتج: ${product.title}`, '_blank')}
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
    params: { id: product.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'data', 'kuwait-products.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(jsonData);
  const product = products.find((p) => p.id === params.id);

  return {
    props: {
      product,
    },
  };
}
