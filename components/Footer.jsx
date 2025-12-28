import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter, FaMountain } from "react-icons/fa"
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      {/* Newsletter Section */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <p className="text-primary-foreground/80 text-sm font-medium tracking-widest uppercase mb-4">
              Subscribe to our newsletter
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-8 text-balance">
              {"Prepare yourself and let's explore the beautiful mountains"}
            </h2>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/90 transition-colors">
                Subscribe
              </button>
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
                <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 text-sm hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">
                  Careers
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
                <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">
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
                <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">
                  Privacy Notice
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white/60 text-sm hover:text-white transition-colors">
                  Offers
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
