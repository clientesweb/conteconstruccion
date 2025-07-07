import { Card, CardContent } from "@/components/ui/card"

export default function ServicesSection() {
  const services = [
    {
      icon: <i className="fa-solid fa-hammer text-3xl"></i>,
      title: "Sistema Tradicional Minimalista",
      description:
        "Construcción con nuestro sistema tradicional innovador que combina eficiencia y diseño contemporáneo.",
    },
    {
      icon: <i className="fa-solid fa-clock text-3xl"></i>,
      title: "Opciones Llave en Mano",
      description: "Soluciones completas desde el diseño hasta la entrega final, sin preocupaciones para el cliente.",
    },
    {
      icon: <i className="fa-solid fa-money-bill-wave text-3xl"></i>,
      title: "Financiación Total",
      description: "Ofrecemos opciones de financiamiento adaptadas a las necesidades de cada cliente.",
    },
    {
      icon: <i className="fa-solid fa-palette text-3xl"></i>,
      title: "Personalización",
      description: "Adaptamos cada proyecto a las necesidades y preferencias específicas de nuestros clientes.",
    },
    {
      icon: <i className="fa-solid fa-table-cells-large text-3xl"></i>,
      title: "Modelos Exclusivos",
      description: "Innovamos con nuevos modelos, planos y ofertas exclusivas cada mes.",
    },
    {
      icon: <i className="fa-solid fa-rocket text-3xl"></i>,
      title: "Construcción Rápida y Eficiente",
      description: "Tiempos de construcción optimizados sin comprometer la calidad y el diseño.",
    },
  ]

  return (
    <section id="servicios" className="relative overflow-hidden bg-gray-50 py-24 md:py-32">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="mb-16 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
            <i className="fa-solid fa-building text-orange-500 text-xl"></i>
          </div>
          <h2 className="font-akony mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            NUESTROS SERVICIOS
          </h2>
          <div className="mx-auto h-1 w-20 bg-orange-500"></div>
          <p className="font-adrianna mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Especialistas en viviendas con Sistema Tradicional Minimalista Moderno, combinando eficiencia, durabilidad y
            diseño moderno.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-none bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-orange-500/10 transition-transform duration-300 group-hover:scale-150"></div>
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="font-akony mb-3 text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="font-adrianna text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
