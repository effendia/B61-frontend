import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import type { Product } from "../types/cart";
import { Button } from "../components/ui/button";

export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart, loading } = useCart();

  useEffect(() => {
    setProducts([
       {
    id: 1,
    name: "Indomie",
    price: 3000,
    image: "https://img.lazcdn.com/g/ff/kf/Sbad1b5dc6fb4442f96216c33a27d9b102.jpg_360x360q80.jpg_.webp",
  },
  {
    id: 2,
    name: "Kopi ABC Susu",
    price: 2000,
    image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//100/MTA-7282396/abc_abc_kopi_susu_20_sachet_full02_tagbxaxv.jpg",
  },
  {
    id: 3,
    name: "SilverQueen Chunky Bar",
    price: 12000,
    image: "https://down-id.img.susercontent.com/file/id-11134207-7rask-m62uajq6kx6uc7",
  },
  {
    id: 4,
    name: "Aqua 600ml",
    price: 3500,
    image: "https://i0.wp.com/raisa.aeonstore.id/wp-content/uploads/2023/04/1028348.jpg?fit=800%2C800&ssl=1",
  },
    ]);
  }, []);

  return (
    <section className="p-6 min-h-screen bg-orange-50">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-700">🍛 Daftar Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow text-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
            <p className="text-orange-600 font-bold mb-2">Rp {product.price.toLocaleString()}</p>
            <Button onClick={() => addToCart(product)} disabled={loading}>
              {loading ? "Menambahkan..." : "Tambah ke Keranjang"}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
