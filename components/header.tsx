"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [announcementVisible, setAnnouncementVisible] = useState(false)

  useEffect(() => {
    // Verificar si el anuncio está visible para ajustar la posición del header
    const checkAnnouncement = () => {
      const announcementClosed = localStorage.getItem("announcementClosed")
      setAnnouncementVisible(!announcementClosed)
    }

    checkAnnouncement()

    // Escuchar cambios en localStorage
    const handleStorageChange = () => {
      checkAnnouncement()
    }

    window.addEventListener("storage", handleStorageChange)

    // También verificar periódicamente por si el anuncio se cierra en la misma pestaña
    const interval = setInterval(checkAnnouncement, 1000)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      clearInterval(interval)
    }
  }, [])

  const desktopNavLinks = [
    { name: "TIPOLOGIAS", href: "/tipologias" },
    { name: "NOSOTROS", href: "/#nosotros" },
    { name: "BLOG", href: "/blog" },
    { name: "CONTACTO", href: "/#contacto" },
  ]

  const mobileNavLinks = [
    { name: "INICIO", href: "/#inicio" },
    { name: "TIPOLOGIAS", href: "/tipologias" },
    { name: "MÉTODO CONSTRUCTIVO", href: "/metodo-constructivo" },
    { name: "NOSOTROS", href: "/#nosotros" },
    { name: "BLOG", href: "/blog" },
    { name: "CONTACTO", href: "/#contacto" },
  ]

  return (
    <header
      className={`fixed left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300 ${
        announcementVisible ? "top-12 sm:top-14" : "top-0"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        <div className="flex items-center justify-between h-full md:grid md:grid-cols-3 md:gap-4">
          {/* Navegación izquierda - Desktop */}
          <nav className="hidden md:flex items-center justify-start space-x-6 lg:space-x-8">
            <Link
              href="/tipologias"
              className="text-gray-700 hover:text-orange-500 font-akony font-bold transition-colors duration-200 text-base lg:text-lg"
            >
              TIPOLOGIAS
            </Link>
            <Link
              href="/#nosotros"
              className="text-gray-700 hover:text-orange-500 font-akony font-bold transition-colors duration-200 text-base lg:text-lg"
            >
              NOSOTROS
            </Link>
          </nav>

          {/* Logo centrado */}
          <div className="flex justify-center">
            <Link href="/" className="flex items-center" aria-label="Inicio">
              <Image
                src="/images/logo.png"
                alt="Conte Construcción Logo"
                width={200}
                height={40}
                className="h-auto w-auto max-h-8 sm:max-h-10 md:max-h-12"
                priority
              />
            </Link>
          </div>

          {/* Navegación derecha - Desktop */}
          <nav className="hidden md:flex items-center justify-end space-x-6 lg:space-x-8">
            <Link
              href="/blog"
              className="text-gray-700 hover:text-orange-500 font-akony font-bold transition-colors duration-200 text-base lg:text-lg"
            >
              BLOG
            </Link>
            <Link
              href="/#contacto"
              className="text-gray-700 hover:text-orange-500 font-akony font-bold transition-colors duration-200 text-base lg:text-lg"
            >
              CONTACTO
            </Link>
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
                    src="/images/logo.png"
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
                {mobileNavLinks.map((link) => (
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
      </div>
    </header>
  )
}
