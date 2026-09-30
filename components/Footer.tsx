'use client'

import { Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Atención Dental', href: '#pilares' },
  { label: 'Primeros Auxilios', href: '#pilares' },
  { label: 'Concientizarnos', href: '#pilares' },
  { label: 'Quiénes Somos', href: '#fundador' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/noscuidamos.cl', icon: Instagram, handle: '@noscuidamos.cl' },
  { label: 'Facebook', href: '#', icon: Facebook, handle: 'Nos Cuidamos' },
  { label: 'YouTube', href: '#', icon: Youtube, handle: 'Nos Cuidamos' },
]

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.84 4.84 0 01-1.01-.07z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer id="contacto" className="bg-brand-blue-dark text-white">

      {/* CTA strip — estilo Luksic */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <p className="section-label text-white/30 mb-4">¿Tienes dudas?</p>
            <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Escríbenos directamente.
            </h3>
          </div>
          <a
            href="mailto:noscuidamos.contacto@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-blue-dark font-semibold rounded-full hover:bg-brand-blue-light transition-colors duration-200 text-sm flex-shrink-0"
          >
            noscuidamos.contacto@gmail.com
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Logo variant="light" showTagline={true} />
            </div>
            <div className="flex items-center gap-2 mt-4 text-gray-500 text-sm">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              Santiago de Chile
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="section-label text-white/25 mb-5">Secciones</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="section-label text-white/25 mb-5">Contacto</h4>
            <a
              href="mailto:noscuidamos.contacto@gmail.com"
              className="flex items-start gap-3 text-gray-500 hover:text-white text-sm transition-colors duration-200 group"
            >
              <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-brand-red transition-colors" />
              noscuidamos.contacto@gmail.com
            </a>
          </div>

          {/* Redes */}
          <div>
            <h4 className="section-label text-white/25 mb-5">Síguenos</h4>
            <ul className="space-y-3">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-500 hover:text-white text-sm transition-colors duration-200 group"
                  >
                    <s.icon className="w-4 h-4 group-hover:text-white transition-colors" />
                    {s.handle}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-500 hover:text-white text-sm transition-colors duration-200 group">
                  <TikTokIcon className="w-4 h-4 group-hover:text-white transition-colors" />
                  @noscuidamos.cl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">©2024 Fundación Noscuidamos. Todos los derechos reservados.</p>
          <p className="text-gray-700 text-xs">Fundación chilena sin fines de lucro</p>
        </div>
      </div>
    </footer>
  )
}
