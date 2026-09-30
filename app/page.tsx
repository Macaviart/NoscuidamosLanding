import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problema from '@/components/Problema'
import Pilares from '@/components/Pilares'
import Conversion from '@/components/Conversion'
import Fundador from '@/components/Fundador'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problema />
      <Pilares />
      <Conversion />
      <Fundador />
      <Footer />
    </main>
  )
}
