"use client"

import { use } from "react"
import { hotels } from "@/data/dummyData"
import { FaStar, FaMapMarkerAlt, FaWifi, FaParking, FaUtensils, FaCheckCircle, FaUserFriends, FaChevronRight, FaArrowLeft } from "react-icons/fa"
import Link from "next/link"
import SectionHeading from "@/components/SectionHeading"
import { notFound } from "next/navigation"

export default function HotelDetailsPage({ params }) {
    const resolvedParams = use(params)
    const hotelId = parseInt(resolvedParams.id)
    const hotel = hotels.find(h => h.id === hotelId)

    if (!hotel) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-background pt-24 pb-20">
            {/* Header / Gallery Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <Link href="/hotels" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary mb-8 transition-colors group">
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Hotels
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-8">
                        <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="lg:col-span-4 grid grid-cols-1 gap-6">
                        {hotel.gallery?.slice(1, 3).map((img, idx) => (
                            <div key={idx} className="aspect-16/10 rounded-3xl overflow-hidden shadow-xl">
                                <img src={img} alt={`${hotel.name} gallery ${idx}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-10">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full border border-primary/20">
                                    {hotel.type}
                                </span>
                                <div className="flex items-center gap-1 text-secondary">
                                    <FaStar />
                                    <span className="text-foreground font-black text-sm">{hotel.rating}</span>
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black font-heading uppercase tracking-tight mb-4">{hotel.name}</h1>
                            <div className="flex items-center gap-2 text-muted-foreground font-medium">
                                <FaMapMarkerAlt className="text-primary" />
                                {hotel.location}, Gilgit-Baltistan
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-black font-heading uppercase tracking-tight border-b border-border pb-4">Description</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {hotel.longDescription || hotel.description}
                            </p>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-2xl font-black font-heading uppercase tracking-tight border-b border-border pb-4">Amenities</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                {hotel.amenities.map((amenity, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-muted-foreground font-bold text-sm">
                                        <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <FaCheckCircle className="text-xs" />
                                        </div>
                                        {amenity}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Rooms Section */}
                        <div className="space-y-8">
                            <h2 className="text-2xl font-black font-heading uppercase tracking-tight border-b border-border pb-4">Available Rooms</h2>
                            <div className="space-y-6">
                                {hotel.rooms ? hotel.rooms.map((room, idx) => (
                                    <div key={idx} className="p-8 bg-card rounded-4xl border border-border shadow-sm hover:shadow-xl transition-all duration-500 group">
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                            <div className="space-y-2">
                                                <h3 className="text-xl font-black uppercase tracking-tight">{room.type}</h3>
                                                <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                                    <span className="flex items-center gap-1.5"><FaUserFriends className="text-primary" /> {room.capacity}</span>
                                                    <span>•</span>
                                                    <span>{room.description}</span>
                                                </div>
                                            </div>
                                            <div className="text-left md:text-right">
                                                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Price per night</p>
                                                <p className="text-2xl font-black text-primary">Rs {room.price.toLocaleString()}</p>
                                                <button className="mt-4 px-8 py-3 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-full hover:shadow-lg hover:shadow-primary/30 active:scale-95 transition-all">
                                                    Book This Room
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )) : (
                                    <p className="text-muted-foreground italic">No specific rooms listed. Please contact for availability.</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Booking Sidebar / Quick Info */}
                    <div className="space-y-8">
                        <div className="sticky top-32 p-10 bg-foreground text-white rounded-[3rem] shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            <h3 className="text-2xl font-black font-heading uppercase tracking-tight mb-6">Reservation</h3>
                            <div className="space-y-6 mb-10">
                                <div>
                                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Starting Price</p>
                                    <p className="text-3xl font-black text-primary">Rs {hotel.price.toLocaleString()}</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-sm font-bold text-white/70 italic">
                                        <FaCheckCircle className="text-primary" /> Free Cancellation
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-bold text-white/70 italic">
                                        <FaCheckCircle className="text-primary" /> Instant Confirmation
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-bold text-white/70 italic">
                                        <FaCheckCircle className="text-primary" /> No Booking Fees
                                    </div>
                                </div>
                            </div>

                            <button className="w-full py-5 bg-white text-primary rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl">
                                Check Availability
                            </button>

                            <p className="text-center mt-6 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Contact support for group booking</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services / Extra Info Section */}
            <section className="bg-muted/30 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        badge="Services"
                        title={<>Added <span className="text-primary italic">Value</span></>}
                        description="Inclusive services and professional assistance during your stay."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Airport Pickup", desc: "Available on request with professional drivers.", icon: <FaMapMarkerAlt /> },
                            { title: "Local Cuisine", desc: "Authentic mountain food cooked by expert chefs.", icon: <FaUtensils /> },
                            { title: "Guided Tours", desc: "Explore around with our certified tour guides.", icon: <FaStar /> },
                        ].map((s, i) => (
                            <div key={i} className="bg-card p-10 rounded-[2.5rem] border border-border group hover:border-primary/20 transition-all">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-xl mb-6 group-hover:scale-110 transition-transform">
                                    {s.icon}
                                </div>
                                <h4 className="text-xl font-black uppercase tracking-tight mb-2">{s.title}</h4>
                                <p className="text-muted-foreground text-sm">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
