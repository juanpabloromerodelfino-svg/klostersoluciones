import { SITE } from '@/lib/config'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-green-900 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Kloster"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <span className="block font-heading text-lg font-bold text-white">
                  Kloster
                </span>
                <span className="block text-xs text-green-400">
                  Paisajista & Jardineria
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm text-green-300">{SITE.tagline}</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-green-400">
              Servicios
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                'Corte de Cesped',
                'Mantenimiento',
                'Poda',
                'Desmalezado',
                'Sistemas de Riego',
                'Diseno de Jardines',
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#servicios"
                    className="text-sm text-green-200 transition-colors hover:text-white"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-green-400">
              Navegacion
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                { href: '#servicios', label: 'Servicios' },
                { href: '#trabajos', label: 'Trabajos' },
                { href: '#nosotros', label: 'Nosotros' },
                { href: '#testimonios', label: 'Testimonios' },
                { href: '#insumos', label: 'Insumos' },
                { href: '#contacto', label: 'Contacto' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-green-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-green-400">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-200 transition-colors hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li className="text-sm text-green-200">Bahia Blanca, Buenos Aires</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-green-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-green-400">
              &copy; {year} {SITE.name}. Todos los derechos reservados.
            </p>
            <p className="text-xs text-green-500">
              Jardineria profesional en {SITE.city}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
