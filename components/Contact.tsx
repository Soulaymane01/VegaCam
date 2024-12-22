'use client'

import { motion } from 'framer-motion'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            N&apos;hésitez pas à nous contacter pour toute question ou demande de devis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Nos coordonnées</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhoneAlt className="text-[#0088cc] mr-4" />
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <a href="tel:0661717248" className="text-gray-600 hover:text-[#0088cc]">0661 717248</a>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-[#0088cc] mr-4" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:vigacam1@gmail.com" className="text-gray-600 hover:text-[#0088cc]">vigacam1@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-[#0088cc] mr-4" />
                <div>
                  <p className="font-semibold">Adresse</p>
                  <p className="text-gray-600">Ait Boubidmane Route 7048 - El Hajeb - Meknes</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-12 mb-6">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/vigacam" target="_blank" rel="noopener noreferrer" className="bg-[#0088cc] text-white p-3 rounded-full hover:bg-[#0088cc]/80 transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com/vigacam" target="_blank" rel="noopener noreferrer" className="bg-[#0088cc] text-white p-3 rounded-full hover:bg-[#0088cc]/80 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/vigacam" target="_blank" rel="noopener noreferrer" className="bg-[#0088cc] text-white p-3 rounded-full hover:bg-[#0088cc]/80 transition-colors">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Heures d&apos;ouverture</h3>
            <div className="space-y-2">
              <p><span className="font-semibold">Lundi - Vendredi:</span> 9h00 - 18h00</p>
              <p><span className="font-semibold">Samedi:</span> 9h00 - 14h00</p>
              <p><span className="font-semibold">Dimanche:</span> Fermé</p>
            </div>
            <p className="mt-6 text-gray-600">
              Notre équipe est disponible pendant les heures d&apos;ouverture pour répondre à toutes vos questions et vous fournir l&apos;assistance dont vous avez besoin.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Notre emplacement</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.6726430079713!2d-5.3700000!3d33.9000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU0JzAwLjAiTiA1wrAyMicxMi4wIlc!5e0!3m2!1sen!2sma!4v1625000000000!5m2!1sen!2sma" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

