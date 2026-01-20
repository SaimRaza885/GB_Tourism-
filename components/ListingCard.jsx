'use client'

import { FaWhatsapp, FaMapMarkerAlt, FaStar } from "react-icons/fa"
import Link from "next/link"

export default function ListingCard({ item, type = "tour" }) {
  const whatsappLink = `https://wa.me/${item.whatsapp?.replace(/[^0-9]/g, "")}?text=Hi, I'm interested in ${item.name}`

  // Function to determine the link URL based on type
  const getLinkUrl = () => {
    if (type === "tour") return `/tours/${item.id}`
    return null
  }

  const linkUrl = getLinkUrl()

  const CardContent = () => (
    <>
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {item.location && (
          <div className="absolute top-3 left-3 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
            {item.location}
          </div>
        )}
        {type === "car" && item.type && (
          <div className="absolute top-3 left-3 px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
            {item.type}
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">{item.name}</h3>

        {item.location && type !== "car" && (
          <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
            <FaMapMarkerAlt className="text-primary text-xs" />
            <span>{item.location}</span>
          </div>
        )}

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{item.description}</p>

        {(item.duration || item.seats) && (
          <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
            {item.duration && <span className="px-2 py-1 bg-muted rounded-md">{item.duration}</span>}
            {item.seats && <span className="px-2 py-1 bg-muted rounded-md">{item.seats} Seats</span>}
          </div>
        )}

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-primary">
              Rs {type === "car" ? item.pricePerDay?.toLocaleString() : item.price?.toLocaleString()}
            </span>
            <span className="text-muted-foreground text-sm">{type === "car" ? "/day" : "/person"}</span>
          </div>
          {item.rating && (
            <div className="flex items-center gap-1">
              <FaStar className="text-secondary text-sm" />
              <span className="text-sm font-medium">{item.rating}</span>
            </div>
          )}
        </div>
      </div>
    </>
  )

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      {linkUrl ? (
        <Link href={linkUrl} className="block grow cursor-pointer">
          <CardContent />
        </Link>
      ) : (
        <div className="block grow">
          <CardContent />
        </div>
      )}

      {/* WhatsApp Button - Kept separate to ensure it's always clickable without triggering the page nav */}
      <div className="p-5 pt-0 mt-auto">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white rounded-xl font-medium hover:bg-[#128C7E] transition-colors relative z-10"
        >
          <FaWhatsapp className="text-lg" />
          Book via WhatsApp
        </a>
      </div>
    </div>
  )
}
