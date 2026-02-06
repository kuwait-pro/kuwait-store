import { useCart } from '../context/CartContext';
import { useRouter } from 'next/router';
import Head from 'next/head';
import FloatingButtons from '../components/FloatingButtons';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    // تجهيز رسالة واتساب بالطلب
    let message = "مرحباً، أريد إتمام الطلب التالي:%0a";
    cart.forEach(item => {
      message += `- ${item.title} (العدد: ${item.quantity})%0a`;
    });
    message += `%0aالإجمالي: ${getCartTotal()} د.ك`;
    
    window.open(`https://wa.me/96500000000?text=${message}`, '_blank');
  };

  return (
    <div className="cart-page-container">
      <Head>
        <title>سلة المشتريات | متجر الكويت</title>
      </Head>
      
      <h1 className="cart-title">سلة المشتريات</h1>

      {cart.length === 0 ? (
        <div className="empty-cart" style={{ textAlign: 'center', padding: '50px' }}>
          <p>سلتك فارغة حالياً.</p>
          <button onClick={() => router.push('/')} className="continue-shopping-btn" style={{ marginTop: '20px', padding: '10px 20px', background: '#007A3D', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>تصفح المنتجات</button>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.media.main_image} alt={item.title} className="cart-item-img" />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p className="item-price">{item.pricing.sale || item.pricing.regular} د.ك</p>
                </div>
                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="remove-btn" style={{ marginRight: '15px', color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>حذف</button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h3>ملخص الطلب</h3>
            <div className="total-row" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 'bold', margin: '20px 0' }}>
              <span>الإجمالي:</span>
              <span className="total-price">{getCartTotal()} د.ك</span>
            </div>
            <button onClick={handleCheckout} className="checkout-btn">إتمام الطلب عبر واتساب</button>
            <button onClick={clearCart} className="clear-cart-btn">إفراغ السلة</button>
          </div>
        </div>
      )}
      <FloatingButtons />
    </div>
  );
}
