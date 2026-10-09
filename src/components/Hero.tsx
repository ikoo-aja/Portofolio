"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowDownRight,
  Layers,
  Cpu,
  Database,
  ShieldCheck,
  Copy,
  Check,
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"websys" | "database" | "security">("websys");
  const [copied, setCopied] = useState(false);

  const email = "ibrahimied004@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="home" className="pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Main Grid Composition (5 cols Portrait vs 7 cols Typography) matching aura.build */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Signature Portrait Frame (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start w-full order-2 lg:order-1">
            {/* Signature Portrait Frame: monogram inisial */}
            <div
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-full lg:max-w-md aspect-square"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0) 100%)",
                padding: "1px",
                borderRadius: "9999px",
                boxShadow:
                  "0 0 60px rgba(0,0,0,0.8), inset 0 0 30px rgba(0,0,0,0.9)",
              }}
            >
              <div className="rounded-full overflow-hidden bg-neutral-950 w-full h-full relative flex items-center justify-center">
                <span
                  role="img"
                  aria-label="Monogram Iqbal Khoir"
                  className="font-serif text-[104px] sm:text-[132px] lg:text-[160px] leading-none text-white/[0.92] select-none"
                  style={{ letterSpacing: "-0.04em" }}
                >
                  IK
                </span>
                {/* Inner subtle vignette */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.85) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>

            {/* Identitas singkat di bawah monogram */}
            <div className="mt-5 flex items-center gap-2 font-mono text-[11px] text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Iqbal Khoir &bull; SMKN 17 Jakarta</span>
            </div>
          </div>

          {/* Right Column: Nama & Deskripsi Diri (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            {/* Title Section */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[88px] tracking-tight text-white leading-[0.9] mb-6">
              <span className="inline-block tracking-tighter">Iqbal</span>
              <br />
              <span className="inline-block tracking-tighter -ml-1">Khoir</span>
            </h1>

            {/* Premium Gradient Divider */}
            <div
              className="w-full h-px my-6 sm:my-8"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 100%)",
              }}
            />

            {/* Deskripsi diri */}
            <p className="max-w-2xl text-xl sm:text-2xl md:text-3xl text-neutral-300 font-sans font-light tracking-tight leading-snug">
              Siswa Rekayasa Perangkat Lunak di SMKN 17 Jakarta. Membangun
              aplikasi web dan mobile, dari antarmuka hingga basis data.
            </p>

            {/* Premium Gradient Divider */}
            <div
              className="w-full h-px my-6 sm:my-8"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.25) 100%)",
              }}
            />

            {/* Baris identitas */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <h2 className="text-xl md:text-2xl text-white mb-1 tracking-tight font-medium">
                  Iqbal Khoir
                </h2>
                <p className="text-xs md:text-sm text-neutral-400 font-light tracking-wide font-sans">
                  Software Engineering &amp; Systems Architecture
                </p>
              </div>

              <p className="text-xs md:text-sm text-neutral-400 font-extralight leading-relaxed font-sans sm:text-right">
                <span className="block">Terbuka Magang / PKL &bull; SMKN 17 Jakarta</span>
                <span className="flex items-center gap-3 mt-2 sm:justify-end">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-1.5 text-white hover:text-neutral-300 transition-colors duration-300 font-mono text-xs"
                  >
                    <span>Eksplorasi Proyek (15)</span>
                    <ArrowDownRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-neutral-600">&bull;</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-white hover:text-neutral-300 transition-colors duration-300 font-mono text-xs"
                  >
                    <span>Hubungi Langsung</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Ringkasan keahlian teknis */}
        <div className="w-full text-left pt-6">
          <div className="glass-card p-5 sm:p-7 space-y-6">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.08] gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full border border-white/20 bg-neutral-900" />
                  <span className="w-2.5 h-2.5 rounded-full border border-white/20 bg-neutral-900" />
                  <span className="w-2.5 h-2.5 rounded-full border border-white/20 bg-neutral-900" />
                </div>
                <span className="font-mono text-xs font-semibold text-white">
                  RINGKASAN KEAHLIAN TEKNIS
                </span>
              </div>

              {/* Pemilih bagian */}
              <div className="flex items-center gap-1.5 p-1 rounded-[8px] bg-neutral-900/90 border border-white/[0.08] overflow-x-auto max-w-full">
                <button
                  type="button"
                  onClick={() => setActiveTab("websys")}
                  className={`px-3 py-1.5 rounded-[6px] font-mono text-[10px] sm:text-[11px] font-semibold whitespace-nowrap shrink-0 transition-all ${
                    activeTab === "websys"
                      ? "bg-white text-black shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  WEB & FULLSTACK
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("database")}
                  className={`px-3 py-1.5 rounded-[6px] font-mono text-[10px] sm:text-[11px] font-semibold whitespace-nowrap shrink-0 transition-all ${
                    activeTab === "database"
                      ? "bg-white text-black shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  BASIS DATA
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("security")}
                  className={`px-3 py-1.5 rounded-[6px] font-mono text-[10px] sm:text-[11px] font-semibold whitespace-nowrap shrink-0 transition-all ${
                    activeTab === "security"
                      ? "bg-white text-black shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  KEAMANAN
                </button>
              </div>
            </div>

            {/* Panel utama (8 kolom) + ringkasan (4 kolom) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Panel utama (8 kolom) */}
              <div className="lg:col-span-8 p-5 rounded-[8px] bg-neutral-950/60 border border-white/[0.08] space-y-5">
                {activeTab === "websys" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="font-mono text-[10px] uppercase font-semibold text-neutral-400">
                          Alur Pengembangan
                        </span>
                        <h3 className="font-display font-medium text-base text-white">
                          Tahapan Aplikasi Web Fullstack
                        </h3>
                      </div>
                      <span className="badge-tag text-[10px]">NEXT.JS 14 &bull; LARAVEL &bull; ASP.NET</span>
                    </div>

                    {/* Diagram alur */}
                    <div className="p-[18px] rounded-[8px] bg-neutral-900/60 border border-white/[0.08] space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-3.5 rounded-[8px] bg-neutral-950/80 border border-white/[0.08] space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] uppercase text-neutral-400 font-semibold">Antarmuka</span>
                            <Layers className="w-3.5 h-3.5 text-white" />
                          </div>
                          <span className="font-sans font-medium text-white block">Frontend</span>
                          <span className="text-xs text-neutral-400 block leading-snug">Next.js App Router, Tailwind CSS, TypeScript</span>
                        </div>

                        <div className="p-3.5 rounded-[8px] bg-neutral-950/80 border border-white/[0.08] space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] uppercase text-neutral-400 font-semibold">Logika Server</span>
                            <Cpu className="w-3.5 h-3.5 text-white" />
                          </div>
                          <span className="font-sans font-medium text-white block">Backend</span>
                          <span className="text-xs text-neutral-400 block leading-snug">Laravel REST API, C# ASP.NET Core, Middleware</span>
                        </div>

                        <div className="p-3.5 rounded-[8px] bg-neutral-950/80 border border-white/[0.08] space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] uppercase text-neutral-400 font-semibold">Penyimpanan</span>
                            <Database className="w-3.5 h-3.5 text-white" />
                          </div>
                          <span className="font-sans font-medium text-white block">Basis Data</span>
                          <span className="text-xs text-neutral-400 block leading-snug">PostgreSQL, SQL Server SSMS, MySQL relational</span>
                        </div>
                      </div>

                      {/* Grafik batang dekoratif */}
                      <div className="pt-2">
                        <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1.5">
                          <span>PENGALAMAN PROYEK</span>
                          <span className="text-emerald-400 font-semibold">15 PROYEK DIKERJAKAN</span>
                        </div>
                        <div className="h-12 w-full rounded-[6px] bg-neutral-950 border border-white/[0.08] p-1.5 flex items-end gap-1">
                          {[42, 68, 55, 84, 62, 78, 92, 70, 88, 76, 95, 82, 90, 85, 98, 88, 92, 86, 94, 99].map(
                            (val, idx) => (
                              <div
                                key={idx}
                                style={{ height: `${val}%` }}
                                className={`flex-1 rounded-[2px] transition-all duration-300 ${
                                  idx === 19 ? "bg-white" : "bg-neutral-700 hover:bg-neutral-500"
                                }`}
                              />
                            )
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Angka ringkasan */}
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="p-3 rounded-[8px] bg-neutral-900/60 border border-white/[0.08]">
                        <span className="font-mono text-base sm:text-lg font-bold text-white">15</span>
                        <span className="block font-mono text-[10px] text-neutral-400 uppercase">Proyek</span>
                      </div>
                      <div className="p-3 rounded-[8px] bg-neutral-900/60 border border-white/[0.08]">
                        <span className="font-mono text-base sm:text-lg font-bold text-white">3</span>
                        <span className="block font-mono text-[10px] text-neutral-400 uppercase">Framework</span>
                      </div>
                      <div className="p-3 rounded-[8px] bg-neutral-900/60 border border-white/[0.08]">
                        <span className="font-mono text-base sm:text-lg font-bold text-white">3</span>
                        <span className="block font-mono text-[10px] text-neutral-400 uppercase">Jenis Basis Data</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "database" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="font-mono text-[10px] uppercase font-semibold text-neutral-400">
                          Pengelolaan Data
                        </span>
                        <h3 className="font-display font-medium text-base text-white">
                          Basis Data Relasional
                        </h3>
                      </div>
                      <span className="badge-tag text-[10px]">POSTGRESQL &bull; SSMS &bull; MYSQL</span>
                    </div>

                    <div className="p-[18px] rounded-[8px] bg-neutral-900/60 border border-white/[0.08] space-y-3 text-xs">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-3.5 rounded-[8px] bg-neutral-950/80 border border-white/[0.08] space-y-1.5">
                          <span className="font-mono text-[10px] uppercase text-neutral-400 font-semibold">Relasional</span>
                          <span className="font-sans font-medium text-white block">PostgreSQL</span>
                          <span className="text-xs text-neutral-400 block leading-snug">Relasi kompleks, indexing, integritas referensial</span>
                        </div>
                        <div className="p-3.5 rounded-[8px] bg-neutral-950/80 border border-white/[0.08] space-y-1.5">
                          <span className="font-mono text-[10px] uppercase text-neutral-400 font-semibold">Enterprise</span>
                          <span className="font-sans font-medium text-white block">SQL Server (SSMS)</span>
                          <span className="text-xs text-neutral-400 block leading-snug">Stored procedures, query optimization, enterprise</span>
                        </div>
                        <div className="p-3.5 rounded-[8px] bg-neutral-950/80 border border-white/[0.08] space-y-1.5">
                          <span className="font-mono text-[10px] uppercase text-neutral-400 font-semibold">Transaksional</span>
                          <span className="font-sans font-medium text-white block">MySQL / MariaDB</span>
                          <span className="text-xs text-neutral-400 block leading-snug">Performa transaksi web, relational schema design</span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-[8px] bg-neutral-950/80 border border-white/[0.08] space-y-1.5">
                        <div className="flex items-center justify-between font-mono text-[11px] text-white">
                          <span>NORMALISASI</span>
                          <span className="text-emerald-400 font-semibold">3RD NORMAL FORM (3NF)</span>
                        </div>
                        <p className="text-xs text-neutral-400 leading-relaxed">
                          Memastikan konsistensi data dengan penghindaran anomali insert/update/delete, relasi foreign key teruji, dan query teroptimasi.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="p-3 rounded-[8px] bg-neutral-900/60 border border-white/[0.08]">
                        <span className="font-mono text-base sm:text-lg font-bold text-white">ACID</span>
                        <span className="block font-mono text-[10px] text-neutral-400 uppercase">Compliant</span>
                      </div>
                      <div className="p-3 rounded-[8px] bg-neutral-900/60 border border-white/[0.08]">
                        <span className="font-mono text-base sm:text-lg font-bold text-white">3NF</span>
                        <span className="block font-mono text-[10px] text-neutral-400 uppercase">Normalisasi</span>
                      </div>
                      <div className="p-3 rounded-[8px] bg-neutral-900/60 border border-white/[0.08]">
                        <span className="font-mono text-base sm:text-lg font-bold text-emerald-400">0 Data Loss</span>
                        <span className="block font-mono text-[10px] text-neutral-400 uppercase">Integritas</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "security" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="font-mono text-[10px] uppercase font-semibold text-neutral-400">
                          Praktik Keamanan
                        </span>
                        <h3 className="font-display font-medium text-base text-white">
                          Penerapan Dasar Keamanan Web
                        </h3>
                      </div>
                      <span className="badge-tag text-[10px]">OWASP ALIGNED</span>
                    </div>

                    <div className="p-[18px] rounded-[8px] bg-neutral-900/60 border border-white/[0.08] space-y-2.5 text-xs">
                      <div className="flex items-start gap-2.5 p-2 rounded-[6px] bg-neutral-950/80 border border-white/[0.08]">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-white block">Parameterized Queries &amp; ORM Sanitization</span>
                          <span className="text-xs text-neutral-400 block leading-snug">
                            Mencegah SQL Injection di level controller dan repositori data.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 p-2 rounded-[6px] bg-neutral-950/80 border border-white/[0.08]">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-white block">Input Validation &amp; XSS Encoding</span>
                          <span className="text-xs text-neutral-400 block leading-snug">
                            Sanitasi menyeluruh di sisi klien dan server sebelum proses komputasi.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 p-2 rounded-[6px] bg-neutral-950/80 border border-white/[0.08]">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-white block">Secure Session &amp; CSRF Tokens</span>
                          <span className="text-xs text-neutral-400 block leading-snug">
                            Proteksi permintaan lintas situs dan manajemen sesi terotentikasi.
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="p-3 rounded-[8px] bg-neutral-900/60 border border-white/[0.08]">
                        <span className="font-mono text-xs sm:text-sm font-semibold text-white">Parameterized</span>
                        <span className="block font-mono text-[10px] text-neutral-400 uppercase">Query &amp; ORM</span>
                      </div>
                      <div className="p-3 rounded-[8px] bg-neutral-900/60 border border-white/[0.08]">
                        <span className="font-mono text-xs sm:text-sm font-semibold text-white">Escaping</span>
                        <span className="block font-mono text-[10px] text-neutral-400 uppercase">Validasi Input</span>
                      </div>
                      <div className="p-3 rounded-[8px] bg-neutral-900/60 border border-white/[0.08]">
                        <span className="font-mono text-xs sm:text-sm font-semibold text-white">Token</span>
                        <span className="block font-mono text-[10px] text-neutral-400 uppercase">Sesi &amp; CSRF</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Ringkasan (4 kolom) */}
              <div className="lg:col-span-4 p-5 rounded-[8px] bg-neutral-950/60 border border-white/[0.08] flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                    <span className="font-mono text-[10px] uppercase font-semibold text-neutral-400">
                      RINGKASAN
                    </span>
                    <span className="badge-tag text-[10px]">RPL</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-mono text-neutral-400 block">PROFIL</span>
                    <h4 className="font-display font-medium text-lg text-white">
                      Iqbal Khoir
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                      Siswa Jurusan Rekayasa Perangkat Lunak di SMKN 17 Jakarta dengan fokus pengembangan fullstack dan basis data.
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 text-xs">
                    <div className="flex items-center justify-between p-2 rounded-[6px] bg-neutral-900/80 border border-white/[0.08]">
                      <span className="text-neutral-400">Status Kesiapan:</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1.5 font-mono text-[11px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Terbuka Magang
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-[6px] bg-neutral-900/80 border border-white/[0.08]">
                      <span className="text-neutral-400">Lingkungan:</span>
                      <span className="text-white font-mono text-[11px] font-medium">Node.js &bull; Linux &bull; Windows</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-[6px] bg-neutral-900/80 border border-white/[0.08]">
                      <span className="text-neutral-400">Domisili:</span>
                      <span className="text-white font-medium">Jakarta Barat</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.08] space-y-2">
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="w-full btn-violet-cta flex items-center justify-center gap-2 py-2.5 text-xs font-mono"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-black" />
                        <span>Email Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-black" />
                        <span>Salin Alamat Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href="#contact"
                    className="w-full btn-ghost-pill flex items-center justify-center gap-1.5 py-2 text-xs text-center font-mono"
                  >
                    <span>Kirim Pesan Langsung &rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bento Metric Strip (4 nested tiles) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              <div className="p-4 rounded-[8px] bg-neutral-950/60 border border-white/[0.08] space-y-1.5">
                <span className="block w-6 h-px bg-white/20" aria-hidden="true" />
                <span className="font-display font-medium text-sm text-white block">15 Proyek Nyata</span>
                <span className="text-xs text-neutral-400 block font-serif leading-snug">Aplikasi web dan mobile teruji</span>
              </div>

              <div className="p-4 rounded-[8px] bg-neutral-950/60 border border-white/[0.08] space-y-1.5">
                <span className="block w-6 h-px bg-white/20" aria-hidden="true" />
                <span className="font-display font-medium text-sm text-white block">Multi-Engine DB</span>
                <span className="text-xs text-neutral-400 block font-serif leading-snug">PostgreSQL, SSMS, MySQL</span>
              </div>

              <div className="p-4 rounded-[8px] bg-neutral-950/60 border border-white/[0.08] space-y-1.5">
                <span className="block w-6 h-px bg-white/20" aria-hidden="true" />
                <span className="font-display font-medium text-sm text-white block">Defensive Coding</span>
                <span className="text-xs text-neutral-400 block font-serif leading-snug">Prinsip dasar OWASP dan sanitasi</span>
              </div>

              <div className="p-4 rounded-[8px] bg-neutral-950/60 border border-white/[0.08] space-y-1.5">
                <span className="block w-6 h-px bg-white/20" aria-hidden="true" />
                <span className="font-display font-medium text-sm text-white block">Kesiapan Kerja</span>
                <span className="text-xs text-neutral-400 block font-serif leading-snug">Alur Git dan deploy mandiri</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
