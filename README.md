# Portofolio Iqbal Khoir (Next.js 14 + Tailwind CSS)

Portofolio modern dan interaktif untuk **Iqbal Khoir**, siswa Rekayasa Perangkat Lunak di SMKN 17 Jakarta dengan minat mendalam di bidang Software Engineering & Cyber Security.

Proyek ini telah dimigrasikan dari HTML/CSS/JS statis menjadi arsitektur **Next.js 14 (App Router) + TypeScript + Tailwind CSS**, siap untuk dideploy langsung ke **Vercel**.

---

## 🚀 Fitur Utama & Interaktivitas Baru

1. **Interactive Hero & Telemetry Switcher**:
   - Tab switcher interaktif langsung di hero: *Profil*, *Tech Focus*, dan *Security Stance*.
   - Live availability badge untuk peluang Magang/PKL.

2. **Project Showcase & Detail Modal**:
   - Filter project berdasarkan kategori (*Semua*, *Web App*, *Mobile*).
   - Modal pratinjau mendalam untuk setiap proyek (.NET MAUI FitTrack, Laravel Agriculture, ASP.NET PesanMakan) lengkap dengan arsitektur sistem, stack teknis, dan fitur utama.
   - Dukungan keyboard: tekan `Escape` untuk menutup modal, backdrop click to close, dan body scroll lock.

3. **Matriks Keahlian & Teknologi**:
   - Filter keahlian berdasarkan domain (*Backend*, *Security & Systems*, *Database & Frontend*).
   - Penjelasan konkret bagaimana setiap teknologi diterapkan pada proyek nyata.

4. **Prestasi & Sertifikasi Terverifikasi**:
   - Filter prestasi dan rekognisi kompetisi.
   - Tombol langsung untuk membuka dan mengunduh berkas sertifikat asli (`Iqbal-Khoir-Sertifikat.pdf`).

5. **Formulir Kontak Fungsional & One-Click Copy**:
   - Validasi sisi client untuk nama, format email, dan panjang pesan.
   - Indikator status pengiriman (*Idle*, *Loading*, *Success*, *Error*).
   - Tombol salin email satu klik dengan umpan balik visual instan ke clipboard.
   - Fallback tautan langsung ke mail client (`mailto:`).

6. **Security & Telemetry Inspector (Floating Widget)**:
   - Widget telemetri sistem di pojok kanan bawah khusus tema cybersecurity: audit konteks keamanan TLS client, spesifikasi lingkungan kerja dev, dan pintasan aksi cepat.

7. **Standar Anti-Slop Penuh**:
   - Nol em dash (`—`) pada seluruh teks antarmuka.
   - Nol buzzword kosong ("revolutionary", "AI-powered", "cutting-edge").
   - Nol statistik palsu atau testimonial fiktif.
   - Aksesibilitas WCAG AA (kontras warna tinggi, ring fokus keyboard terlihat jelas, link lewati ke konten utama).

---

## 🛠️ Menjalankan Proyek Secara Lokal

1. **Instalasi Dependensi**:
   ```bash
   npm install
   ```

2. **Menjalankan Server Pengembangan**:
   ```bash
   npm run dev
   ```
   Buka browser Anda di [http://localhost:3000](http://localhost:3000).

3. **Membuat Build Produksi**:
   ```bash
   npm run build
   ```

---

## 🚢 Panduan Deploy ke Vercel

### Metode 1: Hubungkan Repository GitHub (Rekomendasi)

1. Pastikan seluruh file sudah di-commit dan di-push ke GitHub:
   ```bash
   git add .
   git commit -m "feat: migrate portfolio to interactive next.js"
   git push origin main
   ```
2. Buka dashboard [Vercel](https://vercel.com).
3. Klik tombol **Add New** > **Project**.
4. Pilih repository `Portofolio` dari akun GitHub Anda.
5. Vercel akan otomatis mendeteksi framework **Next.js**:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
6. Klik **Deploy**. Website Anda akan aktif dalam hitungan detik dengan domain gratis `.vercel.app`.

### Metode 2: Menggunakan Vercel CLI

1. Jalankan perintah di terminal:
   ```bash
   npx vercel
   ```
2. Ikuti instruksi login dan konfirmasi pengaturan proyek default.
3. Untuk deployment produksi:
   ```bash
   npx vercel --prod
   ```

---

## 📂 Struktur Folder Proyek

```
Portofolio/
├── public/                     # Aset statis & berkas PDF sertifikat
│   ├── assets/                 # Gambar FitTrack, Agriculture, PesanMakan
│   └── Iqbal-Khoir-Sertifikat.pdf
├── src/
│   ├── app/                    # Next.js App Router (layout, page, globals.css)
│   ├── components/             # Komponen interaktif (Navbar, Hero, Modal, dll)
│   └── data/                   # Data terstruktur (projects, skills, education)
├── legacy/                     # Arsip berkas statis HTML/CSS/JS lama
├── DESIGN.md                   # Arahan desain & identitas anti-slop
├── GEMINI.md                   # Pointer konfigurasi anti-slop
├── tailwind.config.ts          # Konfigurasi token warna & tipografi
└── package.json
```
