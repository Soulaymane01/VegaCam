'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0088cc] to-[#ff6b00]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Contact us today for a free consultation and quote for your installation needs
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-[#0088cc] hover:bg-white/90"
          >
            Contact Us Now
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

