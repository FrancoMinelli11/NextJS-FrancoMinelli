import Link from "next/link"

export const NavBar = () => {
  return (
    <nav className="flex justify-between h-[7vh] bg-[#086788] items-center px-4">
        <Link href="/" className="hover:text-[#132F63]">KayFs</Link>
        <div className="flex gap-4">
            <Link href="/catalog" className="hover:text-[#132F63]">Catálogo</Link>
            <Link href="/cart" className="hover:text-[#132F63]">Carrito</Link>
            <Link href="/admin" className="hover:text-[#132F63]">Admin</Link>
        </div>
    </nav>
  )
}