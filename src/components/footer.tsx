import { SITE } from '@/lib/config'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 bg-white py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <span className="text-base font-semibold tracking-tight text-neutral-900">
              Kloster <span className="text-green-700">Soluciones</span>
            </span>
            <p className="mt-1 text-sm text-neutral-400">{SITE.tagline}</p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {[
              { href: '#servicios', label: 'Servicios' },
              { href: '#trabajos', label: 'Trabajos' },
              { href: '#nosotros', label: 'Nosotros' },
              { href: '#testimonios', label: 'Testimonios' },
              { href: '#contacto', label: 'Contacto' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-400 transition-colors hover:text-neutral-700"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-neutral-100 pt-8 text-xs text-neutral-400 sm:flex-row sm:items-center">
          <p>&copy; {year} {SITE.name}. Todos los derechos reservados.</p>
          <p>Jardinería profesional en {SITE.city}</p>
        </div>
      </div>
    </footer>
  )
}
