export interface EducationItem {
  id: string;
  institution: string;
  major?: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "smkn17",
    institution: "SMKN 17 Jakarta",
    major: "Rekayasa Perangkat Lunak (RPL)",
    period: "2024 - Sekarang",
    status: "Sedang Menempuh Pendidikan",
    description:
      "Fokus pada rekayasa perangkat lunak, arsitektur aplikasi web full-stack, algoritma pemrograman, dan keamanan siber.",
    highlights: [
      "Pengembangan aplikasi web full-stack modern dengan Next.js, Laravel, dan ASP.NET Core",
      "Perancangan dan manajemen basis data relasional (PostgreSQL, SQL Server via SSMS, MySQL)",
      "Praktik alur kerja deployment web produksi dan kepedulian terhadap keamanan dasar (OWASP Top 10)",
    ],
  },
  {
    id: "smpn127",
    institution: "SMPN 127 Jakarta",
    period: "2021 - 2024",
    status: "Lulus (2024)",
    description:
      "Pendidikan formal tingkat menengah pertama dengan fokus minat awal pada dunia teknologi informasi dan komputer.",
    highlights: [
      "Pengenalan dasar logika komputasi dan matematika terapan",
      "Aktif dalam kegiatan teknologi dan multimedia sekolah",
    ],
  },
  {
    id: "sdn06",
    institution: "SDN 06 Jakarta",
    period: "2015 - 2021",
    status: "Lulus (2021)",
    description: "Pendidikan dasar formal.",
    highlights: ["Pondasi sains dasar dan literasi akademik."],
  },
];
