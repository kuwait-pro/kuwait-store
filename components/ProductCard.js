import Link from 'next/link';

export default function ProductCard({ product }) {
  const price = parseFloat(product.pricing?.regular || 0);
  const salePrice = parseFloat(product.pricing?.sale || 0);
  const currency = product.pricing?.currency || 'KWD';

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img 
          src={product.media?.main_image || '/placeholder.png'} 
          alt={product.title || 'Product'} 
          className="product-image"
        />
      </div>
      <h3 className="product-title">
        {product.title}
      </h3>
      <div className="product-price-box">
        {salePrice > 0 && salePrice < price ? (
          <>
            <span className="price-sale">
              {salePrice.toFixed(3)} {currency}
            </span>
            <span className="price-regular">
              {price.toFixed(3)} {currency}
            </span>
          </>
        ) : (
          <span className="price-sale">
            {price.toFixed(3)} {currency}
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
