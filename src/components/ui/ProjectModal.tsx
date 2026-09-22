"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";
import { X, CheckCircle2, Clock, MapPin, Calendar, ArrowRight } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImage, setActiveImage] = useState<string>("");

  useEffect(() => {
    if (project) {
      setActiveImage(project.heroImage);
      // Disable body scroll when modal is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-brand-warmCream rounded-sm max-w-4xl w-full my-8 shadow-2xl border border-brand-border overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-4 right-4 z-10 p-2 bg-brand-dark/70 hover:bg-brand-dark text-white rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="flex flex-col max-h-[90vh] overflow-y-auto">
          {/* Main Visual Showcase */}
          <div className="relative w-full h-72 sm:h-96 md:h-[420px] bg-stone-900">
            <Image
              src={activeImage || project.heroImage}
              alt={project.title}
              fill
              className="object-cover transition-all duration-300"
              sizes="(max-width: 1024px) 100vw, 900px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="inline-block px-2.5 py-1 bg-brand-bronze text-brand-dark text-[11px] font-bold uppercase tracking-wider rounded-sm mb-2">
                {project.categoryLabel}
              </span>
              <h2 id="project-modal-title" className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Thumbnail Strip */}
          {project.galleryImages.length > 1 && (
            <div className="flex gap-2 p-4 bg-stone-100 border-b border-brand-border overflow-x-auto">
              {project.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative w-20 h-14 shrink-0 rounded-sm overflow-hidden border-2 transition-all ${
                    activeImage === img ? "border-brand-bronze scale-95" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Project Details */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Meta Tags */}
            <div className="flex flex-wrap items-center gap-6 py-3 border-y border-stone-200 text-xs text-stone-600">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-bronze" />
                <span className="font-semibold text-brand-dark">{project.suburb}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-bronze" />
                <span>Duration: <strong className="text-brand-dark">{project.timeline}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-brand-bronze" />
                <span>Completed: <strong className="text-brand-dark">{project.year}</strong></span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xs uppercase font-bold tracking-wider text-brand-muted mb-2">
                Project Overview
              </h3>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Scope of Work */}
            <div className="bg-stone-50 p-4 rounded-sm border border-stone-200/70">
              <h3 className="text-xs uppercase font-bold tracking-wider text-brand-muted mb-1.5">
                Scope of Construction & Project Management
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {project.scope}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xs uppercase font-bold tracking-wider text-brand-muted mb-3">
                Architectural Features & Inclusions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-bronze shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA in Modal */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-200">
              <div className="text-xs text-stone-500 text-center sm:text-left">
                Looking to achieve a similar transformation for your Auckland home?
              </div>
              <Link
                href="/contact"
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-dark text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-brand-charcoal transition-colors shadow-sm"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4 text-brand-bronze" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
