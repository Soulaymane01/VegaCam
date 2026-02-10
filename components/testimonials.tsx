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
    <section id="temoignages" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Ce que disent <span className="text-primary">nos clients</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            La satisfaction de nos clients est notre plus belle récompense.
          </p>
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          className="pb-20 !px-4"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100 flex flex-col h-full"
              >
                <div className="flex items-center mb-8">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 italic mb-10 text-lg leading-relaxed flex-grow">
                  &quot;{testimonial.content}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-bold text-xl uppercase">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

