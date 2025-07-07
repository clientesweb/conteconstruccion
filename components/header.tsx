"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const pathname = usePathname()
  const isBlogPage = pathname.includes("/blog")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Solo detectar sección activa en la página principal
      if (!isBlogPage) {
        const sections = ["nosotros", "servicios", "tipologias", "blog", "contacto"]
        const scrollPosition = window.scrollY + 100

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const offsetTop = element.offsetTop
            const offsetHeight = element.offsetHeight

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isBlogPage])

  const menuItems = [
    { name: "Nosotros", href: "/#nosotros" },
    { name: "Viviendas", href: "/#tipologias" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/#contacto" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled || isBlogPage ? "border-b border-gray-200 bg-white/95 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 sm:h-18 md:h-20 items-center justify-between px-2 sm:px-4 md:px-6">
        <Link href="/" className="z-10 flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="CONTE CONSTRUCCIÓN"
            width={250}
            height={50}
            className="h-auto w-auto max-h-8 sm:max-h-9 md:max-h-10 lg:max-h-12"
            priority
          />
        </Link>

        <nav className="hidden md:flex md:gap-6 lg:gap-10 xl:gap-14 2xl:gap-16 md:ml-12 lg:ml-16 xl:ml-20">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "font-akony relative text-md font-bold uppercase tracking-wide transition-colors",
                activeSection === item.href.substring(1) || (item.href === "/blog" && isBlogPage)
                  ? isScrolled || isBlogPage
                    ? "text-orange-500"
                    : "text-orange-400"
                  : isScrolled || isBlogPage
                    ? "text-gray-900 hover:text-orange-500"
                    : "text-white hover:text-orange-400",
                "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all after:duration-300",
                activeSection === item.href.substring(1) || (item.href === "/blog" && isBlogPage)
                  ? "after:w-full"
                  : "hover:after:w-full",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block md:ml-auto lg:ml-16 xl:ml-20 2xl:ml-24">
          <Button
            asChild
            variant="outline"
            className={cn(
              "font-akony font-bold uppercase tracking-wide px-4 py-2 text-sm lg:px-5 lg:py-2.5 lg:text-base",
              isScrolled || isBlogPage
                ? "border-orange-500 bg-transparent text-orange-500 hover:bg-orange-500 hover:text-white"
                : "border-white bg-transparent text-white hover:bg-white/20",
            )}
          >
            <Link href="/#contacto">Pedir Presupuesto</Link>
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "z-50 md:hidden h-8 w-8 sm:h-9 sm:w-9",
            isMenuOpen
              ? "fixed top-3 sm:top-4 right-3 sm:right-4 bg-white/20 text-white hover:bg-white/30"
              : isScrolled || isBlogPage
                ? "text-gray-900"
                : "text-white",
          )}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <i className="fa-solid fa-xmark text-2xl"></i> // Aumentar tamaño del ícono
          ) : (
            <i className="fa-solid fa-bars text-xl"></i>
          )}
        </Button>
      </div>
      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Menú móvil"
        className={cn(
          "fixed inset-x-0 top-0 z-40 h-screen transform overflow-y-auto bg-navy-900 p-4 sm:p-6 transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="mt-12 sm:mt-16 flex flex-col space-y-6 sm:space-y-8 pt-6 sm:pt-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-akony text-lg sm:text-xl font-bold uppercase tracking-wide text-white transition-colors hover:text-orange-500"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4 space-y-4 border-t border-white/20 pt-4 sm:pt-6">
            <Button
              asChild
              className="font-akony w-full bg-orange-500 font-bold uppercase tracking-wide text-white hover:bg-orange-600 py-3 sm:py-4"
            >
              <Link href="/#contacto" onClick={toggleMenu}>
                Pedir Presupuesto
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
