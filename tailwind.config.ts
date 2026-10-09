import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palet portofolio: kanvas gelap, teks terang
        // Dark obsidian canvas. Token roles are mirrored from globals.css :root.
        spatial: {
          primary: "#FFFFFF",
          secondary: "#000000",
          canvas: "#050505",
          surface: "rgba(18, 18, 18, 0.8)",
          surfaceSubtle: "rgba(255, 255, 255, 0.03)",
          surfaceElevated: "rgba(255, 255, 255, 0.06)",
          textPrimary: "#FAFAFA",
          textSecondary: "#A3A3A3",
          border: "rgba(255, 255, 255, 0.1)",
          borderHover: "rgba(255, 255, 255, 0.25)",
          emerald: "#34D399",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-sans)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        badge: "6px",
        input: "8px",
        card: "8px",     // radius kartu: 8px
        modal: "8px",
        control: "8px",   // radius kontrol: 8px
        pill: "9999px",   // radius pill: 9999px
        circle: "9999px",
      },
      boxShadow: {
        glass: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        glassHover: "0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
        glassModal: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        spatialCard: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        spatialHover: "0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
        violetGlow: "none",
        halo: "none",
      },
      minHeight: {
        tap: "44px",
      },
      minWidth: {
        tap: "44px",
      },
    },
  },
  plugins: [],
};

export default config;
