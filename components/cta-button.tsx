"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function CTAButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar el botón después de desplazarse 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleClose = () => {
    setIsHidden(true)
  }

  const handleCall = () => {
    window.open("tel:+5493516669950", "_self")
  }

  if (isHidden) return null

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-40 flex flex-col items-end transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
      )}
    >
      <button
        onClick={handleClose}
        className="mb-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 text-white shadow-lg"
        aria-label="Cerrar"
      >
        <i className="fa-solid fa-xmark text-xs"></i>
      </button>
      <Button
        onClick={handleCall}
        className="font-akony flex items-center gap-2 rounded-full bg-orange-500 px-6 py-6 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-xl"
      >
        <i className="fa-solid fa-phone-volume text-base"></i>
        Pedir Presupuesto
      </Button>
    </div>
  )
}
