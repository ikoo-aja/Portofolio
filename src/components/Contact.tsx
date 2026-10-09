"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const contactEmail = "ibrahimied004@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Silakan masukkan nama lengkap Anda.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus("error");
      setErrorMessage("Format email tidak valid. Harap periksa kembali.");
      return;
    }

    if (formData.message.trim().length < 10) {
      setStatus("error");
      setErrorMessage("Pesan terlalu pendek. Tuliskan minimal 10 karakter.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setStatus("idle");
    setErrorMessage("");
  };

  const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(
    formData.subject || "Pesan dari Web Portofolio"
  )}&body=${encodeURIComponent(
    `Halo Iqbal,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3 text-center">
          <div className="inline-flex items-center justify-center">
            <span className="px-3 py-1 rounded-[8px] bg-white/[0.04] border border-white/10 font-mono text-[11px] font-semibold text-neutral-400">
              KONTAK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-white tracking-tight">
            Hubungi Saya
          </h2>
          <p className="font-serif text-neutral-400 text-sm sm:text-base max-w-xl mx-auto font-normal">
            Terbuka untuk diskusi kesempatan magang, rekayasa perangkat lunak, maupun eksplorasi arsitektur sistem.
          </p>
        </div>

        {/* Contact Grid: 5 vs 7 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Info Panel (Left, 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-7 space-y-6 transition-all duration-300">
              <h3 className="font-display font-medium text-lg text-white border-b border-white/[0.08] pb-3">
                Saluran Komunikasi Langsung
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-4 rounded-[8px] bg-neutral-950/80 border border-white/[0.08]">
                  <div className="w-10 h-10 rounded-[8px] border border-white/10 bg-neutral-900 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="w-full">
                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium block font-mono">
                      Email Utama
                    </span>
                    <span className="text-sm font-medium text-white block mt-0.5 truncate">
                      {contactEmail}
                    </span>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="btn-ghost-pill inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Tersalin</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-neutral-400" />
                            <span>Salin Alamat</span>
                          </>
                        )}
                      </button>
                      <a
                        href={`mailto:${contactEmail}`}
                        className="btn-outlined-pill inline-flex items-center gap-1 px-3 py-1 text-xs font-mono font-medium"
                      >
                        Buka Email Client
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-[8px] bg-neutral-950/80 border border-white/[0.08]">
                  <div className="w-10 h-10 rounded-[8px] border border-white/10 bg-neutral-900 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium block font-mono">
                      Lokasi Domisili
                    </span>
                    <span className="text-sm font-medium text-white block mt-0.5">
                      DKI Jakarta, Indonesia
                    </span>
                    <span className="text-xs text-neutral-400 block mt-1">
                      Kesiapan kerja onsite (Jabodetabek) maupun remote.
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Banner */}
              <div className="p-4 rounded-[8px] bg-neutral-950/90 border border-white/[0.08] space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-xs font-semibold text-white">
                    STATUS: TERBUKA UNTUK MAGANG / PKL
                  </span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                  Siap berkontribusi dalam tim rekayasa perangkat lunak, pengembangan fitur web fullstack, serta pemeliharaan basis data.
                </p>
              </div>
            </div>
          </div>

          {/* Form Panel (Right, 7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 space-y-6">
              {status === "success" ? (
                <div className="p-6 rounded-[8px] bg-neutral-950/90 border border-emerald-500/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-medium text-lg text-white">
                      Pesan Siap Dikirim
                    </h3>
                    <p className="text-xs text-neutral-400 max-w-md mx-auto">
                      Terima kasih atas pesan Anda. Silakan klik tombol di bawah untuk membuka klien email default Anda dengan draf pesan ini.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="btn-outlined-pill px-5 py-2.5 text-xs font-mono font-medium"
                    >
                      Kirim Pesan Lain
                    </button>
                    <a
                      href={mailtoUrl}
                      className="btn-violet-cta px-5 py-2.5 text-xs font-mono font-medium"
                    >
                      Buka di Email Client
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display font-medium text-lg text-white mb-2">
                    Formulir Kontak
                  </h3>

                  {status === "error" && (
                    <div className="p-3.5 rounded-[8px] bg-red-950/60 border border-red-500/30 text-xs text-red-300 font-medium flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs text-neutral-300 font-medium block">
                        Nama Lengkap <span className="text-white">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nama lengkap Anda"
                        required
                        className="w-full px-4 py-3 rounded-[8px] bg-neutral-950 border border-white/10 text-white placeholder:text-neutral-600 text-sm font-normal focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs text-neutral-300 font-medium block">
                        Alamat Email <span className="text-white">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nama@email.com"
                        required
                        className="w-full px-4 py-3 rounded-[8px] bg-neutral-950 border border-white/10 text-white placeholder:text-neutral-600 text-sm font-normal focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs text-neutral-300 font-medium block">
                      Subjek / Topik Bahasan
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Contoh: Peluang magang / kolaborasi"
                      className="w-full px-4 py-3 rounded-[8px] bg-neutral-950 border border-white/10 text-white placeholder:text-neutral-600 text-sm font-normal focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs text-neutral-300 font-medium block">
                      Pesan Anda <span className="text-white">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tuliskan pesan, penawaran magang, atau pertanyaan Anda di sini..."
                      required
                      className="w-full px-4 py-3 rounded-[8px] bg-neutral-950 border border-white/10 text-white placeholder:text-neutral-600 text-sm font-normal focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors resize-y"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <p className="text-xs text-neutral-500 font-sans leading-snug">
                      Formulir tervalidasi di sisi klien &bull; Langsung tersambung ke email
                    </p>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-violet-cta min-h-tap inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-mono font-medium disabled:opacity-50"
                    >
                      {status === "loading" ? (
                        <>
                          <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Memproses...</span>
                        </>
                      ) : (
                        <>
                          <span>Kirim Pesan</span>
                          <Send className="w-4 h-4 text-black" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
