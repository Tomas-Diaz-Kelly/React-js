/*import { createContext, useState } from "react" 

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)


    function addItem (item, quantity) {
        const newCart = [...cart];

        if(isInCart(item.id)){
            let newCart = cart.map(cartItem => {
                if(cartItem.id === item.id){
                    return {...cartItem, quantity: cartItem.quantity + quantity}
                }else{
                    return {...cartItem}
                }
            })
            setCart(newCart)
        } else{
                newCart.push({ ...item, quantity})
                setCart(newCart)

            }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
            { children }
        </CartContext.Provider>
    )
}*/

import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item, quantity) => {
    setCart(prevCart => [...prevCart, { ...item, quantity }]);
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


