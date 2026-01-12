import PageHeader from "@/components/PageHeader"
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa"

export const metadata = {
  title: "Contact Us - Gilgit Tourism",
  description: "Get in touch with Gilgit Tourism. Contact us via WhatsApp, phone, or email for bookings and inquiries.",
}

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="Contact Us"
        subtitle="Get in Touch"
        description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6">Get in touch</h2>
              <p className="text-muted-foreground mb-8">
                {
                  "We're here to help you plan your perfect trip to Gilgit-Baltistan. Reach out to us through any of the following channels."
                }
              </p>

              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-[#25D366]/10 rounded-2xl hover:bg-[#25D366]/20 transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground">+92 300 123 4567</p>
                    <p className="text-sm text-[#25D366] mt-1 group-hover:underline">Click to chat →</p>
                  </div>
                </a>

                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-muted rounded-2xl">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-primary-foreground text-lg" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">+92 51 123 4567</p>
                    <p className="text-muted-foreground">+92 333 987 6543</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-muted rounded-2xl">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-secondary-foreground text-lg" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">info@gilgittourism.pk</p>
                    <p className="text-muted-foreground">bookings@gilgittourism.pk</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-muted rounded-2xl">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-accent-foreground text-lg" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Office</h3>
                    <p className="text-muted-foreground">Main Bazaar, Gilgit</p>
                    <p className="text-muted-foreground">Gilgit-Baltistan, Pakistan</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-6 bg-muted rounded-2xl">
                  <div className="w-12 h-12 bg-foreground rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-background text-lg" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-muted rounded-3xl p-8 lg:p-10">
              <h2 className="font-heading text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+92 300 123 4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your travel plans..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
