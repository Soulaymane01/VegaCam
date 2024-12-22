'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="absolute inset-0 w-[100%] h-[100vh]"
      >
        <SwiperSlide>
          <div className="bg-[url('/images/hero-slide-1.png')] bg-cover bg-center w-[100%] h-[100vh]" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/images/hero-slide-2.png')] bg-cover bg-center w-[100%] h-[100vh]" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/images/hero-slide-3.png')] bg-cover bg-center w-[100%] h-[100vh]" />
        </SwiperSlide>
      </Swiper>

      {/* Content positioned in the center on top */}
      <div className="absolute  inset-0 flex items-center justify-center z-10 ">
        <div className="container  mx-auto px-4 text-center text-white bg-[#6C757D80]">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Bienvenue chez Viga Cam
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Votre partenaire de confiance pour l'installation de caméras de sécurité et de climatisation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-[#0088cc] hover:bg-[#0088cc]/90 text-white"
            >
              Obtenir un devis
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
