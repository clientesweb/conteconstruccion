"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Link from "next/link"

export default function HeaderAnnouncement() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    // Verificar si el anuncio ya fue cerrado
    const announcementClosed = localStorage.getItem("announcementClosed")

    // Solo mostrar si no ha sido cerrado anteriormente
    if (!announcementClosed) {
      setIsVisible(true)
    }

    // Marcar como hidratado para evitar problemas de SSR
    setIsHydrated(true)
  }, [])

  const closeAnnouncement = () => {
    setIsVisible(false)
    // Guardar preferencia en localStorage
    localStorage.setItem("announcementClosed", "true")
  }

  // No renderizar nada durante SSR para evitar hidratación incorrecta
  if (!isHydrated) return null

  // Si no es visible, no renderizar nada
  if (!isVisible) return null

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] bg-orange-600 text-white overflow-hidden"
      role="alert"
      aria-live="polite"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-orange-500 opacity-60"></div>
      <div className="container relative z-10 px-4 py-3 md:px-6 flex items-center justify-between">
        <div className="flex-1 text-center sm:text-left">
          <p className="font-adrianna text-sm sm:text-base text-white">
            <span className="font-akony font-bold mr-2 text-white">CONOCE NUESTRO MÉTODO CONSTRUCTIVO</span>
            <span className="hidden sm:inline text-white">
              Descubre cómo construimos viviendas eficientes y duraderas.
            </span>
            <Link
              href="/metodo-constructivo"
              className="underline ml-2 font-bold text-white hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600"
              onClick={() => {
                // Cerrar el anuncio al hacer clic en "Ver más"
                closeAnnouncement()
              }}
            >
              Ver más
            </Link>
          </p>
        </div>
        <button
          onClick={closeAnnouncement}
          className="ml-4 p-1 rounded-full text-white hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600 transition-colors"
          aria-label="Cerrar anuncio"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
