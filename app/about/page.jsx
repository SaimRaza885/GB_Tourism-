"use client"

import { guides } from "@/data/dummyData"
import SectionHeading from "@/components/SectionHeading"
import { FaBullseye, FaEye, FaUsers, FaShieldAlt } from "react-icons/fa"
import Link from "next/link"
import PageBanner from "@/components/PageBanner"

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-24 pb-20">
            <PageBanner
                height="50vh"
                title="Discover Our Story"
                image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
                description="Connecting adventurous souls with the hidden gems of Gilgit-Baltistan since 2020."
            />

            {/* Mission & Purpose */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Who We Are</span>
                            <h2 className="text-3xl md:text-5xl font-black font-heading uppercase tracking-tight leading-[1.1]">
                                Your Gateway to the <span className="text-primary italic">Roof of the World</span>
                            </h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            Gilgit Tourism was founded with a single mission: to provide authentic, sustainable, and unforgettable travel experiences in Northern Pakistan. We believe that travel has the power to transform, and our goal is to show you the true heart of our majestic mountains and vibrant cultures.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-6 bg-card rounded-3xl border border-border">
                                <FaBullseye className="text-primary text-3xl mb-4" />
                                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                                <p className="text-muted-foreground text-sm">To empower local communities through sustainable tourism while providing world-class service to travelers.</p>
                            </div>
                            <div className="p-6 bg-card rounded-3xl border border-border">
                                <FaEye className="text-primary text-3xl mb-4" />
                                <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                                <p className="text-muted-foreground text-sm">To be the most trusted and innovative tourism platform for Gilgit-Baltistan, recognized globally for excellence.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl skew-y-2 hover:skew-y-0 transition-transform duration-700">
                            <img
                                src="https://images.unsplash.com/photo-1549400813-982fe3929497?q=80&w=2070&auto=format&fit=crop"
                                alt="Gilgit Landscape"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-primary p-8 rounded-4xl text-white shadow-2xl hidden md:block">
                            <div className="text-4xl font-black">500+</div>
                            <div className="text-xs font-bold uppercase tracking-widest opacity-80">Groups Hosted</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Guides Section */}
            <section className="bg-muted/50 py-32 mb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        center
                        badge="Our Team"
                        title={<>Meet Our <span className="text-primary italic">Expert Guides</span></>}
                        description="The faces behind your adventures. Our guides are local experts with deep roots in the mountains."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {guides.map((guide) => (
                            <div key={guide.id} className="group bg-card rounded-[2.5rem] overflow-hidden border border-border shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-2">
                                <div className="aspect-square overflow-hidden relative">
                                    <img
                                        src={guide.image}
                                        alt={guide.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                                            <p className="text-white text-[10px] font-black uppercase tracking-widest leading-none mb-1">{guide.specialization}</p>
                                            <h3 className="text-white font-bold">{guide.name}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-muted-foreground text-xs line-clamp-3 leading-relaxed mb-6">
                                        {guide.description}
                                    </p>
                                    <Link
                                        href={`/guides/${guide.id}`}
                                        className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:gap-3 transition-all"
                                    >
                                        View Profile
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Links Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-foreground text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-black font-heading uppercase tracking-tight">Trust & <span className="text-primary">Safety</span></h2>
                            <p className="text-white/60 text-lg">We take our legal and ethical responsibilities seriously. Please review our policies to understand how we protect your journey.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                            <Link href="/privacy" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-full font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white/20 transition-all">
                                <FaShieldAlt className="inline mr-2" />
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-full font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white/20 transition-all">
                                <FaUsers className="inline mr-2" />
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
