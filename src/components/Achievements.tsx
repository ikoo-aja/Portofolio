"use client";

import { useState } from "react";
import { achievementsData } from "@/data/achievements";
import {
  Trophy,
  Award,
  ExternalLink,
  FileText,
  Boxes,
  Glasses,
  Code2,
} from "lucide-react";

export default function Achievements() {
  const [filter, setFilter] = useState<string>("Semua");

  const categories = ["Semua", "Kompetisi", "Pelatihan", "Sertifikasi"];

  const filteredAchievements =
    filter === "Semua"
      ? achievementsData
      : achievementsData.filter((a) => a.category === filter);

  const getIcon = (id: string) => {
    switch (id) {
      case "uiux-competition":
        return <Trophy className="w-5 h-5 text-white" strokeWidth={1.5} />;
      case "web-dev-training":
        return <Award className="w-5 h-5 text-white" strokeWidth={1.5} />;
      case "it-software":
        return <Code2 className="w-5 h-5 text-white" strokeWidth={1.5} />;
      case "blender-3d":
        return <Boxes className="w-5 h-5 text-white" strokeWidth={1.5} />;
      case "vr-milealab":
        return <Glasses className="w-5 h-5 text-white" strokeWidth={1.5} />;
      case "javascript-cert":
        return <Award className="w-5 h-5 text-white" strokeWidth={1.5} />;
      default:
        return <Award className="w-5 h-5 text-white" strokeWidth={1.5} />;
    }
  };

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Stack */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center">
              <span className="px-3 py-1 rounded-[8px] bg-white/[0.04] border border-white/10 font-mono text-[11px] font-semibold text-neutral-400">
                05 // LISENSI &amp; PENGHARGAAN TERVERIFIKASI
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-white tracking-tight">
              Prestasi &amp; Lisensi
            </h2>
            <p className="font-serif text-neutral-400 text-sm sm:text-base max-w-xl font-normal">
              Bukti kompetensi terverifikasi melalui kompetisi antarmuka digital, pelatihan rekayasa perangkat lunak, dan lisensi keahlian.
            </p>
          </div>

          {/* Direct PDF Link */}
          <a
            href="/Iqbal-Khoir-Sertifikat.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-pill inline-flex items-center gap-2 min-h-tap px-5 py-2.5 text-xs font-mono font-semibold shrink-0 self-start md:self-auto"
          >
            <FileText className="w-4 h-4 text-white" />
            <span>Unduh Berkas Lengkap (PDF)</span>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`min-h-tap px-4 py-2 rounded-[8px] font-mono text-xs font-semibold border transition-all ${
                filter === cat
                  ? "bg-white text-black border-white shadow-sm"
                  : "bg-neutral-900/80 text-neutral-400 border-white/10 hover:text-white hover:bg-neutral-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Achievements Grid: Asymmetric 5 / 7 / 12 Spans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {filteredAchievements.map((item, idx) => {
            const colSpan =
              idx % 3 === 0
                ? "lg:col-span-5"
                : idx % 3 === 1
                ? "lg:col-span-7"
                : "lg:col-span-12";

            return (
              <div
                key={item.id}
                className={`glass-card p-6 flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all duration-300 ${colSpan}`}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-11 h-11 rounded-[8px] border border-white/10 bg-neutral-950 flex items-center justify-center shrink-0">
                      {getIcon(item.id)}
                    </div>
                    <span className="badge-tag">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-medium text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-serif text-neutral-300 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Action */}
                <div className="pt-3 border-t border-white/[0.08]">
                  <a
                    href={item.credentialUrl || "/Iqbal-Khoir-Sertifikat.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:underline transition-colors font-mono"
                  >
                    <span>Buka Bukti Sertifikat</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
