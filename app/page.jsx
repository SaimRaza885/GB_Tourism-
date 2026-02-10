import HeroSection from "@/components/HeroSection"
import TrustSection from "@/components/TrustSection"
import DestinationsSection from "@/components/DestinationsSection"
import PackagesSection from "@/components/PackagesSection"
import CarRentalBanner from "@/components/CarRentalBanner"
import TestimonialsSection from "@/components/TestimonialsSection"
import BlogSection from "@/components/BlogSection"
import GuidesTeaser from "@/components/GuidesTeaser"

import ServicesGrid from "@/components/ServicesGrid"
import HotelSection from "../components/HotelSection"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesGrid />
      <PackagesSection />
      <HotelSection />
      <DestinationsSection />
      <TrustSection />
      <CarRentalBanner />
      <BlogSection />
      <TestimonialsSection />
      {/* <GuidesTeaser /> */}

    </main>
  )
}
