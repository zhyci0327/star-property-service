"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project, ProjectCategory } from "@/types";
import ProjectModal from "@/components/ui/ProjectModal";
import { ArrowUpRight, Clock, MapPin, Eye } from "lucide-react";

interface FeaturedProjectsProps {
  projects: Project[];
}

const categories: { key: ProjectCategory; label: string }[] = [
  { key: "all", label: "All Works" },
  { key: "kitchen", label: "Kitchens" },
  { key: "bathroom", label: "Bathrooms" },
  { key: "whole-home", label: "Whole Home" },
  { key: "outdoor", label: "Outdoor & Decks" },
];

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-10">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
              activeCategory === cat.key
                ? "bg-brand-dark text-white shadow-sm scale-105"
                : "bg-stone-200/70 text-stone-600 hover:bg-stone-200 hover:text-brand-dark"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.slice(0, 6).map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer bg-white rounded-sm overflow-hidden border border-brand-border shadow-soft hover:shadow-luxury transition-all duration-300 flex flex-col"
          >
            {/* Image Container */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-brand-dark/90 text-white text-[11px] font-semibold tracking-wider uppercase rounded-sm backdrop-blur-sm">
                  {project.categoryLabel}
                </span>
              </div>

              {/* View Overlay Button */}
              <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-bronze text-white text-xs font-semibold rounded-sm shadow-md">
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </span>
              </div>
            </div>

            {/* Card Content */}
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
                </div>
                <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-bronze transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-brand-dark">
                <span className="text-stone-500 font-normal">Features: {project.features.length} highlights</span>
                <span className="inline-flex items-center gap-1 text-brand-bronze group-hover:translate-x-0.5 transition-transform">
                  Explore Project <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Link to Full Projects Page */}
      <div className="text-center pt-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-dark hover:bg-brand-charcoal text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-sm"
        >
          <span>View All Completed Projects</span>
          <ArrowUpRight className="w-4 h-4 text-brand-bronze" />
        </Link>
      </div>

      {/* Project Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
