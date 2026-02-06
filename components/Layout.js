import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '../context/CartContext';

export default function Layout({ children }) {
  const router = useRouter();
  const { cart, toggleCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'Tajawal, sans-serif' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '15px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '15px' }}>
          
          {/* Logo */}
          <Link href="/" style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', textDecoration: 'none' }}>
            متجر الكويت
          </Link>

          {/* Search Box */}
          <form onSubmit={handleSearch} style={{ flex: '1', maxWidth: '500px', display: 'flex' }}>
            <input 
              type="text" 
              placeholder="ابحث عن منتج..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '0 5px 5px 0', border: '1px solid #ddd', borderLeft: 'none', outline: 'none' }}
            />
            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '5px 0 0 5px', cursor: 'pointer' }}>
              بحث
            </button>
          </form>

          {/* Cart Icon */}
          <div style={{ position: 'relative', cursor: 'pointer' }} onClick={toggleCart}>
            <span style={{ fontSize: '24px' }}>🛒</span>
            {cart.length > 0 && (
              <span style={{ position: 'absolute', top: '-8px', right: '-8px', backgroundColor: 'red', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '12px' }}>
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: '1', backgroundColor: '#f9f9f9' }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '40px 20px', marginTop: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
          <div>
            <h3>عن المتجر</h3>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>متجر الكويت الأول لمنتجات المنزل والعناية الشخصية. جودة عالية وأسعار منافسة.</p>
          </div>
          <div>
            <h3>روابط هامة</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link href="/about" style={{ color: '#ccc', textDecoration: 'none' }}>من نحن</Link></li>
              <li><Link href="/contact" style={{ color: '#ccc', textDecoration: 'none' }}>اتصل بنا</Link></li>
              <li><Link href="/return-policy" style={{ color: '#ccc', textDecoration: 'none' }}>سياسة الاسترجاع</Link></li>
              <li><Link href="/shipping-policy" style={{ color: '#ccc', textDecoration: 'none' }}>سياسة الشحن</Link></li>
            </ul>
          </div>
          <div>
            <h3>تواصل معنا</h3>
            <p style={{ color: '#ccc' }}>واتساب: 201110760081+</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px', borderTop: '1px solid #444', paddingTop: '20px', color: '#888' }}>
          © 2023 متجر الكويت. جميع الحقوق محفوظة.
        </div>
      </footer>
    </div>
  );
}
