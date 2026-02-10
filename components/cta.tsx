'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full -ml-32 -mb-32 blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Prêt à Sécuriser votre Espace ?
          </h2>
          <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Contactez nos experts aujourd&apos;hui pour une consultation gratuite et un devis personnalisé pour vos besoins d&apos;installation.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/95 px-10 py-7 text-xl rounded-2xl shadow-2xl transition-all hover:scale-105 font-bold"
          >
            Obtenir mon Devis Gratuit
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

