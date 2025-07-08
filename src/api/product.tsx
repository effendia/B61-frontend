import { productsData } from "./products"
import type { Product } from "./products"


export async function searchProduct(query: string): Promise<Product[]> {
  return new Promise((resolve) => {
    const result = productsData.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    )
    setTimeout(() => {
      resolve(result)
    }, 500) 
  })
}
