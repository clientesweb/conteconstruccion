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
    <div className="relative bg-orange-500 text-white overflow-hidden" role="alert" aria-live="polite">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-50"></div>
      <div className="container relative z-10 px-4 py-3 md:px-6 flex items-center justify-between">
        <div className="flex-1 text-center sm:text-left">
          <p className="font-adrianna text-sm sm:text-base">
            <span className="font-akony font-bold mr-2">CONOCE NUESTRO MÉTODO CONSTRUCTIVO</span>
            <span className="hidden sm:inline">Descubre cómo construimos viviendas eficientes y duraderas.</span>
            <Link
              href="/metodo-constructivo"
              className="underline ml-2 font-bold hover:text-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"
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
          className="ml-4 p-1 rounded-full hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500 transition-colors"
          aria-label="Cerrar anuncio"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
