import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'
import Pains from '@/components/sections/Pains'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Testimonials from '@/components/sections/Testimonials'
import News from '@/components/sections/News'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pains />
        <Services />
        <Projects />
        <Testimonials />
        <News />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
