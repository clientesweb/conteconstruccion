"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, RefreshCw } from "lucide-react"

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 mx-auto">
          <span className="font-akony text-3xl font-bold text-orange-500">
            <i className="fa-solid fa-wifi-slash"></i>
          </span>
        </div>

        <h1 className="font-akony mb-4 text-center text-2xl font-bold text-gray-900">Sin conexión a Internet</h1>

        <p className="font-adrianna mb-8 text-center text-gray-600">
          Parece que no tienes conexión a Internet. Algunas funciones pueden no estar disponibles hasta que te vuelvas a
          conectar.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            onClick={() => window.location.reload()}
            className="font-adrianna bg-orange-500 text-white hover:bg-orange-600 flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Intentar nuevamente
          </Button>

          <Button asChild variant="outline" className="font-adrianna">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
