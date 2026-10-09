"use client";

import { useState } from "react";
import { skillsData } from "@/data/skills";
import { CheckCircle2, Github, Cloud } from "lucide-react";
import {
  NextjsIcon,
  ReactIcon,
  TypeScriptIcon,
  TailwindIcon,
  LaravelIcon,
  CSharpIcon,
  PostgresIcon,
  SqlServerIcon,
  MySQLIcon,
  LinuxIcon,
  SecurityShieldIcon,
} from "./TechIcons";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  const categories = [
    "Semua",
    "Frontend & Fullstack",
    "Backend & Frameworks",
    "Basis Data & Data Management",
    "DevOps, Hosting & Keamanan",
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "nextjs":
        return <NextjsIcon className="w-5 h-5 text-white" />;
      case "laravel":
        return <LaravelIcon className="w-5 h-5 text-white" />;
      case "dotnet":
      case "csharp":
        return <CSharpIcon className="w-5 h-5 text-white" />;
      case "php":
        return <LaravelIcon className="w-5 h-5 text-white" />;
      case "shield":
        return <SecurityShieldIcon className="w-5 h-5 text-white" />;
      case "linux":
        return <LinuxIcon className="w-5 h-5 text-white" />;
      case "git":
        return <Github className="w-5 h-5 text-white" strokeWidth={1.5} />;
      case "postgresql":
        return <PostgresIcon className="w-5 h-5 text-white" />;
      case "sqlserver":
        return <SqlServerIcon className="w-5 h-5 text-white" />;
      case "database":
        return <MySQLIcon className="w-5 h-5 text-white" />;
      case "cloud":
        return <Cloud className="w-5 h-5 text-white" strokeWidth={1.5} />;
      case "javascript":
        return <TypeScriptIcon className="w-5 h-5 text-white" />;
      case "layout":
        return <TailwindIcon className="w-5 h-5 text-white" />;
      default:
        return <ReactIcon className="w-5 h-5 text-white" />;
    }
  };

  const filteredGroups =
    activeCategory === "Semua"
      ? skillsData
      : skillsData.filter((group) => group.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center">
            <span className="px-3 py-1 rounded-[8px] bg-white/[0.04] border border-white/10 font-mono text-[11px] font-semibold text-neutral-400">
              02 // STACK &amp; KAPABILITAS TEKNIS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
            Keahlian &amp; Teknologi
          </h2>

          <p className="font-serif text-neutral-400 text-sm sm:text-base leading-relaxed">
            Bahasa pemrograman, framework modern, basis data, dan alur hosting yang dipelajari serta diimplementasikan secara aktif.
          </p>
        </div>

        {/* Filter Tabs with Spatial Styling */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`min-h-tap px-4 py-2 rounded-[8px] font-mono text-xs font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-white ${
                activeCategory === cat
                  ? "bg-white text-black border border-white shadow-sm"
                  : "bg-neutral-900/80 text-neutral-400 border border-white/10 hover:text-white hover:bg-neutral-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Groups */}
        <div className="space-y-12">
          {filteredGroups.map((group) => (
            <div key={group.category} className="space-y-5">
              <div className="border-b border-white/[0.08] pb-3 flex items-center justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-display font-medium text-white tracking-tight">
                    {group.category}
                  </h3>
                  <p className="text-xs text-neutral-400 font-sans mt-0.5">{group.description}</p>
                </div>
                <span className="badge-tag text-[11px]">
                  {group.skills.length} Komponen
                </span>
              </div>

              {/* Grid of Skill Cards */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {group.skills.map((skill, sIdx) => {
                  const colSpan =
                    group.skills.length === 3
                      ? sIdx === 0
                        ? "md:col-span-12 lg:col-span-4"
                        : "md:col-span-6 lg:col-span-4"
                      : "md:col-span-6 lg:col-span-6";

                  return (
                    <div
                      key={skill.name}
                      className={`glass-card p-5 space-y-4 hover:-translate-y-1 transition-all duration-300 ${colSpan}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="w-11 h-11 rounded-[8px] border border-white/10 bg-neutral-950 flex items-center justify-center shrink-0 text-white">
                          {getIcon(skill.icon)}
                        </div>
                        <span className="badge-tag flex items-center gap-1.5 text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" strokeWidth={1.5} />
                          <span>{skill.level}</span>
                        </span>
                      </div>

                      <div>
                        <h4 className="text-sm sm:text-base font-display font-medium text-white tracking-tight">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-neutral-400 mt-1 leading-relaxed font-sans">
                          {skill.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
