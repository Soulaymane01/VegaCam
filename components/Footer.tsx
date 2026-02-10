import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Viga <span className="text-primary">Cam</span></h3>
            <p className="leading-relaxed">
              Experts en solutions de sécurité et climatisation depuis plus de 10 ans. Votre confort et votre sécurité sont notre priorité.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Liens Rapides</h4>
            <ul className="space-y-4">
              <li><Link href="#accueil" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Nos Services</Link></li>
              <li><Link href="#projets" className="hover:text-primary transition-colors">Nos Projets</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li><span className="hover:text-primary cursor-pointer transition-colors">Caméras de Sécurité</span></li>
              <li><span className="hover:text-primary cursor-pointer transition-colors">Climatisation</span></li>
              <li><span className="hover:text-primary cursor-pointer transition-colors">Maintenance Électronique</span></li>
              <li><span className="hover:text-primary cursor-pointer transition-colors">Domotique</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Abonnez-vous</h4>
            <p className="mb-6 opacity-80">Recevez nos dernières actualités et offres.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary text-white px-6 rounded-lg font-bold transition-all hover:bg-primary/90">
                Ok
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-sm opacity-60">
          <p>© {new Date().getFullYear()} Viga Cam. Tous droits réservés. Développé avec passion.</p>
        </div>
      </div>
    </footer>
  )
}

