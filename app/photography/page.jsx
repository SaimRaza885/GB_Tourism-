"use client"

import { FaCamera, FaVideo, FaMountain, FaImages, FaWhatsapp, FaStar, FaAward } from "react-icons/fa"
import SectionHeading from "@/components/SectionHeading"
import Link from "next/link"
import PageBanner from "@/components/PageBanner"

export default function PhotographyPage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-20">
            <PageBanner
                badge="Capturing Memories"
                badgeIcon={FaCamera}
                title="Professional Photography"
                image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
                description="Don't just see the mountains—keep them forever. Professional photography and videography services for your journey."
            />

            {/* Services Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                <SectionHeading
                    center
                    badge="Our Packages"
                    title={<>Visual <span className="text-primary italic">Storytelling</span></>}
                    description="Choose the perfect package to document your adventure in the Gilgit-Baltistan region."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Expedition Shoot",
                            price: "25,000",
                            desc: "A dedicated photographer for your entire trek or tour. High-end equipment and professional editing included.",
                            features: ["Full Day Coverage", "100+ Edited Photos", "Drone Footage", "Social Media Edits"],
                            icon: <FaCamera />,
                            color: "bg-blue-500"
                        },
                        {
                            title: "Portrait Session",
                            price: "10,000",
                            desc: "A 2-hour professional photoshoot at a scenic location like Attabad Lake or Altit Fort.",
                            features: ["2 Hours Session", "25 Edited Photos", "2 Locations", "High-res Downloads"],
                            icon: <FaImages />,
                            color: "bg-primary"
                        },
                        {
                            title: "Cinematic Film",
                            price: "45,000",
                            desc: "A high-quality cinematic video documenting your journey, perfect for YouTube or Vlogs.",
                            features: ["3-5 Min Cinematic Film", "4K Drone Shots", "Sound Design", "Interview/Voiceover"],
                            icon: <FaVideo />,
                            color: "bg-amber-500"
                        }
                    ].map((pkg, i) => (
                        <div key={i} className="bg-card rounded-[3rem] p-10 border border-border shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col">
                            <div className={`w-16 h-16 ${pkg.color} text-white rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:rotate-12 transition-transform`}>
                                {pkg.icon}
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-2">{pkg.title}</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-3xl font-black text-primary">Rs {pkg.price}</span>
                                <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest">/ session</span>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                                {pkg.desc}
                            </p>
                            <ul className="space-y-4 mb-10">
                                {pkg.features.map((f, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-xs font-bold text-foreground/70 uppercase tracking-widest">
                                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-primary text-[8px]">
                                            <FaStar />
                                        </div>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-5 bg-foreground text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-primary transition-all active:scale-95 shadow-xl">
                                Book Photographer
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Showcase Gallery */}
            <section className="bg-foreground py-32 mb-32 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="grid grid-cols-4 gap-4 rotate-12 scale-150">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                            <div key={i} className="aspect-square bg-white rounded-3xl" />
                        ))}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
                        <div className="max-w-2xl">
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">The Portfolio</span>
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none">Frozen <span className="text-primary italic">Moments</span></h2>
                        </div>
                        <p className="text-white/40 max-w-md text-right">
                            A glimpse into the stunning visual stories we've captured for our clients across the valleys.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2050&auto=format&fit=crop"
                        ].map((img, i) => (
                            <div key={i} className={`aspect-3/4 rounded-4xl overflow-hidden group ${i % 2 === 1 ? 'translate-y-12' : ''}`}>
                                <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100" alt="Portfolio" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-4 pb-20">
                <div className="bg-primary rounded-[4rem] p-12 md:p-20 text-white text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <FaCamera className="text-[300px] absolute -right-32 -bottom-32 rotate-12" />
                    </div>
                    <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black font-heading uppercase tracking-tight">Need a custom shoot?</h2>
                        <p className="text-white/80 text-lg">From wedding shoots in the mountains to corporate documentaries, we can handle it all.</p>
                        <div className="pt-6">
                            <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 bg-white text-primary rounded-full font-black uppercase text-sm hover:scale-105 active:scale-95 transition-all shadow-xl">
                                <FaWhatsapp className="text-xl" /> Chat with Studio
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
