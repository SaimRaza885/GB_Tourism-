import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[650px] w-full flex items-center overflow-hidden bg-gray-900">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1661818158720-410ccb39ba13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdpbGdpdCUyMGJhbHRpc3RhbnxlbnwwfHwwfHx8MA%3D%3D"
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
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight uppercase animate-in fade-in slide-in-from-left-8 duration-1000">

            <span className="text-primary italic">majesty</span> of the <br />
            Karakoram Mountains
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed animate-in fade-in slide-in-from-left-10 duration-1000 delay-200">
            From the high-altitude plains of Deosai to the turquoise waters of Attabad, we craft personalized journeys that stay with you forever.
          </p>

          {/* CTA */}
          <div className="pt-4 animate-in fade-in slide-in-from-left-12 duration-1000 delay-300">
            <Link
              href="/tours"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-heading font-black text-lg hover:bg-white hover:text-primary transition-all shadow-2xl active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Explore All Tours</span>
              <FaChevronRight className="relative z-10 text-sm group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-linear-to-r from-primary via-white/20 to-primary opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
