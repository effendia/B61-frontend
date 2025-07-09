import { Outlet } from "react-router-dom"
import Products from "./Products"

export default function ProductsLayout() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛍️ Daftar Produk</h1>
      <Products />
      <Outlet />
    </div>
  )
}
