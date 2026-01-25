import Link from "next/link"
import { FaChevronRight, FaClock, FaCheckCircle, FaStar } from "react-icons/fa"
import { packages } from "@/data/dummyData"

export default function PackagesSection() {
    const featuredPackages = packages.slice(0, 3)

    return (
        <section className="py-16 lg:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">All-Inclusive</p>
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-tight">
                            Featured Tour <span className="text-primary">Packages</span>
                        </h2>
                    </div>
                    <Link
                        href="/packages"
                        className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group shrink-0"
                    >
                        View All Packages
                        <FaChevronRight className="text-sm group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredPackages.map((pkg) => (
                        <Link key={pkg.id} href={`/packages/${pkg.id}`} className="group">
                            <div className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                <div className="relative aspect-4/3 overflow-hidden">
                                    <img
                                        src={pkg.image}
                                        alt={pkg.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                                            {pkg.duration}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                                            <FaStar className="text-secondary text-xs" />
                                            <span className="text-white text-xs font-bold">{pkg.rating}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5 flex flex-col grow">
                                    <h3 className="font-heading font-semibold text-lg mb-1 group-hover:text-primary transition-colors line-clamp-1">
                                        {pkg.name}
                                    </h3>
                                    <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                                        <FaCheckCircle className="text-primary text-[10px]" />
                                        <span>All-Inclusive Premium Package</span>
                                    </div>

                                    <div className="space-y-2 mb-4">
                                        {pkg.includes?.slice(0, 2).map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <div className="w-1 h-1 rounded-full bg-primary/40" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                                        <div>
                                            <span className="text-xl font-bold text-primary">Rs {pkg.price.toLocaleString()}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Fixed Price</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
