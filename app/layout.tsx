import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fundación Noscuidamos — Salud para todos en Chile',
  description: 'Plataforma chilena de salud comunitaria. Conectamos pacientes con estudiantes de odontología, enseñamos primeros auxilios y difundimos información confiable sobre salud.',
  openGraph: {
    title: 'Fundación Noscuidamos — Salud para todos',
    description: 'Salud para ti, para mí, para todos. Juntos nos cuidamos.',
    locale: 'es_CL',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white font-sans antialiased">{children}</body>
    </html>
  )
}
