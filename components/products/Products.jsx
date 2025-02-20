import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import { Loader } from "../loader/Loader"

export const Products =  async ({items}) => {
    // const API_URL =  'https://fakestoreapi.com/products'
    const products = await items	
  return (
    <main>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 m-2">{products.map(product => 
            <div key={product.id} className={`${product.stock < 1 ? 'opacity-50' : ''} py-2 border border-slate-400 shadow-lg text-center flex flex-col bg-secondary`}>
                <h2 className="truncate px-1">{product.title}</h2>
                <Link href={product.stock < 1 ? '' : `/product/${product.id}`}>
                    <div className="relative h-56 w-full hover:scale-105 hover:shadow-lg hover:shadow-slate-500"><Image src={product.image} className="object-fill" alt={product.title} fill/></div>
                </Link>
                <p>${product.price}</p>
            </div>            
        )}</div>
    </main>
  )
}
