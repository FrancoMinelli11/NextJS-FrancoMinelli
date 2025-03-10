import { NavBar } from "@/components/navbar/NavBar";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { Footer } from "@/components/footer/Footer";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: "KayFs",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <AuthProvider>
          <CartProvider>
            <NavBar/>
            <main className="flex flex-col grow">
              {children}
            </main>
            <Footer/>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
