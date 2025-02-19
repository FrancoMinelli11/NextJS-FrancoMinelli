'use client'
import { AuthContext } from "@/context/AuthContext"
import { LogIn, LogOut } from "lucide-react"
import Link from "next/link"
import { useContext } from "react"

export const AuthLink = () => {
    const {logged, handleLogin} = useContext(AuthContext)
  return (
    logged ? <div className="flex flex-row gap-4">
                <p onClick={handleLogin} title="Cerrar sesión" className="hover:text-secondary block cursor-pointer"><LogOut/></p> 
                <Link href="/admin" className="hover:text-secondary">Admin</Link>
              </div>
          : <Link href="/login" title="Iniciar sesión" className="hover:text-secondary"><LogIn/></Link>
  )
}