import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { faqsData } from "@/data/faqs";
import FaqAccordion from "@/components/services/FaqAccordion";
import {
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  FileText,
  Phone,
  HelpCircle,
  Hammer
} from "lucide-react";

export const metadata: Metadata = {
  title: "Specialist Renovation Services | Star Property Service Limited",
  description:
    "Explore our complete renovation disciplines across Auckland: Kitchen Renovations, Luxury Bathrooms, Full Home Extensions, Interior Joinery, and Decking. Fixed-price contracts and 10-year warranty.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* 1. Header Banner */}
      <section className="bg-brand-dark text-white py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=80"
            alt="Renovation Services Auckland"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-bronze mb-3 inline-block">
            Architectural Precision & Licensed Craftsmanship
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto font-display">
            Comprehensive Renovation Services in Auckland
          </h1>
          <p className="mt-4 text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From luxury kitchen transformations to complex heritage villa extensions, Director Raymond Zhang delivers bespoke renovation solutions with transparent fixed-price certainty.
          </p>
        </div>
      </section>

      {/* 2. Detailed Service Offerings */}
      <section className="py-20 bg-brand-warmCream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {servicesData.map((service, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.slug}
                className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center bg-white p-6 sm:p-10 lg:p-12 rounded-sm border border-brand-border shadow-soft"
              >
                {/* Visual */}
                <div
                  className={`lg:col-span-5 relative h-72 sm:h-96 lg:h-[440px] w-full rounded-sm overflow-hidden ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-brand-bronze">
                      Typical Project Duration
                    </div>
                    <div className="text-lg font-bold flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-brand-bronze" />
                      <span>{service.typicalTimeline}</span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-bronze">
                      Service Offering 0{idx + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-dark mt-1 font-display">
                      {service.title}
                    </h2>
                    <p className="text-xs font-semibold text-brand-slate mt-1 italic">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Deliverables List */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-brand-dark mb-3">
                      Key Inclusions & Deliverables
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.deliverables.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-bronze shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-stone-50 p-4 rounded-sm border border-stone-200/80">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-brand-dark mb-2">
                      The Star Property Advantage
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                      {service.keyBenefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-bronze shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <Link
                      href="/contact"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-dark text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-brand-charcoal transition-colors"
                    >
                      <span>Request a Quote for {service.title}</span>
                      <ArrowRight className="w-4 h-4 text-brand-bronze" />
                    </Link>

                    <a
                      href="tel:+6421882582"
                      className="text-xs font-semibold text-stone-600 hover:text-brand-dark transition-colors flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-brand-bronze" />
                      <span>Direct: 021 882 582</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Auckland Council Consents Guide Box */}
      <section className="py-16 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark text-white p-8 sm:p-12 rounded-sm border border-stone-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-bronze">
                <FileText className="w-4 h-4" />
                <span>Auckland Council Consents & Compliance</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
                Unsure if your project requires Building or Resource Consent?
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Navigating the Auckland Unitary Plan and Building Code can be daunting. Star Property Service Limited manages the entire process—including structural engineering calculations, architectural drafting, Council submission, scheduled inspections, and final Code Compliance Certificate (CCC) issuance.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-bronze hover:bg-amber-600 text-brand-dark font-bold text-xs uppercase tracking-widest rounded-sm transition-all"
              >
                <span>Book a Consent Feasibility Check</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+6421882582"
                className="text-center text-xs text-stone-400 hover:text-white transition-colors"
              >
                Or call Raymond Zhang: +64 21 882 582
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Renovation FAQs */}
      <section id="faqs" className="py-20 sm:py-28 bg-brand-warmCream border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-bronze">
              <HelpCircle className="w-4 h-4" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-stone-600">
              Clear answers to the most common questions Auckland homeowners have before embarking on a renovation.
            </p>
          </div>

          <FaqAccordion faqs={faqsData} />

          <div className="mt-12 text-center bg-white p-6 rounded-sm border border-brand-border">
            <h3 className="text-sm font-bold text-brand-dark">Have a specific question not covered here?</h3>
            <p className="text-xs text-stone-500 mt-1">
              Raymond Zhang is always happy to discuss technical aspects of your property.
            </p>
            <div className="mt-4 flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-bronze hover:text-brand-dark transition-colors underline"
              >
                Send an inquiry
              </Link>
              <span className="text-stone-300">|</span>
              <a
                href="tel:+6421882582"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-bronze hover:text-brand-dark transition-colors underline"
              >
                Call 021 882 582
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
