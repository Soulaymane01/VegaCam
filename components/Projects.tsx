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
    <section id="projets" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Nos <span className="text-primary">Réalisations</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Un aperçu de notre savoir-faire à travers nos interventions récentes.
          </p>
        </motion.div>

        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 mb-24 items-center`}
          >
            <div className="flex-1 w-full">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                <Swiper
                  modules={[Pagination, Navigation]}
                  pagination={{ clickable: true }}
                  navigation
                  className="w-full aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl relative z-10"
                >
                  {project.images.map((image, imageIndex) => (
                    <SwiperSlide key={`${project.id}-image-${imageIndex}`}>
                      <div className="relative w-full h-full">
                        <Image
                          src={image}
                          alt={`${project.title} Image ${imageIndex + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            <div className="flex-1 text-left">
              <div className="max-w-xl">
                <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">Portfolio</span>
                <h3 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900">{project.title}</h3>
                <p className="mb-8 text-gray-600 text-lg leading-relaxed">{project.description}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-primary rounded-full"></div>
                  <span className="text-primary font-bold">Qualité Certifiée</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

