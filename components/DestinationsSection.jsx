import Link from "next/link"
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa"
import { tours } from "@/data/dummyData"

export default function DestinationsSection() {
  const featuredTours = tours.slice(0, 3)

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Top Destinations</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Explore top destinations</h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-background transition-colors">
              <FaChevronLeft className="text-muted-foreground" />
            </button>
            <button className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTours.map((tour) => (
            <div
              key={tour.id}
              className="group bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={tour.image || "/women.png?height=300&width=300"}
                  alt={tour.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  {tour.location}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-lg mb-1">{tour.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{tour.location}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-primary">Rs {tour.price.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-secondary text-sm" />
                    <span className="text-sm">{tour.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            See All
            <FaChevronRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  )
}
