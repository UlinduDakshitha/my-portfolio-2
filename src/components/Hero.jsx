import Image from "next/image";
import Reveal from "@/components/Reveal";
import { Mail, ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

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
          <div className="max-w-lg">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-tight mb-4">
              <span className="block text-white">Hi, I'm</span>
              <span className="block text-cyan-400">Ulindu</span>
            </h1>

            <p className="text-gray-400 uppercase tracking-widest mb-4 text-sm">
              Software Engineer
            </p>

            <p className="text-gray-400 text-base leading-relaxed max-w-md mb-8">
              Turning complex problems into elegant, scalable solutions using
              Next.js & Spring Boot. I am deeply passionate about pushing the
              boundaries of web development by integrating AI/ML and automating
              workflows through DevOps.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-4 h-12 px-6 rounded-full bg-white text-black font-medium shadow-md"
              >
                <span className="h-9 w-9 rounded-full bg-white border border-black/10 flex items-center justify-center">
                  <Mail size={16} />
                </span>
                <span className="flex flex-col text-sm leading-tight">
                  <span className="block">Get in</span>
                  <span className="block">Touch</span>
                </span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-4 h-12 px-5 rounded-full bg-black/40 border border-white/10 text-white"
              >
                <span className="text-sm">View Projects</span>
                <span className="h-8 w-8 rounded-full bg-black/20 border border-white/10 flex items-center justify-center">
                  <ArrowRight size={14} />
                </span>
              </a>

              <a
                href="/cv/Ulindu_Dakshitha_Software%20Engineer_.pdf"
                download
                className="inline-flex items-center gap-3 h-12 px-7 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold shadow-2xl"
              >
                <span className="h-9 w-9 rounded-full bg-black/5 flex items-center justify-center border border-black/10">
                  <Download size={14} />
                </span>
                <span className="text-sm">Download CV</span>
              </a>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <p className="text-sm tracking-wider text-gray-400">FIND ME ON</p>
              <div className="h-px bg-white/5 flex-1" />

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/UlinduDakshitha"
                  target="_blank"
                  rel="noreferrer"
                  className="h-11 w-11 rounded-full border border-white/10 flex items-center justify-center bg-transparent hover:scale-105 transition"
                >
                  <FaGithub size={18} className="text-white/90" />
                </a>

                <a
                  href="https://www.linkedin.com/in/ulindu-dakshitha-bandara-6aa081303/"
                  target="_blank"
                  rel="noreferrer"
                  className="h-11 w-11 rounded-full border border-white/10 flex items-center justify-center bg-transparent hover:scale-105 transition"
                >
                  <FaLinkedin size={18} className="text-white/90" />
                </a>

                <a
                  href="https://x.com/DakshithaU91762"
                  target="_blank"
                  rel="noreferrer"
                  className="h-11 w-11 rounded-full border border-white/10 flex items-center justify-center bg-transparent hover:scale-105 transition"
                >
                  <FaXTwitter size={18} className="text-white/90" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* RIGHT SIDE */}
        <Reveal delay={0.15}>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[520px] sm:max-w-[520px] md:max-w-[520px] aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl">
              <Image
                src="/images/profile.jpg"
                alt="profile"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 via-transparent to-transparent mix-blend-overlay" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
