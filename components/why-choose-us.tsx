'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, ThumbsUp, Award } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: "Expertise",
    description: "Notre équipe possède des années d'expérience dans l'installation de caméras de sécurité et de systèmes de climatisation."
  },
  {
    icon: Clock,
    title: "Service rapide",
    description: "Nous nous engageons à fournir un service rapide et efficace pour minimiser les perturbations dans votre vie quotidienne."
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction garantie",
    description: "Votre satisfaction est notre priorité. Nous travaillons jusqu'à ce que vous soyez entièrement satisfait de notre service."
  },
  {
    icon: Award,
    title: "Produits de qualité",
    description: "Nous n'utilisons que des produits et des équipements de la plus haute qualité pour assurer la durabilité et la fiabilité."
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Pourquoi <span className="text-primary">nous choisir</span> ?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            L&apos;excellence technique et le service client sont au cœur de notre engagement quotidien.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-10 rounded-[2rem] bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/10"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

