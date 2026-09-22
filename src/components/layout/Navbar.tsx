"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, Menu, X, ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Bar for Trust & Direct Contact */}
      <div className="bg-brand-dark text-stone-300 text-xs py-2 px-4 border-b border-stone-800/60 transition-all hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-brand-bronze" />
              Auckland-Wide Residential & Commercial Renovations
            </span>
            <span className="flex items-center gap-1.5 text-stone-300">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-bronze" />
              10-Year Workmanship Warranty & Licensed Building Standards
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="tel:+6421882582"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-bronze" />
              <span>+64 21 882 582</span>
            </a>
            <span className="text-stone-600">|</span>
            <a
              href="mailto:admin@starproperty.nz"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-bronze" />
              <span>admin@starproperty.nz</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-warmCream/95 backdrop-blur-md shadow-sm border-b border-brand-border py-3.5"
            : "bg-brand-warmCream/80 backdrop-blur-sm py-5 border-b border-stone-200/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-sm bg-brand-dark flex items-center justify-center text-white font-serif font-bold text-xl tracking-wider transition-transform duration-300 group-hover:bg-brand-charcoal group-hover:scale-105 shadow-sm">
              S
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-brand-dark leading-none">
                STAR PROPERTY
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-brand-muted font-medium mt-1">
                Service Limited • Auckland
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href) && link.href !== "/";

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-brand-dark font-semibold border-b-2 border-brand-bronze pb-0.5"
                      : "text-stone-600 hover:text-brand-dark"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+6421882582"
              className="flex items-center gap-2 text-xs font-semibold text-brand-dark px-3 py-2 rounded border border-brand-border hover:bg-stone-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-bronze" />
              <span>021 882 582</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-dark text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-sm hover:bg-brand-charcoal transition-all shadow-sm hover:shadow"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-brand-bronze" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-brand-dark rounded-md focus:outline-none hover:bg-stone-200/50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-brand-warmCream shadow-2xl p-6 flex flex-col justify-between border-l border-brand-border">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-brand-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-sm bg-brand-dark flex items-center justify-center text-white font-bold text-sm">
                    S
                  </div>
                  <span className="font-bold text-brand-dark text-sm tracking-wide">
                    Star Property Service
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-stone-500 hover:text-brand-dark"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-stone-800 hover:text-brand-bronze py-2 border-b border-stone-200/50 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-brand-border flex flex-col gap-3">
              <a
                href="tel:+6421882582"
                className="flex items-center justify-center gap-2 w-full py-3 bg-brand-dark text-white text-sm font-semibold rounded-sm"
              >
                <Phone className="w-4 h-4 text-brand-bronze" />
                <span>Call +64 21 882 582</span>
              </a>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-brand-bronze text-white text-sm font-semibold rounded-sm"
              >
                <span>Request Free Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
