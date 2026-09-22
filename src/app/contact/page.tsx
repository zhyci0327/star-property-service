import { Metadata } from "next";
import ConsultationForm from "@/components/forms/ConsultationForm";
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Consultation Booking | Star Property Service Limited",
  description:
    "Book an on-site renovation consultation with Director Raymond Zhang. Phone: +64 21 882 582 | Email: admin@starproperty.nz | Auckland, New Zealand.",
};

const aucklandAreas = [
  { region: "Central Auckland", suburbs: "Ponsonby, Grey Lynn, Remuera, Epsom, Parnell, Mt Eden, Orakei, Mission Bay" },
  { region: "North Shore", suburbs: "Takapuna, Milford, Devonport, Albany, Castor Bay, Mairangi Bay, Browns Bay" },
  { region: "Eastern Suburbs", suburbs: "St Heliers, Kohimarama, Glendowie, Howick, Pakuranga, Half Moon Bay" },
  { region: "West & Northwest", suburbs: "Kumeu, Hobsonville Point, West Harbour, Te Atatu Peninsula, Titirangi" },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* 1. Header Banner */}
      <section className="bg-brand-dark text-white py-16 sm:py-24 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-bronze mb-3 inline-block">
            Start the Conversation
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto font-display">
            Request a Consultation
          </h1>
          <p className="mt-4 text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Ready to discuss your Auckland renovation? Director Raymond Zhang is available to review your project scope, visit your site, and provide transparent fixed-price guidance.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Form & Details Section */}
      <section className="py-20 bg-brand-warmCream border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contact & Raymond Zhang */}
            <div className="lg:col-span-5 space-y-8">
              {/* Director Card */}
              <div className="bg-white p-6 sm:p-8 rounded-sm border border-brand-border shadow-soft space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-sm bg-brand-dark text-brand-bronze flex items-center justify-center font-serif text-2xl font-bold">
                    RZ
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-bronze">
                      Director & Principal
                    </div>
                    <h2 className="text-xl font-bold text-brand-dark">
                      Raymond Zhang
                    </h2>
                    <div className="text-xs text-stone-500">
                      Star Property Service Limited
                    </div>
                  </div>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed pt-2 border-t border-stone-100">
                  &ldquo;We treat every renovation as a personal craft. When you work with Star Property Service, you communicate directly with me from the first consultation through to the final sign-off.&rdquo;
                </p>

                {/* Contact Links */}
                <div className="pt-4 border-t border-stone-100 space-y-3">
                  <a
                    href="tel:+6421882582"
                    className="flex items-center gap-3 p-3 rounded-sm bg-stone-50 hover:bg-stone-100 text-brand-dark transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-brand-dark text-brand-bronze flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-stone-500">Direct Telephone</div>
                      <div className="text-sm font-bold group-hover:text-brand-bronze transition-colors">
                        +64 21 882 582
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:admin@starproperty.nz"
                    className="flex items-center gap-3 p-3 rounded-sm bg-stone-50 hover:bg-stone-100 text-brand-dark transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-brand-dark text-brand-bronze flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-stone-500">Official Inquiries Email</div>
                      <div className="text-sm font-bold group-hover:text-brand-bronze transition-colors">
                        admin@starproperty.nz
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3 rounded-sm bg-stone-50 text-brand-dark">
                    <div className="w-8 h-8 rounded-full bg-brand-dark text-brand-bronze flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-stone-500">Hours of Operation</div>
                      <div className="text-xs font-semibold text-brand-dark">
                        Monday – Saturday: 7:00 AM – 6:00 PM
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-sm bg-stone-50 text-brand-dark">
                    <div className="w-8 h-8 rounded-full bg-brand-dark text-brand-bronze flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-stone-500">Location</div>
                      <div className="text-xs font-semibold text-brand-dark">
                        Auckland, New Zealand
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Guarantee */}
                <div className="pt-2 flex items-center gap-2 text-xs text-stone-600">
                  <ShieldCheck className="w-4 h-4 text-brand-bronze shrink-0" />
                  <span>Licensed Building Practitioners • 10-Year Warranty</span>
                </div>
              </div>

              {/* Auckland Coverage Suburbs */}
              <div className="bg-white p-6 rounded-sm border border-brand-border shadow-soft space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                  Auckland Service Coverage
                </h3>
                <div className="space-y-3">
                  {aucklandAreas.map((area, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-xs font-bold text-brand-dark flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-bronze shrink-0" />
                        <span>{area.region}</span>
                      </div>
                      <p className="text-[11px] text-stone-500 pl-5">
                        {area.suburbs}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Booking Form */}
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
