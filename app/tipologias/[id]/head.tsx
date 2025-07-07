import { tipologiasData } from "@/data/tipologias"

export default function Head({ params }: { params: { id: string } }) {
  const tipologia = tipologiasData.find((t) => t.id === params.id)

  if (!tipologia) {
    return (
      <>
        <title>Tipología no encontrada | CONTE CONSTRUCCIÓN</title>
        <meta name="description" content="La tipología que buscas no existe o ha sido removida." />
      </>
    )
  }

  return (
    <>
      <title>{`${tipologia.title} - ${tipologia.subtitle} | CONTE CONSTRUCCIÓN`}</title>
      <meta name="description" content={tipologia.fullDescription} />
      <meta property="og:title" content={`${tipologia.title} - ${tipologia.subtitle} | CONTE CONSTRUCCIÓN`} />
      <meta property="og:description" content={tipologia.fullDescription} />
      <meta property="og:image" content={tipologia.image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${tipologia.title} - ${tipologia.subtitle} | CONTE CONSTRUCCIÓN`} />
      <meta name="twitter:description" content={tipologia.fullDescription} />
      <meta name="twitter:image" content={tipologia.image} />
    </>
  )
}
