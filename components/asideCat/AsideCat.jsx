import { getAllCategories } from "@/services/products"
import Link from "next/link"

export const AsideCat = async () => {
  const cats = await getAllCategories()
  return (
    <div className="flex flex-col bg-[#92B6B1] w-[180px] ml-2 mt-2 h-screen rounded-lg p-2 text-white">
      <h2>Categorías</h2>
      <hr />
      {cats.map((cat) => {
      return (
        <Link href={`/catalog/${cat.name}`} key={cat.name} className="text-xs first-letter:uppercase pt-2 hover:text-[#132F63]">{cat.slug}</Link>
      )
    })}</div>
  )
}