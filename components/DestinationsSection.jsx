import Link from "next/link"
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa"
import { destinations } from "@/data/dummyData"
import SectionHeading from "./SectionHeading"
import { FaMapMarkerAlt, FaGlobe } from "react-icons/fa"

export default function DestinationsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Where to go"
          title={<>Major <span className="text-primary italic">Regions</span> to Explore</>}
          description="Gilgit-Baltistan is a vast land of diverse cultures and landscapes. Choose your region and start adventuring."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <Link
              key={dest.id}
              href={`/destinations/${dest.id}`}
              className="group relative h-[350px] rounded-[2.5rem] overflow-hidden shadow-xl"
            >
              {/* Background Image */}
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-x-0 bottom-0 p-8 space-y-2">
                <div className="flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                  <FaMapMarkerAlt />
                  <span>{dest.tourCount}+ Tours Available</span>
                </div>
                <h3 className="text-3xl font-black text-white font-heading uppercase tracking-tight">{dest.name}</h3>
                <p className="text-white/70 text-sm line-clamp-1">{dest.description}</p>

                <div className="pt-4 overflow-hidden h-0 group-hover:h-12 transition-all duration-500">
                  <div className="inline-flex items-center gap-2 bg-white text-foreground px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                    Explore Region
                    <FaGlobe className="text-primary" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
