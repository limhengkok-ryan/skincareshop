import { useState } from 'react';
import type { ReactNode } from 'react';
import { CartContext } from './CartContext';
import type { CartItem } from './CartContext';

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (name: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  const updateQuantity = (name: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(name);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === name ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
