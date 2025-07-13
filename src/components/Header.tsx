import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Button } from "../components/ui/button";

export default function Header() {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-orange-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">🧡 Amel Store</Link>
      </h1>
      <nav className="flex gap-4 items-center">
        <Link to="/products" className="hover:underline">
          Produk
        </Link>
        <Link to="/cart">
          <Button variant="secondary">
            Keranjang 🛒
            {totalItems > 0 && (
              <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs bg-white text-orange-600 rounded-full">
                {totalItems}
              </span>
            )}
          </Button>
        </Link>
      </nav>
    </header>
  );
}
