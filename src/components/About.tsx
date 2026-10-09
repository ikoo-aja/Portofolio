"use client";

import { useState } from "react";
import { UserCheck, MapPin, Mail, School, Check, Copy, ExternalLink, Shield, Briefcase, Terminal } from "lucide-react";

export default function About() {
  const [copied, setCopied] = useState(false);
  const email = "ibrahimied004@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center">
            <span className="px-3 py-1 rounded-[8px] bg-white/[0.04] border border-white/10 font-mono text-[11px] font-semibold text-neutral-400">
              TENTANG SAYA
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
            Tentang Saya
          </h2>

          <p className="font-serif text-neutral-400 text-sm sm:text-base leading-relaxed">
            Perjalanan belajar di dunia rekayasa perangkat lunak dan komitmen dalam membangun aplikasi yang andal, terstruktur, serta memperhatikan keamanan.
          </p>
        </div>

        {/* Asymmetric Grid (7 vs 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-neutral-300 font-serif text-sm sm:text-base leading-relaxed">
            <div className="glass-card p-6 sm:p-8 space-y-5">
              <p>
                Halo, saya <strong className="text-white font-semibold">Iqbal Khoir</strong>, siswa program keahlian <strong className="text-white font-semibold">Rekayasa Perangkat Lunak (RPL)</strong> di <strong className="text-white font-semibold">SMKN 17 Jakarta</strong>. Saya berfokus pada pengembangan aplikasi web dan mobile dengan arsitektur terstruktur, logika bisnis yang rapi, serta perhatian terhadap keamanan data pengguna.
              </p>
              <p>
                Saya aktif mempraktikkan alur pengembangan perangkat lunak secara menyeluruh, mulai dari perancangan antarmuka responsif berbasis Next.js dan Tailwind CSS, backend service dengan Laravel atau ASP.NET Core, perancangan skema basis data relasional (PostgreSQL, SQL Server via SSMS, dan MySQL), hingga konfigurasi hosting dan deployment ke lingkungan produksi.
              </p>
              <p>
                Selain membangun fitur, saya memiliki ketertarikan tinggi pada prinsip <strong className="text-white font-semibold">Keamanan Web (Cyber Security Fundamentals)</strong>. Saya membiasakan penulisan kode defensif seperti validasi input ketat dan mitigasi risiko umum OWASP agar setiap aplikasi yang dibangun memiliki integritas yang baik.
              </p>

              {/* Core Competency Cards */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-[8px] bg-neutral-950/80 border border-white/[0.08] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-[8px] bg-neutral-900 border border-white/10 flex items-center justify-center shrink-0 text-white">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-white font-sans font-medium">Logika &amp; Struktur Kode</span>
                    <span className="text-neutral-400 font-sans text-xs leading-relaxed mt-1 block">
                      Pola pikir modular, clean architecture, dan pemecahan masalah sistematis
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-[8px] bg-neutral-950/80 border border-white/[0.08] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-[8px] bg-neutral-900 border border-white/10 flex items-center justify-center shrink-0 text-white">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-white font-sans font-medium">Keamanan &amp; Alur Kerja</span>
                    <span className="text-neutral-400 font-sans text-xs leading-relaxed mt-1 block">
                      Validasi data defensif, version control Git, dan kesiapan deploy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info Glass Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card p-6 sm:p-7 space-y-5">
              <h3 className="font-display font-medium text-white text-base border-b border-white/[0.08] pb-3">
                Informasi Ringkas
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-3.5 rounded-[8px] bg-neutral-950/80 border border-white/[0.08]">
                  <div className="w-8 h-8 rounded-[8px] bg-neutral-900 border border-white/10 flex items-center justify-center shrink-0 text-white">
                    <School className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-400 block font-medium">Sekolah:</span>
                    <span className="text-white font-medium">SMKN 17 Jakarta (RPL)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-[8px] bg-neutral-950/80 border border-white/[0.08]">
                  <div className="w-8 h-8 rounded-[8px] bg-neutral-900 border border-white/10 flex items-center justify-center shrink-0 text-white">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-400 block font-medium">Status Saat Ini:</span>
                    <span className="text-white font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Terbuka untuk Magang / PKL
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-[8px] bg-neutral-950/80 border border-white/[0.08]">
                  <div className="w-8 h-8 rounded-[8px] bg-neutral-900 border border-white/10 flex items-center justify-center shrink-0 text-white">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-400 block font-medium">Domisili:</span>
                    <span className="text-white font-medium">DKI Jakarta, Indonesia</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-[8px] bg-neutral-950/80 border border-white/[0.08]">
                  <div className="w-8 h-8 rounded-[8px] bg-neutral-900 border border-white/10 flex items-center justify-center shrink-0 text-white">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="w-full">
                    <span className="text-[11px] text-neutral-400 block font-medium">Kontak Email:</span>
                    <div className="flex items-center justify-between gap-2 mt-0.5">
                      <span className="text-white font-medium text-xs truncate">
                        {email}
                      </span>
                      <button
                        onClick={handleCopy}
                        type="button"
                        aria-label="Salin alamat email"
                        className="p-1 rounded-[6px] hover:bg-white/10 transition-colors shrink-0 text-neutral-400 hover:text-white"
                      >
                        {copied ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="/Iqbal-Khoir-Sertifikat.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-pill w-full flex items-center justify-center gap-2 py-2.5 text-xs font-mono font-medium"
                >
                  <span>Buka Berkas Sertifikat &amp; Prestasi</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
