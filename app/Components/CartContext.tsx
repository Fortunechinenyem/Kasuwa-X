import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartContextProps {
  children: ReactNode;
}

interface CartContextValue {
  cartItems: number;
  addToCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider: React.FC<CartContextProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems((prevItems) => prevItems + 1);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
