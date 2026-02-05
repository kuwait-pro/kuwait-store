import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '16px', textAlign: 'center', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
      <div style={{ position: 'relative', height: '200px', marginBottom: '10px' }}>
        <img 
          src={product.media.main_image} 
          alt={product.title} 
          style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
        />
      </div>
      <h3 style={{ fontSize: '1.1rem', margin: '10px 0', height: '40px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {product.title}
      </h3>
      <div style={{ margin: '10px 0' }}>
        {product.pricing.sale < product.pricing.regular ? (
          <>
            <span style={{ color: '#e44d26', fontWeight: 'bold', fontSize: '1.2rem' }}>
              {product.pricing.sale} {product.pricing.currency}
            </span>
            <span style={{ textDecoration: 'line-through', color: '#999', marginRight: '10px', fontSize: '0.9rem' }}>
              {product.pricing.regular} {product.pricing.currency}
            </span>
          </>
        ) : (
          <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
            {product.pricing.regular} {product.pricing.currency}
          </span>
        )}
      </div>
      <Link href={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
        <button style={{ 
          width: '100%', 
          padding: '10px', 
          backgroundColor: '#0070f3', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          عرض التفاصيل
        </button>
      </Link>
    </div>
  );
}
