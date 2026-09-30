'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="inicio" className="pt-[82px] min-h-screen bg-brand-blue-light relative overflow-hidden flex flex-col">

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(#1c3252 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative flex-1 flex flex-col">
        {/* Main hero content */}
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="section-label text-brand-red mb-6"
                >
                  Salud comunitaria · Chile
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="editorial-headline text-brand-blue-dark mb-8 text-balance"
                >
                  La salud no debería depender de cuánto tienes.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="text-lg text-brand-blue-mid leading-relaxed mb-10 max-w-md font-light"
                >
                  Conectamos pacientes con estudiantes de odontología. Educamos en primeros auxilios. Informamos con rigor. Juntos construimos un Chile más sano.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <a
                    href="#conversion"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-red text-white font-semibold rounded-full hover:bg-red-600 transition-all duration-300 group text-sm"
                  >
                    Buscar atención dental
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                  <a
                    href="#pilares"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-brand-blue-dark/30 text-brand-blue-dark/70 font-medium rounded-full hover:border-brand-blue-dark hover:text-brand-blue-dark transition-all duration-300 text-sm"
                  >
                    Conocer la fundación
                  </a>
                </motion.div>
              </motion.div>

              {/* Image placeholder — editorial style */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="hidden lg:block"
              >
                <div className="aspect-[4/5] bg-white/60 border border-brand-blue-dark/10 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-sm">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue-dark/10 flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-brand-blue-dark/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-brand-blue-dark/25 text-xs">[Foto: atención dental comunitaria]</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom strip — stat bar como Luksic */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-brand-blue-dark/15"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
            <div className="grid grid-cols-3 gap-8">
              {[
                { num: '3', label: 'Pilares de acción' },
                { num: '100%', label: 'Gratuito para pacientes' },
                { num: 'SCL', label: 'Santiago de Chile' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-brand-blue-dark font-bold text-2xl mb-1">{stat.num}</p>
                  <p className="text-brand-blue-mid/50 text-xs tracking-wide uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
