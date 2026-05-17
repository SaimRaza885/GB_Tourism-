"use client"

import Link from "next/link"
import { FaGlobeAmericas, FaHotel, FaCar, FaUserTie } from "react-icons/fa"

const services = [
    {
        title: "Tour Packages",
        description: "All-inclusive curated journeys",
        icon: <FaGlobeAmericas />,
        href: "/packages",
        color: "bg-blue-500",
    },
    {
        title: "Luxury Hotels",
        description: "Stays in paradise valleys",
        icon: <FaHotel />,
        href: "/hotels",
        color: "bg-emerald-500",
    },
    {
        title: "Car Rentals",
        description: "Reliable 4x4s with drivers",
        icon: <FaCar />,
        href: "/cars",
        color: "bg-orange-500",
    },
    {
        title: "Expert Guides",
        description: "Travel with local legends",
        icon: <FaUserTie />,
        href: "/guides",
        color: "bg-purple-500",
    },
]

export default function ServicesGrid() {
    return (
        <section className="py-12 relative z-20 -mt-16 md:-mt-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.href}
                            className="group relative bg-card/80 backdrop-blur-xl border border-border p-6 rounded-4xl shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Animated Background Blob */}
                            <div className={`absolute -right-8 -top-8 w-24 h-24 rounded-full opacity-10 group-hover:scale-[3] transition-transform duration-700 ${service.color}`} />

                            <div className="relative z-10 space-y-4">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:rotate-12 ${service.color}`}>
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="font-heading font-black text-lg uppercase tracking-tight group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground text-xs font-semibold">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Line Accent */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-700" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
