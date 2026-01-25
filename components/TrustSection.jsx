import { stats, services } from "@/data/dummyData"
import { FaBriefcase, FaCalendarAlt, FaShieldAlt } from "react-icons/fa"

const iconMap = {
    briefcase: FaBriefcase,
    calendar: FaCalendarAlt,
    shield: FaShieldAlt,
}

export default function TrustSection() {
    return (
        <section className="py-20 lg:py-28 bg-background overflow-hidden relative">
            {/* Decorative patterns */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full -ml-48 -mb-48 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
                        Trusted by Travelers
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                        Why Travelers Choose <span className="text-primary italic">Gilgit Tourism</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        We combine local expertise with world-class service standards to ensure your journey through the Karakoram is safe, seamless, and unforgettable.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
                    {services.map((service) => {
                        const Icon = iconMap[service.icon]
                        return (
                            <div key={service.id} className="group p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                <div className="w-14 h-14 mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                    <Icon className="text-2xl text-primary group-hover:text-primary-foreground" />
                                </div>
                                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{service.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                            </div>
                        )
                    })}
                </div>

                {/* Stats Section with Image */}
                <div className="bg-foreground rounded-[2.5rem] p-8 md:p-12 lg:p-16 text-white overflow-hidden relative">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
                        </svg>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-12 items-center relative">
                        {/* Stats */}
                        <div className="lg:col-span-3">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {stats.map((stat, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary font-heading tabular-nums">
                                            {stat.value}
                                        </div>
                                        <div className="text-white/60 text-xs md:text-sm font-medium uppercase tracking-wider">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA/Lead within section */}
                        <div className="lg:col-span-2 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                            <h4 className="text-xl font-bold mb-3">Ready to start your adventure?</h4>
                            <p className="text-white/70 text-sm mb-6">Join thousands of happy travelers exploring the hidden gems of Gilgit-Baltistan with us.</p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex -space-x-3">
                                    {[11, 12, 13].map((i) => (
                                        <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-10 h-10 rounded-full border-2 border-foreground" />
                                    ))}
                                </div>
                                <div className="text-sm self-center">
                                    <span className="font-bold text-secondary">Excellent 4.9/5</span> from verified travelers
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
