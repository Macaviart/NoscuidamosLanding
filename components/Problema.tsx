'use client'

import { motion } from 'framer-motion'

const stats = [
  { num: '6/10', label: 'chilenos sin acceso a atención dental regular' },
  { num: '40%', label: 'no sabe cómo actuar ante una emergencia médica' },
  { num: 'Alta', label: 'escasez de información confiable en salud' },
]

export default function Problema() {
  return (
    <section id="problema" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Label + headline — estilo ignaciodelsolar */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label text-brand-red mb-5">El contexto</p>
            <h2 className="editorial-headline text-[#0a0a0a] text-balance">
              ¿Por qué existe Nos Cuidamos?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-end"
          >
            <div className="border-l-2 border-gray-100 pl-8">
              <p className="text-lg text-gray-500 leading-relaxed font-light">
                Nos enfrentamos a la ausencia de conocimientos en primeros auxilios,
                la escasez de información confiable sobre salud, y el limitado acceso
                a servicios dentales costeables y de calidad.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats — números grandes editoriales */}
        <div className="grid md:grid-cols-3 gap-0 border border-gray-100 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-10 lg:p-12 ${i < stats.length - 1 ? 'border-b md:border-b-0 md:border-r border-gray-100' : ''}`}
            >
              <p className="text-5xl lg:text-6xl font-black text-[#0a0a0a] mb-4 tracking-tight">{stat.num}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
