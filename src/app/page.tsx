import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SecurityInspector from "@/components/SecurityInspector";
import SpatialStarburstCanvas from "@/components/SpatialStarburstCanvas";

export default function Home() {
  return (
    <>
      {/* Three.js Radiating Starburst Canvas */}
      <SpatialStarburstCanvas />

      {/* Peredam: lapisan gelap tipis di atas efek agar teks selalu terbaca.
          Tanpa ini, garis putih terang masih bisa menabrak teks di section bawah. */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(5,5,5,0.18) 0%, rgba(5,5,5,0.42) 60%, rgba(5,5,5,0.58) 100%)",
        }}
      />

      {/* Architectural Container Lines & Corner Squares */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center w-full">
        <div className="relative w-full max-w-7xl border-x border-white/[0.04] h-full hidden md:block">
          <div className="absolute -left-[3px] top-12 w-1.5 h-1.5 border border-white/20 bg-[#050505]" />
          <div className="absolute -left-[3px] bottom-12 w-1.5 h-1.5 border border-white/20 bg-[#050505]" />
          <div className="absolute -right-[3px] top-12 w-1.5 h-1.5 border border-white/20 bg-[#050505]" />
          <div className="absolute -right-[3px] bottom-12 w-1.5 h-1.5 border border-white/20 bg-[#050505]" />
        </div>
      </div>

      <Navbar />

      <main id="main-content" className="flex-1 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>

      <Footer />
      <SecurityInspector />
    </>
  );
}
