'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, Instagram, Facebook, Youtube } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Atención Dental', href: '#pilares', dropdown: true },
  { label: 'Primeros Auxilios', href: '#pilares' },
  { label: 'Concientizarnos', href: '#pilares' },
  { label: 'Quiénes Somos', href: '#fundador' },
]

const dentalLinks = [
  { label: 'Soy Paciente', href: '#conversion' },
  { label: 'Soy Estudiante de Odontología', href: '#conversion' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top utility bar — style Luksic */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-brand-blue-dark text-white/60 text-[11px] py-2 px-6 flex justify-between items-center">
        <span className="tracking-widest uppercase font-medium">Fundación Noscuidamos · Santiago, Chile</span>
        <div className="flex items-center gap-4">
          <a href="https://instagram.com/noscuidamos.cl" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
            <Facebook className="w-3.5 h-3.5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
            <Youtube className="w-3.5 h-3.5" />
          </a>
          <span className="text-white/20">|</span>
          <a href="mailto:noscuidamos.contacto@gmail.com" className="hover:text-white transition-colors duration-200">
            Contacto
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <motion.header
        className={`fixed top-[33px] left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/98 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-white'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#inicio" className="hover:opacity-80 transition-opacity duration-200">
              <Logo variant="dark" />
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button className="flex items-center gap-1 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
                      {link.label}
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                        >
                          {dentalLinks.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="block px-5 py-3.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-medium transition-colors duration-150 border-b border-gray-50 last:border-0"
                            >
                              {item.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contacto"
                className="px-5 py-2 text-sm font-semibold text-brand-red border border-brand-red rounded-full hover:bg-brand-red hover:text-white transition-all duration-200"
              >
                Donar
              </a>
              <a
                href="#conversion"
                className="px-5 py-2 text-sm font-semibold text-white bg-brand-blue-dark rounded-full hover:bg-brand-blue-mid transition-all duration-200"
              >
                Buscar atención →
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[33px] left-0 right-0 z-30 bg-white border-b border-gray-100 shadow-lg pt-16"
          >
            <div className="px-6 py-4 flex flex-col gap-1 max-w-7xl mx-auto">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-3 text-sm text-gray-700 hover:text-gray-900 font-medium border-b border-gray-50 last:border-0"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-2 pb-4">
                <a
                  href="#conversion"
                  className="py-3 text-sm font-semibold text-white bg-brand-blue-dark rounded-full text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Buscar atención →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
