"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaWhatsapp, FaBars, FaTimes, FaMountain, FaChevronDown } from "react-icons/fa"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  // Transparency logic: Only on Home page and when not scrolled
  const isTransparent = pathname === "/" && !isScrolled

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tours", path: "/tours" },
    { name: "Packages", path: "/packages" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ]

  const services = [
    { name: "Hotels", path: "/hotels" },
    { name: "Photography", path: "/photography" },
    { name: "Cars", path: "/cars" },
    { name: "Other Services", path: "/services" },
  ]

  const isActive = (path) => pathname === path

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isTransparent && !isMenuOpen
        ? "bg-transparent border-transparent py-4"
        : "bg-background/95 backdrop-blur-md border-b border-border py-0 shadow-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <FaMountain className="text-primary-foreground text-xl" />
            </div>
            <span className={`font-heading font-bold text-xl transition-colors ${isTransparent ? "text-white" : "text-foreground"}`}>
              Gilgit<span className="text-primary">Tourism</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-medium transition-all hover:text-primary ${isActive(link.path)
                  ? "text-primary"
                  : isTransparent ? "text-white/90 hover:text-white" : "text-muted-foreground"
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1.5 text-sm font-medium transition-all hover:text-primary ${isServicesOpen || services.some(s => isActive(s.path))
                  ? "text-primary"
                  : isTransparent ? "text-white/90 hover:text-white" : "text-muted-foreground"
                  }`}
              >
                Services
                <FaChevronDown className="text-[10px]" />
              </button>

              <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.path}
                    className={`block px-4 py-2.5 text-sm transition-colors hover:bg-muted ${isActive(service.path) ? "text-primary font-bold" : "text-muted-foreground"
                      }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${isTransparent ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-primary"}`}
            >
              Login
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <FaWhatsapp className="text-lg" />
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${isTransparent ? "text-white" : "text-foreground"}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive(link.path) ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
                    }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Services */}
              <div className="px-4 py-3 text-xs font-black uppercase tracking-widest text-muted-foreground mt-2">Services</div>
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-8 py-3 rounded-lg text-sm font-medium transition-colors ${isActive(service.path) ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
                    }`}
                >
                  {service.name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mx-4 mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium"
              >
                <FaWhatsapp className="text-lg" />
                Book Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

