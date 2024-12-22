'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { Star } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: "Ahmed Benhassou",
    role: "Propriétaire de maison",
    content: "Viga Cam a fait un travail exceptionnel pour l'installation de notre système de sécurité. Leur équipe est professionnelle et attentionnée.",
    rating: 5,
  },
  {
    name: "Fatima Zahra El Amrani",
    role: "Gérant de boutique",
    content: "La climatisation installée par Viga Cam a complètement transformé notre espace de travail. Nous sommes très satisfaits du résultat !",
    rating: 5,
  },
  {
    name: "Youssef El Kabbaj",
    role: "Directrice d'école",
    content: "Le système de caméras de sécurité installé par Viga Cam nous donne une tranquillité d'esprit totale. Un grand merci à toute l'équipe !",
    rating: 5,
  },
]

export function Testimonials() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que disent nos clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les expériences de nos clients satisfaits
          </p>
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

