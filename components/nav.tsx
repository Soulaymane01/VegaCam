'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 glass-morphism border-none shadow-none bg-white/40 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/logo-vigacam.jpg`}
                alt="VIGA CAM Logo"
                width={120}
                height={60}
                className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            <NavLink href="#accueil">Accueil</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#projets">Projets</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <MobileNavLink href="#accueil" onClick={() => setIsOpen(false)}>
                Accueil
              </MobileNavLink>
              <MobileNavLink href="#services" onClick={() => setIsOpen(false)}>
                Services
              </MobileNavLink>
              <MobileNavLink href="#projets" onClick={() => setIsOpen(false)}>
                Projets
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative text-gray-700 font-medium transition-colors duration-300 hover:text-primary group py-2"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-gray-800 font-semibold hover:text-primary transition-colors duration-200 block py-4 px-6 rounded-lg hover:bg-primary/10"
    >
      {children}
    </Link>
  )
}

