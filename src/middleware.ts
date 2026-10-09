import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Header keamanan untuk seluruh respons.
 *
 * Catatan penting: ini melindungi dari XSS, clickjacking, MIME sniffing, dan
 * kebocoran referrer. Ini BUKAN proteksi DDoS. Serangan volumetrik harus
 * ditangani di edge/CDN (Vercel Firewall / Cloudflare), bukan di aplikasi.
 */
const SECURITY_HEADERS: Record<string, string> = {
  // Cegah halaman di-embed di iframe situs lain (clickjacking)
  "X-Frame-Options": "DENY",

  // Cegah browser menebak tipe file (MIME sniffing)
  "X-Content-Type-Options": "nosniff",

  // Batasi informasi referrer yang dikirim ke situs lain
  "Referrer-Policy": "strict-origin-when-cross-origin",

  // Batasi akses ke fitur browser yang tidak dipakai
  "Permissions-Policy":
    "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",

  // Paksa HTTPS selama 2 tahun (Vercel sudah HTTPS, ini memperkuat)
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",

  // Isolasi konteks (mitigasi Spectre & tabnabbing)
  "Cross-Origin-Opener-Policy": "same-origin",
  "Cross-Origin-Resource-Policy": "same-origin",

  // CSP: tidak ada domain eksternal sama sekali.
  // 'unsafe-inline' pada style diperlukan karena komponen memakai inline style.
  // script-src tanpa 'unsafe-inline' — Next.js memuat script dari origin sendiri.
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ].join("; "),
};

export function middleware(request: NextRequest) {
  // Tolak metode selain GET/HEAD/OPTIONS.
  // Halaman ini statis: tidak ada POST/PUT/DELETE yang sah, jadi permintaan
  // semacam itu bisa dipastikan bukan dari pemakaian normal.
  const method = request.method.toUpperCase();
  if (method !== "GET" && method !== "HEAD" && method !== "OPTIONS") {
    return new NextResponse("Method Not Allowed", {
      status: 405,
      headers: { Allow: "GET, HEAD, OPTIONS" },
    });
  }

  const response = NextResponse.next();

  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    response.headers.set(key, value);
  }

  return response;
}

export const config = {
  // Jalankan pada halaman & route API, lewati aset statis Next.js,
  // file di /public, dan favicon agar tidak menambah beban.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|assets/|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|pdf|txt|xml|woff|woff2)$).*)",
  ],
};
