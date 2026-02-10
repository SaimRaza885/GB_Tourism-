import PageBanner from "@/components/PageBanner"
import { packages } from "@/data/dummyData"
import { FaCheck, FaMapMarkerAlt, FaStar, FaBox } from "react-icons/fa"

export const metadata = {
  title: "Packages - Gilgit Tourism",
  description:
    "All-inclusive travel packages for Gilgit-Baltistan. Honeymoon specials, adventure treks, and complete tours.",

}

import Link from "next/link"

export default function PackagesPage() {
  return (
    <main>
      <PageBanner
        height="50vh"
        badge="All Inclusive"
        badgeIcon={FaBox}
        title="Travel Packages"
        image="https://images.unsplash.com/photo-1549400813-982fe3929497?q=80&w=2070&auto=format&fit=crop"
        description="Complete travel packages with accommodation, meals, transport, and expert guides."
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <Link href={`/packages/${pkg.id}`} className="grow block cursor-pointer">
                  <div className="relative aspect-4/3 overflow-hidden">
                    <img
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.name}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                      {pkg.duration}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-card-foreground line-clamp-1 group-hover:text-primary transition-colors">
                        {pkg.name}
                      </h3>
                      <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium bg-yellow-50 px-2 py-0.5 rounded-md">
                        <FaStar />
                        <span>{pkg.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm mb-4">
                      <FaMapMarkerAlt className="mr-1 text-primary/70" />
                      {pkg.location}
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      {pkg.description}
                    </p>
                    <div className="pt-4 border-t border-border flex items-center justify-between">
                      <div>
                        <span className="text-xs text-muted-foreground block">Starting from</span>
                        <span className="text-lg font-bold text-primary">Rs {pkg.price.toLocaleString()}</span>
                      </div>
                      <span className="text-sm font-medium text-primary group-hover:underline">View Details</span>
                    </div>
                  </div>
                </Link>

                {/* WhatsApp Button */}
                <div className="px-5 pb-5 mt-auto">
                  <a
                    href={`https://wa.me/${pkg.whatsapp?.replace(/[^0-9]/g, "")}?text=Hi, I'm interested in ${pkg.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white rounded-xl font-medium hover:bg-[#128C7E] transition-colors"
                  >
                    Book via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
