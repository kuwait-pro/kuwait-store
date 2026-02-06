import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '../context/CartContext';
import FloatingButtons from './FloatingButtons';

export default function Layout({ children }) {
  const router = useRouter();
  const { cart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/?search=${encodeURIComponent(searchTerm)}`);
      setMenuOpen(false);
    }
  };

  return (
    <div className="main-container">
      <header className="site-header">
        <div className="header-inner">
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="القائمة">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <Link href="/" className="logo">
            <span>متجر</span> الكويت
          </Link>

          <div className="cart-icon-wrapper" onClick={() => router.push('/cart')}>
            <span style={{ fontSize: '24px' }}>🛒</span>
            {cart.length > 0 && (
              <span className="cart-count-badge">{cart.length}</span>
            )}
          </div>
        </div>

        <form onSubmit={handleSearch} className="search-form-mobile">
          <input 
            type="text" 
            placeholder="ابحث عن منتج..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">🔍</button>
        </form>
      </header>

      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>
        <div className="menu-content">
          <button className="menu-close" onClick={() => setMenuOpen(false)}>×</button>
          <ul>
            <li><Link href="/" onClick={() => setMenuOpen(false)}>🏠 الرئيسية</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>ℹ️ من نحن</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)}>📞 اتصل بنا</Link></li>
            <li><Link href="/shipping" onClick={() => setMenuOpen(false)}>🚚 سياسة الشحن</Link></li>
            <li><Link href="/returns" onClick={() => setMenuOpen(false)}>🔄 سياسة الاسترجاع</Link></li>
            <li><Link href="/privacy" onClick={() => setMenuOpen(false)}>🔒 سياسة الخصوصية</Link></li>
            <li><Link href="/cart" onClick={() => setMenuOpen(false)}>🛒 السلة ({cart.length})</Link></li>
          </ul>
        </div>
      </nav>

      <main style={{ flex: '1', paddingTop: '140px', paddingBottom: '60px' }}>
        {children}
        <FloatingButtons />
      </main>

      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <h3 className="footer-heading">عن المتجر</h3>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>متجر الكويت الأول لمنتجات المنزل والعناية الشخصية. جودة عالية وأسعار منافسة.</p>
          </div>
          <div>
            <h3 className="footer-heading">روابط هامة</h3>
            <ul className="footer-links" style={{ listStyle: 'none', padding: 0 }}>
              <li><Link href="/">الرئيسية</Link></li>
              <li><Link href="/about">من نحن</Link></li>
              <li><Link href="/contact">اتصل بنا</Link></li>
              <li><Link href="/shipping">سياسة الشحن</Link></li>
              <li><Link href="/returns">سياسة الاسترجاع</Link></li>
              <li><Link href="/privacy">سياسة الخصوصية</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-heading">تواصل معنا</h3>
            <p style={{ color: '#ccc', marginBottom: '8px' }}>📞 جوال: +201110760081</p>
            <p style={{ color: '#ccc', marginBottom: '8px' }}>📧 ايميل: sherow1982@gmail.com</p>
            <p style={{ color: '#ccc', marginBottom: '8px' }}>🏢 الإدارة: مصر - الجيزة</p>
            <p style={{ color: '#ccc' }}>🚚 الشحن: من داخل الكويت</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px', borderTop: '1px solid #444', paddingTop: '20px', color: '#888' }}>
          © {new Date().getFullYear()} متجر الكويت. جميع الحقوق محفوظة.
        </div>
      </footer>
    </div>
  );
}
