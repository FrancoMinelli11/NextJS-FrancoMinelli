import { getProducts } from "@/services/products"
import Image from "next/image"
import Link from "next/link"

export const Products =  async ({items}) => {
    // const API_URL =  'https://fakestoreapi.com/products'
    const products = await items	
  return (
    <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-2">{products.map(product => 
            <div key={product.id} className="py-2 border border-slate-400 shadow-lg text-center flex flex-col bg-[#132F63]">
                <h2 className="h-7 truncate px-1">{product.title}</h2>
                <Link href={`/product/${product.id}`}>
                    <div className="relative lg:h-[255px] md:h-[300px] h-[300px] w-full"><Image src={product.image} className="object-fill" alt={product.title} fill/></div>
                </Link>
                <p>${product.price}</p>
            </div>            
        )}</div>
    </main>
  )
}