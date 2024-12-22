import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Viga Cam - Installation de Caméras de Sécurité et Climatisation',
  description: 'Votre partenaire de confiance pour l\'installation de caméras de sécurité et de climatisation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

