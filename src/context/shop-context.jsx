import React, { createContext, useState, useEffect } from 'react';
import { ItemsList } from '../Items/itemsList';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < ItemsList.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProv = (props) => {
  // Load cartItems from localStorage on component mount
  const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || getDefaultCart();
  const [cartItems, setCartItems] = useState(storedCartItems);

  // Save cartItems to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = ItemsList.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const getTotalItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
        totalItems += cartItems[item];
    }
    return totalItems;
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const manualCartItem = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const removeAll = () => {
    setCartItems([]);
  }

  const contextValue = { cartItems, addToCart, removeFromCart, manualCartItem, getTotalAmount, getTotalItems, removeAll };

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  );
};
