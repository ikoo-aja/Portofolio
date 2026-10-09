"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { X, ExternalLink, Github, Check, Layers, Cpu, Database } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="glass-modal relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-card border border-white/15 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-10 px-6 py-4 bg-[#0c0c0c] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="badge-tag text-xs">
              {project.categoryLabel}
            </span>
            <h3
              id="modal-project-title"
              className="font-display font-medium text-lg text-white truncate max-w-sm sm:max-w-md"
            >
              {project.title}
            </h3>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            type="button"
            aria-label="Tutup detail proyek"
            className="w-8 h-8 rounded-[8px] bg-neutral-900 border border-white/10 text-neutral-400 flex items-center justify-center hover:text-white hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Project Image Preview */}
          <div className="relative w-full aspect-video rounded-card overflow-hidden border border-white/10 bg-neutral-950">
            <Image
              src={project.image}
              alt={`Tangkapan layar antarmuka proyek ${project.title}`}
              fill
              className="object-contain p-2"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-medium font-mono">
              Ikhtisar Solusi
            </h4>
            <p className="text-sm sm:text-base font-serif text-neutral-300 leading-relaxed font-normal">
              {project.fullDesc}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-medium font-mono">
              Fitur Utama yang Diimplementasikan
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-white">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 bg-neutral-900/80 p-3 rounded-[8px] border border-white/10"
                >
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Details */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-medium font-mono">
              Spesifikasi Arsitektur &amp; Teknologi
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-[8px] bg-neutral-900/80 border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-neutral-400 text-[11px] font-medium font-mono">
                  <Cpu className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
                  <span>Framework</span>
                </div>
                <div className="text-white font-medium">{project.architecture.stack}</div>
              </div>

              <div className="p-3.5 rounded-[8px] bg-neutral-900/80 border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-neutral-400 text-[11px] font-medium font-mono">
                  <Layers className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
                  <span>Pola Desain</span>
                </div>
                <div className="text-white font-medium">{project.architecture.pattern}</div>
              </div>

              {project.architecture.database && (
                <div className="p-3.5 rounded-[8px] bg-neutral-900/80 border border-white/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-neutral-400 text-[11px] font-medium font-mono">
                    <Database className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
                    <span>Basis Data</span>
                  </div>
                  <div className="text-white font-medium">{project.architecture.database}</div>
                </div>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
            {project.tags.map((tag) => (
              <span key={tag} className="badge-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-violet-cta inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-medium"
              >
                <Github className="w-4 h-4 text-black" />
                <span>Buka Repositori GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-600" />
              </a>
            )}
            <button
              onClick={onClose}
              type="button"
              className="btn-outlined-pill px-5 py-2.5 text-xs font-mono font-medium"
            >
              Tutup Modal (Esc)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
