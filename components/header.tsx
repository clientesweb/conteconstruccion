"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Inicio", href: "/#inicio" },
    { name: "Proyectos", href: "/#proyectos" },
    // { name: "Método Constructivo", href: "/metodo-constructivo" }, // Eliminado
    { name: "Nosotros", href: "/#nosotros" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/#contacto" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Inicio">
          <Image
            src="/images/logo.png"
            alt="Conte Construcción Logo"
            width={200} // Ajusta el ancho según sea necesario
            height={40} // Ajusta el alto según sea necesario
            className="h-auto w-auto max-h-8 sm:max-h-10 md:max-h-12" // Clases para responsividad
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-orange-500 font-akony font-bold transition-colors duration-200 text-base lg:text-lg"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Abrir menú de navegación">
              <Menu className="h-6 w-6 text-gray-700" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs sm:max-w-sm bg-white p-6">
            <div className="flex justify-between items-center mb-6">
              <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <Image
                  src="/images/conte-construccion-logo.png"
                  alt="Conte Construcción Logo"
                  width={150}
                  height={30}
                  className="h-auto w-auto max-h-8"
                />
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Cerrar menú">
                <X className="h-6 w-6 text-gray-700" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 hover:text-orange-500 font-akony font-bold text-lg py-2 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
