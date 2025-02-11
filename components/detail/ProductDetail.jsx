import { getProduct } from "@/services/products"
import Image from "next/image"

export const ProductDetail = async ({id}) => {
    const API_URL = 'https://fakestoreapi.com/products'
    const detail = await getProduct(API_URL, id)
  return ( 
    <div>
        <h1 className="text-2xl text-center m-4">{detail.title}</h1>
        <div className="flex gap-4 flex-row m-4">
        <Image src={detail.image} width={500} height={500} alt={detail.title} />
        <div className="flex flex-col">
            <p className="text-xl">{detail.description}</p>
            <p className="text-xl">${detail.price}</p>
        </div>
        </div>
    </div>
  )
}