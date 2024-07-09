// CartContext.js
import React, { createContext, useState } from "react";
import { auth } from "../../Firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (!auth.currentUser) {
      // Redirect to the login page and show a message to ask the user to log in
      navigate("/login");
      toast.error("Please login first");
    } else {
      if (existingItem) {
        // If the product already exists in the cart, update its quantity
        setCartItems((prevCartItems) =>
          prevCartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        // If the product is not in the cart, add it with quantity 1
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
        toast.success("Product added to cart", {
          autoClose: 3000,
        });
      }
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };
  const increaseQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
