"use client"

import Image from "next/image"
import Link from "next/link"

export default function OffersBannerSection() {
  return (
    <section className="relative w-full overflow-hidden py-4 sm:py-6 md:py-8">
      <Link href="/metodo-constructivo" className="block w-full">
        <div className="relative w-full aspect-[3/2] sm:aspect-[5/2] md:aspect-[8/3] lg:aspect-[10/3]">
          <Image
            src="/images/conoce-metodo-constructivo.webp"
            alt="Conoce en detalle cómo construimos nuestras viviendas, los materiales que utilizamos y las características técnicas que las hacen únicas."
            fill
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            quality={90}
          />
          <h2 className="sr-only">Método Constructivo</h2>
          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300"></div>
        </div>
      </Link>
    </section>
  )
}
