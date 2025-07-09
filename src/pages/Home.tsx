import { Link } from "react-router-dom"
import { Button } from "../Components/ui/button"

export default function Home() {
  return (
    <section className="p-6 text-center bg-orange-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-orange-600 mb-4">🧡 Selamat Datang di Amel Store!</h1>
      <p className="text-lg text-gray-700 mb-6 max-w-md">
        Temukan berbagai makanan favoritmu di sini,
      </p>
      <Link to="/products">
        <Button size="lg">Lihat Produk</Button>
      </Link>
    </section>
  )
}
