import { FaBriefcase, FaCalendarAlt, FaShieldAlt } from "react-icons/fa"
import { services } from "@/data/dummyData"

const iconMap = {
  briefcase: FaBriefcase,
  calendar: FaCalendarAlt,
  shield: FaShieldAlt,
}

export default function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Services</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Why book with Gilgit Tourism</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <div key={service.id} className="text-center p-8 rounded-2xl hover:bg-muted transition-colors">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary-light rounded-2xl flex items-center justify-center">
                  <Icon className="text-2xl text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
