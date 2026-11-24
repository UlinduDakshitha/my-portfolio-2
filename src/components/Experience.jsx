"use client";

import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Software Engineering Intern",
      company: "Pentarix Labs",
      period: "20 Aug 2026 - 20 Nov 2026",
      location: "Sri Lanka",
      description:
        "Gained hands-on experience developing and maintaining production-oriented systems, including a POS system, a distributed management system, and a Flutter-based REP portal mobile application.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-24 scroll-mt-28 bg-[#050505] text-white"
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          eyebrow="Experience"
          title="Professional Journey"
          description="Internship and professional experience in software engineering."
        />

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/70 via-white/10 to-transparent md:left-1/2" />

          {experiences.map((experience, index) => (
            <Reveal key={`${experience.role}-${experience.period}`} delay={index * 0.08}>
              <div className="relative mb-8 pl-14 md:grid md:grid-cols-2 md:gap-12 md:pl-0">
                <div className="absolute left-0 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 md:left-1/2 md:-translate-x-1/2">
                  <BriefcaseBusiness size={18} />
                </div>

                <div className="md:col-start-1 md:row-start-1 md:text-right">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                    <CalendarDays size={13} />
                    {experience.period}
                  </span>
                </div>

                <article className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:col-start-2 md:mt-0">
                  <h3 className="text-xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-cyan-300">
                    <span>{experience.company}</span>
                    {experience.location && (
                      <span className="inline-flex items-center gap-1 text-gray-400">
                        <MapPin size={13} />
                        {experience.location}
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-gray-400">
                    {experience.description}
                  </p>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
