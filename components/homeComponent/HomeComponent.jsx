'use client'
import { loadProducts } from "@/services/products"
import { Button } from "../button/Button"

export const HomeComponent = () => {
  return (
    <div>
        <h1 className="text-2xl text-center my-4">¡Bienvenido a KAYFS!</h1>
        <p className="text-center">Aqui encontraras los mejores productos para ti</p>
    </div>
  )
}

//Saludar con nombre de usuario segun el sexo, osea: "bienvenida" o "bienvenido" segun el sexo del usuario