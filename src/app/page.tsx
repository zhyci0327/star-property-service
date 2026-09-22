import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  CheckCircle,
  Hammer,
  Clock,
  Phone,
  Mail,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Star,
  Users,
} from "lucide-react";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import { testimonialsData } from "@/data/testimonials";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ConsultationForm from "@/components/forms/ConsultationForm";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-brand-dark text-white overflow-hidden">
        {/* Background Architectural Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            alt="Star Property Service - Luxury Architectural Renovation Auckland"
            fill
            className="object-cover object-center brightness-[0.42] scale-105 transition-transform duration-1000 ease-out"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 flex flex-col items-center text-center">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/80 border border-stone-700 text-stone-200 text-xs tracking-wider uppercase mb-8 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-brand-bronze" />
            <span>Auckland Premier Residential & Commercial Renovation</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.1] text-balance font-display">
            Crafting Exceptional Living Spaces Across Auckland.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-stone-300 max-w-2xl leading-relaxed text-balance">
            Bespoke kitchen renovations, luxury bathrooms, and complete architectural extensions. Directed by <strong className="text-white font-semibold">Raymond Zhang</strong>, delivering timeless craftsmanship with fixed-price certainty.
          </p>

          {/* Dual CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-bronze hover:bg-amber-600 text-brand-dark font-bold text-xs uppercase tracking-widest rounded-sm transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-widest rounded-sm border border-white/20 backdrop-blur-sm transition-all"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-4 h-4 text-brand-bronze" />
            </Link>
          </div>

          {/* Trust Highlights */}
          <div className="mt-16 pt-10 border-t border-stone-700/60 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full max-w-4xl text-left">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-brand-bronze shrink-0" />
              <div>
                <div className="text-sm font-bold text-white">10-Year Warranty</div>
                <div className="text-xs text-stone-400">Workmanship Guaranteed</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-brand-bronze shrink-0" />
              <div>
                <div className="text-sm font-bold text-white">Fixed-Price Quotes</div>
                <div className="text-xs text-stone-400">Zero Hidden Surprises</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-brand-bronze shrink-0" />
              <div>
                <div className="text-sm font-bold text-white">On-Time Handover</div>
                <div className="text-xs text-stone-400">Dedicated Project Lead</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-brand-bronze shrink-0" />
              <div>
                <div className="text-sm font-bold text-white">Auckland-Wide</div>
                <div className="text-xs text-stone-400">All Suburbs Serviced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIRECTOR SPOTLIGHT & BRAND STORY */}
      <section id="about" className="py-20 sm:py-28 bg-brand-warmCream border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Architectural Imagery */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[480px] sm:h-[540px] w-full rounded-sm overflow-hidden shadow-luxury border border-brand-border">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                  alt="Architectural renovation craftsmanship by Star Property Service"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>

              {/* Floating Director Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-brand-dark text-white p-5 rounded-sm shadow-xl border border-stone-800 max-w-[260px]">
                <div className="text-xs text-brand-bronze font-semibold uppercase tracking-widest">
                  Director & Principal
                </div>
                <div className="text-base font-bold mt-1">Raymond Zhang</div>
                <div className="text-xs text-stone-400 mt-1">
                  Personally overseeing every Auckland project from concept to sign-off.
                </div>
              </div>
            </div>

            {/* Right: Story & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 bg-brand-neutralLight text-brand-dark text-xs font-bold uppercase tracking-widest rounded-sm border border-stone-300/60">
                Craftsmanship & Integrity
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark font-display">
                Building Homes of Enduring Value and Refined Detail.
              </h2>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                At <strong>Star Property Service Limited</strong>, we believe exceptional renovation is an art form rooted in meticulous planning, honest communication, and unwavering craftsmanship.
              </p>

              <p className="text-stone-600 text-sm leading-relaxed">
                Founded and directed by <strong>Raymond Zhang</strong>, our company serves discerning homeowners across Auckland—from the character villas of Ponsonby and Grey Lynn to contemporary residences in Remuera, Epsom, and the North Shore. We bridge the gap between architectural vision and buildable reality, ensuring every kitchen island, tiled wet room, and structural extension is delivered with precision.
              </p>

              {/* Key Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white rounded-sm border border-brand-border">
                  <h3 className="text-sm font-bold text-brand-dark mb-1 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-bronze" />
                    Transparent Fixed Costing
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Detailed scopes with zero hidden extras. You know your exact financial commitment upfront.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-sm border border-brand-border">
                  <h3 className="text-sm font-bold text-brand-dark mb-1 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-bronze" />
                    Auckland Council Navigators
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    End-to-end management of building consents, producer statements (PS3), and Code Compliance Certificates.
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 flex items-center gap-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark hover:bg-brand-charcoal text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
                >
                  <span>Meet with Raymond</span>
                  <ArrowRight className="w-4 h-4 text-brand-bronze" />
                </Link>

                <a
                  href="tel:+6421882582"
                  className="text-xs font-semibold text-brand-dark hover:text-brand-bronze transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-bronze" />
                  <span>Call +64 21 882 582</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES GRID */}
      <section className="py-20 sm:py-28 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-bronze">
              Comprehensive Renovation Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark font-display">
              End-to-End Residential & Commercial Renovation
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              From individual room transformations to complete architectural extensions, our Auckland team delivers excellence across every facet of modern building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="group bg-brand-warmCream rounded-sm overflow-hidden border border-brand-border hover:shadow-luxury transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-stone-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-4 text-xs font-semibold text-white">
                    Typical Duration: {service.typicalTimeline}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-bronze transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-bronze mt-1">
                      {service.tagline}
                    </p>
                    <p className="text-xs text-stone-600 mt-3 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Deliverables preview */}
                    <div className="mt-4 pt-4 border-t border-stone-200/80 space-y-1.5">
                      {service.deliverables.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-bronze shrink-0" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-200/80">
                    <Link
                      href={`/services#${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-dark group-hover:text-brand-bronze transition-colors"
                    >
                      <span>Explore Inclusions</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-dark hover:text-brand-bronze transition-colors underline underline-offset-4"
            >
              <span>View Full Services Breakdown & Auckland Renovation FAQs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS SHOWCASE (FILTERABLE + LIGHTBOX) */}
      <section id="featured-projects" className="py-20 sm:py-28 bg-brand-warmCream border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-bronze">
              Portfolio & Craftsmanship
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark font-display">
              Featured Renovation Projects
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Explore our recent transformations across Auckland. Filter by room or project type to inspect our craftsmanship, material finishes, and before/after scope.
            </p>
          </div>

          <FeaturedProjects projects={projectsData} />
        </div>
      </section>

      {/* 5. 4-STEP WORKING PROCESS */}
      <section id="process" className="py-20 sm:py-28 bg-brand-dark text-white border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-bronze">
              Our Proven Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              The Star Property Renovation Process
            </h2>
            <p className="text-sm text-stone-400 leading-relaxed">
              Renovating your home should be exciting, not stressful. We bring disciplined project management, proactive communication, and complete financial transparency to every phase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative bg-stone-900/60 p-6 rounded-sm border border-stone-800 hover:border-brand-bronze transition-colors flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-sm bg-brand-bronze/10 text-brand-bronze flex items-center justify-center font-mono font-bold text-sm border border-brand-bronze/30">
                  01
                </div>
                <h3 className="text-lg font-bold text-white">
                  Consultation & Feasibility
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Director Raymond Zhang visits your property to inspect spatial constraints, discuss your vision, review Auckland Council requirements, and assess structural feasibility.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-800 text-[11px] text-brand-bronze font-semibold">
                Complimentary On-Site Assessment
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative bg-stone-900/60 p-6 rounded-sm border border-stone-800 hover:border-brand-bronze transition-colors flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-sm bg-brand-bronze/10 text-brand-bronze flex items-center justify-center font-mono font-bold text-sm border border-brand-bronze/30">
                  02
                </div>
                <h3 className="text-lg font-bold text-white">
                  Design, Specs & Fixed Quote
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  We formulate detailed architectural drawings, 3D layouts, and a comprehensive fixed-price contract with transparent itemisation of cabinetry, stone, fittings, and trades.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-800 text-[11px] text-brand-bronze font-semibold">
                Fixed-Price Certainty
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative bg-stone-900/60 p-6 rounded-sm border border-stone-800 hover:border-brand-bronze transition-colors flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-sm bg-brand-bronze/10 text-brand-bronze flex items-center justify-center font-mono font-bold text-sm border border-brand-bronze/30">
                  03
                </div>
                <h3 className="text-lg font-bold text-white">
                  Precision Construction
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Licensed trades carry out framing, plumbing, waterproofing, and custom joinery. Raymond manages all council inspections and provides weekly photo and schedule updates.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-800 text-[11px] text-brand-bronze font-semibold">
                Weekly Milestone Tracking
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative bg-stone-900/60 p-6 rounded-sm border border-stone-800 hover:border-brand-bronze transition-colors flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-sm bg-brand-bronze/10 text-brand-bronze flex items-center justify-center font-mono font-bold text-sm border border-brand-bronze/30">
                  04
                </div>
                <h3 className="text-lg font-bold text-white">
                  Handover & 10-Yr Warranty
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Final joint walkthrough, professional site clean, delivery of Council Code Compliance Certificate (CCC), and issuance of our comprehensive 10-Year Workmanship Warranty.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-800 text-[11px] text-brand-bronze font-semibold">
                Complete Peace of Mind
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLIENT TESTIMONIALS */}
      <section className="py-20 sm:py-28 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-bronze">
              Reputation & Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark font-display">
              What Auckland Homeowners Say
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Read genuine reviews from clients across Remuera, Ponsonby, Takapuna, and Albany who entrusted their homes to Raymond Zhang and Star Property Service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="bg-brand-warmCream p-6 rounded-sm border border-brand-border flex flex-col justify-between space-y-4 hover:shadow-soft transition-shadow"
              >
                <div className="space-y-3">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>

                  <p className="text-xs font-semibold text-brand-dark italic">
                    &ldquo;{item.highlight}&rdquo;
                  </p>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    &ldquo;{item.content}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200">
                  <div className="text-xs font-bold text-brand-dark">
                    {item.clientName}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {item.suburb} • {item.projectType}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. QUICK CONSULTATION & CONTACT SECTION */}
      <section id="consultation" className="py-20 sm:py-28 bg-brand-warmCream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-bronze">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark font-display">
                Discuss Your Renovation Project With Raymond Zhang
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                Whether you have architectural plans ready to quote or are just beginning to explore concept ideas for your kitchen, bathroom, or whole home, we invite you to start with a friendly, no-obligation conversation.
              </p>

              {/* Direct Contact Cards */}
              <div className="space-y-4 pt-4">
                <a
                  href="tel:+6421882582"
                  className="flex items-center gap-4 p-4 bg-white rounded-sm border border-brand-border hover:border-brand-bronze transition-colors group"
                >
                  <div className="w-10 h-10 rounded-sm bg-brand-dark text-brand-bronze flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-500">Call Raymond Directly</div>
                    <div className="text-base font-bold text-brand-dark group-hover:text-brand-bronze transition-colors">
                      +64 21 882 582
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:admin@starproperty.nz"
                  className="flex items-center gap-4 p-4 bg-white rounded-sm border border-brand-border hover:border-brand-bronze transition-colors group"
                >
                  <div className="w-10 h-10 rounded-sm bg-brand-dark text-brand-bronze flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-500">Email Inquiries</div>
                    <div className="text-base font-bold text-brand-dark group-hover:text-brand-bronze transition-colors">
                      admin@starproperty.nz
                    </div>
                  </div>
                </a>

                <div className="p-4 bg-white rounded-sm border border-brand-border">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-dark uppercase tracking-wider mb-1">
                    <MapPin className="w-4 h-4 text-brand-bronze" />
                    <span>Auckland Service Areas</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Remuera, Ponsonby, Takapuna, Epsom, Albany, Parnell, Grey Lynn, Mission Bay, Devonport, Milford, and greater Auckland.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
