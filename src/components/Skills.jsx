import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";

export default function Skills() {
  const skills = [
    {
      title: "Languages & Frameworks",
      tech: [
        "Java",
        "JavaScript",
        "TypeScript",
        "Spring Boot",
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
      ],
    },
    {
      title: "Mobile & Frontend",
      tech: ["React Native", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Databases",
      tech: ["MySQL", "MongoDB", "PostgreSQL", "Sequelize ORM"],
    },
    {
      title: "Tools & Platforms",
      tech: [
        "Git",
        "GitHub",
        "REST APIs",
        "JWT Authentication",
        "AWS",
        "Postman",
      ],
    },
    {
      title: "Development Practices",
      tech: [
        "Agile Development",
        "Debugging",
        "API Development",
        "Secure Coding",
        "Testing",
        "Problem Solving",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-24 scroll-mt-28 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Skills"
          title="Technologies I Work With"
          description="A focused stack for building modern, responsive, and high-performance web applications."
        />

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
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
