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
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Notre <span className="text-primary">Processus</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Une approche structurée pour garantir la réussite de chaque projet d&apos;installation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-20 right-20 h-0.5 bg-primary/10 -z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="w-24 h-24 rounded-full bg-white border-4 border-primary/5 flex items-center justify-center mb-8 shadow-xl group hover:border-primary/20 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold shadow-lg border-2 border-white">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 max-w-xs leading-relaxed text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

