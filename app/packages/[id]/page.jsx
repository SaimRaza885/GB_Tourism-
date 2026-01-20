import { packages } from "@/data/dummyData"
import Link from "next/link"
import { notFound } from "next/navigation"
import { FaCalendarAlt, FaStar, FaMapMarkerAlt, FaWhatsapp, FaCheckCircle, FaPlay, FaQuestionCircle, FaShieldAlt, FaPlaneDeparture, FaSuitcase, FaUserShield } from "react-icons/fa"
import GalleryViewer from "@/components/GalleryViewer"

export async function generateStaticParams() {
    return packages.map((pkg) => ({
        id: pkg.id.toString(),
    }))
}

export default async function PackageDetailsPage({ params }) {
    const { id } = await params
    const pkg = packages.find((p) => p.id === parseInt(id))

    if (!pkg) {
        notFound()
    }

    // Get similar packages (excluding current one)
    const similarPackages = packages.filter(p => p.id !== pkg.id).slice(0, 3)

    return (
        <main className="bg-background min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden group">
                <img
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <div className="max-w-7xl mx-auto animation-fade-in-up">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="inline-block py-1.5 px-4 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold shadow-md">
                                {pkg.duration}
                            </span>
                            <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold border border-white/20">
                                All Inclusive
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 shadow-sm font-heading leading-tight">
                            {pkg.name}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm md:text-base">
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20">
                                <FaStar className="text-yellow-400" />
                                <span className="font-semibold">{pkg.rating} (Premium Package)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">

                        {/* Overview */}
                        <section>
                            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">Package Overview</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {pkg.longDescription || pkg.description}
                            </p>
                        </section>

                        {/* What's Included Card */}
                        {pkg.includes && (
                            <section className="bg-gradient-to-br from-card to-muted p-8 rounded-3xl border border-border shadow-sm">
                                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                                    <FaShieldAlt className="text-primary" /> What's Included
                                </h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    {pkg.includes.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 shrink-0">
                                                <FaCheckCircle className="text-sm" />
                                            </div>
                                            <span className="font-medium text-foreground">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Travel Essentials Info Snippet */}
                        <section className="bg-primary/5 border border-primary/20 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center">
                            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl shrink-0">
                                <FaSuitcase />
                            </div>
                            <div className="grow text-center md:text-left">
                                <h3 className="text-lg font-bold mb-1">Travel Essentials</h3>
                                <p className="text-sm text-muted-foreground">We handle the big stuff, but plan your personal items. Check weather conditions before packing and bring comfortable trekking shoes!</p>
                            </div>
                        </section>

                        {/* Itinerary */}
                        {pkg.itinerary && (
                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-8 border-l-4 border-primary pl-4">Itinerary Schedule</h2>
                                <div className="border-l-2 border-primary/30 ml-3 space-y-8">
                                    {pkg.itinerary.map((day, idx) => (
                                        <div key={idx} className="relative pl-8 group">
                                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-4 border-primary group-hover:bg-primary transition-colors" />
                                            <div className="space-y-2 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                                                <span className="text-sm font-bold tracking-widest text-primary uppercase">Day {day.day}</span>
                                                <h3 className="text-xl font-bold text-foreground">{day.title}</h3>
                                                <p className="text-muted-foreground">{day.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Gallery */}
                        {pkg.gallery && pkg.gallery.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">Gallery</h2>
                                <GalleryViewer images={pkg.gallery} />
                            </section>
                        )}

                        {/* Video at the bottom */}
                        {pkg.videoUrl && (
                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">Experience the Journey</h2>
                                <div className="rounded-2xl overflow-hidden shadow-lg aspect-video ring-1 ring-border">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={pkg.videoUrl}
                                        title="Package Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </section>
                        )}

                        {/* FAQs */}
                        {pkg.faqs && (
                            <section>
                                <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">
                                    Frequently Asked Questions
                                </h2>
                                <div className="space-y-4">
                                    {pkg.faqs.map((faq, idx) => (
                                        <div key={idx} className="bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
                                            <h3 className="flex items-start gap-3 font-semibold text-lg text-foreground mb-2">
                                                <FaQuestionCircle className="text-primary mt-1 shrink-0" />
                                                {faq.question}
                                            </h3>
                                            <p className="text-muted-foreground ml-8">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                    </div>

                    {/* Sidebar Booking Card */}
                    <div className="relative">
                        <div className="sticky top-24 space-y-8">
                            {/* Booking Widget */}
                            <div className="bg-card rounded-3xl p-8 border border-border shadow-xl ring-1 ring-black/5">
                                <div className="mb-6">
                                    <span className="text-sm text-muted-foreground uppercase tracking-wide">Total Price</span>
                                    <div className="flex items-end gap-2">
                                        <span className="text-4xl font-bold text-primary">Rs {pkg.price.toLocaleString()}</span>
                                        <span className="text-muted-foreground mb-1">/ package</span>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 text-muted-foreground">
                                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                            <FaCalendarAlt />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium uppercase text-muted-foreground/70">Duration</p>
                                            <p className="font-semibold text-foreground">{pkg.duration}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 text-muted-foreground">
                                        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                            <FaMapMarkerAlt />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium uppercase text-muted-foreground/70">Locations</p>
                                            <p className="font-semibold text-foreground">{pkg.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 text-muted-foreground">
                                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                            <FaPlaneDeparture />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium uppercase text-muted-foreground/70">Type</p>
                                            <p className="font-semibold text-foreground">All Inclusive</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-muted/50 rounded-xl mb-6 border border-border/50">
                                    <p className="text-sm font-medium text-foreground mb-2">Package Highlights:</p>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> All Transport Included</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Premium Hotels Provided</li>
                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Breakfast & Dinner Included</li>
                                    </ul>
                                </div>

                                <a
                                    href={`https://wa.me/${pkg.whatsapp?.replace(/[^0-9]/g, "")}?text=Hi, I am interested in the package: ${pkg.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-xl font-bold text-lg hover:bg-[#128C7E] transition-all hover:shadow-lg hover:-translate-y-0.5"
                                >
                                    <FaWhatsapp className="text-2xl" /> Book Package
                                </a>

                                <p className="text-xs text-center text-muted-foreground mt-4 flex items-center justify-center gap-1">
                                    <FaUserShield className="text-primary" /> 24/7 Support Included
                                </p>
                            </div>

                            {/* Similar Packages */}
                            <div className="bg-card rounded-3xl p-6 border border-border shadow-lg">
                                <h3 className="font-bold text-lg mb-4">Similar Packages</h3>
                                <div className="space-y-4">
                                    {similarPackages.map((sp) => (
                                        <Link href={`/packages/${sp.id}`} key={sp.id} className="flex gap-3 group">
                                            <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                                                <img src={sp.image} alt={sp.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">{sp.name}</h4>
                                                <span className="text-xs text-muted-foreground block mb-1">{sp.duration}</span>
                                                <span className="text-primary font-bold text-sm">Rs {sp.price.toLocaleString()}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
