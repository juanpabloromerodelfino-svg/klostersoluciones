'use client'

import { useState } from 'react'
import { SITE } from '@/lib/config'

const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#insumos', label: 'Insumos' },
  { href: '#contacto', label: 'Contacto' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Kloster Paisajista"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="hidden sm:block">
            <span className="block font-heading text-xl font-bold text-green-800">
              Kloster
            </span>
            <span className="block text-xs text-brown-500">
              Paisajista & Jardineria
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brown-700 transition-colors hover:text-green-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-700 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-800"
          >
            Pedir Presupuesto
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          aria-label="Menu"
        >
          <svg
            className="h-6 w-6 text-green-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="border-t border-green-100 bg-white px-4 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium text-brown-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-full bg-green-700 px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Pedir Presupuesto
          </a>
        </nav>
      )}
    </header>
  )
}
