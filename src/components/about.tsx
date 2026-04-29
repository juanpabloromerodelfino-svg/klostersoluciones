export function About() {
  const values = [
    {
      title: 'Confianza',
      description: 'Te abris la puerta de tu casa tranquilo.',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      title: 'Puntualidad',
      description: 'Llegamos cuando dijimos que ibamos a llegar.',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Compromiso',
      description: 'Lo hacemos y lo hacemos bien. Sin vueltas.',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      ),
    },
    {
      title: 'Prolijidad',
      description: 'Nos vamos y tu jardin queda impecable.',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="nosotros" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-medium text-green-700">Sobre nosotros</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Confianza y compromiso
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-500">
              <p>
                Sabemos que cuando nos contratas, nos estas abriendo las puertas
                de tu casa. Eso para nosotros no es menor.
              </p>
              <p>
                Somos de Bahia Blanca y trabajamos en toda la ciudad. Lo que nos
                diferencia es simple:{' '}
                <strong className="font-medium text-neutral-700">
                  hacemos lo que prometemos
                </strong>
                . Llegamos en horario, hacemos el trabajo bien, y dejamos todo
                limpio.
              </p>
            </div>

            {/* Values grid */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="rounded-lg border border-neutral-200 p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-green-50 text-green-700">
                    {v.icon}
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-neutral-900">{v.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-500">{v.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl bg-neutral-100">
            <div className="text-center p-8">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-200">
                <svg className="h-8 w-8 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <p className="text-sm text-neutral-400">Foto del equipo</p>
              <p className="mt-1 text-xs text-neutral-300">Proximamente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
