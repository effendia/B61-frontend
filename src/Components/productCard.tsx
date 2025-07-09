import type { Product } from "../detailProduct/products"
import { Button } from "../Components/ui/button"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart() // ✅ ambil dari context

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2 text-center">{product.name}</h2>
      <p className="text-orange-600 font-bold text-center">Rp {product.price}</p>
      <div className="mt-2 flex justify-between">
        <Link to={`/products/${product.id}`}>
          <Button variant="outline">Detail</Button>
        </Link>
        <Button onClick={() => addToCart(product)}>Add to Cart</Button> {/* ✅ tambah handler */}
      </div>
    </div>
  )
}

