import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // تحميل السلة من التخزين المحلي عند البدء
  useEffect(() => {
    const savedCart = localStorage.getItem('kuwait-store-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // حفظ السلة عند أي تغيير
  useEffect(() => {
    localStorage.setItem('kuwait-store-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // فتح السلة عند الإضافة
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
      )
    );
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const total = cart.reduce((acc, item) => acc + item.pricing.sale * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, isCartOpen, toggleCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
