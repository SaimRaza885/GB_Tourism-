import { tours } from "@/data/dummyData"
import Link from "next/link"
import { notFound } from "next/navigation"
import { FaCalendarAlt, FaStar, FaMapMarkerAlt, FaWhatsapp, FaImage, FaPlay, FaQuestionCircle, FaShieldAlt, FaAward, FaUserTie } from "react-icons/fa"
import GalleryViewer from "@/components/GalleryViewer"
import BookingButton from "@/components/BookingButton"

export async function generateStaticParams() {
    return tours.map((tour) => ({
        id: tour.id.toString(),
    }))
}

export default async function TourDetailsPage({ params }) {
    const { id } = await params
    const tour = tours.find((t) => t.id === parseInt(id))

    if (!tour) {
        notFound()
    }

    // Get similar tours (excluding current one)
    const similarTours = tours.filter(t => t.id !== tour.id).slice(0, 3)

    return (
        <main className="bg-background min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden group">
                <img
                    src={tour.image || "/placeholder.svg"}
                    alt={tour.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <div className="max-w-7xl mx-auto animation-fade-in-up">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-4 shadow-lg backdrop-blur-md">
                            {tour.location}
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 shadow-sm leading-tight">
                            {tour.name}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm md:text-base">
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20">
                                <FaStar className="text-yellow-400" />
                                <span className="font-semibold">{tour.rating} (Verified Reviews)</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20">
                                <FaCalendarAlt />
                                <span>{tour.duration}</span>
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
                            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">Overview</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {tour.longDescription || tour.description}
                            </p>
                        </section>

                        {/* Why Choose Us Banner */}
                        <section className="bg-muted/30 p-8 rounded-2xl border border-border">
                            <h3 className="text-xl font-bold mb-6 text-center">Why Book With Us?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="flex flex-col items-center text-center p-4 bg-background rounded-xl shadow-sm">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
                                        <FaShieldAlt className="text-xl" />
                                    </div>
                                    <h4 className="font-bold mb-1">Secure Booking</h4>
                                    <p className="text-xs text-muted-foreground">Certified & Verified Agency</p>
                                </div>
                                <div className="flex flex-col items-center text-center p-4 bg-background rounded-xl shadow-sm">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-3">
                                        <FaUserTie className="text-xl" />
                                    </div>
                                    <h4 className="font-bold mb-1">Expert Guides</h4>
                                    <p className="text-xs text-muted-foreground">Local Professional Guides</p>
                                </div>
                                <div className="flex flex-col items-center text-center p-4 bg-background rounded-xl shadow-sm">
                                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-3">
                                        <FaAward className="text-xl" />
                                    </div>
                                    <h4 className="font-bold mb-1">Best Price</h4>
                                    <p className="text-xs text-muted-foreground">Guaranteed Lowest Rates</p>
                                </div>
                            </div>
                        </section>

                        {/* Gallery */}
                        {tour.gallery && tour.gallery.length > 0 && (
                            <section>
                                <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">
                                    Gallery
                                </h2>
                                <GalleryViewer images={tour.gallery} />
                            </section>
                        )}

                        {/* Video */}
                        {tour.videoUrl && (
                            <section>
                                <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">
                                    Video Tour
                                </h2>
                                <div className="rounded-2xl overflow-hidden shadow-lg aspect-video ring-1 ring-border">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={tour.videoUrl}
                                        title="Tour Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </section>
                        )}

                        {/* FAQs */}
                        {tour.faqs && (
                            <section>
                                <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">
                                    Frequently Asked Questions
                                </h2>
                                <div className="space-y-4">
                                    {tour.faqs.map((faq, idx) => (
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

                        {/* Reviews */}
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">Traveler Reviews</h2>
                            {tour.reviews && tour.reviews.length > 0 ? (
                                <div className="grid md:grid-cols-2 gap-6">
                                    {tour.reviews.map((review, idx) => (
                                        <div key={idx} className="bg-card p-6 rounded-2xl border border-border shadow-sm flex flex-col h-full">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold shadow-sm">
                                                        {review.user.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-foreground">{review.user}</h4>
                                                        <span className="text-xs text-muted-foreground">{review.date}</span>
                                                    </div>
                                                </div>
                                                <div className="flex text-yellow-500">
                                                    {[...Array(5)].map((_, i) => (
                                                        <FaStar key={i} className={i < review.rating ? "fill-current" : "text-gray-200"} />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-muted-foreground italic grow">"{review.comment}"</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-muted-foreground p-4 bg-muted rounded-xl">No reviews yet for this destination. Be the first to review!</p>
                            )}
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="relative">
                        <div className="sticky top-24 space-y-8">
                            {/* Booking Card */}
                            <div className="bg-card rounded-3xl p-8 border border-border shadow-xl ring-1 ring-black/5">
                                <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-3xl uppercase tracking-wider">
                                    Best Deal
                                </div>
                                <div className="mb-6">
                                    <span className="text-sm text-muted-foreground uppercase tracking-wide">Starting from</span>
                                    <div className="flex items-end gap-2">
                                        <span className="text-4xl font-bold text-primary">Rs {tour.price.toLocaleString()}</span>
                                        <span className="text-muted-foreground mb-1">/ person</span>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 text-muted-foreground">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <FaCalendarAlt />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium uppercase text-muted-foreground/70">Duration</p>
                                            <p className="font-semibold text-foreground">{tour.duration}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 text-muted-foreground">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <FaMapMarkerAlt />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium uppercase text-muted-foreground/70">Location</p>
                                            <p className="font-semibold text-foreground">{tour.location}</p>
                                        </div>
                                    </div>
                                </div>

                                <BookingButton item={tour} type="tour" />

                                <p className="text-xs text-center text-muted-foreground mt-4 flex items-center justify-center gap-1">
                                    <FaShieldAlt className="text-primary" /> No Booking Fees • Instant Confirmation
                                </p>
                            </div>

                            {/* Similar Tours Widget */}
                            <div className="bg-card rounded-3xl p-6 border border-border shadow-lg">
                                <h3 className="font-bold text-lg mb-4">Other Tours</h3>
                                <div className="space-y-4">
                                    {similarTours.map((st) => (
                                        <Link href={`/tours/${st.id}`} key={st.id} className="flex gap-3 group">
                                            <div className="w-20 h-16 rounded-lg overflow-hidden shrink-0 bg-muted">
                                                <img src={st.image} alt={st.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h4 className="font-semibold text-xs line-clamp-1 group-hover:text-primary transition-colors">{st.name}</h4>
                                                <span className="text-[10px] text-muted-foreground block mb-0.5">{st.location}</span>
                                                <span className="text-primary font-bold text-xs">Rs {st.price.toLocaleString()}</span>
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
