import { createContext, useContext, useState } from "react";
import type { CartItem, Product, CartContextType } from "../types/cart";

const CartContext = createContext<CartContextType | undefined>(undefined);
const [loadingItemId, setLoadingItemId] = useState<number | null>(null);


export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  const addToCart = async (product: Product) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500)); 
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setLoading(false);
  };

  const updateQuantity = async (productId: number, quantity: number) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
    setLoading(false);
  };

  const increaseQty = async (productId: number) => {
  setLoadingItemId(productId);
  await new Promise((resolve) => setTimeout(resolve, 500));
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
  setLoadingItemId(null);
};


const decreaseQty = async (productId: number) => {
  setLoadingItemId(productId);
  await new Promise((resolve) => setTimeout(resolve, 500));
  setCartItems((prev) =>
    prev
      .map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0)
  );
  setLoadingItemId(null);
};

const removeFromCart = async (productId: number) => {
  setLoadingItemId(productId);
  await new Promise((resolve) => setTimeout(resolve, 500));
  setCartItems((prev) => prev.filter((item) => item.id !== productId));
  setLoadingItemId(null);
};



  return (
   <CartContext.Provider
    value={{
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    loadingItemId,
    increaseQty,
    decreaseQty, 
    loading,
  }}
>
  {children}
</CartContext.Provider>

  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};
