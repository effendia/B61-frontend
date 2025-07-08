<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
=======
import { useState, useEffect } from "react"
import type { Product } from "./api/products"
import { searchProduct } from "./api/product"
import ProductList from "./components/productList"
import { useDebounce } from "./hooks/debounce"

function App() {
  const [query, setQuery] = useState("")
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const debouncedQuery = useDebounce(query, 1000)

  useEffect(() => {
    if (!debouncedQuery) {
      setProducts([])
      return
    }

    async function fetchData() {
      try {
        setLoading(true)
        setError("")
        const result = await searchProduct(debouncedQuery)
        setProducts(result)
      } catch {
        setError("Terjadi kesalahan saat mencari produk.")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [debouncedQuery])

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1> Cari Produk</h1>
      <input
        type="text"
        placeholder="nama produk..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "8px",
          width: "100%",
          marginBottom: "10px"
        }}
      />
      {loading && <p> Sedang mencari produk...</p>}
      {error && <p style={{ color: "red" }}>⚠️ {error}</p>}
      {!loading && !error && <ProductList products={products} />}
    </div>
>>>>>>> 090c060 (search product)
  )
}

export default App
