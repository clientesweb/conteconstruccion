import Image from "next/image"

export default function ResponsiveBanner() {
  return (
    <section className="w-full">
      <div className="relative">
        {/* Versión para móvil */}
        <div className="relative block h-[180px] w-full md:hidden">
          <Image
            src="/images/banner-hogar-ideal.jpeg"
            alt="CONTE CONSTRUCCIÓN - Construimos tu hogar ideal"
            fill
            sizes="100vw"
            className="object-cover object-center"
            loading="lazy"
            fetchPriority="low"
          />
        </div>

        {/* Versión para tablet */}
        <div className="relative hidden h-[250px] w-full md:block lg:hidden">
          <Image
            src="/images/banner-hogar-ideal.jpeg"
            alt="CONTE CONSTRUCCIÓN - Construimos tu hogar ideal"
            fill
            sizes="100vw"
            className="object-cover object-center"
            loading="lazy"
            fetchPriority="low"
          />
        </div>

        {/* Versión para desktop */}
        <div className="relative hidden h-[300px] w-full lg:block">
          <Image
            src="/images/banner-hogar-ideal.jpeg"
            alt="CONTE CONSTRUCCIÓN - Construimos tu hogar ideal"
            fill
            sizes="100vw"
            className="object-cover object-center"
            loading="lazy"
            fetchPriority="low"
          />
        </div>
      </div>
    </section>
  )
}
