'use client'

import { motion } from 'framer-motion'
import { PhoneCall, ClipboardList, PenToolIcon as Tools, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: PhoneCall,
    title: "Contact initial",
    description: "Vous nous contactez pour discuter de vos besoins en matière de sécurité ou de climatisation."
  },
  {
    icon: ClipboardList,
    title: "Évaluation et devis",
    description: "Nous évaluons vos besoins et vous fournissons un devis détaillé pour nos services."
  },
  {
    icon: Tools,
    title: "Installation",
    description: "Notre équipe d'experts procède à l'installation de votre système de manière efficace et professionnelle."
  },
  {
    icon: CheckCircle,
    title: "Suivi et support",
    description: "Nous assurons un suivi après l'installation et restons disponibles pour tout support dont vous pourriez avoir besoin."
  }
]

export function OurProcess() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre processus</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez comment nous travaillons pour vous offrir le meilleur service possible
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center mb-8 md:mb-0"
            >
              <div className="w-16 h-16 rounded-full bg-[#0088cc] flex items-center justify-center mb-4">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 max-w-xs">{step.description}</p>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

