"use client"

import { guides } from "@/data/dummyData"
import SectionHeading from "@/components/SectionHeading"
import { FaStar, FaAward, FaCalendarAlt, FaLanguage, FaMountain, FaMapMarkedAlt, FaChevronRight, FaChevronLeft } from "react-icons/fa"
import Link from "next/link"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

export default function GuidesPage() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
    const [selectedIndex, setSelectedIndex] = useState(0)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)
    }, [emblaApi, onSelect])

    const expeditionImages = [
        "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
    ]

    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section remains same... */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop"
                        alt="Gilgit Baltistan Mountains and Guides"
                        className="w-full h-full object-cover brightness-50"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-background" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight font-heading">
                        Our Local <span className="text-primary italic">Legends</span>
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        Meet the certified experts who bring the stories of Gilgit-Baltistan to life.
                    </p>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        badge="Certified Experts"
                        title="Travel with the Best"
                        description="Our guides are more than just navigators; they are storytellers, historians, and safety experts trained to deliver an unforgettable experience."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {guides.map((guide) => (
                            <Link key={guide.id} href={`/guides/${guide.id}`} className="group relative">
                                {/* Guide Card */}
                                <div className="bg-card rounded-[3rem] p-8 pb-12 border border-border transition-all duration-500 hover:shadow-2xl hover:border-primary/20 group-hover:-translate-y-2 overflow-hidden">

                                    {/* Image and Background accent */}
                                    <div className="relative w-40 h-40 mx-auto mb-8">
                                        <div className="absolute inset-0 bg-primary/10 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500" />
                                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card shadow-xl">
                                            <img
                                                src={guide.image}
                                                alt={guide.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 bg-secondary text-foreground p-3 rounded-full shadow-lg border-4 border-card">
                                            <FaAward />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center space-y-4">
                                        <div>
                                            <h3 className="text-2xl font-black font-heading uppercase tracking-tight group-hover:text-primary transition-colors">{guide.name}</h3>
                                            <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mt-1">{guide.specialization}</p>
                                        </div>

                                        <div className="flex items-center justify-center gap-6 py-4 border-y border-border/50">
                                            <div className="text-center">
                                                <p className="text-[10px] uppercase text-muted-foreground font-black tracking-widest mb-1">Experience</p>
                                                <p className="text-sm font-bold">{guide.experience}</p>
                                            </div>
                                            <div className="w-px h-8 bg-border" />
                                            <div className="text-center">
                                                <p className="text-[10px] uppercase text-muted-foreground font-black tracking-widest mb-1">Rating</p>
                                                <p className="text-sm font-bold flex items-center gap-1 justify-center">
                                                    <FaStar className="text-secondary" />
                                                    {guide.rating}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground text-sm leading-relaxed px-2 line-clamp-2">
                                            {guide.description}
                                        </p>

                                        <div className="pt-6">
                                            <div className="w-full py-4 bg-primary text-white rounded-2xl font-bold uppercase text-[10px] tracking-widest group-hover:bg-foreground transition-colors shadow-lg shadow-primary/20 active:scale-95 flex items-center justify-center gap-2">
                                                View Full Profile
                                                <FaChevronRight className="text-[8px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expedition Moments Showcase Slider */}
            <section className="py-24 overflow-hidden bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                        <div className="max-w-2xl">
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Adventures</span>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">Expedition <span className="text-primary italic">Moments</span></h2>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={scrollPrev} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm active:scale-90 bg-background">
                                <FaChevronLeft />
                            </button>
                            <button onClick={scrollNext} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm active:scale-90 bg-background">
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>

                    <div className="embla" ref={emblaRef}>
                        <div className="embla__container flex gap-4">
                            {expeditionImages.map((img, i) => (
                                <div key={i} className="embla__slide flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                                    <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden group shadow-lg">
                                        <img src={img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Expedition" />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats / Why Us Section */}
            <section className="py-24 bg-card border-y border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-12">
                        {[
                            { icon: <FaCalendarAlt />, label: "Years Experience", value: "15+" },
                            { icon: <FaMountain />, label: "Peaks Conquered", value: "40+" },
                            { icon: <FaLanguage />, label: "Languages Spoken", value: "8+" },
                            { icon: <FaMapMarkedAlt />, label: "Custom Routes", value: "100+" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center space-y-4">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl mx-auto">
                                    {stat.icon}
                                </div>
                                <div>
                                    <h4 className="text-3xl font-black font-heading">{stat.value}</h4>
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guide Banner */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-[4rem] overflow-hidden bg-foreground text-white p-12 md:p-24 text-center">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0 0 L100 0 L50 100 Z" fill="currentColor" />
                            </svg>
                        </div>

                        <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm">Become a Partner</span>
                            <h2 className="text-4xl md:text-6xl font-black font-heading uppercase tracking-tight">Are you a local guide?</h2>
                            <p className="text-white/60 text-lg">Join the fastest growing travel network in Gilgit-Baltistan and show the world the beauty of your homeland.</p>
                            <div className="pt-8">
                                <Link href="/contact" className="px-12 py-5 bg-primary text-white rounded-full font-black uppercase text-sm hover:scale-105 transition-transform shadow-2xl shadow-primary/20 inline-block">
                                    Apply to Join
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
