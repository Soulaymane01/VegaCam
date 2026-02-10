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
    <section id="faq" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Questions <span className="text-primary">Fréquentes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Tout ce que vous devez savoir sur nos services et nos installations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer, index }: { question: string; answer: string, index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <button
        className={`flex justify-between items-center w-full text-left p-6 md:p-8 rounded-[2rem] transition-all duration-300 ${isOpen
            ? 'bg-primary text-white shadow-2xl shadow-primary/20 scale-[1.02]'
            : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
          }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg md:text-xl font-bold">{question}</span>
        <div className={`p-2 rounded-full transition-transform duration-500 ${isOpen ? 'bg-white/20 rotate-180' : 'bg-primary/10'}`}>
          <ChevronDown className={`${isOpen ? 'text-white' : 'text-primary'}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="overflow-hidden"
          >
            <div className="p-8 md:p-10 bg-gray-50 rounded-[2rem] border border-gray-100 text-gray-600 text-lg leading-relaxed shadow-inner">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

