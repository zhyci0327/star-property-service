"use client";

import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";

export default function FloatingCTA() {
  return (
    <aside aria-label="Quick contact actions" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand-dark/95 backdrop-blur-md border-t border-stone-800 p-2.5 px-4 flex items-center gap-3 shadow-2xl">
      <a
        href="tel:+6421882582"
        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-stone-800 hover:bg-stone-700 text-white rounded text-xs font-semibold tracking-wide transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-brand-bronze" />
        <span>Call Raymond</span>
      </a>

      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-brand-bronze hover:bg-amber-600 text-brand-dark font-bold rounded text-xs tracking-wide transition-colors"
      >
        <CalendarCheck className="w-3.5 h-3.5 text-brand-dark" />
        <span>Get a Quote</span>
      </Link>
    </aside>
  );
}
