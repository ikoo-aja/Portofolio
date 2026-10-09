"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "education",
        "achievements",
        "contact",
      ];

      const scrollPosition = window.scrollY + 140;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Tentang", href: "#about", id: "about" },
    { label: "Keahlian", href: "#skills", id: "skills" },
    { label: "Proyek", href: "#projects", id: "projects" },
    { label: "Pendidikan", href: "#education", id: "education" },
    { label: "Prestasi", href: "#achievements", id: "achievements" },
    { label: "Kontak", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#050505]/85 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
        {/* Left: Logo monogram + nama */}
        <div className="flex items-center gap-3.5">
          <a
            href="#home"
            className="flex items-center gap-3 group"
            aria-label="Iqbal Khoir Beranda"
          >
            <div
              className="w-10 h-10 rounded-[8px] flex items-center justify-center transition-all duration-300 group-hover:border-white/35 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.12)]"
              style={{
                border: "1px solid rgba(255,255,255,0.18)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 100%)",
              }}
            >
              <span
                className="font-mono text-sm font-semibold text-white leading-none tracking-tight"
                aria-hidden="true"
              >
                &lsaquo;IK&rsaquo;
              </span>
            </div>
            <div className="text-xs uppercase tracking-widest text-neutral-400 font-extralight font-sans leading-[1.15]">
              Iqbal<br /><span className="text-white font-normal">Khoir</span>
            </div>
          </a>
        </div>

        {/* Center: Navigasi utama */}
        <nav className="hidden lg:flex items-center gap-1.5" aria-label="Navigasi Utama">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`px-3 py-1.5 rounded-[6px] font-mono text-xs transition-all duration-150 ${
                  isActive
                    ? "bg-white text-black font-semibold shadow-sm"
                    : "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Technical subtitle + Contact button */}
        <div className="flex items-center gap-4">
          <div className="text-xs uppercase tracking-widest text-right text-neutral-400 font-extralight font-sans hidden md:block leading-[1.15]">
            Rekayasa Perangkat Lunak<br /><span className="text-neutral-300 font-normal">SMKN 17 Jakarta</span>
          </div>

          <a
            href="#contact"
            className="btn-violet-cta hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-medium"
          >
            <span>Hubungi</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-black" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="lg:hidden p-2 rounded-[6px] border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08] transition-colors"
            aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0c0c] border-b border-white/10 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-[6px] font-mono text-xs ${
                activeSection === item.id
                  ? "bg-white text-black font-semibold"
                  : "text-neutral-400 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full btn-violet-cta flex items-center justify-center gap-1.5 py-2.5 text-xs font-mono font-medium"
            >
              <span>Kirim Pesan &bull; Kontak</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
