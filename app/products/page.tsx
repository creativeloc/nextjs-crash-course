interface Product {
  title: string
  id: number
}

const Products = async () => {
  const data = await fetch("https://dummyjson.com/products")
  const { products } = await data.json()

  return (
    <div>
      {products.map((product: Product) => (
        <h3 key={product.id}>{product.title}</h3>
      ))}
    </div>
  )
}
export default Products
