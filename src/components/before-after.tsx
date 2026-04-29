export function BeforeAfter() {
  // Placeholders — reemplazar con fotos reales de trabajos
  const works = [
    {
      id: 1,
      title: 'Jardin residencial - Barrio Palihue',
      description: 'Desmalezado completo + diseno de canteros + sistema de riego',
    },
    {
      id: 2,
      title: 'Poda de altura - Centro',
      description: 'Poda sanitaria y de formacion en arboles de mas de 8 metros',
    },
    {
      id: 3,
      title: 'Parquizado completo - Barrio Patagonia',
      description: 'Limpieza de terreno + cesped + canteros + iluminacion',
    },
  ]

  return (
    <section id="trabajos" className="bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-green-600">
            Trabajos Realizados
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-green-900 sm:text-4xl">
            Antes y Despues
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brown-600">
            Nuestros resultados hablan por si solos. Estos son algunos de los
            jardines que transformamos en Bahia Blanca.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <div
              key={work.id}
              className="overflow-hidden rounded-2xl bg-white shadow-md"
            >
              {/* Before/After image container */}
              <div className="relative">
                <div className="grid grid-cols-2">
                  <div className="flex aspect-square items-center justify-center bg-brown-500/10 p-4">
                    <div className="text-center">
                      <div className="mb-2 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                        ANTES
                      </div>
                      <p className="text-xs text-brown-500">Foto proximamente</p>
                    </div>
                  </div>
                  <div className="flex aspect-square items-center justify-center bg-green-50 p-4">
                    <div className="text-center">
                      <div className="mb-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                        DESPUES
                      </div>
                      <p className="text-xs text-brown-500">Foto proximamente</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-green-900">
                  {work.title}
                </h3>
                <p className="mt-1 text-sm text-brown-600">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-brown-500">
          Estamos actualizando nuestra galeria con mas proyectos. Consulta para
          ver mas ejemplos de nuestro trabajo.
        </p>
      </div>
    </section>
  )
}
