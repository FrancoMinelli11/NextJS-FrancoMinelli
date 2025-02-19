import Link from "next/link"
import { AuthLink } from "../authLink/AuthLink"

export const NavBar = () => {
  
  return (
    <nav className="flex justify-between h-[7vh] bg-primary items-center px-4">
        <Link href="/" className="hover:text-[#132F63]">KayFs</Link>
        <div className="flex gap-4">
            <Link href="/catalog" className="hover:text-[#132F63]">Catálogo</Link>
            <Link href="/cart" className="hover:text-[#132F63]">Carrito</Link>
            <AuthLink/>
        </div>
    </nav>
  )
}