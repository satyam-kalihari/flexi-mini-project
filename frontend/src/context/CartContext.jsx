import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localCart = localStorage.getItem('cart');
    if (localCart) {
      setCart(JSON.parse(localCart));
    }
  }, []);

  const addToCart = (id, name, price) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      let newCart;
      if (existingItem) {
        newCart = prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        newCart = [...prevCart, { id, name, price, quantity: 1 }];
      }
      localStorage.setItem('cart', JSON.stringify(newCart));
      alert(name + " has been added to your cart.");
      return newCart;
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((item) => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };
  
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
