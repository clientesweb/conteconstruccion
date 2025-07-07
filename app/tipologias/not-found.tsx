import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] flex-col items-center justify-center py-16">
        <div className="container flex max-w-md flex-col items-center px-4 text-center md:px-6">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
            <span className="font-akony text-3xl font-bold text-orange-500">404</span>
          </div>
          <h1 className="font-akony mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tipología no encontrada
          </h1>
          <p className="font-adrianna mb-8 text-gray-600">
            Lo sentimos, la tipología que estás buscando no existe o ha sido removida.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild className="font-adrianna bg-orange-500 text-white hover:bg-orange-600">
              <Link href="/tipologias">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ver todas las tipologías
              </Link>
            </Button>
            <Button asChild variant="outline" className="font-adrianna">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Volver al inicio
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
