import { FaMapMarkerAlt, FaCalendarCheck, FaTag } from "react-icons/fa"
import { features } from "@/data/dummyData"

const iconMap = {
  location: FaMapMarkerAlt,
  calendar: FaCalendarCheck,
  discount: FaTag,
}

const colorMap = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  accent: "bg-accent text-accent-foreground",
}

export default function FeaturesSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Key Features</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">We offer best services</h2>
            <p className="text-muted-foreground mb-8">
              Hey! Travelo there to help you to find a dream holiday. Easy you just find where you want to go and buy
              the ticket.
            </p>

            <div className="space-y-6">
              {features.map((feature) => {
                const Icon = iconMap[feature.icon]
                return (
                  <div key={feature.id} className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${colorMap[feature.color]}`}
                    >
                      <Icon className="text-lg" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/Rectangle.png?height=600&width=500"
                alt="Travel App"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
