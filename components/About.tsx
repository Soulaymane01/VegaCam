import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export function About() {
  return (
    <section id="a-propos" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-3xl rotate-3"></div>
              <div className="relative bg-gray-100 rounded-[2.5rem] aspect-square flex items-center justify-center overflow-hidden border-8 border-white shadow-2xl">
                <span className="text-9xl font-bold text-primary/10">VIGA</span>
                {/* Image placeholder - would be a real team/office photo */}
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-[2rem] shadow-2xl text-white hidden md:block">
                <p className="text-4xl font-bold mb-1">10+</p>
                <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Années d&apos;Expertise</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <h4 className="text-primary font-bold text-sm tracking-widest uppercase mb-4">À Propos de Nous</h4>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
              Votre Sécurité, Notre <span className="text-primary">Engagement</span> Quotidien.
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Depuis plus d&apos;une décennie, Viga Cam s&apos;impose comme le partenaire de référence au Maroc pour l&apos;installation de systèmes de sécurité et de solutions de climatisation.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                "Experts Certifiés",
                "Solutions sur Mesure",
                "Support 24/7",
                "Matériel Premium"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-6 h-6" />
                  <span className="font-bold text-gray-800">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed mb-0">
              Notre équipe d&apos;ingénieurs et de techniciens passionnés met tout son savoir-faire à votre service pour transformer vos espaces en lieux sûrs et confortables.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

