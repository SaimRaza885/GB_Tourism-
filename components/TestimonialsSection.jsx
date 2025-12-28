"use client"

import { useState } from "react"
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa"
import { testimonials } from "@/data/dummyData"

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Trust our clients</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Decorative dots */}
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/20" />
            ))}
          </div>

          <div className="relative bg-muted rounded-3xl p-8 md:p-12">
            <FaQuoteLeft className="absolute top-6 left-6 text-4xl text-primary/10" />

            <div className="flex items-center justify-between">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <FaChevronLeft />
              </button>

              <div className="text-center px-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary">
                  <img
                    src={current.avatar || "/placeholder.svg"}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-1">{current.name}</h3>
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <FaStar key={i} className="text-secondary text-sm" />
                  ))}
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">{current.text}</p>
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
