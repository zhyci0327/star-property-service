"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project, ProjectCategory } from "@/types";
import ProjectModal from "@/components/ui/ProjectModal";
import { Clock, MapPin, Calendar, ArrowRight, Eye, CheckCircle2 } from "lucide-react";

interface ProjectsGalleryProps {
  projects: Project[];
}

const filterTabs: { key: ProjectCategory; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "kitchen", label: "Kitchen Renovations" },
  { key: "bathroom", label: "Luxury Bathrooms" },
  { key: "whole-home", label: "Whole Home Extensions" },
  { key: "outdoor", label: "Decking & Outdoor" },
];

export default function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filtered =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-b border-brand-border pb-6">
        {filterTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedCategory(tab.key)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
              selectedCategory === tab.key
                ? "bg-brand-dark text-white shadow-sm scale-105"
                : "bg-white text-stone-600 hover:bg-stone-100 hover:text-brand-dark border border-brand-border"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveModalProject(project)}
            className="group cursor-pointer bg-white rounded-sm overflow-hidden border border-brand-border shadow-soft hover:shadow-luxury transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative h-72 w-full overflow-hidden bg-stone-100">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-brand-dark/90 text-white text-[11px] font-semibold tracking-wider uppercase rounded-sm backdrop-blur-sm">
                  {project.categoryLabel}
                </span>
              </div>

              {project.beforeImage && (
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 bg-brand-bronze text-brand-dark text-[10px] font-bold uppercase tracking-wider rounded-sm">
                    Before & After Included
                  </span>
                </div>
              )}

              <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-bronze text-white text-xs font-semibold rounded-sm shadow-md">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Project</span>
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-4 text-xs text-stone-500 mb-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-bronze" />
                    {project.suburb}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-brand-bronze" />
                    {project.timeline}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-brand-bronze" />
                    {project.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-bronze transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-stone-600 mt-2 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-stone-100">
                <div className="text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                  Key Highlights
                </div>
                <div className="space-y-1">
                  {project.features.slice(0, 2).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-1.5 text-xs text-stone-600 line-clamp-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-bronze shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
}
