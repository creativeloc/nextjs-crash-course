"use client"

import { useEffect, useState } from "react"

interface Product {
  title: string
  id: number
}

// FETCHING DATA FROM SERVER COMPONENT
// const Products = async () => {
//   const data = await fetch("https://dummyjson.com/products")
//   const { products } = await data.json()

//   return (
//     <div>
//       {products.map((product: Product) => (
//         <h3 key={product.id}>{product.title}</h3>
//       ))}
//     </div>
//   )
// }
// export default Products

// FETCHING DATA FROM CLIENT COMPONENT
// First mark the component page at the top as "use client"
const Products = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products")
        const { products: data } = await response.json()
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div>
      {products.map((product: Product) => {
        return <h1 key={product.id}>{product.title}</h1>
      })}
    </div>
  )
}
export default Products
