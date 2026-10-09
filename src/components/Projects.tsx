"use client";

import { useState } from "react";
import Image from "next/image";
import { projectsData, Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import { Eye, Code2 } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState<"Semua" | "Web App" | "Mobile">("Semua");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === "Semua"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center">
            <span className="px-3 py-1 rounded-[8px] bg-white/[0.04] border border-white/10 font-mono text-[11px] font-semibold text-neutral-400">
              ETALASE PROYEK
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
            Project Unggulan
          </h2>

          <p className="font-serif text-neutral-400 text-sm sm:text-base leading-relaxed">
            Kumpulan aplikasi yang dibangun dengan logika backend teruji, skema basis data relasional, dan antarmuka modern.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {(["Semua", "Web App", "Mobile"] as const).map((category) => {
            const count =
              category === "Semua"
                ? projectsData.length
                : projectsData.filter((p) => p.category === category).length;
            const isSelected = filter === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`min-h-tap px-4 py-2 rounded-[8px] font-mono text-xs font-semibold transition-all duration-200 flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-white ${
                  isSelected
                    ? "bg-white text-black border border-white shadow-sm"
                    : "bg-neutral-900/80 text-neutral-400 border border-white/10 hover:text-white hover:bg-neutral-800"
                }`}
              >
                <span>{category === "Semua" ? "Semua Proyek" : category}</span>
                <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded-[4px] ${
                  isSelected ? "bg-black/15 text-black font-bold" : "bg-white/10 text-neutral-300"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Asymmetric Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {filteredProjects.map((project, idx) => {
            let colSpan = "lg:col-span-6";
            let isFull = false;

            if (filteredProjects.length === 1) {
              colSpan = "lg:col-span-12";
              isFull = true;
            } else {
              const cycle = idx % 5;
              if (cycle === 0) {
                colSpan = "lg:col-span-7";
              } else if (cycle === 1) {
                colSpan = "lg:col-span-5";
              } else if (cycle === 2) {
                colSpan = "lg:col-span-12";
                isFull = true;
              } else {
                colSpan = "lg:col-span-6";
              }
            }

            return (
              <article
                key={project.id}
                className={`glass-card flex flex-col overflow-hidden hover:-translate-y-1 transition-all duration-300 ${colSpan}`}
              >
                {/* Thumbnail Container */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className={`relative w-full bg-neutral-950 cursor-pointer overflow-hidden border-b border-white/[0.08] group ${
                    isFull ? "aspect-[21/9]" : "aspect-video"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out p-2"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white font-medium text-xs">
                    <Eye className="w-4 h-4 text-white" strokeWidth={1.5} />
                    <span>Klik untuk Lihat Pratinjau</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="badge-tag">
                        {project.categoryLabel}
                      </span>
                      <span className="font-mono text-[11px] text-neutral-400">
                        {project.architecture.pattern}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-display font-medium text-white hover:text-neutral-200 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-serif text-neutral-300 leading-relaxed">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Tags and Action */}
                  <div className="space-y-4 pt-3 border-t border-white/[0.08]">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="badge-tag text-[11px]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      type="button"
                      className="btn-ghost-pill w-full min-h-tap flex items-center justify-center gap-2 py-2.5 text-xs font-mono font-medium"
                    >
                      <Code2 className="w-4 h-4 text-white" />
                      <span>Buka Rincian &amp; Arsitektur</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
