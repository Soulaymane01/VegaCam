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
          <div
            style={{
              backgroundImage: `url('${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/hero-slide-1.png')`,
            }}
            className="bg-cover bg-center w-[100%] h-[100vh]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/hero-slide-2.png')`,
            }}
            className="bg-cover bg-center w-[100%] h-[100vh]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/hero-slide-3.png')`,
            }}
            className="bg-cover bg-center w-[100%] h-[100vh]"
          />
        </SwiperSlide>
      </Swiper>

      {/* Content positioned in the center on top */}
      <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/30">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto glass-morphism p-8 md:p-12 text-center rounded-2xl"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
            >
              Bienvenue chez <span className="text-primary">Viga Cam</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg md:text-xl mb-10 text-gray-700 leading-relaxed"
            >
              Votre partenaire de confiance pour l&apos;installation de <span className="font-semibold text-primary">caméras de sécurité</span> et de <span className="font-semibold text-secondary">climatisation</span>.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg transition-all hover:scale-105"
              >
                Obtenir un devis
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg rounded-xl transition-all"
              >
                Nos Services
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
