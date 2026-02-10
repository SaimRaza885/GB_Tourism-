"use client"

import { cars } from "@/data/dummyData"
import SectionHeading from "@/components/SectionHeading"
import { FaCar, FaUsers, FaGasPump, FaCheckCircle, FaWhatsapp, FaArrowRight, FaRoad } from "react-icons/fa"
import Link from "next/link"

export default function CarsPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[450px] flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop"
            alt="Off-road vehicle in mountains"
            className="w-full h-full object-cover brightness-[0.35]"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-full text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6">
            <FaRoad className="text-sm" /> Mountain Ready
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">
            Reliable <br />
            <span className="text-primary italic">Transport</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Navigate the rugged beauty of Gilgit-Baltistan with our specialized fleet of 4x4 vehicles and experienced local drivers.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Experienced Drivers", desc: "All our drivers are locals with years of experience on mountain roads.", icon: <FaUsers /> },
            { title: "Well Maintained", desc: "Regular safety checks and maintenance before every long trip.", icon: <FaCheckCircle /> },
            { title: "Flexible Routes", desc: "Customized itineraries with multi-day rental options available.", icon: <FaRoad /> },
          ].map((f, i) => (
            <div key={i} className="p-10 bg-card rounded-[2.5rem] border border-border group hover:border-primary/20 transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-xl mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Car Listings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <SectionHeading
          badge="The Fleet"
          title={<>Choose Your <span className="text-primary italic">Ride</span></>}
          description="From heavy-duty SUVs for the Karakoram Highway to economical sedans for city travel."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cars.map((car) => (
            <div key={car.id} className="group bg-card rounded-[3rem] overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-square lg:aspect-auto overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">
                        {car.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{car.name}</h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{car.description}</p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3 text-xs font-bold text-foreground/70 uppercase tracking-widest">
                        <FaUsers className="text-primary" /> Up to {car.seats} Passengers
                      </div>
                      <div className="flex items-center gap-3 text-xs font-bold text-foreground/70 uppercase tracking-widest">
                        <FaGasPump className="text-primary" /> AC & Heating Included
                      </div>
                      <div className="flex items-center gap-3 text-xs font-bold text-foreground/70 uppercase tracking-widest">
                        <FaCheckCircle className="text-primary" /> Local Expert Driver
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-2xl font-black text-primary">Rs {car.pricePerDay.toLocaleString()}</span>
                      <span className="text-muted-foreground text-[10px] font-black uppercase tracking-widest">/ day</span>
                    </div>
                    <Link href="/contact" className="w-full py-4 bg-foreground text-white rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-primary transition-all active:scale-95 shadow-xl flex items-center justify-center gap-2">
                      Book Now <FaArrowRight className="text-xs" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Banner */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-foreground text-white rounded-[4rem] p-12 md:p-20 relative overflow-hidden text-center md:text-left">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-black font-heading uppercase tracking-tight">Your Safe <span className="text-primary">Arrival</span> is Our Priority</h2>
              <p className="text-white/40 text-lg">Mountain roads require skill and local knowledge. Our drivers aren't just experts behind the wheel; they're travel companions who know every shortcut and safety spot.</p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Link href="/contact" className="px-12 py-5 bg-primary text-white rounded-full font-black uppercase text-sm hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-3">
                <FaWhatsapp className="text-xl" /> Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
