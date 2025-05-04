import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.title === product.title);
      
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity <= 0) {
          return prev.filter(item => item.title !== product.title);
        }
        return prev.map(item =>
          item.title === product.title 
            ? { ...item, quantity: newQuantity }
            : item
        );
      }
      
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productTitle) => {
    setCartItems(prev => prev.filter(item => item.title !== productTitle));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    totalItems: cartItems.reduce((total, item) => total + (item.quantity || 1), 0),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
