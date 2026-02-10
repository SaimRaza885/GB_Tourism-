import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center overflow-hidden bg-gray-900">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop"
          alt="Majestic Gilgit-Baltistan Expedition"
          className="w-full h-full object-cover object-center brightness-90"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl space-y-6">

          {/* Headline */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight uppercase animate-in fade-in slide-in-from-left-8 duration-1000">
            Discover <br />
            <span className="text-primary italic">Paradise</span> on Earth
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed max-w-xl animate-in fade-in slide-in-from-left-10 duration-1000 delay-200">
            Experience Gilgit-Baltistan with premium hotels, professional guides, and curated tour packages.
          </p>

          {/* CTA */}
          <div className="pt-4 animate-in fade-in slide-in-from-left-12 duration-1000 delay-300">
            <Link
              href="/packages"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-heading font-black text-xl hover:bg-white hover:text-primary transition-all shadow-2xl active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Start Your Journey</span>
              <FaChevronRight className="relative z-10 text-sm group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-linear-to-r from-primary via-white/20 to-primary opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
