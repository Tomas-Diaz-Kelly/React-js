import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item, quantity) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
  
    if (existingItem) {
      
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity };
        }
        return cartItem;
      });
  
      setCart(updatedCart);
    } else {
      
      setCart((prevCart) => [...prevCart, { ...item, quantity }]);
    }
  };
  

  const removeItemFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


