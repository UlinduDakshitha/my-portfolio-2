 "use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import { FiExternalLink, FiGithub, FiPlay, FiX } from "react-icons/fi";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "SMARTBIZ",
      subtitle: "Individual Project",
      role: "Fullstack Developer",
      image: "/images/SmartBiz.jpg",
      description:
        "A full-stack ERP system built as sole developer, managing inventory, customer records, and core business operations across 5+ integrated modules. Includes secure JWT authentication and 20+ RESTful API endpoints achieving full CRUD.",
      tech: ["React.js", "Java Spring Boot", "MySQL"],
      code: "https://github.com/stars/UlinduDakshitha/lists/smart-biz",
      video: "https://lnkd.in/p/gArsfDd3",
      videoLabel: "Watch SMARTBIZ Demo",
      references: [
        {
          label: "Watch SMARTBIZ demo",
          url: "https://lnkd.in/p/gArsfDd3",
        },
        {
          label: "Project repositories",
          url: "https://github.com/stars/UlinduDakshitha/lists/smart-biz",
        },
      ],
    },
    
    {
      title: "Smart Bursery",
      subtitle: "Group Project",
      role: "Backend Developer",
      image: "/images/suslcore.png",
      description:
        "A university-level financial management system for Sabaragamuwa University to manage fee systems and financial workflows with role-based access and regular code reviews.",
      tech: ["Next.js", "Node.js", "Express.js", "MySQL"],
      code: "https://github.com/orgs/SUSLCore/repositories",
      video: "https://lnkd.in/p/gf9jx-Y7",
      videoLabel: "Watch Smart Bursery Demo",
      references: [
        {
          label: "Watch Smart Bursery demo",
          url: "https://lnkd.in/p/gf9jx-Y7",
        },
        {
          label: "Organization repositories",
          url: "https://github.com/orgs/SUSLCore/repositories",
        },
      ],
    },
    
    {
      title: "CEYLONCONNECT",
      subtitle: "Group Project",
      role: "Frontend Lead",
      image: "/images/ceylonConnect.jpg",
      description:
        "A tourism platform connecting travelers with Sri Lankan destinations and services, built with a focus on performance and responsive interfaces.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Prisma"],
      code: "https://github.com/orgs/CeylonConnect/repositories",
      video: "https://lnkd.in/p/gbyJjUQn",
      videoLabel: "Watch CeylonConnect Demo",
      references: [
        {
          label: "Watch CeylonConnect demo",
          url: "https://lnkd.in/p/gbyJjUQn",
        },
        {
          label: "Organization repositories",
          url: "https://github.com/orgs/CeylonConnect/repositories",
        },
      ],
    },

    {
      title: "Modern Investment Plan (MIP)",
      subtitle: "Client Project",
      role: "Full-Stack Developer",
      image: "/images/264555153.png",
      description:
        "Modern Investment Plan (MIP) is a production-ready, cloud-deployed loan management system delivered to a Sri Lankan finance company. It digitizes customer management, loan approvals, field collections, documents, guarantors, reporting, and payment records across an admin portal and mobile collector app.",
      tech: [
        "Next.js",
        "React",
        "Flutter",
        "NestJS",
        "Prisma",
        "PostgreSQL",
        "JWT",
        "Render",
      ],
     code: "https://github.com/orgs/Modern-Investment-Plan/repositories",
      video: "https://lnkd.in/p/gxBCX_YE",
      videoLabel: "Watch Modern Investment Plan Demo",
      references: [
        {
          label: "Watch Modern Investment Plan demo",
          url: "https://lnkd.in/p/gxBCX_YE",
        },
         {
          label: "Organization repositories",
          url: "https://github.com/orgs/Modern-Investment-Plan/repositories",
        },
      ],
    },

    {
      title: "SmartOps",
      subtitle: "Full-Stack Project",
      role: "Full-Stack Developer",
      image: "/images/smart.png",
      description:
        "A centralized IT operations and incident management platform for managing incidents, SLA notifications, operational activity, and workflow automation. Deployed on Oracle Cloud Infrastructure with Docker, Nginx, and GitHub Actions CI/CD.",
      tech: [
        "Angular 21",
        "TypeScript",
        "ASP.NET Core",
        ".NET 10",
        "C#",
        "PostgreSQL",
        "Docker",
        "Nginx",
        "n8n",
        "OCI",
      ],
      code: "https://lnkd.in/gjUv2GmR",
      video: "http://130.210.72.75/login",
      videoLabel: "Open SmartOps Live Demo",
      references: [
        {
          label: "Live demo",
          url: "http://130.210.72.75/login",
        },
        {
          label: "Backend repository",
          url: "https://lnkd.in/giBK44eB",
        },
        {
          label: "Frontend repository",
          url: "https://lnkd.in/gjUv2GmR",
        },
      ],
    },
  ];

  useEffect(() => {
    if (!selectedProject) return;

    const scrollPosition = window.scrollY;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.overflow = "hidden";
    document.body.style.width = "100%";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPosition);
    };
  }, [selectedProject]);

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;

    try {
      const videoUrl = new URL(url);
      let videoId = "";

      if (videoUrl.hostname.includes("youtu.be")) {
        videoId = videoUrl.pathname.slice(1);
      } else if (videoUrl.hostname.includes("youtube.com")) {
        videoId = videoUrl.searchParams.get("v") || videoUrl.pathname.split("/").pop();
      }

      return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : null;
    } catch {
      return null;
    }
  };

  const isDirectVideoUrl = (url) =>
    /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);

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
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={
                        project.title === "MIP" ||
                        project.title.includes("Investment Plan")
                          ? "object-contain bg-black p-2"
                          : "object-cover"
                      }
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.22),_transparent_38%),linear-gradient(135deg,_#10182b,_#111827_55%,_#07111d)]">
                      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                        <span className="mb-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                          Production System
                        </span>
                        <h4 className="text-4xl font-black tracking-tight text-white">
                          MIP
                        </h4>
                        <p className="mt-2 text-sm text-slate-300">
                          Loan Management Platform
                        </p>
                      </div>
                    </div>
                  )}
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
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm text-black bg-white hover:bg-gray-200"
                    >
                      <FiPlay /> View
                    </button>
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-white/8 rounded-2xl text-sm text-gray-200 hover:border-white/20"
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

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-3 py-4 sm:px-6 sm:py-8 bg-black/90 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-view-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null);
          }}
        >
          <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-[0_24px_90px_rgba(0,0,0,0.75)]">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/80 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-black"
              aria-label="Close project view"
            >
              <FiX size={21} />
            </button>

            {selectedProject.video ? (
              getYouTubeEmbedUrl(selectedProject.video) ? (
                <iframe
                  className="aspect-video w-full rounded-t-3xl"
                  src={getYouTubeEmbedUrl(selectedProject.video)}
                  title={`${selectedProject.title} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : isDirectVideoUrl(selectedProject.video) ? (
                <video
                  className="aspect-video w-full rounded-t-3xl bg-black object-contain"
                  src={selectedProject.video}
                  controls
                  playsInline
                />
              ) : (
                <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-black">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a
                      href={selectedProject.video}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-0.5 hover:bg-gray-100 sm:px-8 sm:text-base"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                        <FiPlay size={16} />
                      </span>
                      {selectedProject.videoLabel || "Watch Project Video"}
                    </a>
                  </div>
                </div>
              )
            ) : (
              selectedProject.image ? (
                <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className={
                      selectedProject.title === "MIP" ||
                      selectedProject.title.includes("Investment Plan")
                        ? "object-contain bg-black p-3"
                        : "object-cover"
                    }
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                </div>
              ) : (
                <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.24),_transparent_38%),linear-gradient(135deg,_#10182b,_#111827_55%,_#07111d)]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                    <span className="mb-4 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                      Production Client System
                    </span>
                    <h4 className="text-5xl font-black tracking-tight text-white sm:text-6xl">
                      MIP
                    </h4>
                    <p className="mt-3 text-sm text-slate-300 sm:text-base">
                      Modern Investment Plan
                    </p>
                  </div>
                </div>
              )
            )}

            <div className="p-6 md:p-8">
              <h3
                id="project-view-title"
                className="pr-12 text-2xl md:text-3xl font-bold"
              >
                {selectedProject.title}
              </h3>
              <p className="mt-3 text-gray-300 leading-relaxed">
                {selectedProject.description}
              </p>

              {selectedProject.references?.length > 0 && (
                <div className="mt-6">
                  <h4 className="mb-3 text-xs uppercase tracking-wide text-gray-400">
                    References
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.references.map((reference) => (
                      <a
                        key={`${reference.label}-${reference.url}`}
                        href={reference.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 text-sm text-gray-200 hover:border-white/25"
                      >
                        <FiExternalLink /> {reference.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
