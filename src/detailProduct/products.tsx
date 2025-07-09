export type Product = {
  id: number
  name: string
  image: string
  price: number
  description: string
  
}

export const products: Product[] = [
  {
    id: 1,
    name: "mie goreng",
    image: "https://allofresh.id/blog/wp-content/uploads/2023/09/cara-membuat-mie-goreng-4-1-scaled.jpg",
    price: 10000,
    description:""
  },
  {
    id: 2,
    name: "dimsum premium",
    image: "https://cdn.webane.net/forbis.id/2022/12/8b3c593d-forbis-dimsum-indonesia-3.jpg",
    price: 18000,
    description:""
  },
  {
    id: 3,
    name: "nasi goreng",
    image: "https://awsimages.detik.net.id/community/media/visual/2023/08/18/resep-nasi-goreng-jawa_43.jpeg?w=600&q=90",
    price: 15000,
    description:""
  },
]
