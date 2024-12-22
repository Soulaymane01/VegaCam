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
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous fournissons des services d'installation professionnels avec un accent sur la qualité et la fiabilité
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon 
                      size={24} 
                      style={{ color: service.color }}
                    />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0 text-[#0088cc]">
                    En savoir plus →
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

