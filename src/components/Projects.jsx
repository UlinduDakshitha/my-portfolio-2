import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";

export default function Projects() {
  const projects = [
    {
      title: "Pure Nation",
      description:
        "A clean Sri Lanka web platform focused on environmental awareness and community action.",
      tech: ["Next.js", "Tailwind", "Node.js"],
      image: "/images/project1.jpg",
    },
    {
      title: "InkMatch",
      description:
        "A tattoo discovery and artist matching platform with modern UI and smooth user flow.",
      tech: ["React", "MongoDB", "Express"],
      image: "/images/project2.jpg",
    },
    {
      title: "Personal Portfolio",
      description:
        "My own portfolio website built with a premium aesthetic and scroll-based experience.",
      tech: ["Next.js", "Framer Motion", "Tailwind"],
      image: "/images/project3.jpg",
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
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                </div>

                <div className="p-6 flex flex-col h-65">
                  <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
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
