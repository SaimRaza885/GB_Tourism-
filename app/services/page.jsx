"use client"

import { FaCar, FaCamera, FaHotel, FaMapMarkedAlt, FaHiking, FaPhoneAlt, FaUtensils, FaPassport, FaCreditCard } from "react-icons/fa"
import SectionHeading from "@/components/SectionHeading"
import Link from "next/link"
import PageBanner from "@/components/PageBanner"

export default function ServicesPage() {
    const mainServices = [
        {
            title: "Premium Hotels",
            desc: "A hand-picked collection of luxury and heritage stays across Northern Pakistan.",
            icon: <FaHotel />,
            link: "/hotels",
            features: ["Verified Reviews", "Best Rates", "Instant Booking"]
        },
        {
            title: "Car Rentals",
            desc: "Safe and reliable transport with experienced local drivers for mountain terrain.",
            icon: <FaCar />,
            link: "/cars",
            features: ["4x4 Specialist", "Fuel Included", "Airport Transfers"]
        },
        {
            title: "Guide Services",
            desc: "Professional certified mountain and cultural guides to enrich your journey.",
            icon: <FaHiking />,
            link: "/guides",
            features: ["Native Speakers", "Safety Certified", "Local Insights"]
        },
        {
            title: "Photography",
            desc: "Professional visual documentation of your expedition or special moments.",
            icon: <FaCamera />,
            link: "/photography",
            features: ["High-res Photos", "Drone Coverage", "Event Shoot"]
        }
    ]

    const secondaryServices = [
        { title: "Special Permits", icon: <FaPassport />, desc: "Assistance with NOCs and trek permits." },
        { title: "Outdoor Equipment", icon: <FaHiking />, desc: "Camping and trekking gear for rent." },
        { title: "Local Logistics", icon: <FaMapMarkedAlt />, desc: "Helicopter rescue and cargo services." },
        { title: "Traditional Food", icon: <FaUtensils />, desc: "Catering for large groups/expeditions." },
        { title: "Payment Support", icon: <FaCreditCard />, desc: "Secure local and international payments." },
        { title: "24/7 Concierge", icon: <FaPhoneAlt />, desc: "Always available for on-trip support." },
    ]

    return (
        <main className="min-h-screen bg-background pt-24 pb-20">
            <PageBanner
                height="45vh"
                title="Our Dedicated Services"
                image="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop"
                description="Comprehensive travel solutions tailored for the unique landscape of Gilgit-Baltistan."
            />

            {/* Main Services Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {mainServices.map((s, i) => (
                        <div key={i} className="group bg-card p-12 rounded-[3.5rem] border border-border hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-2xl">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="w-20 h-20 bg-primary/10 rounded-4xl flex items-center justify-center text-primary text-3xl shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                                    {s.icon}
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-black uppercase tracking-tight mb-2">{s.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {s.features.map((f, idx) => (
                                            <span key={idx} className="text-[10px] font-black uppercase tracking-widest bg-muted px-3 py-1.5 rounded-full text-foreground/70">
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                    <Link href={s.link} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-primary hover:gap-4 transition-all pt-4">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Secondary Services Section */}
            <section className="bg-foreground text-white py-32 rounded-[5rem] mx-4 sm:mx-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 inline-block">Support Services</span>
                        <h2 className="text-4xl md:text-6xl font-black font-heading uppercase tracking-tight">Beyond <span className="text-primary italic">Booking</span></h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {secondaryServices.map((s, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-primary text-xl shrink-0 border border-white/5">
                                    {s.icon}
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold uppercase tracking-tight">{s.title}</h4>
                                    <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 text-center">
                <div className="max-w-3xl mx-auto px-4 space-y-10">
                    <h2 className="text-3xl md:text-5xl font-black font-heading uppercase tracking-tight">Ready to start your <span className="text-primary italic">Adventure?</span></h2>
                    <p className="text-muted-foreground text-lg italic">"The mountain is calling, and I must go." — John Muir</p>
                    <div className="pt-6">
                        <Link href="/contact" className="px-12 py-5 bg-primary text-white rounded-full font-black uppercase text-sm hover:scale-105 transition-transform active:scale-95 shadow-2xl">
                            Plan Your Custom Trip
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
