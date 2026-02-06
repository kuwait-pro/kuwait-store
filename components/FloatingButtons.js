import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '../context/CartContext';

export default function FloatingButtons() {
  const router = useRouter();
  const { getCartCount } = useCart();
  const [count, setCount] = useState(0);

  // تحديث العداد فقط في المتصفح لتجنب أخطاء الهيدريشن
  useEffect(() => {
    setCount(getCartCount());
  }, [getCartCount]);

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      zIndex: 1000
    }}>
      {/* زر الواتساب */}
      <a
        href="https://wa.me/96500000000" // استبدل الرقم برقمك الحقيقي
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: '#25D366',
          color: 'white',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          textDecoration: 'none',
          fontSize: '30px',
          cursor: 'pointer'
        }}
        title="تواصل معنا عبر واتساب"
      >
        📞
      </a>

      {/* زر السلة */}
      <div
        onClick={() => router.push('/cart')}
        style={{
          backgroundColor: '#0070f3',
          color: 'white',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          position: 'relative',
          fontSize: '24px'
        }}
        title="سلة المشتريات"
      >
        🛒
        {count > 0 && (
          <span style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            backgroundColor: '#ff0000',
            color: 'white',
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '12px',
            fontWeight: 'bold',
            border: '2px solid white'
          }}>
            {count}
          </span>
        )}
      </div>
    </div>
  );
}
