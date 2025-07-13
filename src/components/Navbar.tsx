import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-orange-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">
        <Link to="/">🍽️ Amel Store</Link>
      </h1>
      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/products" className="hover:underline">Produk</Link>
        <Link to="/cart" className="hover:underline">
          Keranjang 🛒
          {totalItems > 0 && (
            <span className="ml-1 bg-white text-orange-600 rounded-full px-2 text-sm font-bold">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
