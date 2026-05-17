import HeroSection from "@/components/home/HeroSection"
import TrustSection from "@/components/home/TrustSection"
import DestinationsSection from "@/components/home/DestinationsSection"
import PackagesSection from "@/components/home/PackagesSection"
import CarRentalBanner from "@/components/home/CarRentalBanner"
import TestimonialsSection from "@/components/home/TestimonialsSection"
import BlogSection from "@/components/home/BlogSection" 

import ServicesGrid from "@/components/home/ServicesGrid"
import HotelSection from "@/components/home/HotelSection"

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

    </main>
  )
}
