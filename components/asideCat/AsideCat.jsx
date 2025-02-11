import { getAllCategories } from "@/services/products"
import Link from "next/link"

export const AsideCat = async () => {
  const cats = await getAllCategories()
  return (
    <div className="flex flex-col bg-[#D5FFD9] w-[180px] ml-2 mt-2 h-screen rounded-lg p-2 text-black">
      <h2>Categorías</h2>
      <hr />
      {cats.map((cat) => {
      return (
        <Link href={`/catalog/${cat}`} key={cat} className="text-xs first-letter:uppercase pt-2 hover:text-fuchsia-500">{cat}</Link>
      )
    })}</div>
  )
}