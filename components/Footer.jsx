"use client"
import React, { useState } from "react"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter, FaMountain } from "react-icons/fa"
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa"
import BookingModal from "./BookingModal"

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      {/* Lead Generation Section: Custom Tour Plan */}
      <div className="bg-linear-to-r from-primary via-primary/95 to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-center lg:text-left space-y-4">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                Tailor-Made Experience
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight">
                Get a Custom <span className="text-secondary">Tour Plan</span>
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto lg:mx-0">
                Don't settle for generic packages. Tell us your preferences and let our local experts design a personalized journey through Gilgit-Baltistan.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-secondary to-orange-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <LeadGenerationButton />
              </div>
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?u=${i + 10}`}
                    alt="User"
                    className="w-12 h-12 rounded-full border-4 border-primary ring-2 ring-white/10"
                  />
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-primary bg-secondary flex items-center justify-center text-secondary-foreground text-xs font-bold">
                  500+
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <FaMountain className="text-primary-foreground text-xl" />
              </div>
              <span className="font-heading font-bold text-xl">
                Gilgit<span className="text-primary">Tourism</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {
                "Gilgit Tourism is Gilgit-Baltistan's premier travel and adventure app. We provide you with access to discover and experience the majestic mountains."
              }
            </p>
            <div className="space-y-2">
              <p className="text-sm font-medium">Download App</p>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg text-xs hover:bg-white/20 transition-colors">
                  <FaAppStoreIos size={20} />
                  <span>App Store</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg text-xs hover:bg-white/20 transition-colors">
                  <FaGooglePlay size={16} />
                  <span>Google Play</span>
                </button>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="font-heading font-semibold mb-4">About</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/60 text-sm hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 text-sm hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 text-sm hover:text-white transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-white/60 text-sm hover:text-white transition-colors">
                  Tour Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/tours" className="text-white/60 text-sm hover:text-white transition-colors">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-white/60 text-sm hover:text-white transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/cars" className="text-white/60 text-sm hover:text-white transition-colors">
                  Car Rentals
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="text-white/60 text-sm hover:text-white transition-colors">
                  Hotels
                </Link>
              </li>
            </ul>
          </div>

          {/* Other */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Other</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-white/60 text-sm hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/60 text-sm hover:text-white transition-colors">
                  Privacy Notice
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/60 text-sm hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/photography" className="text-white/60 text-sm hover:text-white transition-colors">
                  Photography
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 mt-8 border-t border-white/10">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
            >
              <FaFacebook size={16} />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
            >
              <FaTwitter size={16} />
            </a>
          </div>
          <p className="text-white/40 text-sm">© 2025 Gilgit Tourism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function LeadGenerationButton() {
  const [isOpen, setIsOpen] = useState(false)
  const item = {
    name: "Custom Tour Plan",
    whatsapp: "923123456789" // Fallback WhatsApp number
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-bold text-lg hover:bg-secondary/90 transition-all hover:scale-105 shadow-xl whitespace-nowrap"
      >
        Request a Quote
      </button>

      <BookingModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        item={item}
        type="plan"
      />
    </>
  )
}
