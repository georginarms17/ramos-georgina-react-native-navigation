import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Product {
  id: string;
  name: string;
  image: any;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
  selected: boolean; // Add selection feature
}

interface CartContextValue {
  items: CartItem[];
  addToCart: (product: Product) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  toggleSelection: (id: string) => void; // New function
  clearCart: () => void;
  clearSelectedItems: () => void; // New function
  totalPrice: number;
  selectedTotal: number; // New property
  hasSelectedItems: boolean; // New property
}

const CART_STORAGE_KEY = '@app_cart';

const CartContext = createContext<CartContextValue>({
  items: [],
  addToCart: () => {},
  increaseQty: () => {},
  decreaseQty: () => {},
  toggleSelection: () => {},
  clearCart: () => {},
  clearSelectedItems: () => {},
  totalPrice: 0,
  selectedTotal: 0,
  hasSelectedItems: false,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load cart on mount
  useEffect(() => {
    loadCart();
  }, []);

  // Save cart whenever it changes
  useEffect(() => {
    if (!isLoading) {
      saveCart();
    }
  }, [items, isLoading]);

  const loadCart = async () => {
    try {
      const savedCart = await AsyncStorage.getItem(CART_STORAGE_KEY);
      if (savedCart !== null) {
        setItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error('Failed to load cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveCart = async () => {
    try {
      await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Failed to save cart:', error);
    }
  };

  const addToCart = (product: Product) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === product.id);

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1, selected: false }];
    });
  };

  const increaseQty = (id: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id: string) => {
    setItems(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const toggleSelection = (id: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, selected: !item.selected }
          : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const clearSelectedItems = () => {
    setItems(prev => prev.filter(item => !item.selected));
  };

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const selectedTotal = items
    .filter(item => item.selected)
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  const hasSelectedItems = items.some(item => item.selected);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        increaseQty,
        decreaseQty,
        toggleSelection,
        clearCart,
        clearSelectedItems,
        totalPrice,
        selectedTotal,
        hasSelectedItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);