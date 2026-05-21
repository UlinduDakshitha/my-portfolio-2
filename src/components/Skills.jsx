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
                className={`inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-medium border border-white/10 bg-black/60 text-gray-200 transition transform focus:outline-none focus:ring-2 focus:ring-cyan-400/20 ${
                  active === f.key
                    ? "ring-1 ring-cyan-400 scale-100 border-cyan-400 bg-white/5"
                    : "hover:scale-105 hover:border-white/20"
                }`}
              >
                <span
                  className={`${f.color} w-2 h-2 rounded-full inline-block shrink-0`}
                />
                <span className="select-none">{f.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Compact Technical Skills removed per request */}

        {/* Tech Tiles (visual tiles for visible technologies) */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-400">
              Showing{" "}
              <span className="font-medium text-white">
                {Array.from(new Set(visible.flatMap((s) => s.tech))).length}
              </span>{" "}
              technologies in{" "}
              <span className="font-medium text-white">{active}</span>
            </p>
          </div>

          <div className="flex gap-4 overflow-x-auto py-2">
            {Array.from(new Set(visible.flatMap((s) => s.tech))).map((tech) => {
              const badge = tech.replace(/\s+/g, "").slice(0, 2).toUpperCase();
              return (
                <div
                  key={tech}
                  title={tech}
                  className="shrink-0 w-44 h-28 rounded-2xl bg-white/3 border border-white/8 p-4 flex flex-col items-center justify-center gap-2 hover:scale-105 transition"
                >
                  <div className="w-12 h-12 rounded-lg bg-linear-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center text-lg font-bold">
                    {badge}
                  </div>
                  <div className="text-sm text-gray-200">{tech}</div>
                </div>
              );
            })}
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
