import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { BeforeAfter } from '@/components/before-after'
import { About } from '@/components/about'
import { Testimonials } from '@/components/testimonials'
import { Affiliates } from '@/components/affiliates'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <About />
        <Testimonials />
        <Affiliates />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
