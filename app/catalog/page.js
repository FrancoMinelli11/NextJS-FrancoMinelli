import { Products } from "@/components/products/Products"
import { getProducts } from "@/services/products"

export default function page () {
  return (
    <Products items={getProducts()}/>
  )
}