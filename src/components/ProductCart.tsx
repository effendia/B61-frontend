import { useState } from "react";
import { Product } from "../types/product";
import { useCart } from "../context/CartContext";
import { Button } from "../components/ui/button";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    setLoading(true);
 
    await new Promise((res) => setTimeout(res, 1000));
    addToCart(product);
    setLoading(false);
  };

  return (
    <div className="rounded-xl shadow-md bg-white p-4 flex flex-col items-center text-center">
      <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-4 rounded" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-orange-600 font-semibold mb-2">Rp {product.price.toLocaleString()}</p>
      <Button onClick={handleAddToCart} disabled={loading}>
        {loading ? "Menambahkan..." : "Add to Cart"}
      </Button>
    </div>
  );
}
