"use client";

import { useState, useEffect } from "react";
import {
  ShieldCheck,
  X,
  CheckCircle2,
  FileText,
  Copy,
  ExternalLink,
} from "lucide-react";

export default function SecurityInspector() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [clientInfo, setClientInfo] = useState<{
    secureContext: boolean;
    online: boolean;
    screen: string;
  }>({
    secureContext: true,
    online: true,
    screen: "1920x1080",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setClientInfo({
        secureContext: window.isSecureContext,
        online: navigator.onLine,
        screen: `${window.innerWidth}x${window.innerHeight}`,
      });
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ibrahimied004@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <aside aria-label="Alat Telemetri Sistem" className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-expanded={isOpen}
          aria-label="Buka Telemetri &amp; Status Sistem"
          className="btn-ghost-pill group flex items-center gap-2.5 px-4 py-2.5 rounded-[8px] text-xs font-mono font-medium shadow-2xl border border-white/15 bg-neutral-900/90 hover:border-white/30 backdrop-blur-md transition-all"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span className="text-white hidden sm:inline">
            Status Sistem
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </button>
      </aside>

      {/* Modal / Flyout */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="inspector-heading"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="glass-modal w-full max-w-xl rounded-card border border-white/15 bg-[#0c0c0c] shadow-2xl overflow-hidden text-xs"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-5 py-4 bg-[#0c0c0c] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span id="inspector-heading" className="font-display font-medium text-sm text-white">
                  Inspeksi Sistem &amp; Telemetri
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                aria-label="Tutup inspeksi"
                className="w-8 h-8 rounded-[8px] bg-neutral-900 border border-white/10 text-neutral-400 flex items-center justify-center hover:text-white hover:bg-neutral-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              {/* Security Health */}
              <div className="p-4 rounded-[8px] bg-neutral-950/80 border border-white/[0.08] space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Status Koneksi Client:</span>
                  <span className="inline-flex items-center gap-1.5 text-white font-mono text-[11px] px-2.5 py-0.5 rounded-[6px] bg-neutral-900 border border-white/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{clientInfo.secureContext ? "Terenkripsi TLS/SSL" : "Standar HTTP"}</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Target Platform:</span>
                  <span className="text-white font-mono text-[11px]">Vercel (Next.js 14 App Router)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Resolusi Layar Saat Ini:</span>
                  <span className="text-white font-mono text-[11px]">{clientInfo.screen}</span>
                </div>
              </div>

              {/* Developer Environment */}
              <div className="space-y-2">
                <span className="text-neutral-400 block text-xs uppercase tracking-wider font-medium font-mono">
                  Spesifikasi &amp; Kapabilitas Teknis
                </span>
                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 rounded-[8px] bg-neutral-950/80 border border-white/[0.08]">
                    <span className="text-neutral-400 block text-[11px] font-medium font-mono">Frontend:</span>
                    <span className="text-white font-medium">Next.js 14, React, Tailwind</span>
                  </div>
                  <div className="p-3 rounded-[8px] bg-neutral-950/80 border border-white/[0.08]">
                    <span className="text-neutral-400 block text-[11px] font-medium font-mono">Backend API:</span>
                    <span className="text-white font-medium">Laravel 11, ASP.NET Core</span>
                  </div>
                  <div className="p-3 rounded-[8px] bg-neutral-950/80 border border-white/[0.08]">
                    <span className="text-neutral-400 block text-[11px] font-medium font-mono">Basis Data:</span>
                    <span className="text-white font-medium">PostgreSQL, SQL Server, MySQL</span>
                  </div>
                  <div className="p-3 rounded-[8px] bg-neutral-950/80 border border-white/[0.08]">
                    <span className="text-neutral-400 block text-[11px] font-medium font-mono">Hosting &amp; DevOps:</span>
                    <span className="text-white font-medium">Vercel, Apache, Linux CLI</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-2 border-t border-white/[0.08] space-y-2">
                <span className="text-neutral-400 block text-xs uppercase tracking-wider font-medium font-mono">
                  Pintasan Aksi Cepat
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={copyEmail}
                    type="button"
                    className="btn-ghost-pill flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium"
                  >
                    <Copy className="w-3.5 h-3.5 text-white" />
                    <span>{copied ? "Email Tersalin!" : "Salin Email"}</span>
                  </button>

                  <a
                    href="/Iqbal-Khoir-Sertifikat.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost-pill flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium"
                  >
                    <FileText className="w-3.5 h-3.5 text-white" />
                    <span>Berkas Sertifikat (PDF)</span>
                  </a>

                  <a
                    href="https://github.com/ikoo-aja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost-pill flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-white" />
                    <span>GitHub @ikoo-aja</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-5 py-3 bg-[#080808] border-t border-white/10 flex items-center justify-between text-xs text-neutral-500 font-mono">
              <span>Tekan Escape untuk menutup</span>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="text-white hover:underline transition-colors font-medium"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
