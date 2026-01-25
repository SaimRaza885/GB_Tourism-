import Link from "next/link"
import { FaCar, FaChevronRight } from "react-icons/fa"

export default function CarRentalBanner() {
    return (
        <section className="py-12 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden bg-linear-to-r from-muted to-muted/50 rounded-[2.5rem] border border-border p-8 md:p-12 group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                    {/* Decorative background icon */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-5 pointer-events-none group-hover:translate-x-0 transition-transform duration-700">
                        <FaCar className="text-[200px]" />
                    </div>

                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                <FaCar className="text-3xl text-primary group-hover:text-primary-foreground" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-2xl font-bold text-foreground">Car Rentals</h3>
                                <p className="text-muted-foreground font-medium">Comfortable & reliable cars with professional drivers for your journey.</p>
                            </div>
                        </div>

                        <div className="shrink-0 w-full md:w-auto">
                            <Link
                                href="/cars"
                                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all shadow-lg hover:shadow-primary/20 active:scale-95 group"
                            >
                                Book a Car
                                <FaChevronRight className="text-sm group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Small trust indicator under the banner */}
                <div className="flex flex-wrap justify-center gap-6 mt-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        Verified Drivers
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        24/7 Support
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        Best Rates
                    </div>
                </div>
            </div>
        </section>
    )
}
