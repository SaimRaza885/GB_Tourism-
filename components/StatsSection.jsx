import { stats } from "@/data/dummyData"

export default function StatsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Right Image */}
       <div className="relative">
            <div className="md:aspect-[3/3] aspect-auto rounded-3xl overflow-hidden ">
              <img
                src="/Group 6.png"
                alt="Gilgit City"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary-light rounded-full opacity-50" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-light rounded-full opacity-50" />
          </div>


          {/* Left Content */}
          <div>
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Travel Point</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              We help you find your dream destination
            </h2>
            <p className="text-muted-foreground mb-8">
              Hey! Travelo there to help you to find your dream holiday. Easy you just find where you want to go and buy
              the ticket.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-primary-light rounded-2xl">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

         
        </div>
      </div>
    </section>
  )
}
