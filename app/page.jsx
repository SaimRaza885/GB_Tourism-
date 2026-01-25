import HeroSection from "@/components/HeroSection"
import TrustSection from "@/components/TrustSection"
import DestinationsSection from "@/components/DestinationsSection"
import PackagesSection from "@/components/PackagesSection"
import CarRentalBanner from "@/components/CarRentalBanner"
import TestimonialsSection from "@/components/TestimonialsSection"
import BlogSection from "@/components/BlogSection"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <DestinationsSection />
      <PackagesSection />
      <CarRentalBanner />
      <TrustSection />
      <TestimonialsSection />
      <BlogSection />
    </main>
  )
}
