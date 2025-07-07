"use client"

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative bg-white">
      {/* Scroll to top button */}
      <div className="absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2 transform">
        <button
          onClick={scrollToTop}
          className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-xl"
          aria-label="Volver arriba"
        >
          <i className="fa-solid fa-circle-arrow-up text-base sm:text-lg md:text-xl"></i>
        </button>
      </div>

      <div className="container px-2 sm:px-4 md:px-6 py-12 sm:py-16">
        <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 sm:gap-6 col-span-1 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="CONTE CONSTRUCCIÓN"
                width={250}
                height={50}
                className="h-auto w-auto max-h-8 sm:max-h-10"
              />
            </Link>
            <p className="font-adrianna text-sm sm:text-base text-gray-600">
              Especialistas en viviendas con Sistema Tradicional Minimalista Moderno, combinando eficiencia, durabilidad
              y diseño contemporáneo.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <Link
                href="https://instagram.com/conteconstruccion"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-orange-500 hover:text-white"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram text-sm sm:text-lg"></i>
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-orange-500 hover:text-white"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f text-lg"></i>
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-orange-500 hover:text-white"
                aria-label="Twitter"
              >
                <i className="fa-brands fa-x-twitter text-lg"></i>
              </Link>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-akony mb-4 sm:mb-6 text-base sm:text-lg font-bold text-gray-900">Enlaces Rápidos</h3>
            <ul className="space-y-3 sm:space-y-4 text-gray-600">
              {["Nosotros", "Servicios", "Viviendas", "Contacto"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item === "Viviendas" ? "tipologias" : item.toLowerCase()}`}
                    className="font-akony inline-block text-xs sm:text-sm font-bold uppercase tracking-wide transition-colors hover:text-orange-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-akony mb-6 text-lg font-bold text-gray-900">Servicios</h3>
            <ul className="space-y-4 text-gray-600">
              {["Opciones Llave en Mano", "Financiación Total", "Personalización"].map((service) => (
                <li key={service}>
                  <Link
                    href="#servicios"
                    className="font-adrianna inline-block transition-colors hover:text-orange-500"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="font-akony mb-4 sm:mb-6 text-base sm:text-lg font-bold text-gray-900">Contacto</h3>
            <ul className="font-adrianna space-y-3 sm:space-y-4 text-gray-600">
              <li className="flex items-center gap-2 sm:gap-3">
                <i className="fa-solid fa-phone-volume text-orange-500 text-sm"></i>
                <span className="text-sm sm:text-base">(0351) 156669950</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <i className="fa-solid fa-envelope text-orange-500 text-sm"></i>
                <span className="text-sm sm:text-base break-all">info@conteconstruccion.com.ar</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <i className="fa-brands fa-instagram text-orange-500 text-sm"></i>
                <span className="text-sm sm:text-base">@conteconstruccion</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <i className="fa-solid fa-location-dot text-orange-500 text-sm mt-1"></i>
                <span className="text-sm sm:text-base">
                  Av. Monseñor P. Cabrera 3068 (B° Alto San Martín) Córdoba – Argentina
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <i className="fa-solid fa-user text-orange-500 text-sm"></i>
                <span className="text-sm sm:text-base">Fernando Conte</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 border-t pt-6 sm:pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="font-adrianna text-xs sm:text-sm text-gray-600">
              &copy; {new Date().getFullYear()} CONTE CONSTRUCCIÓN. Todos los derechos reservados.
            </p>
            <div className="flex flex-col items-center gap-3 md:flex-row md:gap-6">
              <div className="flex gap-4 sm:gap-6">
                <Link
                  href="/terminos-y-condiciones"
                  className="font-adrianna text-xs sm:text-sm text-gray-600 hover:text-orange-500"
                >
                  Términos y Condiciones
                </Link>
                <Link
                  href="/politica-de-privacidad"
                  className="font-adrianna text-xs sm:text-sm text-gray-600 hover:text-orange-500"
                >
                  Política de Privacidad
                </Link>
              </div>
              <p className="font-adrianna text-xs text-gray-500">
                Desarrollado por{" "}
                <a
                  href="https://dualitydomain.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-600 transition-colors"
                >
                  Duality Domain
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
