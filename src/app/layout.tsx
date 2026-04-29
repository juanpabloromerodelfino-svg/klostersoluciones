import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kloster Paisajista & Jardineria - Bahia Blanca',
  description:
    'Servicio profesional de jardineria, corte de cesped, mantenimiento de jardines, podas y diseno de espacios verdes en Bahia Blanca. Confianza y compromiso en cada rincon.',
  keywords: [
    'jardinero Bahia Blanca',
    'mantenimiento de jardines Bahia Blanca',
    'corte de cesped Bahia Blanca',
    'poda Bahia Blanca',
    'paisajista Bahia Blanca',
    'diseno de jardines Bahia Blanca',
    'desmalezado Bahia Blanca',
    'sistema de riego Bahia Blanca',
    'limpieza de terrenos Bahia Blanca',
  ],
  openGraph: {
    title: 'Kloster Paisajista & Jardineria - Bahia Blanca',
    description:
      'Servicio profesional de jardineria en Bahia Blanca. Confianza y compromiso en cada rincon.',
    type: 'website',
    locale: 'es_AR',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Kloster Paisajista & Jardineria',
  description:
    'Servicio profesional de jardineria, corte de cesped, mantenimiento de jardines, podas y diseno de espacios verdes en Bahia Blanca.',
  areaServed: {
    '@type': 'City',
    name: 'Bahia Blanca',
    addressRegion: 'Buenos Aires',
    addressCountry: 'AR',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bahia Blanca',
    addressRegion: 'Buenos Aires',
    addressCountry: 'AR',
  },
  serviceType: [
    'Jardineria',
    'Corte de cesped',
    'Mantenimiento de jardines',
    'Poda',
    'Diseno de jardines',
    'Sistema de riego',
    'Limpieza de terrenos',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-cream-50 text-brown-800 antialiased">
        {children}
      </body>
    </html>
  )
}
