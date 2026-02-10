"use client"

import { guides } from "@/data/dummyData"
import Link from "next/link"
import { FaStar, FaAward, FaArrowLeft, FaShieldAlt, FaCheckCircle, FaMapMarkerAlt, FaHiking, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import SectionHeading from "@/components/SectionHeading"
import { notFound } from "next/navigation"
import { use, useCallback, useEffect, useState } from "react"
import useEmblaCarousel from 'embla-carousel-react'

export default function GuideDetailsPage({ params }) {
    const resolvedParams = use(params)
    const guideId = parseInt(resolvedParams.id)
    const guide = guides.find(g => g.id === guideId)

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
        setPrevBtnEnabled(emblaApi.canScrollPrev())
        setNextBtnEnabled(emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)
    }, [emblaApi, onSelect])

    if (!guide) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-background pt-24 pb-20">
            {/* Header / Profile Hero remains same... */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <Link href="/guides" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary mb-12 transition-colors group">
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Guides
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5">
                        <div className="relative">
                            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700">
                                <img src={guide.image} alt={guide.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-secondary text-foreground p-6 rounded-3xl shadow-2xl border-4 border-card">
                                <FaAward className="text-3xl" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7 space-y-8">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full border border-primary/20">
                                    Certified Expert
                                </span>
                                <div className="flex items-center gap-1 text-secondary">
                                    <FaStar />
                                    <span className="text-foreground font-black text-sm">{guide.rating} Rating</span>
                                </div>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black font-heading uppercase tracking-tight mb-4">{guide.name}</h1>
                            <p className="text-2xl font-bold text-primary italic uppercase tracking-wider">{guide.specialization}</p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 py-8 border-y border-border/50">
                            <div>
                                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Experience</p>
                                <p className="text-lg font-bold">{guide.experience}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Languages</p>
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {guide.languages.map((l, i) => (
                                        <span key={i} className="text-xs font-bold bg-muted px-2 py-0.5 rounded-md">{l}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Status</p>
                                <p className="text-lg font-bold text-emerald-500 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                    Available
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-black uppercase tracking-tight">Biography</h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {guide.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="px-10 py-4 bg-primary text-white rounded-full font-black uppercase text-xs tracking-widest hover:shadow-xl hover:shadow-primary/20 active:scale-95 transition-all">
                                Request Booking
                            </button>
                            <button className="px-10 py-4 bg-foreground text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-muted hover:text-foreground active:scale-95 transition-all">
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Practical Info Section */}
            <section className="bg-muted/30 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Skills */}
                        <div className="bg-card p-12 rounded-[3.5rem] border border-border shadow-sm">
                            <h3 className="text-2xl font-black font-heading uppercase tracking-tight mb-8 flex items-center gap-3">
                                <FaShieldAlt className="text-primary" /> Core Skills
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {guide.skills.map((skill, i) => (
                                    <div key={i} className="flex items-center gap-3 group">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                            <FaCheckCircle className="text-sm" />
                                        </div>
                                        <span className="font-bold text-muted-foreground">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Areas Covered */}
                        <div className="bg-card p-12 rounded-[3.5rem] border border-border shadow-sm">
                            <h3 className="text-2xl font-black font-heading uppercase tracking-tight mb-8 flex items-center gap-3">
                                <FaMapMarkerAlt className="text-primary" /> Regions Covered
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {guide.areasCovered.map((area, i) => (
                                    <div key={i} className="px-6 py-3 bg-muted rounded-2xl flex items-center gap-3 group hover:bg-primary/10 transition-colors">
                                        <FaHiking className="text-primary" />
                                        <span className="font-bold">{area}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Adventure Gallery Slider */}
            <section className="py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                        <div className="max-w-2xl">
                            <SectionHeading
                                badge="Adventure Gallery"
                                title={<>Captured by <span className="text-primary italic">{guide.name.split(' ')[0]}</span></>}
                                description="A glimpse into the expeditions and moments shared with travelers across the mountains."
                            />
                        </div>
                        <div className="flex gap-4 mb-4">
                            <button
                                onClick={scrollPrev}
                                className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm active:scale-90"
                            >
                                <FaChevronLeft />
                            </button>
                            <button
                                onClick={scrollNext}
                                className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm active:scale-90"
                            >
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>

                    <div className="embla" ref={emblaRef}>
                        <div className="embla__container flex gap-6">
                            {guide.gallery?.map((img, i) => (
                                <div key={i} className="embla__slide flex-[0_0_100%] sm:flex-[0_0_80%] lg:flex-[0_0_60%] min-w-0">
                                    <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl group cursor-grab active:cursor-grabbing">
                                        <img
                                            src={img}
                                            alt={`Adventure with ${guide.name} ${i}`}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                                            <p className="text-white font-black uppercase tracking-widest text-xs">Shot during {guide.areasCovered[i % guide.areasCovered.length]} Expedition</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Progress Dots */}
                    <div className="flex justify-center gap-2 mt-12">
                        {guide.gallery?.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => emblaApi && emblaApi.scrollTo(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${selectedIndex === i ? 'w-12 bg-primary' : 'w-2 bg-border'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial Feature */}
            <section className="py-24">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <div className="text-6xl text-primary/20 font-black mb-8">"</div>
                    <blockquote className="text-2xl md:text-3xl font-medium italic text-foreground/80 leading-relaxed mb-8">
                        {guide.name} was incredible during our trek to Fairy Meadows. His knowledge of the mountains and his jokes made the difficult hike feel like a breeze. We couldn't have asked for a better guide.
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                            <img src="https://i.pravatar.cc/150?u=jane" alt="User" />
                        </div>
                        <div className="text-left">
                            <p className="font-bold">Jane Doe</p>
                            <p className="text-xs text-muted-foreground uppercase tracking-widest font-black">Solo Traveler from UK</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
