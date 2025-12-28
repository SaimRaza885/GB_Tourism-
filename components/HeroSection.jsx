import Link from "next/link"
import { FaArrowRight, FaPlay } from "react-icons/fa"
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Decorative elements */}
      <div className="absolute top-20 right-1/4 w-16 h-16">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-primary opacity-20">
          <path
            d="M5 12h14M12 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-light rounded-full mb-6">
              <span className="text-secondary text-sm font-medium">Explore the world</span>
              <span className="text-secondary">✨</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              From Gilgit
              <br />
              <span className="text-primary">to the World.</span>
            </h1>

            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Stay updated with travel tips, recommendations, and latest packages. Your gateway to the majestic
              mountains of Gilgit-Baltistan.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Get Started
                <FaArrowRight className="text-sm" />
              </Link>
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-medium hover:bg-muted transition-colors">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <FaPlay className="text-primary-foreground text-xs ml-0.5" />
                </div>
                Learn More
              </button>
            </div>

            {/* Partner Logos */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap items-center gap-8 opacity-50">
                <span className="font-heading font-semibold text-sm">traveloka</span>
                <span className="font-heading font-semibold text-sm">tiket.com</span>
                <span className="font-heading font-semibold text-sm">Booking.com</span>
                <span className="font-heading font-semibold text-sm">tripadvisor</span>
                <span className="font-heading font-semibold text-sm">airbnb</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="order-1 lg:order-2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src="hotel.jpg?height=400&width=300"
                    alt="Traveler"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src="/stream.jpg?height=300&width=300"
                    alt="Hunza Valley"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src={"/turist.jpg?height=300&width=300"}
                    alt="Gilgit Mountains"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Arrow */}
            <div className="absolute -top-4 right-1/4 text-primary">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path d="M10 50 Q30 10 50 30" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                <path d="M45 25 L50 30 L45 35" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
