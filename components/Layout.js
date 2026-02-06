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
    <div className="main-container">
      {/* Header */}
      <header className="site-header">
        <div className="header-inner">
          
          {/* Logo */}
          <Link href="/" className="logo">
            <span>متجر</span> الكويت
          </Link>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="search-form">
            <input 
              type="text" 
              placeholder="ابحث عن منتج..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn">
              بحث
            </button>
          </form>

          {/* Cart Icon */}
          <div className="cart-icon-wrapper" onClick={toggleCart}>
            <span style={{ fontSize: '24px' }}>🛒</span>
            {cart.length > 0 && (
              <span className="cart-count-badge">
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: '1' }}>
        {children}
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <h3 className="footer-heading">عن المتجر</h3>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>متجر الكويت الأول لمنتجات المنزل والعناية الشخصية. جودة عالية وأسعار منافسة.</p>
          </div>
          <div>
            <h3 className="footer-heading">روابط هامة</h3>
            <ul className="footer-links" style={{ listStyle: 'none', padding: 0 }}>
              <li><Link href="/about">من نحن</Link></li>
              <li><Link href="/contact">اتصل بنا</Link></li>
              <li><Link href="/return-policy">سياسة الاسترجاع</Link></li>
              <li><Link href="/shipping-policy">سياسة الشحن</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-heading">تواصل معنا</h3>
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
