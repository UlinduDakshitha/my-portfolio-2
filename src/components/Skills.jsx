import Reveal from "@/components/Reveal";

export default function Skills() {
  const skills = [
    {
      title: "Frontend",
      tech: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Backend",
      tech: ["Node.js", "Express.js", "REST API", "JWT"],
    },
    {
      title: "Database",
      tech: ["MongoDB", "MySQL", "Firebase", "Mongoose"],
    },
    {
      title: "Tools",
      tech: ["Git", "GitHub", "Figma", "VS Code"],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-24 scroll-mt-28 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <p className="text-cyan-400 tracking-[0.3em] uppercase text-sm mb-4">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies I Work With
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <div className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition duration-500 hover:border-cyan-400/40 hover:-translate-y-2">
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-cyan-500/10 via-transparent to-transparent" />

                {/* Card Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-6">{skill.title}</h3>

                  <div className="flex flex-wrap gap-3">
                    {skill.tech.map((item, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-cyan-400 hover:text-black transition duration-300 cursor-default"
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
