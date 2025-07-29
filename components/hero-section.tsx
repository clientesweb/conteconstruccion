"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden mt-16 md:mt-20" // Add top margin to push content below fixed header
    >
      {/* Banner Container - 16:9 aspect ratio to match 1920x1080 */}
      <Link href="/tipologias" className="relative w-full aspect-video block" aria-label="Conocé Nuestras Tipologías">
        <Image
          src="/images/viviendas-que-se-adaptan-a-vos.webp"
          alt="Construimos tu hogar ideal - Viviendas que se adaptan a vos" // El texto es parte de la imagen
          fill
          className="object-contain w-full h-full" // object-contain ensures the entire image is visible
          priority
          sizes="100vw"
          quality={100}
        />
        {/* No hay texto adicional visible sobre el banner */}
        <h1 className="sr-only">Construimos tu hogar ideal - Viviendas que se adaptan a vos</h1>
      </Link>

      {/* Scroll Indicator */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <Link
          href="#proyectos"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300"
          aria-label="Desplazarse a la sección de proyectos"
        >
          <ChevronDown className="w-5 h-5 text-gray-700 animate-bounce" />
        </Link>
      </div>
    </section>
  )
}
