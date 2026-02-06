import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img 
          src={product.media.main_image} 
          alt={product.title} 
          className="product-image"
        />
      </div>
      <h3 className="product-title">
        {product.title}
      </h3>
      <div className="product-price-box">
        {product.pricing.sale < product.pricing.regular ? (
          <>
            <span className="price-sale">
              {product.pricing.sale} {product.pricing.currency}
            </span>
            <span className="price-regular">
              {product.pricing.regular} {product.pricing.currency}
            </span>
          </>
        ) : (
          <span className="price-sale">
            {product.pricing.regular} {product.pricing.currency}
          </span>
        )}
      </div>
      <Link href={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
        <button className="btn-primary">
          عرض التفاصيل
        </button>
      </Link>
    </div>
  );
}
