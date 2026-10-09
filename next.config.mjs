/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Jangan bocorkan "X-Powered-By: Next.js" ke publik.
  // Header itu membantu penyerang memetakan versi framework yang dipakai.
  poweredByHeader: false,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
