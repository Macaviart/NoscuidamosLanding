'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

const pacienteFeatures = [
  'Atención a bajo costo con estudiantes supervisados',
  'Clínicas universitarias acreditadas',
  'Tratamientos de calidad garantizada',
]

const estudianteFeatures = [
  'Practica habilidades clínicas reales',
  'Contribuye a tu comunidad',
  'Forma parte de una red comprometida',
]

export default function Conversion() {
  return (
    <section id="conversion" className="bg-brand-blue-dark py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label text-white/30 mb-5">Únete hoy</p>
            <h2 className="editorial-headline text-white">
              ¿Cómo podemos<br />ayudarte hoy?
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/30 text-sm max-w-xs leading-relaxed lg:text-right"
          >
            Elige tu perfil y comienza tu camino hacia una salud más accesible
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Paciente */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-10 hover:bg-white/8 transition-all duration-300 group flex flex-col"
          >
            <p className="section-label text-white/30 mb-8">Para pacientes</p>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
              Busco atención dental
            </h3>
            <p className="text-white/40 text-sm leading-relaxed mb-8 font-light">
              Accede a atención dental de calidad a bajo costo con estudiantes
              supervisados por profesionales certificados.
            </p>
            <ul className="space-y-3 mb-10 flex-1">
              {pacienteFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-sm text-white/50">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
            <a
              href="mailto:noscuidamos.contacto@gmail.com?subject=Solicitud de atención dental"
              className="inline-flex items-center gap-2 px-7 py-4 bg-brand-red text-white font-semibold rounded-full hover:bg-red-600 transition-all duration-300 text-sm group/btn self-start"
            >
              Encontrar atención
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>

          {/* Estudiante */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-10 hover:bg-white/8 transition-all duration-300 group flex flex-col"
          >
            <p className="section-label text-white/30 mb-8">Para estudiantes</p>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
              Quiero participar
            </h3>
            <p className="text-white/40 text-sm leading-relaxed mb-8 font-light">
              Practica tus habilidades clínicas mientras ayudas a quienes más
              lo necesitan y construyes un Chile más sano.
            </p>
            <ul className="space-y-3 mb-10 flex-1">
              {estudianteFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-sm text-white/50">
                  <CheckCircle className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
            <a
              href="mailto:noscuidamos.contacto@gmail.com?subject=Quiero unirme como estudiante"
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/25 text-white font-semibold rounded-full hover:bg-white hover:text-[#0a0a0a] transition-all duration-300 text-sm group/btn self-start"
            >
              Unirme como estudiante
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
