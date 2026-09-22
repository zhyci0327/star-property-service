import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import ProjectsGallery from "@/components/projects/ProjectsGallery";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Completed Projects & Renovation Portfolio | Star Property Service Limited",
  description:
    "View our architectural renovation portfolio across Auckland: Remuera kitchens, Ponsonby villa extensions, Takapuna luxury ensuites, and Albany outdoor living.",
};

export default function ProjectsPage() {
  const beforeAfterProjects = projectsData.filter(
    (p) => p.beforeImage && p.afterImage
  );

  return (
    <div className="flex flex-col">
      {/* 1. Header Banner */}
      <section className="bg-brand-dark text-white py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80"
            alt="Renovation Portfolio Auckland"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-bronze mb-3 inline-block">
            Our Craftsmanship In Detail
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto font-display">
            Auckland Renovation Portfolio
          </h1>
          <p className="mt-4 text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Every project represents a tailored partnership between our clients and Director Raymond Zhang. Explore our gallery of completed kitchens, bathrooms, extensions, and outdoor spaces.
          </p>
        </div>
      </section>

      {/* 2. Filterable Projects Gallery */}
      <section className="py-20 bg-brand-warmCream border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsGallery projects={projectsData} />
        </div>
      </section>

      {/* 3. Before & After Spotlight Showcase */}
      {beforeAfterProjects.length > 0 && (
        <section className="py-20 sm:py-28 bg-white border-b border-brand-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-bronze">
                <Sparkles className="w-4 h-4" />
                <span>Visual Transformations</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark font-display">
                Before & After Transformations
              </h2>
              <p className="text-sm text-stone-600">
                Witness the remarkable spatial and aesthetic evolution achieved through precision architectural planning and quality craftsmanship.
              </p>
            </div>

            <div className="space-y-16">
              {beforeAfterProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-brand-warmCream p-6 sm:p-10 rounded-sm border border-brand-border shadow-soft"
                >
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-bronze">
                      {project.suburb}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mt-1">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-3xl">
                      {project.scope}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Before Image */}
                    <div className="space-y-2">
                      <div className="relative h-64 sm:h-80 w-full rounded-sm overflow-hidden bg-stone-200">
                        <Image
                          src={project.beforeImage!}
                          alt={`${project.title} Before Renovation`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-stone-900/80 text-stone-300 text-xs font-bold uppercase tracking-wider rounded-sm backdrop-blur-sm">
                          Before Renovation
                        </div>
                      </div>
                      <p className="text-xs text-stone-500 italic">
                        Dated spatial layout, restricted lighting, and legacy finishes.
                      </p>
                    </div>

                    {/* After Image */}
                    <div className="space-y-2">
                      <div className="relative h-64 sm:h-80 w-full rounded-sm overflow-hidden bg-stone-200">
                        <Image
                          src={project.afterImage!}
                          alt={`${project.title} After Renovation`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-brand-bronze text-brand-dark text-xs font-bold uppercase tracking-wider rounded-sm shadow-sm">
                          After Star Property Transformation
                        </div>
                      </div>
                      <p className="text-xs text-stone-700 font-medium">
                        Transformed with custom joinery, architectural lighting, and high-spec finishes.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Consultation CTA */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Ready to Bring Your Renovation Vision to Life?
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Contact Director Raymond Zhang today to arrange an on-site consultation and explore how Star Property Service Limited can transform your Auckland home.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-bronze hover:bg-amber-600 text-brand-dark font-bold text-xs uppercase tracking-widest rounded-sm transition-all shadow-lg"
            >
              <span>Book Your Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+6421882582"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-widest rounded-sm border border-white/20 transition-all"
            >
              <Phone className="w-4 h-4 text-brand-bronze" />
              <span>Call +64 21 882 582</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
