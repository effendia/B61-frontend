import type { Product } from "../api/products"



type Props = {
  products: Product[]
}

export default function ProductList({ products }: Props) {
  if (products.length === 0) {
    return <p>❌ Produk tidak ditemukan.</p>
  }

  return (
    <div style={{
      display: "grid",
      gap: "1rem",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"
    }}>
      {products.map((product) => (
        <div key={product.id} style={{
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "8px"
        }}>
          <img src={product.thumbnail} alt={product.title} width="100%" />
          <h3>{product.title}</h3>
          <p>💰 Rp {product.price.toLocaleString()}</p>
        </div>
      ))}
    </div>
  )
}
