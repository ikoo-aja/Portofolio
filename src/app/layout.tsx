import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Iqbal Khoir | Software Engineering & Web Development",
  description:
    "Portofolio Iqbal Khoir, siswa Rekayasa Perangkat Lunak SMKN 17 Jakarta. Pengembangan aplikasi web dan mobile, basis data relasional, serta dasar keamanan web.",
  keywords: [
    "Iqbal Khoir",
    "Portofolio",
    "Rekayasa Perangkat Lunak",
    "SMKN 17 Jakarta",
    "Web Development",
    "Next.js",
    "Laravel",
    "ASP.NET Core",
    "PostgreSQL",
  ],
  authors: [{ name: "Iqbal Khoir" }],
  openGraph: {
    title: "Iqbal Khoir | Software Engineering & Web Development",
    description:
      "Portofolio Iqbal Khoir: Rekayasa Perangkat Lunak, pengembangan web & mobile, serta dasar keamanan web.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-[#050505] text-[#FAFAFA] font-sans min-h-[100dvh] antialiased selection:bg-neutral-800 selection:text-white">
        {/* Accessible skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-5 focus:py-2.5 focus:bg-white focus:text-black focus:font-medium focus:rounded-full focus:shadow-lg focus:border focus:border-white"
        >
          Lewati ke konten utama
        </a>
        <div className="relative min-h-[100dvh] flex flex-col bg-[#050505]">
          {children}
        </div>
      </body>
    </html>
  );
}
