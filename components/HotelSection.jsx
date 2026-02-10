import Link from "next/link"
import SectionHeading from "@/components/SectionHeading"
import { hotels, guides } from "@/data/dummyData"
import { FaStar, FaMapMarkerAlt, FaHotel, FaSwimmer, FaWifi, FaParking, FaUtensils, FaUserTie, FaAward } from "react-icons/fa"

function HotelSection() {

    let top_hotels = hotels.slice(0, 3)

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    center
                    badge="Your Stay"
                    title={<>Premium <span className="text-primary italic">Accommodations</span></>}
                    description={`Explore our collection of ${hotels.length} hand-picked stays, each offering a unique window into the beauty of the north.`}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {top_hotels.map((hotel) => (
                        <Link key={hotel.id} href={`/hotels/${hotel.id}`} className="group bg-card rounded-4xl overflow-hidden border border-border shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-2">
                            <div className="relative aspect-4/3 overflow-hidden">
                                <img
                                    src={hotel.image}
                                    alt={hotel.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider rounded-full border border-white/20">
                                        {hotel.type}
                                    </span>
                                </div>
                                <div className="absolute bottom-4 left-4">
                                    <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                                        <FaStar className="text-secondary text-xs" />
                                        <span className="text-white text-xs font-bold">{hotel.rating}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 space-y-4">
                                <div>
                                    <div className="flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-widest mb-1">
                                        <FaMapMarkerAlt />
                                        <span>{hotel.location}</span>
                                    </div>
                                    <h3 className="text-xl font-bold font-heading line-clamp-1 group-hover:text-primary transition-colors">{hotel.name}</h3>
                                </div>

                                <p className="text-muted-foreground text-xs line-clamp-2 leading-relaxed">
                                    {hotel.description}
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {hotel.amenities.slice(0, 3).map((amenity, idx) => (
                                        <div key={idx} className="flex items-center gap-1 text-[10px] text-muted-foreground bg-muted px-2 py-1 rounded-md">
                                            {amenity.includes("WiFi") && <FaWifi />}
                                            {amenity.includes("Pool") && <FaSwimmer />}
                                            {amenity.includes("Restaurant") && <FaUtensils />}
                                            {amenity.includes("Parking") && <FaParking />}
                                            <span>{amenity}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4 border-t border-border flex items-center justify-between">
                                    <div>
                                        <p className="text-[9px] uppercase font-bold text-muted-foreground">Starting from</p>
                                        <span className="text-xl font-black text-primary">Rs {hotel.price.toLocaleString()}</span>
                                    </div>
                                    <div className="px-6 py-2.5 bg-primary text-white text-xs font-bold rounded-full group-hover:shadow-lg group-hover:shadow-primary/30 transition-all active:scale-95">
                                        View Details
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {top_hotels.length === 0 && (
                    <div className="text-center py-20 bg-muted rounded-[3rem] border-2 border-dashed border-border">
                        <h3 className="text-xl font-bold mb-2">No hotels found</h3>
                        <p className="text-muted-foreground">Try adjusting your filters to find more options.</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default HotelSection