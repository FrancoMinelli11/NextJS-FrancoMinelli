import Image from "next/image"
import Link from "next/link"
import { getProducts } from "@/services/products"

export const ProductsByCategory = async ({category}) => {
    const productsByCat = await getProducts(null,category)
  return (
    <main>
    <h1 className="text-2xl text-center mb-4">Productos</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-2">{productsByCat.map(product => 
        <div key={product.id} className="py-2 border border-slate-400 shadow-lg text-center flex flex-col bg-emerald-900">
            <h2>{product.title}</h2>
            <Link href={`/product/${product.id}`}>
                <div className="relative lg:h-[255px] md:h-[300px] h-[300px] w-full"><Image src={product.image} className="object-fill" alt={product.title} fill/></div>
            </Link>
            <p>${product.price}</p>
        </div>            
    )}</div>
</main>
  )
}