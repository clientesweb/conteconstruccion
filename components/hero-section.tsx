"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="inicio" className="relative w-full overflow-hidden mt-16 md:mt-20 lg:mt-24">
      {/* Banner Container - Responsive aspect ratios */}
      <Link href="/tipologias" className="relative w-full block" aria-label="Conocé Nuestras Tipologías">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-video">
          <Image
            src="/images/viviendas-que-se-adaptan-a-vos.webp"
            alt="Construimos tu hogar ideal - Viviendas que se adaptan a vos"
            fill
            className="object-cover sm:object-contain w-full h-full"
            priority
            sizes="100vw"
            quality={100}
          />
        </div>
        <h1 className="sr-only">Construimos tu hogar ideal - Viviendas que se adaptan a vos</h1>
      </Link>

      {/* Scroll Indicator - Mejorado para mobile */}
      <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <Link
          href="#proyectos"
          className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300"
          aria-label="Desplazarse a la sección de proyectos"
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 animate-bounce" />
        </Link>
      </div>
    </section>
  )
}
