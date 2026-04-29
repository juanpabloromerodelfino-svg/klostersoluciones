import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kloster Soluciones - Jardinería Profesional en Bahía Blanca',
  description:
    'Servicio profesional de jardinería, corte de césped, mantenimiento de jardines, podas y diseño de espacios verdes en Bahía Blanca. Confianza y compromiso en cada rincón.',
  keywords: [
    'jardinero Bahía Blanca',
    'mantenimiento de jardines Bahía Blanca',
    'corte de césped Bahía Blanca',
    'poda Bahía Blanca',
    'paisajista Bahía Blanca',
    'diseño de jardines Bahía Blanca',
    'desmalezado Bahía Blanca',
    'sistema de riego Bahía Blanca',
    'limpieza de terrenos Bahía Blanca',
  ],
  openGraph: {
    title: 'Kloster Soluciones - Jardinería Profesional en Bahía Blanca',
    description:
      'Servicio profesional de jardinería en Bahía Blanca. Confianza y compromiso en cada rincón.',
    type: 'website',
    locale: 'es_AR',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Kloster Soluciones',
  description:
    'Servicio profesional de jardinería, corte de césped, mantenimiento de jardines, podas y diseño de espacios verdes en Bahía Blanca.',
  areaServed: {
    '@type': 'City',
    name: 'Bahía Blanca',
    addressRegion: 'Buenos Aires',
    addressCountry: 'AR',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bahía Blanca',
    addressRegion: 'Buenos Aires',
    addressCountry: 'AR',
  },
  serviceType: [
    'Jardinería',
    'Corte de césped',
    'Mantenimiento de jardines',
    'Poda',
    'Diseño de jardines',
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
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  )
}
