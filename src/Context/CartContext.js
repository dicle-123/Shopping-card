import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === Product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === Product.id
            ? { ...item, quantity: item.quantity + Product.quantity }
            : item
        );
      } else {
        return [...prevItems, Product];
      }
    });
  };

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <CartContext.Provider value={{ cartItems, addToCart, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
