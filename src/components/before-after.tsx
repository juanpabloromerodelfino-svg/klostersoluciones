export function BeforeAfter() {
  const works = [
    {
      id: 1,
      title: 'Jardin residencial',
      zone: 'Barrio Palihue',
      description: 'Desmalezado completo, diseno de canteros y sistema de riego.',
    },
    {
      id: 2,
      title: 'Poda de altura',
      zone: 'Centro',
      description: 'Poda sanitaria y de formacion en arboles de mas de 8 metros.',
    },
    {
      id: 3,
      title: 'Parquizado completo',
      zone: 'Barrio Patagonia',
      description: 'Limpieza de terreno, cesped, canteros e iluminacion.',
    },
  ]

  return (
    <section id="trabajos" className="border-t border-neutral-100 bg-neutral-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-green-700">Trabajos realizados</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Antes y despues
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-500">
            Nuestros resultados hablan por si solos. Algunos de los jardines que
            transformamos en Bahia Blanca.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <div
              key={work.id}
              className="overflow-hidden rounded-xl border border-neutral-200 bg-white"
            >
              <div className="grid grid-cols-2">
                <div className="flex aspect-[4/3] items-center justify-center bg-neutral-100 p-4">
                  <div className="text-center">
                    <span className="inline-block rounded-md bg-neutral-200 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-600">
                      Antes
                    </span>
                    <p className="mt-2 text-[11px] text-neutral-400">Foto proximamente</p>
                  </div>
                </div>
                <div className="flex aspect-[4/3] items-center justify-center bg-green-50 p-4">
                  <div className="text-center">
                    <span className="inline-block rounded-md bg-green-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-green-700">
                      Despues
                    </span>
                    <p className="mt-2 text-[11px] text-neutral-400">Foto proximamente</p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-sm font-semibold text-neutral-900">{work.title}</h3>
                  <span className="text-xs text-neutral-400">{work.zone}</span>
                </div>
                <p className="mt-1.5 text-sm text-neutral-500">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
