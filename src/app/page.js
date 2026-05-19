import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      <CursorGlow />

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
