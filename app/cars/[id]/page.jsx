import { cars } from "@/data/dummyData"
import Link from "next/link"
import { notFound } from "next/navigation"
import { FaWhatsapp, FaUsers, FaGasPump, FaCogs, FaShieldAlt, FaAward, FaCalendarAlt } from "react-icons/fa"
import BookingButton from "@/components/BookingButton"

export async function generateStaticParams() {
    return cars.map((car) => ({
        id: car.id.toString(),
    }))
}

export default async function CarDetailsPage({ params }) {
    const { id } = await params
    const car = cars.find((c) => c.id === parseInt(id))

    if (!car) {
        notFound()
    }

    // Get similar cars (excluding current one)
    const similarCars = cars.filter(c => c.id !== car.id).slice(0, 3)

    return (
        <main className="bg-background min-h-screen pb-20">
            {/* Hero Section / Header */}
            <div className="relative h-[60vh] w-full overflow-hidden group">
                <img
                    src={car.image || "/placeholder.svg"}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20 bg-linear-to-t from-black/90 via-black/50 to-transparent">
                    <div className="max-w-7xl mx-auto animation-fade-in-up">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4 shadow-lg backdrop-blur-md">
                            {car.type}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 shadow-sm leading-tight">
                            {car.name}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm md:text-base">
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20">
                                <FaUsers />
                                <span className="font-semibold">{car.seats} Seats Available</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20">
                                <FaAward />
                                <span>Well Maintained</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Description */}
                        <section>
                            <h2 className="text-3xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">Vehicle Description</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {car.description}
                                This vehicle is professionally maintained and comes with a reliable driver who is well-versed with the local roads of Gilgit-Baltistan. Perfect for families, groups, or solo travelers looking for a comfortable and safe journey.
                            </p>
                        </section>

                        {/* Features / Specifications */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-muted/30 p-6 rounded-2xl border border-border">
                                <h3 className="font-bold mb-4 flex items-center gap-2">
                                    <FaCogs className="text-primary" /> Key Specifications
                                </h3>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex justify-between border-b border-border/50 pb-2 text-muted-foreground">
                                        <span>Capacity</span>
                                        <span className="font-semibold text-foreground">{car.seats} Passengers</span>
                                    </li>
                                    <li className="flex justify-between border-b border-border/50 pb-2 text-muted-foreground">
                                        <span>Vehicle Type</span>
                                        <span className="font-semibold text-foreground">{car.type}</span>
                                    </li>
                                    <li className="flex justify-between border-b border-border/50 pb-2 text-muted-foreground">
                                        <span>Fuel Type</span>
                                        <span className="font-semibold text-foreground">Diesel/Petrol</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-muted/30 p-6 rounded-2xl border border-border">
                                <h3 className="font-bold mb-4 flex items-center gap-2">
                                    <FaShieldAlt className="text-primary" /> Included Features
                                </h3>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex items-center gap-2 text-muted-foreground">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        Professional Driver
                                    </li>
                                    <li className="flex items-center gap-2 text-muted-foreground">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        Air Conditioning
                                    </li>
                                    <li className="flex items-center gap-2 text-muted-foreground">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        Luggage Space
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Why Hire Us Banner */}
                        <section className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                            <h3 className="text-xl font-bold mb-6 text-center">Why Hire From Us?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
                                        <FaShieldAlt className="text-xl" />
                                    </div>
                                    <h4 className="font-bold text-sm mb-1">Safety First</h4>
                                    <p className="text-xs text-muted-foreground">Regular safety checks & inspections</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
                                        <FaCalendarAlt className="text-xl" />
                                    </div>
                                    <h4 className="font-bold text-sm mb-1">24/7 Support</h4>
                                    <p className="text-xs text-muted-foreground">Assistance throughout your trip</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
                                        <FaAward className="text-xl" />
                                    </div>
                                    <h4 className="font-bold text-sm mb-1">Best Rates</h4>
                                    <p className="text-xs text-muted-foreground">No hidden charges, honest pricing</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="relative">
                        <div className="sticky top-24 space-y-8">
                            {/* Booking Card */}
                            <div className="bg-card rounded-3xl p-8 border border-border shadow-xl ring-1 ring-black/5">
                                <div className="mb-6">
                                    <span className="text-sm text-muted-foreground uppercase tracking-wide font-medium">Rental Price</span>
                                    <div className="flex items-end gap-2">
                                        <span className="text-4xl font-bold text-primary">Rs {car.pricePerDay.toLocaleString()}</span>
                                        <span className="text-muted-foreground mb-1 font-medium">/ day</span>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl border border-border/50">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <FaUsers />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase text-muted-foreground/70 tracking-wider">Seats</p>
                                            <p className="font-semibold text-foreground text-sm">{car.seats} Passengers</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl border border-border/50">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <FaGasPump />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase text-muted-foreground/70 tracking-wider">Type</p>
                                            <p className="font-semibold text-foreground text-sm">{car.type}</p>
                                        </div>
                                    </div>
                                </div>

                                <BookingButton item={car} type="car" />
                            </div>

                            <p className="text-[10px] text-center text-muted-foreground mt-4 flex items-center justify-center gap-1 font-medium italic">
                                * Fuel and tolls are usually not included in the base price.
                            </p>

                            {/* Similar Vehicles Widget */}
                            <div className="bg-card rounded-3xl p-6 border border-border shadow-lg">
                                <h3 className="font-bold text-lg mb-4">Other Vehicles</h3>
                                <div className="space-y-4">
                                    {similarCars.map((sc) => (
                                        <Link href={`/cars/${sc.id}`} key={sc.id} className="flex gap-3 group">
                                            <div className="w-20 h-16 rounded-lg overflow-hidden shrink-0 bg-muted">
                                                <img src={sc.image} alt={sc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h4 className="font-semibold text-xs line-clamp-1 group-hover:text-primary transition-colors">{sc.name}</h4>
                                                <span className="text-[10px] text-muted-foreground block mb-0.5">{sc.type}</span>
                                                <span className="text-primary font-bold text-xs">Rs {sc.pricePerDay.toLocaleString()}/day</span>
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
