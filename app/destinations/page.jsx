"use client"

import { destinations } from "@/data/dummyData"
import PageBanner from "@/components/PageBanner"
import { FaGlobe, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa"
import Link from "next/link"

export default function DestinationsPage() {
    return (
        <main className="min-h-screen bg-background pb-32">
            <PageBanner
                height="50vh"
                badge="Our Regions"
                badgeIcon={FaGlobe}
                title="Discover The Valleys"
                image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
                description="From the ancient forts of Hunza to the cold desert of Skardu, explore the diverse landscapes of Gilgit-Baltistan."
            />

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {destinations.map((dest) => (
                        <Link
                            key={dest.id}
                            href={`/destinations/${dest.id}`}
                            className="group flex flex-col bg-card rounded-[3.5rem] overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="aspect-ratio-[16/10] overflow-hidden relative">
                                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute top-6 left-6">
                                    <div className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-xl text-white text-[10px] font-black uppercase tracking-widest border border-white/10 flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-primary" /> {dest.tourCount}+ Tours
                                    </div>
                                </div>
                            </div>
                            <div className="p-10 flex-1 flex flex-col">
                                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors">{dest.name}</h3>
                                <p className="text-muted-foreground leading-relaxed mb-10 flex-1 line-clamp-3">
                                    {dest.description}
                                </p>
                                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary group-hover:gap-4 transition-all">
                                    Explore Region <FaChevronRight />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}
