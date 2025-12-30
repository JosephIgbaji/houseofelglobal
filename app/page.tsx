import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LeadApostle } from "@/components/lead-apostle"
import { Partnership } from "@/components/partnership"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <LeadApostle />
      <Partnership />
      <Contact />
      <Footer />
    </main>
  )
}
