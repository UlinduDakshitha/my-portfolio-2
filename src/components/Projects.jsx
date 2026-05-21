import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";

export default function Projects() {
  const projects = [
    {
      title: "SMARTBIZ",
      period: "Jan–Mar 2026",
      role: "Fullstack Developer",
      description:
        "A full-stack ERP system built as sole developer — inventory, customer records, and core business operations across 3+ integrated modules. Includes secure JWT authentication and 20+ RESTful API endpoints enabling full CRUD.",
      tech: ["React.js", "Java Spring Boot", "MySQL"],
    },
    {
      title: "INKMATCH",
      period: "Feb 2026–Present",
      role: "Fullstack Developer",
      description:
        "A marketplace platform for tattoo artists and studios: discovery, portfolios, bookings, and a role-based admin area. Built with scalable APIs and a polished booking flow.",
      tech: ["Next.js", "React", "Postgres"],
    },
    {
      title: "SUSLICORE",
      period: "Jan 2026–Present",
      role: "Backend Developer",
      description:
        "A university-level financial aid management system for Sabaragamuwa University. Implemented core ledger workflows, student accounts, and automated reports used by administrative staff.",
      tech: ["Next.js", "Node.js", "Express.js", "MySQL"],
    },
    {
      title: "PURE NATION",
      period: "Jun–Dec 2025",
      role: "Fullstack Developer",
      description:
        "A community platform for environmental awareness and cleanup coordination. Features issue reporting, user onboarding, and mapping for events and reports.",
      tech: ["React.js", "Node.js", "MongoDB"],
    },
    {
      title: "CEYLONCONNECT",
      period: "Mar–Aug 2025",
      role: "Frontend Lead",
      description:
        "A tourism platform connecting travellers with local Sri Lankan destinations and experiences. Built responsive UI and implemented search + booking flows.",
      tech: ["React.js", "Prisma ORM", "Postgres"],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24 scroll-mt-28 bg-[#050505] text-white"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Projects"
          title="Featured Work"
          description="A few selected projects that show design sense, clean code, and practical problem solving."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="h-full group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40">
                <div className="relative h-56 overflow-hidden bg-linear-to-b from-black/60 to-black/20">
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                </div>

                <div className="p-6 flex flex-col h-65">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400">{project.role}</p>
                    </div>
                    {project.period && (
                      <div className="text-sm text-gray-500">
                        {project.period}
                      </div>
                    )}
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 mt-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
