"use client";

import { ArrowUp, Github, Mail, Code2, Layers } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto glass-card p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-[8px] flex items-center justify-center text-white"
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 100%)",
                }}
              >
                <Layers className="w-4 h-4" />
              </div>
              <span className="font-display font-medium text-lg text-white">
                Iqbal<span className="text-neutral-400 font-normal">.dev</span>
              </span>
            </div>
            <p className="text-xs text-neutral-400 max-w-md font-normal leading-relaxed font-sans">
              Portofolio siswa Rekayasa Perangkat Lunak di SMKN 17 Jakarta. Berfokus pada pengembangan aplikasi web performan, manajemen basis data, dan arsitektur digital terstruktur.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 text-xs">
            <a
              href="https://github.com/ikoo-aja"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-pill inline-flex items-center gap-1.5 px-4 py-2 font-mono font-medium"
            >
              <Github className="w-3.5 h-3.5 text-white" />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:ibrahimied004@gmail.com"
              className="btn-ghost-pill inline-flex items-center gap-1.5 px-4 py-2 font-mono font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-white" />
              <span>Email</span>
            </a>
            <button
              onClick={scrollToTop}
              type="button"
              className="btn-outlined-pill inline-flex items-center gap-1.5 px-4 py-2 font-mono font-medium"
            >
              <span>Ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5 text-neutral-400" />
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 font-mono">
          <p>&copy; 2026 Iqbal Khoir. Seluruh data proyek dan sertifikasi terverifikasi.</p>
          <p>Spatial Dynamics &bull; Visionary Arts Symposium</p>
        </div>
      </div>
    </footer>
  );
}
