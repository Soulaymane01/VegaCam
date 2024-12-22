import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { WhyChooseUs } from '@/components/why-choose-us'
import { OurProcess } from '@/components/our-process'
import { Projects } from '@/components/projects'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { CTA } from '@/components/cta'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <WhyChooseUs />
      <OurProcess />
      <Projects />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}

