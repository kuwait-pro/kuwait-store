import { useCart } from '../context/CartContext';
import Link from 'next/link';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>سلة التسوق فارغة</h2>
        <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>تصفح المنتجات</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>سلة التسوق</h1>
      {cart.map((item) => (
        <div key={item.id} style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee', padding: '15px 0' }}>
          <img src={item.media.main_image} alt={item.title} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' }} />
          <div style={{ flex: 1, marginRight: '15px' }}>
            <h3>{item.title}</h3>
            <p>{item.pricing.sale} {item.pricing.currency}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
          </div>
          <button onClick={() => removeFromCart(item.id)} style={{ marginRight: '15px', color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>حذف</button>
        </div>
      ))}
      <div style={{ marginTop: '30px', textAlign: 'left' }}>
        <h2>الإجمالي: {total.toFixed(2)} KWD</h2>
        <button style={{ padding: '15px 30px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', fontSize: '18px', cursor: 'pointer' }}>
          إتمام الطلب
        </button>
      </div>
    </div>
  );
}
