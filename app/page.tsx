import { Nav } from '@/components/nav'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { WhyChooseUs } from '@/components/why-choose-us'
import { OurProcess } from '@/components/our-process'
import { Projects } from '@/components/Projects'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { CTA } from '@/components/cta'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
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

