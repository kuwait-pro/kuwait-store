// c:\Users\sherow\Desktop\next-js-kuwait\kuwait-store\components\FloatingButtons.js

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '../context/CartContext';

export default function FloatingButtons() {
  const router = useRouter();
  const { getCartCount } = useCart();
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getCartCount());
  }, [getCartCount]);

  return (
    <div className="floating-container">
      {/* زر الواتساب */}
      <a
        href="https://wa.me/96500000000" // استبدل هذا برقمك الكويتي
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn whatsapp-btn"
        aria-label="تواصل معنا عبر واتساب"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.018-.967-.26-.099-.445-.149-.63.149-.186.297-.718.967-.881 1.165-.163.198-.326.223-.624.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.495.099-.198.05-.372-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.528c0 1.511 1.1 2.972 1.252 3.171.152.198 2.162 3.305 5.237 4.635 3.074 1.33 3.074.887 3.63.837.556-.05 1.758-.718 2.006-1.411.248-.695.248-1.29.173-1.414z"/></svg>
      </a>

      {/* زر السلة */}
      <div
        onClick={() => router.push('/cart')}
        className="float-btn cart-btn"
        aria-label="سلة المشتريات"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        {count > 0 && <span className="cart-badge">{count}</span>}
      </div>
    </div>
  );
}
