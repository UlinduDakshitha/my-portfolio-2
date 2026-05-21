import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      title: "SMARTBIZ",
      subtitle: "Individual Project",
      period: "Jan–Mar 2026",
      role: "Fullstack Developer",
      image: "/images/project1.jpg",
      description:
        "A full-stack ERP system built as sole developer, managing inventory, customer records, and core business operations across 5+ integrated modules. Includes secure JWT authentication and 20+ RESTful API endpoints achieving full CRUD.",
      tech: ["React.js", "Java Spring Boot", "MySQL"],
      demo: "#",
      code: "#",
    },
    {
      title: "INKMATCH",
      subtitle: "Individual (Ongoing)",
      period: "Feb 2026–Present",
      role: "Fullstack Developer",
      image: "/images/project2.jpg",
      description:
        "A marketplace platform for users to discover tattoo artists and studios, browse portfolios, and book appointments. Features 4-tier role-based access control and scalable APIs for bookings and portfolios.",
      tech: ["Next.js", "Java Spring Boot", "MySQL"],
      demo: "#",
      code: "#",
    },
    {
      title: "SULSCORE",
      subtitle: "Group (Ongoing)",
      period: "Jan 2026–Present",
      role: "Backend Developer",
      image: "/images/project3.jpg",
      description:
        "A university-level financial management system for Sabaragamuwa University to manage fee systems and financial workflows with role-based access and regular code reviews.",
      tech: ["Next.js", "Node.js", "Express.js", "MySQL"],
      demo: "#",
      code: "#",
    },
    {
      title: "PURE NATION",
      subtitle: "Group Project",
      period: "Jun–Dec 2025",
      role: "Fullstack Developer",
      image: "/images/project4.jpg",
      description:
        "A community platform for Sri Lankans to report environmental issues and coordinate clean-up activities, with RESTful APIs and responsive UI.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Sequelize"],
      demo: "#",
      code: "#",
    },
    {
      title: "CEYLONCONNECT",
      subtitle: "Group Project",
      period: "Mar–Aug 2025",
      role: "Frontend Lead",
      image: "/images/project5.jpg",
      description:
        "A tourism platform connecting travelers with Sri Lankan destinations and services, built with a focus on performance and responsive interfaces.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Prisma"],
      demo: "#",
      code: "#",
    },
  ];

  const allTech = Array.from(new Set(projects.flatMap((p) => p.tech)));

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24 scroll-mt-28 bg-[#050505] text-white"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Projects"
          title="Featured Work"
          description="Selected projects showing design, engineering, and product polish."
        />

        {/* Tech summary removed */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <article className="group overflow-hidden rounded-3xl border border-white/8 bg-[#0b0b0b] backdrop-blur p-0 transition-all duration-300 hover:shadow-2xl">
                <div className="relative h-56 md:h-64 w-full overflow-hidden rounded-t-3xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        {project.title}
                        {project.subtitle && (
                          <span className="text-gray-300 font-normal text-base">
                            {" "}
                            — {project.subtitle}
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        {project.role}
                      </p>
                    </div>
                    {project.period && (
                      <div className="text-sm text-gray-400">
                        {project.period}
                      </div>
                    )}
                  </div>

                  <p className="text-gray-300 text-sm mt-4 leading-relaxed min-h-17">
                    {project.description}
                  </p>

                  <div className="mt-4">
                    <div className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                      Technologies
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/8 text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-5">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-cyan-400 to-blue-600 text-black rounded-2xl text-sm font-semibold"
                      >
                        <FiExternalLink /> Demo
                      </a>
                    )}
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-white/8 rounded-2xl text-sm text-gray-200"
                      >
                        <FiGithub /> Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
