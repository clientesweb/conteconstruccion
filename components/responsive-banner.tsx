"use client"

import Image from "next/image"
import Link from "next/link" // Importamos el componente Link

export default function OffersBannerSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Banner Container - Aspect ratio for 1920x720 is 8/3 */}
      <Link href="/metodo-constructivo" className="block w-full">
        {" "}
        {/* Envolvemos el div con Link */}
        <div className="relative w-full aspect-[8/3]">
          <Image
            src="/images/conoce-metodo-constructivo.webp"
            alt="Conoce en detalle cómo construimos nuestras viviendas, los materiales que utilizamos y las características técnicas que las hacen únicas."
            fill
            className="object-cover w-full h-full" // object-cover ensures the image covers the entire container
            priority
            sizes="100vw"
            quality={100}
          />
          <h2 className="sr-only">Método Constructivo</h2>
        </div>
      </Link>
    </section>
  )
}
