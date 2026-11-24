"use client";

import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { useState } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
  FaLinux,
  FaFigma,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiFlask,
  SiSpring,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiJenkins,
  SiKubernetes,
  SiUbuntu,
  SiRedux,
  SiAndroidstudio,
  SiIntellijidea,
  SiHibernate,
  SiReact,
  SiTensorflow,
  SiPytorch,
  SiAngular,
  SiFlutter,
} from "react-icons/si";

const categories = [
  {
    title: "Languages",
    skills: [
     
      { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
      { name: "Java", icon: <FaJava />, color: "text-orange-400" },
      {
        name: "C#",
        icon: (
          <span className="font-black text-lg md:text-xl tracking-tight">
            C#
          </span>
        ),
        color: "text-violet-400",
      },
         { name: "Python", icon: <FaPython />, color: "text-yellow-300" },
    ],
  },

  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact />, color: "text-cyan-400" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
      { name: "Angular", icon: <SiAngular />, color: "text-red-500" },
      { name: "Redux", icon: <SiRedux />, color: "text-violet-400" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-300" },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-lime-400" },
      { name: "Express", icon: <SiExpress />, color: "text-gray-200" },
      { name: "Spring", icon: <SiSpring />, color: "text-lime-400" },
      {
        name: "ASP.NET Core",
        icon: (
          <span className="font-black text-lg md:text-xl tracking-tight">
            .NET
          </span>
        ),
        color: "text-purple-400",
      },
      {
        name: "NestJS",
        icon: (
          <span className="font-black text-lg md:text-xl tracking-tight">
            Nest
          </span>
        ),
        color: "text-red-500",
      },
    ],
  },

  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-400" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-300" },
    ],
  },

  {
    title: "Mobile",
    skills: [
      { name: "Flutter", icon: <SiFlutter />, color: "text-cyan-400" },
      { name: "React Native", icon: <SiReact />, color: "text-cyan-300" },
    ],
  },

  {
    title: "DevOps",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
      { name: "GitHub", icon: <FaGithub />, color: "text-white" },
      { name: "Docker", icon: <FaDocker />, color: "text-blue-400" },
      { name: "AWS", icon: <FaAws />, color: "text-yellow-400" },
      { name: "Kubernetes", icon: <SiKubernetes />, color: "text-blue-500" },
      {
        name: "Oracle Cloud",
        icon: (
          <span className="font-black text-xl md:text-2xl leading-none">
            OCI
          </span>
        ),
        color: "text-red-500",
      },
      { name: "Linux", icon: <FaLinux />, color: "text-yellow-200" },
      { name: "Ubuntu", icon: <SiUbuntu />, color: "text-orange-400" },
     
       
     
      
    ],
  },
  {
    title: "AI / ML",
    skills: [
      {
        name: "NumPy",
        icon: (
          <span className="font-black text-base md:text-lg tracking-tight">
            NumPy
          </span>
        ),
        color: "text-blue-400",
      },
      {
        name: "Pandas",
        icon: (
          <span className="font-black text-base md:text-lg tracking-tight">
            pandas
          </span>
        ),
        color: "text-violet-400",
      },
    
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState("All");

  const pills = [
    { label: "All", value: "All" },
    { label: "Languages", value: "Languages" },
    { label: "Frontend", value: "Frontend" },
    { label: "Backend", value: "Backend" },
    { label: "Database", value: "Database" },
    { label: "Mobile", value: "Mobile" },
    { label: "AI / ML", value: "AI / ML" },
    { label: "DevOps", value: "DevOps" },
  ];

  const visibleCategories =
    active === "All"
      ? categories
      : categories.filter((c) => c.title === active);

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-24 bg-black text-white scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Skills"
          title="Technologies & Tools"
          description="Software Engineering • DevOps • AI/ML"
        />

        <div className="space-y-16">
          {/* Filter Pills */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            {pills.map((p) => (
              <button
                key={p.value}
                onClick={() => setActive(p.value)}
                className={`px-4 py-1.5 rounded-full border text-sm font-medium transition ${
                  active === p.value
                    ? "bg-linear-to-r from-purple-600 to-indigo-600 text-white border-transparent"
                    : "bg-transparent text-gray-200 border border-white/10"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {visibleCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Heading */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, index) => (
                  <Reveal key={index} delay={index * 0.04}>
                    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col items-center justify-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/5">
                      {/* glow */}
                      <div className="absolute inset-0 opacity-0 transition duration-500 bg-linear-to-br from-cyan-500/10 via-transparent to-transparent group-hover:opacity-100" />

                      {/* icon */}
                      <div className="relative z-10 mb-4">
                        <div
                          className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center ${skill.color} bg-white/5 shadow-sm transition-transform duration-300 group-hover:scale-105`}
                        >
                          <span className="text-2xl md:text-3xl">
                            {skill.icon}
                          </span>
                        </div>
                      </div>

                      {/* text */}
                      <p className="relative z-10 text-gray-300 text-sm text-center">
                        {skill.name}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
