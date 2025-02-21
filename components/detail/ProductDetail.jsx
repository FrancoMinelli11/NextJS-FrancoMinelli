"use client"
import { getProducts } from "@/services/products"
import Image from "next/image"
import { Button } from "../button/Button"
import { useContext, useEffect, useState } from "react"
import { Loader } from "lucide-react"
import { CartContext } from "@/context/CartContext"

export const ProductDetail = ({ id }) => {
    const { addItem } = useContext(CartContext)
    const [detail, setDetail] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const product = await getProducts(id)
                setDetail(product)
            } catch (error) {
                console.error("Error al obtener el producto:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchProduct()
    }, [id])

    if (loading) {
        return <div className="flex justify-center items-center h-40"><Loader className="animate-spin" /></div>
    }

    if (!detail) {
        return <p className="text-center text-lg">Producto no encontrado</p>
    }

    return (
        <div>
            <h1 className="text-xl sm:text-2xl text-center m-4">{detail.title}</h1>
            <div className="flex gap-4 flex-col m-4 items-center">
                <Image src={detail.image} width={300} height={300} alt={detail.title} />
                <div className="flex flex-col items-center">
                    <p className="text-lg sm:text-xl">${detail.price}</p>
                    <p className="text-lg sm:text-xl">{detail.description}</p>
                </div>
                <Button onClick={() => addItem(detail, 1)}>Añadir al carrito</Button>
            </div>
        </div>
    )
}
