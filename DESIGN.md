---
version: "neuform-top-creators-featured"
name: "Portofolio Iqbal Khoir"
description: "Portofolio pribadi Iqbal Khoir. Tata letak gelap dengan hierarki informasi rapi, grid 12 kolom, dan tipografi mono untuk label teknis."
colors:
  primary: "#FFFFFF"
  secondary: "#000000"
  accent: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#FFFFFF"
  surface-subtle: "#F9FAFB"
  surface-elevated: "#F3F4F6"
  text-primary: "#111827"
  text-secondary: "#4B5563"
  text-muted: "#6B7280"
  border: "#E5E7EB"
  border-hover: "#D1D5DB"
typography:
  display-xl:
    fontFamily: "Inter"
    fontSize: "96px"
    fontWeight: 500
    lineHeight: "1.04"
    letterSpacing: "-0.02em"
  display-lg:
    fontFamily: "Inter"
    fontSize: "64px"
    fontWeight: 500
    lineHeight: "1.04"
    letterSpacing: "0"
  display-md:
    fontFamily: "Inter"
    fontSize: "48px"
    fontWeight: 500
    lineHeight: "1.1"
  heading:
    fontFamily: "Inter"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: "1.2"
  body-md:
    fontFamily: "Playfair Display"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.6"
  body-sm:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "1.5"
  label-md:
    fontFamily: "JetBrains Mono"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "1.2"
  label-sm:
    fontFamily: "JetBrains Mono"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: "1.2"
  label-xs:
    fontFamily: "JetBrains Mono"
    fontSize: "10px"
    fontWeight: 600
    lineHeight: "1.2"
spacing:
  base: "8px"
  gap: "16px"
  card-padding: "24px"
  section-padding: "80px"
rounded:
  card: "8px"
  control: "8px"
  badge: "8px"
  pill: "9999px"
components:
  card:
    background: "Use the surface token with subtle borders and HTML-matched shadow depth"
    radius: "Match the declared card radius token"
  button:
    background: "Use primary or accent colors for the main action"
    radius: "Use the control or pill radius based on the source HTML"
---
# Portofolio Iqbal Khoir
Token desain untuk portofolio pribadi Iqbal Khoir. Referensi visual awal berasal dari templat Neuform Featured (penulis: Meng To).
## Overview
Tata letak bergaya dashboard gelap: grid 12 kolom, kartu bertingkat dengan radius 8px, dan label teknis berjenis mono. Kontennya ringkas namun tetap terbaca, dengan penekanan pada hierarki angka dan metadata.
## Composition
Use the attached HTML reference as the source of truth. Preserve the visible hierarchy, first-screen composition, section rhythm, density, and interaction tone before adapting copy or content.
Judul utama halaman: nama pemilik portofolio dan judul tiap bagian.
## Colors
Anchor the palette in primary #FFFFFF, secondary #000000, accent #FFFFFF, background #FFFFFF, surface #FFFFFF, text-primary #111827. Keep background, surface, text, and border roles distinct so generated layouts retain the same contrast pattern as the source.
## Typography
Use Inter for display moments and Playfair Display for body copy unless the HTML clearly demands a compatible fallback. Labels and technical metadata should use JetBrains Mono or an equivalent mono face.
## Layout
Keep spacing deliberate and stable. Favor the same grid direction, max-width behavior, card density, and responsive stacking seen in the HTML. Do not replace distinctive source structures with generic SaaS sections.
## Components
Dashboard, chart, and data panels should preserve their compact operational hierarchy, nested surfaces, and metric emphasis.
## Motion
Preserve existing motion cues such as masked reveals, staggered entrance, hover lift, scroll-triggered transitions, and ambient movement. Keep easing smooth and restrained.
## WebGL & Effects

If the source includes canvas, WebGL, Three.js, gradients, particles, or atmospheric effects, rebuild them as supporting layers behind the content. Keep effects performant, responsive, and secondary to the interface.

## Guardrails
- Do not flatten the source into a generic card grid.
- Do not swap the color mode unless the source clearly supports it.
- Preserve the first viewport signal, focal object, and visual density.
- Keep buttons, cards, and badges aligned to the same radius and border language.
