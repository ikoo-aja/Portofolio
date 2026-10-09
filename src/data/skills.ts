export interface SkillItem {
  name: string;
  level: string;
  detail: string;
  icon: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: SkillItem[];
}

export const skillsData: SkillGroup[] = [
  {
    category: "Frontend & Fullstack",
    description: "Pengembangan antarmuka modern yang responsif, terstruktur, dan ramah pengguna.",
    skills: [
      {
        name: "Next.js & React",
        level: "Tingkat Menengah",
        detail: "Pemanfaatan App Router, komponen server dan client, static prerendering, serta integrasi API modern.",
        icon: "nextjs",
      },
      {
        name: "TypeScript & JavaScript",
        level: "Tingkat Menengah",
        detail: "Penulisan logika interaktif type-safe, asynchronous fetching, manipulasi DOM, dan pengelolaan state.",
        icon: "javascript",
      },
      {
        name: "Tailwind CSS & UI Responsif",
        level: "Lanjutan",
        detail: "Penerapan tata letak utility-first, semantic HTML, mobile-friendly design, dan kepatuhan kontras aksesibilitas.",
        icon: "layout",
      },
    ],
  },
  {
    category: "Backend & Frameworks",
    description: "Perancangan arsitektur server, logika bisnis, dan API yang andal.",
    skills: [
      {
        name: "Laravel (PHP)",
        level: "Tingkat Menengah",
        detail: "Pengembangan sistem web berbasis MVC, Eloquent ORM, routing terstruktur, middleware autentikasi, dan REST API.",
        icon: "laravel",
      },
      {
        name: "ASP.NET Core (C#)",
        level: "Tingkat Menengah",
        detail: "Pemrograman backend berbasis strongly-typed C#, dependency injection, dan pembuatan endpoint API yang kokoh.",
        icon: "dotnet",
      },
      {
        name: ".NET MAUI",
        level: "Dasar Menengah",
        detail: "Pembangunan aplikasi mobile lintas platform dengan C# dan XAML menggunakan pola Model-View-ViewModel (MVVM).",
        icon: "csharp",
      },
      {
        name: "PHP",
        level: "Tingkat Menengah",
        detail: "Dasar arsitektur backend, pemrosesan request dan session, manipulasi file, serta koneksi database relasional.",
        icon: "php",
      },
    ],
  },
  {
    category: "Basis Data & Data Management",
    description: "Perancangan skema relasional, optimasi query, dan integritas data aplikasi.",
    skills: [
      {
        name: "PostgreSQL",
        level: "Tingkat Menengah",
        detail: "Perancangan skema relasional, integritas referensial, optimasi indeks, dan penanganan query SQL terstruktur.",
        icon: "postgresql",
      },
      {
        name: "SQL Server & SSMS",
        level: "Tingkat Menengah",
        detail: "Pengelolaan basis data melalui SQL Server Management Studio, relasi tabel, stored procedures, dan validasi data.",
        icon: "sqlserver",
      },
      {
        name: "MySQL",
        level: "Tingkat Menengah",
        detail: "Desain struktur tabel relasional, normalisasi basis data, query filtering dan join, serta integrasi phpMyAdmin.",
        icon: "database",
      },
    ],
  },
  {
    category: "DevOps, Hosting & Keamanan",
    description: "Alur kerja deployment, version control teratur, dan kepedulian terhadap keamanan web.",
    skills: [
      {
        name: "Hosting & Deployment",
        level: "Tingkat Menengah",
        detail: "Deployment web modern ke platform cloud (Vercel), konfigurasi Apache virtual hosts lokal, dan manajemen environment.",
        icon: "cloud",
      },
      {
        name: "Git & GitHub",
        level: "Tingkat Menengah",
        detail: "Penggunaan version control harian, manajemen branch, commit log yang teratur, dan kolaborasi repositori.",
        icon: "git",
      },
      {
        name: "Linux & Dev Environment",
        level: "Tingkat Menengah",
        detail: "Navigasi CLI Linux (Debian/Ubuntu), manajemen hak akses berkas, otomasi shell bash, dan setup server lokal.",
        icon: "linux",
      },
      {
        name: "Prinsip Keamanan Web",
        level: "Fokus Pembelajaran",
        detail: "Pemahaman kerangka OWASP Top 10, sanitasi input data, pencegahan SQL Injection dan XSS, serta validasi hak akses.",
        icon: "shield",
      },
    ],
  },
];
