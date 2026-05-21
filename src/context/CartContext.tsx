import { createContext } from 'react';

export interface CartItem {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (name: string) => void;
  updateQuantity: (name: string, quantity: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
