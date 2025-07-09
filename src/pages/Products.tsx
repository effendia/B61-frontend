import { products } from "../detailProduct/products"
import ProductCard from "../Components/productCard"

export default function Products() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4"> Daftar Produk</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
