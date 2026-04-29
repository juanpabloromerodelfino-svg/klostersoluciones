export function About() {
  return (
    <section id="nosotros" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Photo placeholder */}
          <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-green-100">
            <div className="text-center p-8">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-green-200">
                <svg
                  className="h-12 w-12 text-green-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <p className="text-sm text-green-700">
                Foto del equipo — proximamente
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-green-600">
              Sobre Nosotros
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-green-900 sm:text-4xl">
              Confianza y compromiso: nuestros valores
            </h2>
            <div className="mt-6 space-y-4 text-brown-600">
              <p>
                Sabemos que cuando nos contratas, nos estas abriendo las puertas
                de tu casa. Eso para nosotros no es menor — es una
                responsabilidad enorme que tomamos con seriedad.
              </p>
              <p>
                Somos de Bahia Blanca y trabajamos en toda la ciudad. Lo que nos
                diferencia es simple:{' '}
                <strong className="text-green-800">
                  hacemos lo que prometemos
                </strong>
                . Llegamos en horario, hacemos el trabajo bien, y dejamos todo
                limpio.
              </p>
              <p>
                Despues de probar con jardineros que no cumplen, nuestros
                clientes valoran la tranquilidad de saber que con Kloster el
                jardin esta en buenas manos.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: '🤝', label: 'Confianza', desc: 'Te abrís la puerta tranquilo' },
                { icon: '⏰', label: 'Puntualidad', desc: 'Llegamos cuando dijimos' },
                { icon: '✅', label: 'Compromiso', desc: 'Lo hacemos y lo hacemos bien' },
                { icon: '🧹', label: 'Prolijidad', desc: 'Nos vamos y queda impecable' },
              ].map((v) => (
                <div
                  key={v.label}
                  className="rounded-xl bg-green-50 p-4"
                >
                  <div className="text-2xl">{v.icon}</div>
                  <h3 className="mt-2 text-sm font-bold text-green-900">
                    {v.label}
                  </h3>
                  <p className="mt-1 text-xs text-brown-500">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
