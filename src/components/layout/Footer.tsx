import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800/80">
          {/* Col 1: Brand & Director Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-brand-bronze flex items-center justify-center text-brand-dark font-serif font-bold text-lg">
                S
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                STAR PROPERTY SERVICE
              </span>
            </div>

            <p className="text-sm text-stone-400 max-w-md leading-relaxed">
              Star Property Service Limited is an Auckland-based specialist residential and commercial renovation company. Led by Director Raymond Zhang, we bring architectural precision, transparent fixed-price contracting, and artisan craftsmanship to homes across Auckland.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-stone-400">
              <ShieldCheck className="w-4 h-4 text-brand-bronze" />
              <span>NZ Building Code Compliant • 10-Year Workmanship Warranty</span>
            </div>

            <div className="mt-2 text-xs text-stone-400">
              <span className="font-semibold text-stone-300">Director / Principal:</span> Raymond Zhang
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-stone-400">
              <li>
                <Link href="/services#kitchen-renovations" className="hover:text-white transition-colors">
                  Kitchen Renovations
                </Link>
              </li>
              <li>
                <Link href="/services#bathroom-transformations" className="hover:text-white transition-colors">
                  Bathroom Transformations
                </Link>
              </li>
              <li>
                <Link href="/services#full-house-extensions" className="hover:text-white transition-colors">
                  Full House Extensions
                </Link>
              </li>
              <li>
                <Link href="/services#interior-fit-outs" className="hover:text-white transition-colors">
                  Interior Fit-Outs & Joinery
                </Link>
              </li>
              <li>
                <Link href="/services#decking-outdoor-living" className="hover:text-white transition-colors">
                  Decking & Outdoor Living
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-stone-400">
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Portfolio & Showcases
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  About Raymond Zhang
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-white transition-colors">
                  Our 4-Step Process
                </Link>
              </li>
              <li>
                <Link href="/services#faqs" className="hover:text-white transition-colors">
                  Renovation FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Consultation & Quotes
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-bronze shrink-0 mt-0.5" />
                <span>Auckland, New Zealand (All Suburbs Serviced)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-bronze shrink-0" />
                <a href="tel:+6421882582" className="hover:text-white transition-colors font-medium">
                  +64 21 882 582
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-bronze shrink-0" />
                <a href="mailto:admin@starproperty.nz" className="hover:text-white transition-colors font-medium">
                  admin@starproperty.nz
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-bronze shrink-0 mt-0.5" />
                <span>Mon – Sat: 7:00 AM – 6:00 PM</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-bronze hover:text-white transition-colors"
              >
                <span>Book a Site Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {currentYear} Star Property Service Limited. All rights reserved. Registered in New Zealand.
          </p>
          <div className="flex items-center gap-6">
            <span>Auckland • North Shore • Central • Eastern Suburbs</span>
            <span className="text-stone-700">|</span>
            <Link href="/contact" className="hover:text-stone-300 transition-colors">
              Privacy & Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
