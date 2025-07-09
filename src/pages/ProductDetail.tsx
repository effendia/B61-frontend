import { useParams, useNavigate } from "react-router-dom"
import { products } from "../detailProduct/products"
import { Button } from "../Components/ui/button"

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const product = products.find((p) => p.id === Number(id))
  if (!product) return null // tidak perlu error

  return (
    <div className="mt-10 border-t pt-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-2 text-center">📦 Detail Produk</h2>
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-64 object-cover rounded" 
      />
      <h3 className="text-2xl font-bold mt-4">{product.name}</h3>
      <p className="text-orange-600 font-bold text-lg">Rp {product.price}</p>
      <p className="mt-2 text-gray-700">{product.description}</p>

      <div className="mt-4 flex justify-end">
        <Button variant="secondary" onClick={() => navigate("/products")}>
          Tutup
        </Button>
      </div>
    </div>
  )
}
