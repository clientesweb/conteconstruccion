"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "María Fernández",
      role: "Propietaria",
      initials: "MF",
      bgColor: "bg-blue-500",
      content:
        "Elegir CONTE CONSTRUCCIÓN para nuestra casa fue la mejor decisión. Su sistema constructivo nos brindó un hogar eficiente energéticamente y con un diseño moderno. El equipo fue profesional desde el primer día hasta la entrega.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      role: "Inversor Inmobiliario",
      initials: "CR",
      bgColor: "bg-green-500",
      content:
        "He trabajado con varias constructoras, pero CONTE CONSTRUCCIÓN destaca por su compromiso con la calidad y los plazos. Su metodología constructiva me ha permitido desarrollar proyectos más rápido y con excelentes resultados. Definitivamente seguiré confiando en ellos.",
      rating: 5,
    },
    {
      name: "Laura Méndez",
      role: "Arquitecta",
      initials: "LM",
      bgColor: "bg-purple-500",
      content:
        "Como profesional del sector, valoro enormemente la precisión técnica y la innovación que CONTE CONSTRUCCIÓN aporta a cada proyecto. Su sistema constructivo ofrece posibilidades de diseño excepcionales y un rendimiento térmico superior.",
      rating: 5,
    },
    {
      name: "Juan Pérez",
      role: "Propietario",
      initials: "JP",
      bgColor: "bg-orange-500",
      content:
        "La calidad de construcción y el acabado de nuestra casa superó todas nuestras expectativas. El equipo de CONTE CONSTRUCCIÓN fue muy profesional y atento a todos los detalles durante todo el proceso.",
      rating: 5,
    },
    {
      name: "Ana Gómez",
      role: "Diseñadora de Interiores",
      initials: "AG",
      bgColor: "bg-pink-500",
      content:
        "Como diseñadora, aprecio la flexibilidad que ofrece el sistema constructivo para adaptar los espacios. CONTE CONSTRUCCIÓN entendió perfectamente mis necesidades y el resultado final fue exactamente lo que había imaginado.",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Detectar si es móvil (solo en el cliente)
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Comprobar inicialmente
    checkIfMobile()

    // Configurar listener para cambios de tamaño
    window.addEventListener("resize", checkIfMobile)

    // Limpiar listener
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      // Si estamos en el último testimonio y hay menos de 3 testimonios restantes
      if (
        prevIndex + (window.innerWidth >= 1024 ? 3 : 2) > testimonials.length &&
        prevIndex < testimonials.length - 1
      ) {
        return prevIndex + 1
      }
      // Si estamos en el último testimonio o más allá, volver al principio
      else if (prevIndex >= testimonials.length - 1) {
        return 0
      }
      // Avanzar normalmente
      else {
        return prevIndex + 1
      }
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return testimonials.length - 1
      } else {
        return prevIndex - 1
      }
    })
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Configurar autoplay
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, currentIndex])

  // Pausar autoplay al interactuar
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false)
  }

  // Reanudar autoplay después de 10 segundos de inactividad
  const resumeAutoPlay = () => {
    setTimeout(() => {
      setIsAutoPlaying(true)
    }, 10000)
  }

  return (
    <section className="bg-gray-50 py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mb-16 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
            <i className="fa-solid fa-quote-right text-orange-500 text-xl"></i>
          </div>
          <h2 className="font-akony mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            LO QUE DICEN NUESTROS CLIENTES
          </h2>
          <div className="mx-auto h-1 w-20 bg-orange-500"></div>
          <p className="font-adrianna mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Descubre por qué nuestros clientes confían en CONTE CONSTRUCCIÓN para hacer realidad sus proyectos.
          </p>
        </div>

        {/* Slider Controls */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <button
            onClick={() => {
              prevSlide()
              pauseAutoPlay()
              resumeAutoPlay()
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-md transition-all hover:bg-orange-500 hover:text-white"
            aria-label="Testimonio anterior"
          >
            <i className="fa-solid fa-circle-chevron-left text-lg"></i>
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  goToSlide(index)
                  pauseAutoPlay()
                  resumeAutoPlay()
                }}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  index === currentIndex ? "w-6 bg-orange-500" : "bg-gray-300",
                )}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => {
              nextSlide()
              pauseAutoPlay()
              resumeAutoPlay()
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-md transition-all hover:bg-orange-500 hover:text-white"
            aria-label="Siguiente testimonio"
          >
            <i className="fa-solid fa-circle-chevron-right text-lg"></i>
          </button>
        </div>

        {/* Testimonials Slider */}
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            aria-live="polite"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-full px-4 transition-opacity duration-300 sm:px-2 md:min-w-[50%] lg:min-w-[33.333%]"
                style={{
                  opacity:
                    index === currentIndex ||
                    (!isMobile &&
                      ((window.innerWidth >= 1024 &&
                        ((index >= currentIndex && index < currentIndex + 3) ||
                          (currentIndex + 3 > testimonials.length &&
                            index < (currentIndex + 3) % testimonials.length))) ||
                        (window.innerWidth < 1024 &&
                          window.innerWidth >= 768 &&
                          ((index >= currentIndex && index < currentIndex + 2) ||
                            (currentIndex + 2 > testimonials.length &&
                              index < (currentIndex + 2) % testimonials.length)))))
                      ? 1
                      : 0.5,
                }}
                aria-hidden={
                  index !== currentIndex &&
                  (isMobile ||
                    !(
                      (window.innerWidth >= 1024 &&
                        ((index >= currentIndex && index < currentIndex + 3) ||
                          (currentIndex + 3 > testimonials.length &&
                            index < (currentIndex + 3) % testimonials.length))) ||
                      (window.innerWidth < 1024 &&
                        window.innerWidth >= 768 &&
                        ((index >= currentIndex && index < currentIndex + 2) ||
                          (currentIndex + 2 > testimonials.length && index < (currentIndex + 2) % testimonials.length)))
                    ))
                }
              >
                <div className="relative h-full rounded-xl bg-white p-6 sm:p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="absolute -right-3 -top-3 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-orange-500/10">
                    <i className="fa-solid fa-quote-right text-orange-500 text-xl sm:text-2xl"></i>
                  </div>
                  <div className="mb-6 flex">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fa-solid fa-star h-4 w-4 sm:h-5 sm:w-5 ${
                          i < testimonial.rating ? "text-orange-500" : "text-gray-200"
                        }`}
                      ></i>
                    ))}
                  </div>
                  <p className="font-adrianna mb-6 text-sm sm:text-base text-gray-600 line-clamp-4 sm:line-clamp-none">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center overflow-hidden rounded-full text-white ${testimonial.bgColor}`}
                    >
                      <span className="font-akony text-base sm:text-lg font-bold">{testimonial.initials}</span>
                    </div>
                    <div>
                      <p className="font-akony font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                      <p className="font-adrianna text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
