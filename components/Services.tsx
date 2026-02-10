'use client'

import { motion } from 'framer-motion'
import { Camera, Thermometer, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: 'Caméras de Sécurité',
    description: "Installation professionnelle de caméras de sécurité de haute qualité. Nous vous proposons une large gamme de solutions, des systèmes de surveillance basés sur le cloud aux caméras de sécurité IP. Nous pouvons vous aider à sécuriser votre maison, votre entreprise ou votre site.",
    icon: Camera,
    color: '#0088cc'
  },
  {
    title: 'Climatisation',
    description: "Services d'installation et de maintenance de systèmes de climatisation. Nous travaillons avec les plus grandes marques pour vous garantir un confort optimal tout au long de l'année. Nous offrons des services de réparation, de remplacement et d'entretien pour tous les types de systèmes de climatisation.",
    icon: Thermometer,
    color: '#ff6b00'
  },
  {
    title: 'Matériel Électronique',
    description: "Fourniture d'un large éventail de matériel électronique et services d'installation. Nous vous proposons des produits de haute qualité pour tous vos besoins en matière d'électronique. Nous pouvons vous aider à choisir le matériel le mieux adapté à vos besoins et à l'installer de manière professionnelle.",
    icon: Zap,
    color: '#0088cc'
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Nos <span className="text-primary">Services</span> d&apos;Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Des solutions sur mesure pour votre sécurité et votre confort, installées par des experts certifiés.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-2xl transition-all duration-500 group rounded-3xl overflow-hidden bg-white">
                <CardHeader className="pb-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon
                      size={32}
                      style={{ color: service.color }}
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-3 transition-colors group-hover:text-primary">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0 text-primary font-bold group-hover:translate-x-2 transition-transform">
                    En savoir plus <span className="ml-2">→</span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

