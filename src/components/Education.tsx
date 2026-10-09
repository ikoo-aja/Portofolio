import { educationData } from "@/data/education";
import { GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3 text-center">
          <div className="inline-flex items-center justify-center">
            <span className="px-3 py-1 rounded-[8px] bg-white/[0.04] border border-white/10 font-mono text-[11px] font-semibold text-neutral-400">
              04 // JEJAK PENDIDIKAN FORMAL
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-white tracking-tight">
            Pendidikan Formal
          </h2>
          <p className="font-serif text-neutral-400 text-sm sm:text-base max-w-xl mx-auto font-normal">
            Pondasi akademis dalam rekayasa perangkat lunak, komputasi terapan, dan struktur data modern.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-3 sm:ml-4 space-y-8">
          {educationData.map((item) => (
            <div key={item.id} className="relative group">
              {/* Precision Timeline Node */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-3.5 w-5 h-5 rounded-[4px] border border-white/20 bg-[#050505] flex items-center justify-center group-hover:border-white transition-colors shadow-sm">
                <span className="w-1.5 h-1.5 rounded-sm bg-white" />
              </div>

              {/* Card Container */}
              <div className="glass-card p-6 sm:p-7 space-y-4 hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-medium text-white flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-white" strokeWidth={1.5} />
                      <span>{item.institution}</span>
                    </h3>
                    {item.major && (
                      <p className="text-sm font-medium text-neutral-400 mt-0.5 font-sans">
                        {item.major}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[8px] bg-white/[0.04] border border-white/10 text-neutral-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                      {item.period}
                    </span>
                    <span className="badge-tag">
                      {item.status}
                    </span>
                  </div>
                </div>

                <p className="text-sm font-serif text-neutral-300 font-normal leading-relaxed">
                  {item.description}
                </p>

                {item.highlights.length > 0 && (
                  <div className="pt-3 border-t border-white/[0.08]">
                    <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-medium font-mono mb-2.5">
                      Fokus &amp; Capaian Kompetensi:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white">
                      {item.highlights.map((h, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2 bg-neutral-950/80 p-2.5 rounded-[8px] border border-white/[0.08]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
