'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/images/logo-vigacam.jpg" alt="Logo Viga Cam" width={50} height={50} />
          <h1 className="ml-2 text-xl font-bold">Viga Cam</h1>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="md:flex md:space-x-4">
            <li><Link href="#home" className="hover:text-blue-500">Accueil</Link></li>
            <li><Link href="#about" className="hover:text-blue-500">À Propos</Link></li>
            <li><Link href="#services" className="hover:text-blue-500">Services</Link></li>
            <li><Link href="#projects" className="hover:text-blue-500">Projets</Link></li>
            <li><Link href="#contact" className="hover:text-blue-500">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

