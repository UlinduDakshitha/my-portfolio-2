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
} from "react-icons/si";

const categories = [
  {
    title: "Languages",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
      { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
      { name: "Java", icon: <FaJava />, color: "text-orange-400" },
    ],
  },

  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact />, color: "text-cyan-400" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
      { name: "React Native", icon: <SiReact />, color: "text-cyan-400" },
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
    ],
  },

  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-400" },
      { name: "Hibernate", icon: <SiHibernate />, color: "text-yellow-300" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-300" },
    ],
  },

  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
      { name: "GitHub", icon: <FaGithub />, color: "text-white" },
      { name: "Docker", icon: <FaDocker />, color: "text-blue-400" },
      { name: "AWS", icon: <FaAws />, color: "text-yellow-400" },
      { name: "Kubernetes", icon: <SiKubernetes />, color: "text-blue-500" },
      { name: "Linux", icon: <FaLinux />, color: "text-yellow-200" },
      { name: "Ubuntu", icon: <SiUbuntu />, color: "text-orange-400" },
      { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },
      {
        name: "Android Studio",
        icon: <SiAndroidstudio />,
        color: "text-green-400",
      },
      {
        name: "IntelliJ IDEA",
        icon: <SiIntellijidea />,
        color: "text-pink-400",
      },
      { name: "Figma", icon: <FaFigma />, color: "text-pink-400" },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "Python", icon: <FaPython />, color: "text-yellow-300" },
      { name: "TensorFlow", icon: <SiTensorflow />, color: "text-indigo-400" },
      { name: "PyTorch", icon: <SiPytorch />, color: "text-red-400" },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState("All");

  const pills = [
    "All",
    "Languages",
    "Frontend",
    "Backend",
    "Database",
    "AI / ML",
    "DevOps & Tools",
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
                key={p}
                onClick={() => setActive(p)}
                className={`px-4 py-1.5 rounded-full border text-sm font-medium transition ${
                  active === p
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-transparent"
                    : "bg-transparent text-gray-200 border border-white/10"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          {visibleCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Heading */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-semibold">{category.title}</h3>

                <p className="text-sm text-gray-500">
                  Showing {category.skills.length} technologies
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, index) => (
                  <Reveal key={index} delay={index * 0.04}>
                    <div
                      className="
                      group
                      relative
                      overflow-hidden
                      rounded-[28px]
                      border border-white/10
                      bg-white/[0.03]
                      backdrop-blur-xl
                      p-8
                      flex flex-col items-center justify-center
                      transition duration-300
                      hover:-translate-y-2
                      hover:border-cyan-400/30
                      hover:bg-white/[0.05]
                      "
                    >
                      {/* glow */}
                      <div
                        className="
                        absolute inset-0
                        opacity-0 group-hover:opacity-100
                        transition duration-500
                        bg-gradient-to-br
                        from-cyan-500/10
                        via-transparent
                        to-transparent
                        "
                      />

                      {/* icon */}
                      <div
                        className={`
                        relative z-10
                        text-5xl
                        mb-5
                        ${skill.color}
                        transition duration-300
                        group-hover:scale-110
                        `}
                      >
                        {skill.icon}
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
