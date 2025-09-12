"use client"

import Image from "next/image"
import Link from "next/link"

export default function OffersBannerSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <Link href="/metodo-constructivo" className="block w-full">
        <div className="relative w-full">
          {/* Banner para móviles */}
          <div className="block sm:hidden">
            <Image
              src="/images/banner-mobile.webp"
              alt="Construimos tu hogar ideal. Viviendas que se adaptan a vos. Conoce nuestras tipologías."
              width={800}
              height={1000}
              className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
              priority
              sizes="100vw"
              quality={95}
            />
          </div>

          {/* Banner para tablets y desktop */}
          <div className="hidden sm:block">
            <Image
              src="/images/conoce-metodo-constructivo.webp"
              alt="Conoce en detalle cómo construimos nuestras viviendas, los materiales que utilizamos y las características técnicas que las hacen únicas."
              width={1200}
              height={600}
              className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
              quality={95}
            />
          </div>

          <h2 className="sr-only">Método Constructivo</h2>
          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300"></div>
        </div>
      </Link>
    </section>
  )
}
