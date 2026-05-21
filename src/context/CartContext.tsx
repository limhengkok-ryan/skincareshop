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
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
