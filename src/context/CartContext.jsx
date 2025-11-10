import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = (item) => {
    setCartItems((prev) => {
      const exist = prev.find(
        (i) => i.restaurantId === item.restaurantId && i.dishId === item.dishId
      );
      if (exist) {
        return prev.map((i) =>
          i.restaurantId === item.restaurantId && i.dishId === item.dishId
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
  };


  const removeItem = (restaurantId, dishId) => {
    setCartItems((prev) =>
      prev.filter((i) => i.restaurantId !== restaurantId || i.dishId !== dishId)
    );
  };

  const updateQuantity = (restaurantId, dishId, quantity) => {
    setCartItems((prev) =>
      prev.map((i) =>
        i.restaurantId === restaurantId && i.dishId === dishId
          ? { ...i, quantity }
          : i
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  console.log(cartItems);
  return (
    <CartContext.Provider
      value={{ cartItems, addItem, removeItem, updateQuantity, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
