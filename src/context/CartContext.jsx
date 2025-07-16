import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (animal) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === animal.id);
      if (existingItem) {
        alert(`${animal.name} is already in the cart.`);
        return prevItems; 
      }
      
      alert(`${animal.name} added to cart!`);
      return [...prevItems, animal];
    });
  };

  const removeFromCart = (animalId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== animalId));
  };
  
  const value = { 
    cartItems, 
    addToCart, 
    removeFromCart 
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};