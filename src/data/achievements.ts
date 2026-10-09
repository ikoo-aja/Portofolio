export interface Achievement {
  id: string;
  title: string;
  category: "Kompetisi" | "Sertifikasi" | "Pelatihan";
  description: string;
  issuer?: string;
  credentialUrl?: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "uiux-competition",
    title: "Juara 3 Lomba UI/UX Design",
    category: "Kompetisi",
    description:
      "Penghargaan kompetisi desain antarmuka pengguna dengan penekanan pada kemudahan alur interaksi dan kenyamanan pengguna.",
    credentialUrl: "/Iqbal-Khoir-Sertifikat.pdf",
  },
  {
    id: "web-dev-training",
    title: "Pelatihan Web Development",
    category: "Pelatihan",
    description:
      "Sertifikasi penyelesaian pelatihan pengembangan aplikasi web modern menggunakan teknologi terkini.",
    credentialUrl: "/Iqbal-Khoir-Sertifikat.pdf",
  },
  {
    id: "it-software",
    title: "Pelatihan IT Software",
    category: "Pelatihan",
    description:
      "Pelatihan komprehensif siklus hidup pengembangan perangkat lunak dan implementasi logika pemrograman.",
    credentialUrl: "/Iqbal-Khoir-Sertifikat.pdf",
  },
  {
    id: "blender-3d",
    title: "Pelatihan 3D Blender",
    category: "Pelatihan",
    description:
      "Pembuatan pemodelan objek 3D dan pemahaman tata letak visual menggunakan software Blender.",
    credentialUrl: "/Iqbal-Khoir-Sertifikat.pdf",
  },
  {
    id: "vr-milealab",
    title: "Pelatihan VR Milealab",
    category: "Pelatihan",
    description:
      "Eksplorasi dan pengembangan ruang Virtual Reality interaktif berbasis platform Milealab.",
    credentialUrl: "/Iqbal-Khoir-Sertifikat.pdf",
  },
  {
    id: "javascript-cert",
    title: "Pelatihan JavaScript",
    category: "Sertifikasi",
    description:
      "Penguasaan logika pemrograman JavaScript untuk interaktivitas dinamis dan penanganan data web.",
    credentialUrl: "/Iqbal-Khoir-Sertifikat.pdf",
  },
];
