import React from "react";
import { useState, createContext } from "react";

export const CartContext = createContext([]);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);

  const isIteminCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeItem = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  const addToCartItem = (item, quantity) => {
    if (isIteminCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const totalPrice = () => {
    return cart.reduce(
      (prev, actual) => prev + actual.quantity * actual.price,
      0
    );
  };

  const totalProducts = () => {
    return cart.reduce(
      (accum, actualProduct) => accum + actualProduct.quantity,
      0
    );
  };

  console.log("carrito", cart);

  return (
    <CartContext.Provider
      value={{
        cart,
        clearCart,
        isIteminCart,
        removeItem,
        addToCartItem,
        totalPrice,
        totalProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
