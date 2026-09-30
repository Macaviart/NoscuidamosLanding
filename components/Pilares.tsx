'use client'

import { motion } from 'framer-motion'
import { Stethoscope, HeartPulse, BookOpen, ArrowUpRight } from 'lucide-react'

const pilares = [
  {
    num: '01',
    icon: Stethoscope,
    title: 'Atención Dental',
    description:
      'Conectamos pacientes que buscan atención de bajo costo con estudiantes de odontología en campus clínicos supervisados.',
    quote: 'Los pacientes cuidan a los estudiantes; los estudiantes cuidan a los pacientes.',
    links: [
      { label: 'Soy Paciente', href: '#conversion' },
      { label: 'Soy Estudiante', href: '#conversion' },
    ],
    accent: 'border-brand-blue-mid',
    iconBg: 'bg-blue-50',
    iconColor: 'text-brand-blue-mid',
  },
  {
    num: '02',
    icon: HeartPulse,
    title: 'Primeros Auxilios',
    description:
      'Transmitimos conocimientos básicos para enfrentar situaciones de emergencia con confianza y efectividad.',
    quote: 'La vida del otro puede estar en tus manos.',
    links: [{ label: 'Conocer más', href: '#fundador' }],
    accent: 'border-brand-red',
    iconBg: 'bg-red-50',
    iconColor: 'text-brand-red',
    featured: true,
  },
  {
    num: '03',
    icon: BookOpen,
    title: 'Concientizarnos',
    description:
      'Informamos sobre salud y enfermedades para fomentar la capacidad de identificarlas y preservar el bienestar.',
    quote: 'Información de calidad para decisiones de salud.',
    links: [{ label: 'Síguenos', href: 'https://instagram.com/noscuidamos.cl' }],
    accent: 'border-brand-blue-mid',
    iconBg: 'bg-blue-50',
    iconColor: 'text-brand-blue-mid',
  },
]

export default function Pilares() {
  return (
    <section id="pilares" className="bg-[#f7f7f5] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label text-gray-400 mb-5">Nuestras iniciativas</p>
            <h2 className="editorial-headline text-[#0a0a0a]">
              Tres pilares<br />de acción
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-sm max-w-xs leading-relaxed lg:text-right"
          >
            Áreas donde trabajamos para construir comunidades más sanas en Chile
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {pilares.map((pilar, i) => (
            <motion.div
              key={pilar.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-white rounded-2xl p-8 lg:p-10 flex flex-col border-t-2 ${pilar.accent} hover:shadow-lg transition-shadow duration-300 group ${pilar.featured ? 'lg:-translate-y-3' : ''}`}
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-gray-200 font-black text-4xl tracking-tighter select-none">{pilar.num}</span>
                <div className={`w-11 h-11 ${pilar.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <pilar.icon className={`w-5 h-5 ${pilar.iconColor}`} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">{pilar.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{pilar.description}</p>

              <p className={`text-xs font-medium italic border-l-2 pl-3 mb-8 ${pilar.featured ? 'border-brand-red text-brand-red' : 'border-gray-200 text-gray-400'}`}>
                "{pilar.quote}"
              </p>

              <div className="flex flex-wrap gap-2">
                {pilar.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-semibold rounded-full transition-colors duration-200 group/btn"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
