import Image from "next/image";
import Reveal from "@/components/Reveal";
import { Mail, ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 pt-32 pb-20 scroll-mt-28 bg-transparent text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_40%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.06),transparent_35%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <Reveal>
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
              Hi, I’m <span className="text-cyan-400">Ulindu</span>
            </h1>
            <p className="text-gray-400 mb-4 tracking-widest">
              SOFTWARE ENGINEER
            </p>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-8">
              Turning complex problems into elegant, scalable solutions using
              Next.js& Spring Boot. I am deeply passionate about pushing the
              boundaries of web development by integrating AI/ML and automating
              workflows through DevOps.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 h-12 px-6 rounded-full bg-white text-black font-semibold shadow-[0_12px_40px_rgba(2,6,23,0.6)] hover:shadow-[0_18px_50px_rgba(14,165,233,0.12)] transform hover:-translate-y-0.5 transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/30"
              >
                <span className="p-2 rounded-full bg-black/5 flex items-center justify-center">
                  <Mail size={16} />
                </span>
                Get in Touch
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 h-12 px-6 rounded-full border border-white/12 bg-white/5 text-white backdrop-blur-sm hover:backdrop-blur-md hover:bg-white/6 transform hover:-translate-y-0.5 transition duration-200"
              >
                <span className="text-sm">View Projects</span>
                <span className="p-2 rounded-full bg-white/10 flex items-center justify-center">
                  <ArrowRight size={14} />
                </span>
              </a>

              <a
                href="/cv/Ulindu_Dakshitha_Software%20Engineer_.pdf"
                download
                className="inline-flex items-center gap-3 h-12 px-6 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 text-black font-medium shadow-sm hover:brightness-95 transform hover:-translate-y-0.5 transition duration-200"
              >
                <span className="p-2 rounded-full bg-black/10 flex items-center justify-center">
                  <Download size={14} />
                </span>
                Download CV
              </a>
            </div>
          </div>
        </Reveal>

        {/* RIGHT SIDE */}
        <Reveal delay={0.15}>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-95 md:max-w-105 aspect-3/4 rounded-[40px] overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                alt="profile"
                fill
                className="object-cover"
              />

              {/* Glow */}
              <div
                className="absolute inset-0
                bg-linear-to-t
                from-cyan-500/20 to-transparent"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
