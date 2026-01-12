import PageHeader from "@/components/PageHeader"
import { packages } from "@/data/dummyData"
import { FaCheck } from "react-icons/fa"

export const metadata = {
  title: "Packages - Gilgit Tourism",
  description:
    "All-inclusive travel packages for Gilgit-Baltistan. Honeymoon specials, adventure treks, and complete tours.",

}

export default function PackagesPage() {
  return (
    <main>
      <PageHeader
        title="Travel Packages"
        subtitle="All Inclusive"
        description="Complete travel packages with accommodation, meals, transport, and expert guides."
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                    {pkg.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{pkg.description}</p>

                  {/* Includes */}
                  {pkg.includes && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pkg.includes.map((item, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <FaCheck className="text-primary text-[10px]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary">Rs {pkg.price.toLocaleString()}</span>
                      <span className="text-muted-foreground text-sm">/package</span>
                    </div>
                  </div>

                  {/* WhatsApp Button */}
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
