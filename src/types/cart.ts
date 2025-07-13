export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export type CartItem = Product & {
  quantity: number;
};

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => Promise<void>;
  updateQuantity: (productId: number, quantity: number) => Promise<void>;
  removeFromCart: (productId: number) => Promise<void>;
  increaseQty: (productId: number) => Promise<void>;
  decreaseQty: (productId: number) => Promise<void>;
  loadingItemId: number | null;
  loading:boolean;
 
};