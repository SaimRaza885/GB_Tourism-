"use client"

import { useState } from "react"
import { hotels, guides } from "@/data/dummyData"
import SectionHeading from "@/components/SectionHeading"
import { FaStar, FaMapMarkerAlt, FaHotel, FaSwimmer, FaWifi, FaParking, FaUtensils, FaUserTie, FaAward } from "react-icons/fa"
import Link from "next/link"
import PageBanner from "@/components/PageBanner"

export default function HotelsPage() {
    const [filter, setFilter] = useState("All")
    const [locationFilter, setLocationFilter] = useState("All")

    const locations = ["All", ...new Set(hotels.map(h => h.location))]
    const categories = ["All", "Luxury", "Resort", "Budget", "Standard", "Heritage"]

    const filteredHotels = hotels.filter(hotel => {
        const matchCategory = filter === "All" || hotel.type === filter
        const matchLocation = locationFilter === "All" || hotel.location === locationFilter
        return matchCategory && matchLocation
    })

    return (
        <main className="min-h-screen bg-background text-foreground/90">
            <PageBanner
                height="screen"
                badge="Premium Accommodations"
                badgeIcon={FaHotel}
                title="Find Your Sanctuary"
                image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
                description="Discover the most exclusive hotels and hidden gems across the majestic valleys of Gilgit-Baltistan."
                showBreadcrumbs={false}
            >
                {/* Search Bar Mockup */}
                <div className="bg-card/40 backdrop-blur-3xl border border-white/10 p-2.5 rounded-[3rem] shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-3xl mx-auto mt-12 w-full">
                    <div className="flex-1 flex items-center gap-4 px-8 py-4 w-full">
                        <FaMapMarkerAlt className="text-primary text-lg" />
                        <div className="text-left flex-1">
                            <p className="text-[9px] uppercase font-black text-white/40 tracking-widest">Location</p>
                            <input
                                type="text"
                                placeholder="Search by city or valley..."
                                className="bg-transparent border-none outline-none text-white placeholder:text-white/20 text-sm font-bold w-full"
                            />
                        </div>
                    </div>
                    <div className="hidden md:block w-px h-12 bg-white/10 mx-2" />
                    <div className="flex-1 flex items-center gap-4 px-8 py-4 w-full text-left">
                        <FaUserTie className="text-primary text-lg" />
                        <div className="flex-1">
                            <p className="text-[9px] uppercase font-black text-white/40 tracking-widest">Guests</p>
                            <p className="text-white text-sm font-bold">2 Adults, 1 Room</p>
                        </div>
                    </div>
                    <button className="bg-primary text-white p-5 rounded-[2.5rem] font-black uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-primary transition-all active:scale-95 shadow-xl w-full md:w-auto flex items-center justify-center gap-3">
                        Check Availability
                    </button>
                </div>
            </PageBanner>

            {/* Intro Stats Section */}
            <section className="relative z-20 -mt-10 mb-16 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { label: "Verified Stays", value: "45+", icon: <FaHotel />, color: "bg-blue-500" },
                        { label: "Guest Satisfaction", value: "98%", icon: <FaStar />, color: "bg-amber-500" },
                        { label: "Top-Rated Wifi", value: "100%", icon: <FaWifi />, color: "bg-emerald-500" },
                        { label: "Local Support", value: "24/7", icon: <FaUserTie />, color: "bg-purple-500" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-card/90 backdrop-blur-2xl border border-border p-8 rounded-4xl text-center shadow-2xl group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                            <div className={`w-14 h-14 mx-auto mb-6 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:rotate-12 ${stat.color}`}>
                                {stat.icon}
                            </div>
                            <div className="text-3xl font-black font-heading tracking-tight">{stat.value}</div>
                            <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-[0.2em] mt-2">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Filters Section - Refined */}
            <section className="py-8 border-y border-border sticky top-[64px] lg:top-[80px] z-40 bg-background/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mr-2">Category:</span>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${filter === cat
                                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/30 scale-105"
                                        : "bg-muted text-muted-foreground border-transparent hover:border-primary/30 hover:bg-background"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-6 bg-muted/50 p-1.5 rounded-2xl border border-border">
                            <div className="flex items-center gap-3 px-4">
                                <FaMapMarkerAlt className="text-primary text-xs" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Region:</span>
                            </div>
                            <select
                                value={locationFilter}
                                onChange={(e) => setLocationFilter(e.target.value)}
                                className="bg-background border border-border rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-widest focus:ring-2 focus:ring-primary outline-none cursor-pointer"
                            >
                                {locations.map(loc => (
                                    <option key={loc} value={loc}>{loc}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hotel Listings */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        center
                        badge="Your Stay"
                        title={<>Premium <span className="text-primary italic">Accommodations</span></>}
                        description={`Explore our collection of ${filteredHotels.length} hand-picked stays, each offering a unique window into the beauty of the north.`}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredHotels.map((hotel) => (
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

                    {filteredHotels.length === 0 && (
                        <div className="text-center py-20 bg-muted rounded-[3rem] border-2 border-dashed border-border">
                            <h3 className="text-xl font-bold mb-2">No hotels found</h3>
                            <p className="text-muted-foreground">Try adjusting your filters to find more options.</p>
                            <button
                                onClick={() => { setFilter("All"); setLocationFilter("All") }}
                                className="mt-4 text-primary font-bold underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Hospitality Standards - More Relevant to Hotels */}
            <section className="py-24 bg-foreground text-white overflow-hidden relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
                    <FaHotel className="text-[500px] mx-auto" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 inline-block">The Gilgit Standard</span>
                        <h2 className="text-4xl md:text-6xl font-black font-heading mb-6 tracking-tight uppercase">Elevated <span className="text-primary">Hospitality</span></h2>
                        <p className="text-white/50 text-lg leading-relaxed">We don't just book rooms; we curate experiences. Every hotel in our collection must meet rigorous standards of excellence.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Heritage & Soul",
                                desc: "Stay in properties that tell a story, from restored Silk Road forts to traditional walnut-wood villas.",
                                icon: <FaAward />,
                                color: "primary"
                            },
                            {
                                title: "Modern Comfort",
                                desc: "High-speed satellite internet, heating, and premium bedding in even the most remote mountain locations.",
                                icon: <FaSwimmer />,
                                color: "blue-500"
                            },
                            {
                                title: "Local Tastes",
                                desc: "Farm-to-table dining experiences featuring organic apricots, local trout, and traditional mountain cuisine.",
                                icon: <FaUtensils />,
                                color: "emerald-500"
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-4xl group hover:bg-white/10 transition-all duration-500">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl mb-8 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-black font-heading uppercase mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 py-12 px-10 rounded-[3rem] bg-primary text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-primary/20">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white text-3xl">
                                <FaHotel />
                            </div>
                            <div>
                                <h4 className="text-2xl font-black font-heading uppercase tracking-tight">Planning a Large Group?</h4>
                                <p className="text-white/70 font-medium">We offer special rates and logistics for corporate retreats and large families.</p>
                            </div>
                        </div>
                        <Link href="/contact" className="px-10 py-5 bg-white text-primary rounded-full font-black uppercase text-sm hover:scale-105 transition-transform active:scale-95 shadow-xl whitespace-nowrap">
                            Get Group Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-background text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 opacity-10">
                            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                            <h2 className="text-3xl md:text-5xl font-black font-heading uppercase tracking-tight">Need help choosing?</h2>
                            <p className="text-white/80 text-lg">Our local team in Gilgit can help you find the perfect stay based on your budget and itinerary.</p>
                            <div className="pt-4">
                                <Link href="/contact" className="px-10 py-5 bg-white text-primary rounded-full font-black uppercase text-sm hover:bg-secondary hover:text-foreground transition-all shadow-2xl active:scale-95">
                                    Get Free Consultation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
