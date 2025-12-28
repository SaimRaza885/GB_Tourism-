import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import DestinationsSection from "@/components/DestinationsSection"
import StatsSection from "@/components/StatsSection"
import FeaturesSection from "@/components/FeaturesSection"
import TestimonialsSection from "@/components/TestimonialsSection"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <DestinationsSection />
        <StatsSection />
        <FeaturesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  )
}
