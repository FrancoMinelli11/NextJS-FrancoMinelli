import { getProducts } from "@/services/products"
import Image from "next/image"
import { Button } from "../button/Button"

export const ProductDetail = async ({id}) => {
    const detail = await getProducts(id)
  return ( 
    <div>
        <h1 className="text-2xl text-center m-4">{detail.title}</h1>
        <div className="flex gap-4 flex-col m-4 items-center">
        <Image src={detail.image} width={300} height={300} alt={detail.title} />
        <div className="flex flex-col items-center">
            <p className="text-2xl">${detail.price}</p>
            <p className="text-xl">{detail.description}</p>
        </div>
        <Button text={'Añadir al carrito'} />
        </div>
    </div>
  )
}