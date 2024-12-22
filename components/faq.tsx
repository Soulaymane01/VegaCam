'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "Quels types de caméras de sécurité proposez-vous ?",
    answer: "Nous proposons une large gamme de caméras de sécurité, y compris des caméras IP, des caméras sans fil, des caméras PTZ et des systèmes de vidéosurveillance complets. Nous adaptons nos solutions en fonction des besoins spécifiques de chaque client."
  },
  {
    question: "Combien de temps prend généralement l'installation d'un système de climatisation ?",
    answer: "La durée d'installation d'un système de climatisation peut varier en fonction de la taille du bâtiment et de la complexité du système. En général, une installation résidentielle standard peut prendre de 1 à 3 jours, tandis qu'une installation commerciale plus importante peut prendre jusqu'à une semaine."
  },
  {
    question: "Offrez-vous des services de maintenance pour les systèmes que vous installez ?",
    answer: "Oui, nous offrons des services de maintenance régulière pour tous les systèmes que nous installons. Cela inclut des contrôles périodiques, des nettoyages et des réparations si nécessaire. Nous proposons également des contrats de maintenance pour assurer le bon fonctionnement à long terme de vos équipements."
  },
  {
    question: "Quelles marques de climatiseurs installez-vous ?",
    answer: "Nous travaillons avec les meilleures marques du marché, notamment Daikin, Mitsubishi Electric, LG, et Samsung. Nous sélectionnons les marques en fonction de leur fiabilité, de leur efficacité énergétique et de leur rapport qualité-prix."
  }
]

export function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions fréquentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trouvez les réponses à vos questions les plus courantes
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-4"
    >
      <button
        className="flex justify-between items-center w-full text-left p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{question}</span>
        <ChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 p-4 bg-white rounded-lg shadow"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

