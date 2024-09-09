import { createContext, useState } from "react";
import Product from "../components/Product/Product";

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
  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
