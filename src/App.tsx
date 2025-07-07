import ProductCard from "./components/ProductCard";
import { useState } from "react";
import './App.css'

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

function App() {
  const [cart, setCart] = useState<number[]>([]); 

  const products: Product[] = [
    {
      id: 1,
      name: "Pensil Warna",
      price: 15000,
      image: "https://th.bing.com/th/id/OIP.uCSPiDv5bai8f7JdElql6gHaHD?w=226&h=215&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    {
      id: 2,
      name: "Buku Tulis",
      price: 10000,
      image: "https://cf.shopee.co.id/file/0c464acf3afcc06b27644bfc1174d244"
    }
  ];

  function handleToggleCart(productId:number) {
    if (cart.includes(productId)) {
      setCart(cart.filter((id) => id !== productId))
    } else {
      setCart([...cart, productId])
    }
  }
  return (
    <>
      <h1> Product List</h1>
       <p> 🛒 Cart: {cart.length} items</p>

      <div style={{ display: "flex", gap: "1rem" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            isAdded={cart.includes(product.id)}
            onToggle={() => handleToggleCart(product.id)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
