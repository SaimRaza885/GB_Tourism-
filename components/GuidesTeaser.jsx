"use client"

import { guides } from "@/data/dummyData"
import SectionHeading from "./SectionHeading"
import { FaStar, FaChevronRight } from "react-icons/fa"
import Link from "next/link"

export default function GuidesTeaser() {
    return (
        <section className="py-24 bg-foreground text-white overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -mr-64 -mt-64" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeading
                    badge="Local Legends"
                    title={<>Meet Your <span className="text-primary italic">Expert Guides</span></>}
                    description="Travel with certified local legends who know these mountains better than anyone else."
                    linkHref="/guides"
                    linkText="View All Guides"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {guides.slice(0, 4).map((guide) => (
                        <div key={guide.id} className="group flex flex-col items-center">
                            <div className="relative w-40 h-40 mb-6">
                                <div className="absolute inset-0 bg-primary/20 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500 blur-md" />
                                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary shadow-2xl transition-all duration-500 group-hover:border-white">
                                    <img
                                        src={guide.image}
                                        alt={guide.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                            </div>
                            <div className="text-center space-y-2">
                                <h3 className="text-xl font-bold font-heading uppercase tracking-tight">{guide.name}</h3>
                                <p className="text-primary text-[10px] font-black uppercase tracking-widest">{guide.specialization}</p>
                                <div className="flex items-center justify-center gap-1.5 pt-2">
                                    <FaStar className="text-secondary text-xs" />
                                    <span className="text-sm font-bold">{guide.rating}</span>
                                    <span className="text-white/40 text-[10px] font-bold uppercase ml-1">• {guide.experience} Exp</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center lg:hidden">
                    <Link href="/guides" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm group">
                        See all experts
                        <FaChevronRight className="text-xs transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
