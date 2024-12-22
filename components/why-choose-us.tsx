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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi nous choisir</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez ce qui fait de Viga Cam le choix idéal pour vos besoins en sécurité et climatisation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <reason.icon className="w-12 h-12 text-[#0088cc] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

