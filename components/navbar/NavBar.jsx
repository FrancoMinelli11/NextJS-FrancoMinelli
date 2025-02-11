import Link from "next/link"

export const NavBar = () => {
  return (
    <nav className="flex justify-between h-[7vh] bg-emerald-900 items-center px-4">
        <Link href="/">KayFs</Link>
        <div className="flex gap-4">
            <Link href="/catalog">Catálogo</Link>
            <Link href="/cart">Carrito</Link>
        </div>
    </nav>
  )
}