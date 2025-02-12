import { getProducts } from "@/services/products"
import Image from "next/image"
import Link from "next/link"

export const Products =  async () => {
    // const API_URL =  'https://fakestoreapi.com/products'
    const products = await getProducts()
  return (
    <main>
        <h1 className="text-2xl text-center mb-4">Productos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-2">{products.map(product => 
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