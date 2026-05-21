"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";

export default function Skills() {
  const filters = [
    { key: "All", label: "All", color: "bg-gray-500/40" },
    { key: "Languages", label: "Languages", color: "bg-amber-400" },
    { key: "Frontend", label: "Frontend", color: "bg-sky-400" },
    { key: "Backend", label: "Backend", color: "bg-lime-400" },
    { key: "Database", label: "Database", color: "bg-cyan-400" },
    { key: "AI", label: "AI / ML", color: "bg-violet-400" },
    { key: "DevOps", label: "DevOps & Tools", color: "bg-pink-400" },
  ];

  const [active, setActive] = useState("All");

  const skills = [
    {
      key: "Languages",
      title: "Languages & Frameworks",
      tech: [
        "Java",
        "JavaScript",
        "TypeScript",
        "Spring Boot",
        "React.js",
        "Next.js",
      ],
    },
    {
      key: "Frontend",
      title: "Frontend & Mobile",
      tech: ["React Native", "React", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      key: "Backend",
      title: "Backend",
      tech: ["Node.js", "Express.js", "REST APIs", "JWT"],
    },
    {
      key: "Database",
      title: "Databases",
      tech: ["MySQL", "MongoDB", "PostgreSQL", "Sequelize ORM"],
    },
    {
      key: "AI",
      title: "AI / ML",
      tech: ["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch"],
    },
    {
      key: "DevOps",
      title: "DevOps & Tools",
      tech: ["Git", "GitHub", "AWS", "Docker", "CI/CD", "Postman"],
    },
  ];

  const visible =
    active === "All" ? skills : skills.filter((s) => s.key === active);

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-24 scroll-mt-28 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-cyan-400 tracking-widest">
              TECH STACK
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-3">
            Tools I Work <span className="text-slate-300">With</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full text-sm transition ${
                  active === f.key
                    ? "ring-1 ring-cyan-400 scale-100"
                    : "hover:scale-[1.02]"
                }`}
              >
                <span
                  className={`${f.color} w-2 h-2 rounded-full inline-block`}
                />
                <span>{f.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Compact Technical Skills (chip grid) */}
        <div className="mt-10 max-w-4xl mx-auto text-gray-300">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm text-cyan-400 uppercase tracking-wider mb-3">
                Languages & Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Java",
                  "JavaScript",
                  "TypeScript",
                  "Spring Boot",
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "Express.js",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-sm rounded-full bg-white/3 border border-white/8"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h4 className="text-sm text-cyan-400 uppercase tracking-wider mt-6 mb-3">
                Mobile & Frontend Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {["React Native", "HTML", "CSS", "Tailwind CSS"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-sm rounded-full bg-white/3 border border-white/8"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm text-cyan-400 uppercase tracking-wider mb-3">
                Databases
              </h4>
              <div className="flex flex-wrap gap-2">
                {["MySQL", "MongoDB", "PostgreSQL", "Sequelize ORM"].map(
                  (t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-sm rounded-full bg-white/3 border border-white/8"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>

              <h4 className="text-sm text-cyan-400 uppercase tracking-wider mt-6 mb-3">
                Tools & Platforms
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Git",
                  "GitHub",
                  "REST APIs",
                  "JWT Authentication",
                  "AWS",
                  "Postman",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-sm rounded-full bg-white/3 border border-white/8"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((skill, index) => (
            <Reveal key={index} delay={index * 0.06}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/3 backdrop-blur p-6 transition duration-400 hover:shadow-xl hover:translate-y-1">
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">
                    {skill.title}
                  </h3>

                  <ul className="text-sm text-gray-300 space-y-2">
                    {skill.tech.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-cyan-500/6 blur-3xl pointer-events-none" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
