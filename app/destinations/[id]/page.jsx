"use client"

import { use } from "react"
import { destinations, tours, hotels } from "@/data/dummyData"
import PageBanner from "@/components/PageBanner"
import SectionHeading from "@/components/SectionHeading"
import { FaMapMarkerAlt, FaClock, FaMountain, FaStar, FaGlobe, FaChevronRight } from "react-icons/fa"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function DestinationDetailsPage({ params }) {
    const resolvedParams = use(params)
    const destId = resolvedParams.id
    const destination = destinations.find(d => d.id === destId)

    if (!destination) {
        notFound()
    }

    // Filter related content
    const relatedTours = tours.filter(t => t.location.toLowerCase().includes(destination.name.toLowerCase().split(' ')[0]))
    const relatedHotels = hotels.filter(h => h.location.toLowerCase().includes(destination.name.toLowerCase().split(' ')[0]))

    return (
        <main className="min-h-screen bg-background pb-32">
            <PageBanner
                height="70vh"
                badge={`Explore ${destination.name}`}
                badgeIcon={FaGlobe}
                title={destination.name}
                image={destination.image}
                description={destination.description}
            />

            {/* Overview Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
                <div className="bg-card/80 backdrop-blur-3xl border border-border rounded-[3.5rem] p-10 md:p-16 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Region Overview</span>
                                <h2 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tight leading-none mb-6">
                                    About the <span className="text-primary italic">Region</span>
                                </h2>
                                <p className="text-muted-foreground text-lg leading-relaxed lg:max-w-3xl">
                                    {destination.longDescription}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {destination.tags?.map((tag, i) => (
                                    <span key={i} className="px-5 py-2 bg-muted rounded-full text-[10px] font-black uppercase tracking-widest text-foreground/60 border border-border">
                                        # {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="p-8 bg-foreground text-white rounded-[2.5rem] space-y-8 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                                <h3 className="text-xl font-black uppercase tracking-tight relative z-10">Quick Facts</h3>

                                <div className="space-y-6 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-primary">
                                            <FaClock />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Best Time</p>
                                            <p className="font-bold text-sm">{destination.bestTime}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-primary">
                                            <FaMountain />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Avg Altitude</p>
                                            <p className="font-bold text-sm">{destination.altitude}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-primary">
                                            <FaStar />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Tours</p>
                                            <p className="font-bold text-sm">{destination.tourCount} Managed Tours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Famous Attractions */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <SectionHeading
                    badge="Don't Miss"
                    title={<>Key <span className="text-primary italic">Attractions</span></>}
                    description="The must-visit spots that define the beauty and character of this region."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {destination.attractions?.map((attr, i) => (
                        <div key={i} className="group bg-card p-10 rounded-[3rem] border border-border hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-2xl">
                            <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center text-xl mb-8 group-hover:rotate-12 transition-transform">
                                <FaMapMarkerAlt />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-tight mb-3">{attr.name}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{attr.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Related Tours */}
            <section className="bg-muted/30 py-32 mb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                        <div className="max-w-2xl">
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Recommended Experiences</span>
                            <h2 className="text-4xl md:text-6xl font-black text-foreground uppercase tracking-tight leading-none">Tours in <span className="text-primary italic">{destination.name.split(' ')[0]}</span></h2>
                        </div>
                        <Link href="/packages" className="text-xs font-black uppercase tracking-widest text-primary hover:gap-3 flex items-center gap-2 transition-all">
                            View All Packages <FaChevronRight />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedTours.slice(0, 3).map((tour) => (
                            <Link key={tour.id} href={`/packages/${tour.id}`} className="group bg-card rounded-[2.5rem] overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all duration-500">
                                <div className="aspect-ratio-[16/10] overflow-hidden relative">
                                    <img src={tour.image} alt={tour.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute bottom-4 left-4">
                                        <span className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-xl text-white text-[10px] font-black uppercase tracking-widest border border-white/10">
                                            {tour.duration}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-black uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">{tour.name}</h3>
                                    <p className="text-muted-foreground text-sm line-clamp-2 mb-6">{tour.description}</p>
                                    <div className="flex items-center justify-between pt-6 border-t border-border">
                                        <p className="text-primary font-black">Rs {tour.price.toLocaleString()}</p>
                                        <div className="flex items-center gap-1 text-xs font-bold">
                                            <FaStar className="text-secondary" /> {tour.rating}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Hotels */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Where to Stay</span>
                        <h2 className="text-4xl md:text-6xl font-black text-foreground uppercase tracking-tight leading-none">Luxury <span className="text-primary italic">Stays</span></h2>
                    </div>
                    <Link href="/hotels" className="text-xs font-black uppercase tracking-widest text-primary hover:gap-3 flex items-center gap-2 transition-all">
                        Explore Hotels <FaChevronRight />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {relatedHotels.slice(0, 2).map((hotel) => (
                        <Link key={hotel.id} href={`/hotels/${hotel.id}`} className="group relative h-[400px] rounded-[3.5rem] overflow-hidden shadow-xl">
                            <img src={hotel.image} alt={hotel.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-10 w-full">
                                <div className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest mb-4">
                                    <FaMapMarkerAlt /> {hotel.location}
                                </div>
                                <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">{hotel.name}</h3>
                                <div className="flex items-center justify-between">
                                    <p className="text-white/80 font-medium">Starting from <span className="text-white font-black">Rs {hotel.price.toLocaleString()}</span></p>
                                    <div className="px-5 py-2 bg-primary text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                                        Book Now
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}
