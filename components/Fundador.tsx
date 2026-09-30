'use client'

import { motion } from 'framer-motion'

const credenciales = [
  { label: 'Stop the Bleed', org: 'American College of Surgeons' },
  { label: 'BLS & PALS', org: 'American Heart Association' },
  { label: 'CPR & First Aid', org: 'NHCPS' },
  { label: 'Primeros Auxilios', org: 'Cruz Roja' },
]

export default function Fundador() {
  return (
    <section id="fundador" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label text-gray-300 mb-16"
        >
          Quiénes somos
        </motion.p>

        {/* Layout 2 columnas — ignaciodelsolar style */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Izquierda: foto + credenciales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Foto placeholder — formato editorial vertical */}
            <div className="aspect-[3/4] bg-[#f7f7f5] rounded-2xl flex items-center justify-center mb-8 relative overflow-hidden max-w-sm">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gray-200 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-gray-300 text-xs">[Foto de Ignacio]</p>
              </div>
            </div>

            {/* Credenciales */}
            <div>
              <p className="section-label text-gray-300 mb-4">Certificaciones</p>
              <div className="flex flex-col gap-2">
                {credenciales.map((cred) => (
                  <div
                    key={cred.label}
                    className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-sm font-semibold text-[#0a0a0a]">{cred.label}</span>
                    <span className="text-xs text-gray-400">{cred.org}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Derecha: texto editorial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:pt-4"
          >
            <p className="section-label text-brand-red mb-5">Fundador</p>
            <h2 className="editorial-headline text-[#0a0a0a] mb-6">
              Ignacio
            </h2>
            <p className="text-gray-400 text-sm mb-8">
              Médico Cirujano · Universidad de los Andes
            </p>

            <div className="space-y-5 text-gray-600 leading-relaxed text-base font-light">
              <p>
                Con una visión clara de que la salud es un derecho y no un privilegio,
                Ignacio fundó Nos Cuidamos para tender puentes entre quienes necesitan
                atención y quienes se preparan para brindarla.
              </p>
              <p>
                Su formación como médico cirujano y su pasión por la educación en
                emergencias dan forma a cada iniciativa de la fundación: desde la
                atención dental comunitaria hasta los talleres de primeros auxilios
                que salvan vidas.
              </p>
              <p>
                Instructor certificado por el American College of Surgeons en el
                programa "Stop the Bleed", y con múltiples certificaciones en
                resucitación cardiopulmonar, lleva el rigor clínico al corazón
                de cada proyecto comunitario.
              </p>
            </div>

            {/* Quote — estilo editorial grande */}
            <div className="mt-12 pt-10 border-t border-gray-100">
              <blockquote className="text-2xl font-bold text-[#0a0a0a] leading-tight tracking-tight">
                "Salud para ti, para mí, para todos.
                <span className="text-brand-red"> Juntos nos cuidamos."</span>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
