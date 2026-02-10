'use client'

import { motion } from 'framer-motion'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Contactez <span className="text-primary">l&apos;Équipe</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Nous sommes à votre écoute pour concrétiser vos projets de sécurité et de confort.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 grid md:grid-cols-2 gap-6"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-primary/20 transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaPhoneAlt className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Téléphone</h3>
              <div className="flex flex-col space-y-2">
                <a href="tel:0661717248" className="text-gray-600 hover:text-primary transition-colors text-lg">0661 717 248</a>
                <a href="tel:0666130973" className="text-gray-600 hover:text-primary transition-colors text-lg">0666 130 973</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-primary/20 transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaEnvelope className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <a href="mailto:vigacam1@gmail.com" className="text-gray-600 hover:text-primary transition-colors text-lg">vigacam1@gmail.com</a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-primary/20 transition-all group md:col-span-2">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaMapMarkerAlt className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Adresse</h3>
              <p className="text-gray-600 text-lg">Ait Boubidmane Route 7048 - El Hajeb - Meknes, Maroc</p>
            </div>
          </motion.div>

          {/* Opening Hours & Socials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary text-white p-10 rounded-3xl shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-8">Disponibilité</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/20 pb-4">
                  <span className="opacity-80">Lundi - Vendredi</span>
                  <span className="font-bold">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-4">
                  <span className="opacity-80">Samedi</span>
                  <span className="font-bold">09:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center pb-4">
                  <span className="opacity-80">Dimanche</span>
                  <span className="font-bold">Fermé</span>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/vigacam" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-4 rounded-xl hover:bg-white hover:text-primary transition-all duration-300">
                  <FaFacebookF size={20} />
                </a>
                <a href="https://twitter.com/vigacam" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-4 rounded-xl hover:bg-white hover:text-primary transition-all duration-300">
                  <FaTwitter size={20} />
                </a>
                <a href="https://www.linkedin.com/company/vigacam" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-4 rounded-xl hover:bg-white hover:text-primary transition-all duration-300">
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.6726430079713!2d-5.3700000!3d33.9000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU0JzAwLjAiTiA1wrAyMicxMi4wIlc!5e0!3m2!1sen!2sma!4v1625000000000!5m2!1sen!2sma"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="grayscale contrast-125 focus:grayscale-0 transition-all duration-1000"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}

