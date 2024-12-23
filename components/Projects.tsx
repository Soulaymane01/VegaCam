'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const projects = [
  {
    id: 'climatisation',
    title: "Installation de Système de Climatisation",
    description: "Installation d'un système de climatisation de haute qualité pour assurer votre confort en toutes saisons. Nos experts garantissent une installation professionnelle et fiable, adaptée à vos besoins spécifiques.",
    images: Array.from({ length: 10 }, (_, i) => `${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/pr1-${i + 1}.jpeg`)
  },
  {
    id: 'armoires',
    title: "Installation des Armoires",
    description: "Nous offrons un service d'installation d'armoires sur mesure, alliant efficacité et précision. Notre équipe assure une pose rapide et soignée, adaptée à vos besoins spécifiques. Contactez-nous pour un devis personnalisé.",
    images: Array.from({ length: 13 }, (_, i) => `${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/pr2-${i + 1}.jpeg`)
  }
]

export function Projects() {
  return (
    <section id="projets" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Projets</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-uns de nos projets récents
          </p>
        </motion.div>

        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="mb-6 text-gray-600">{project.description}</p>
            <Swiper
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation
              className="w-1/2 h-[800px] md:h-[500px] rounded-lg overflow-hidden"
            >
              {project.images.map((image, imageIndex) => (
                <SwiperSlide key={`${project.id}-image-${imageIndex}`}>
                  <Image src={image} alt={`${project.title} Image ${imageIndex + 1}`} layout="fill" objectFit="cover" />

                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

