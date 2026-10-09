export interface Project {
  id: string;
  title: string;
  category: "Mobile" | "Web App";
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tags: string[];
  features: string[];
  architecture: {
    stack: string;
    database?: string;
    pattern: string;
  };
  demoUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "voltmart",
    title: "VoltMart",
    category: "Web App",
    categoryLabel: "Toko Elektronik Online",
    shortDesc:
      "Platform e-commerce ritel elektronik dengan komparasi spesifikasi teknis berdampingan dan keranjang belanja dinamis.",
    fullDesc:
      "VoltMart dibangun untuk mempermudah konsumen mengeksplorasi gawai dan perangkat elektronik bergaransi resmi. Memiliki filter kategori produk, kalkulasi diskon otomatis, modal pembanding spesifikasi antar unit secara berdampingan, serta keranjang belanja interaktif.",
    image: "/assets/voltmart.png",
    tags: ["Laravel", "PHP", "Tailwind CSS", "JavaScript", "MySQL"],
    features: [
      "Katalog gawai dan elektronik dengan filter kategori serta pencarian",
      "Komparasi spesifikasi teknis dua produk secara berdampingan",
      "Keranjang belanja interaktif dengan kalkulasi total harga otomatis",
      "Pengecekan ketersediaan stok unit dan masa garansi resmi",
    ],
    architecture: {
      stack: "Laravel 10, Tailwind CSS, Vanilla JS",
      database: "MySQL",
      pattern: "MVC (Model-View-Controller)",
    },
    githubUrl: "https://github.com/ikoo-aja",
  },
  {
    id: "nusantara-safe",
    title: "NusantaraSafe",
    category: "Web App",
    categoryLabel: "Sistem Pemantauan Bencana",
    shortDesc:
      "Dashboard informasi dan pemantauan tanggap darurat bencana alam di berbagai wilayah Indonesia.",
    fullDesc:
      "NusantaraSafe mengintegrasikan data laporan bencana dari berbagai provinsi di Indonesia, seperti banjir, gempa bumi, hingga erupsi vulkanik. Menampilkan indeks risiko per wilayah, status siaga darurat, dan rekapitulasi data korban secara real-time.",
    image: "/assets/nusantara-safe.png",
    tags: ["Laravel 11", "Inertia.js", "Vue 3", "Tailwind CSS", "MySQL"],
    features: [
      "Dashboard monitoring bencana dengan filter tingkat risiko wilayah",
      "Pencatatan rincian kejadian darurat dan sebaran jumlah korban",
      "Indeks kerentanan wilayah berbasis skor risiko",
      "Antarmuka SPA responsif menggunakan Inertia.js dan Vue 3",
    ],
    architecture: {
      stack: "Laravel 11, Inertia.js, Vue 3",
      database: "MySQL",
      pattern: "SPA Monolith Architecture",
    },
    githubUrl: "https://github.com/ikoo-aja",
  },
  {
    id: "kosta",
    title: "KOSTA",
    category: "Web App",
    categoryLabel: "Manajemen Hunian Kos",
    shortDesc:
      "Platform administrasi rumah kos untuk pengelolaan ketersediaan kamar, data penghuni, dan tagihan bulanan.",
    fullDesc:
      "KOSTA mempermudah pemilik rumah kos dalam mengelola unit sewa secara teratur. Memiliki dashboard status keterisian kamar, riwayat jatuh tempo sewa, dan rekap pembayaran bulanan tanpa pencatatan manual di kertas.",
    image: "/assets/kosta.png",
    tags: ["PHP", "Laravel", "Blade", "Bootstrap", "MySQL"],
    features: [
      "Pencatatan daftar kamar kos, tipe fasilitas, dan tarif sewa",
      "Manajemen profil penyewa dan arsip kontrak sewa",
      "Pelacak status pembayaran dan pengingat jatuh tempo",
      "Rekapitulasi pemasukan kas kos bulanan",
    ],
    architecture: {
      stack: "Laravel, Blade Templates",
      database: "MySQL",
      pattern: "MVC Architecture",
    },
    githubUrl: "https://github.com/ikoo-aja",
  },
  {
    id: "petgym",
    title: "Pet Gym",
    category: "Web App",
    categoryLabel: "SaaS Manajemen Gym & Fitness",
    shortDesc:
      "Sistem otomasi manajemen member fitness center, penjadwalan kelas latihan, dan paket langganan.",
    fullDesc:
      "Pet Gym dirancang sebagai solusi operasional bagi pengelola pusat kebugaran. Mengakomodasi pendaftaran anggota baru, tracking masa aktif membership gym, pemilihan instruktur, dan monitoring kapasitas ruangan latihan.",
    image: "/assets/petgym.png",
    tags: ["Laravel", "Livewire", "Tailwind CSS", "MySQL"],
    features: [
      "Manajemen registrasi member dan status paket langganan",
      "Jadwal kelas latihan fisik dan penugasan personal trainer",
      "Pencatatan check-in harian anggota pusat kebugaran",
      "Laporan pendapatan operasional dan retensi anggota",
    ],
    architecture: {
      stack: "Laravel, Livewire, Tailwind CSS",
      database: "MySQL",
      pattern: "Component-Driven MVC",
    },
    githubUrl: "https://github.com/ikoo-aja",
  },
  {
    id: "rtku",
    title: "RTKu",
    category: "Web App",
    categoryLabel: "Transparansi Kas Warga",
    shortDesc:
      "Portal pencatatan iuran dan transparansi kas warga perumahan untuk mewujudkan keterbukaan keuangan lingkungan.",
    fullDesc:
      "RTKu dikembangkan untuk wilayah RT 05 / RW 02 Perumahan Harmoni guna memastikan seluruh pemasukan iuran sampah, keamanan, dan pengeluaran kegiatan warga tercatat terbuka dan dapat dipantau langsung oleh masyarakat.",
    image: "/assets/rtku.png",
    tags: ["PHP", "Laravel", "Tailwind CSS", "MySQL"],
    features: [
      "Pencatatan buku kas masuk dan kas keluar lingkungan warga",
      "Monitoring pembayaran iuran bulanan per kepala keluarga",
      "Bukti nota pengeluaran kegiatan warga yang dapat diverifikasi",
      "Ekspor rekapitulasi keuangan untuk rapat musyawarah RT",
    ],
    architecture: {
      stack: "Laravel, Tailwind CSS",
      database: "MySQL",
      pattern: "MVC Pattern",
    },
    githubUrl: "https://github.com/ikoo-aja",
  },
  {
    id: "tongkrongan",
    title: "Sayi",
    category: "Web App",
    categoryLabel: "Kalkulator Patungan & Kas",
    shortDesc:
      "Aplikasi pembagian struk makanan, kalkulasi utang piutang antar teman, dan pencatatan kas perkumpulan.",
    fullDesc:
      "Sayi menjawab masalah saat makan bersama atau perjalanan kelompok: siapa membayar siapa. Cukup masukkan item struk dan anggota pemesan, sistem menghitung nominal yang harus ditransfer tiap individu hingga tuntas.",
    image: "/assets/tongkrongan.png",
    tags: ["PHP Native", "JavaScript", "Custom CSS", "MySQL"],
    features: [
      "Pemecah tagihan struk makan bersama berdasarkan pesanan",
      "Kalkulasi nominal transfer untuk meminimalkan putaran utang",
      "Pencatatan iuran kas tongkrongan dan saldo bendahara",
      "Dukungan mode tamu tanpa kewajiban membuat akun",
    ],
    architecture: {
      stack: "PHP, Modern JavaScript, CSS3",
      database: "MySQL",
      pattern: "Lightweight Modular Architecture",
    },
    githubUrl: "https://github.com/ikoo-aja",
  },
  {
    id: "webricks",
    title: "Webricks",
    category: "Web App",
    categoryLabel: "Platform Web UMKM",
    shortDesc:
      "Solusi pembuatan landing page dan etalase digital terjangkau untuk pelaku usaha mikro kecil menengah.",
    fullDesc:
      "Webricks membantu pengusaha lokal menghadirkan profil bisnis online yang profesional dengan biaya efisien. Menyediakan komponen siap pakai untuk menampilkan layanan, ulasan pelanggan, lokasi toko, dan tombol kontak langsung.",
    image: "/assets/webricks.png",
    tags: ["PHP", "HTML5", "CSS3", "JavaScript", "MySQL"],
    features: [
      "Desain landing page ringan dan optimal di perangkat mobile",
      "Form pemesanan produk terhubung ke WhatsApp bisnis",
      "Katalog produk lokal dengan deskripsi dan harga jelas",
      "Optimasi struktur SEO dasar untuk visibilitas mesin pencari",
    ],
    architecture: {
      stack: "PHP, Responsive Web Components",
      database: "MySQL",
      pattern: "Modular Component Architecture",
    },
    githubUrl: "https://github.com/ikoo-aja",
  },
  {
    id: "agriculture",
    title: "Agriculture Information System",
    category: "Web App",
    categoryLabel: "Sistem Informasi Web",
    shortDesc:
      "Sistem manajemen data komoditas pertanian, stok panen, dan distribusi informasi agrikultur.",
    fullDesc:
      "Sistem web agritech yang dikembangkan dengan Laravel untuk memudahkan pemantauan inventaris hasil tani, pencatatan jadwal panen, dan pelaporan distribusi agrikultur antar unit kerja.",
    image: "/assets/Agriculture.png",
    tags: ["Laravel", "PHP", "MySQL", "Blade", "Agrotech"],
    features: [
      "Manajemen data komoditas pertanian dan kategori bibit",
      "Pencatatan stok gudang dan jadwal panen berkala",
      "Autentikasi multi-peran untuk staf dan administrator",
      "Ekspor laporan inventaris dalam format terstruktur",
    ],
    architecture: {
      stack: "Laravel 10, PHP 8.2",
      database: "MySQL Relational Schema",
      pattern: "MVC (Model-View-Controller)",
    },
    githubUrl: "https://github.com/ikoo-aja",
  },
  {
    id: "absensi17",
    title: "Absensi17",
    category: "Web App",
    categoryLabel: "Presensi Sekolah Digital",
    shortDesc:
      "Sistem presensi kelas digital untuk siswa dan guru berbasis web responsif.",
    fullDesc:
      "Absensi17 memodernisasi absensi sekolah manual dengan pencatatan kehadiran online, rekapitulasi izin atau sakit, dan dashboard rekapitulasi semester untuk wali kelas.",
    image: "/assets/absensi17.png",
    tags: ["Laravel 11", "Vite", "Tailwind CSS", "MySQL"],
    features: [
      "Input kehadiran harian per mata pelajaran dan jam mengajar",
      "Rekapitulasi persentase kehadiran siswa otomatis",
      "Pencatatan surat keterangan sakit dan izin resmi",
      "Ekspor berkas rekap absensi untuk keperluan wali kelas",
    ],
    architecture: {
      stack: "Laravel 11, Vite, Tailwind CSS",
      database: "MySQL",
      pattern: "MVC Pattern",
    },
    githubUrl: "https://github.com/ikoo-aja",
  },
  {
    id: "perpus",
    title: "Perpus Digital",
    category: "Web App",
    categoryLabel: "Sistem Informasi Perpustakaan",
    shortDesc:
      "Sistem otomasi sirkulasi peminjaman buku, katalog pustaka, dan kalkulasi denda keterlambatan.",
    fullDesc:
      "Aplikasi perpustakaan yang mengorganisir koleksi judul buku, kartu anggota siswa, serta histori transaksi pinjam-kembali dengan kalkulasi otomatis denda harian.",
    image: "/assets/perpus.png",
    tags: ["PHP", "Bootstrap", "MySQL", "JavaScript"],
    features: [
      "Pencarian katalog buku berdasarkan judul, pengarang, dan ISBN",
      "Pencatatan tanggal pinjam dan batas pengembalian buku",
      "Perhitungan denda otomatis jika melewati batas waktu peminjaman",
      "Cetak kartu anggota perpustakaan dan data sirkulasi",
    ],
    architecture: {
      stack: "PHP, Bootstrap, JavaScript",
      database: "MySQL",
      pattern: "MVC Pattern",
    },
    githubUrl: "https://github.com/ikoo-aja",
  },
  {
    id: "rental",
    title: "Rental Management System",
    category: "Web App",
    categoryLabel: "Sistem Persewaan Kendaraan",
    shortDesc:
      "Aplikasi operasional rental armada kendaraan dengan jadwal reservasi dan status unit sewa.",
    fullDesc:
      "Rental Management mengelola jadwal keluar-masuk kendaraan armada, pencatatan kilometer awal dan akhir, identitas penyewa, dan penerbitan nota sewa harian.",
    image: "/assets/rental.png",
    tags: ["PHP", "MySQL", "JavaScript", "CSS3"],
    features: [
      "Status ketersediaan armada: tersedia, disewa, atau masa servis",
      "Kalender reservasi untuk mencegah jadwal ganda pada unit",
      "Kalkulasi tarif sewa dengan opsi supir atau lepas kunci",
      "Pencatatan formulir serah terima kendaraan",
    ],
    architecture: {
      stack: "PHP, MySQL",
      database: "MySQL",
      pattern: "Modular MVC",
    },
    githubUrl: "https://github.com/ikoo-aja",
  },
  {
    id: "umkm",
    title: "UMKMGo",
    category: "Web App",
    categoryLabel: "Portal Direktori Bisnis Mikro",
    shortDesc:
      "Portal etalase produk dan katalog digital terpusat untuk produk-produk UMKM lokal.",
    fullDesc:
      "UMKMGo menjadi wadah terpadu bagi komunitas usaha kecil untuk memamerkan produk unggulan, informasi kontak, varian harga, serta sertifikasi halal dan izin edar.",
    image: "/assets/umkm.png",
    tags: ["PHP", "Laravel", "Tailwind CSS", "MySQL"],
    features: [
      "Etalase produk terkurasi berdasarkan sektor usaha mikro",
      "Halaman detail profil toko dan lokasi geografis usaha",
      "Tautan pemesanan langsung ke saluran pesan pemilik usaha",
      "Panel kurasi data produk oleh pengelola komunitas UMKM",
    ],
    architecture: {
      stack: "Laravel, Blade, Tailwind CSS",
      database: "MySQL",
      pattern: "MVC Architecture",
    },
    githubUrl: "https://github.com/ikoo-aja",
  },
  {
    id: "parkirnet",
    title: "ParkirNet",
    category: "Web App",
    categoryLabel: "Sistem Billing Gerbang Parkir",
    shortDesc:
      "Aplikasi kontrol pos parkir, pencetakan karcis tiket, dan perhitungan tarif berbasis durasi.",
    fullDesc:
      "ParkirNet mengotomatisasi pencatatan plat nomor kendaraan masuk, perhitungan tarif parkir bertingkat berdasarkan jam, serta pembukuan shift operator pos keluar.",
    image: "/assets/parkirnet.png",
    tags: ["PHP", "Bootstrap", "MySQL", "JavaScript"],
    features: [
      "Pencatatan waktu masuk kendaraan dan pembuatan nomor tiket",
      "Perhitungan tarif parkir per jam dengan toleransi waktu",
      "Laporan penerimaan kas pos parkir per shift kasir",
      "Monitoring perkiraan kapasitas slot parkir",
    ],
    architecture: {
      stack: "PHP, Bootstrap, JavaScript",
      database: "MySQL",
      pattern: "MVC Pattern",
    },
    githubUrl: "https://github.com/ikoo-aja",
  },
  {
    id: "fittrack",
    title: "FitTrack",
    category: "Mobile",
    categoryLabel: "Aplikasi Mobile",
    shortDesc:
      "Aplikasi pelacak kebugaran dan aktivitas fisik harian dengan target performa dan pencatatan metrik kesehatan.",
    fullDesc:
      "FitTrack dibangun menggunakan framework .NET MAUI berbasis C# untuk ekosistem cross-platform. Aplikasi ini menyediakan antarmuka pencatatan rutinitas olahraga, perhitungan kalori, dan visualisasi progres mingguan secara terstruktur.",
    image: "/assets/FitTrack.png",
    tags: [".NET MAUI", "C#", "XAML", "Mobile"],
    features: [
      "Pencatatan metrik latihan harian dan riwayat aktivitas",
      "Perhitungan target kalori dan hidrasi",
      "Antarmuka responsif berbasis XAML",
      "Penyimpanan lokal untuk privasi data pengguna",
    ],
    architecture: {
      stack: ".NET MAUI, C# 12",
      pattern: "MVVM (Model-View-ViewModel)",
    },
    githubUrl: "https://github.com/ikoo-aja",
  },
  {
    id: "pesanmakan",
    title: "PesanMakan",
    category: "Web App",
    categoryLabel: "Sistem Manajemen Restoran",
    shortDesc:
      "Platform digital untuk pemesanan menu restoran, manajemen meja, dan transaksi kasir.",
    fullDesc:
      "PesanMakan merupakan aplikasi web berbasis ASP.NET dan C# dengan database SQL Server. Dirancang untuk mempercepat alur transaksi dari pemesanan meja tamu langsung ke dapur hingga cetak struk kasir.",
    image: "/assets/PesanMakan.png",
    tags: ["ASP.NET", "C#", "SQL Server", "REST API", "Enterprise"],
    features: [
      "Katalog digital menu makanan dan minuman dinamis",
      "Alur pemesanan meja terintegrasi status dapur",
      "Pencatatan transaksi kasir dan rekap harian",
      "Validasi data transaksi sisi server dengan C#",
    ],
    architecture: {
      stack: "ASP.NET Core, C#",
      database: "Microsoft SQL Server",
      pattern: "Clean Architecture & Repository Pattern",
    },
    githubUrl: "https://github.com/ikoo-aja",
  },
];
