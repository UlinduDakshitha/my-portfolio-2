import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { BrainCircuit, Server, Cpu, Code2 } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-24 scroll-mt-28 bg-[#050505] text-white"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="About Me"
          title="Engineering Systems Scaling Intelligence"
          description="Focused on building modern, scalable, and intelligent digital experiences while continuously exploring cloud technologies, automation, and machine learning."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <Reveal>
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md aspect-3/4 rounded-[36px] overflow-hidden shadow-2xl shadow-cyan-500/10">
                <Image
                  src="/images/profile2.jpg"
                  alt="Ulindu"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-linear-to-br from-cyan-400/10 via-transparent to-transparent" />
                <div className="absolute -bottom-8 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
              </div>
            </div>
          </Reveal>

          {/* RIGHT CONTENT */}
          <Reveal delay={0.12}>
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-5 leading-tight">
                Passionate about scalable systems, intelligent technologies, and
                modern software engineering.
              </h3>

              <p className="text-gray-400 leading-relaxed mb-5">
                I’m Ulindu Dakshitha, a Software Engineering undergraduate at
                Sabaragamuwa University of Sri Lanka with a strong interest in
                DevOps, Cloud Computing, Artificial Intelligence, Machine
                Learning, and Deep Learning.
              </p>

              <p className="text-gray-400 leading-relaxed mb-8">
                I enjoy building high-performance applications, learning modern
                infrastructure practices, and exploring how intelligent systems
                can solve real-world problems. My current stack includes React,
                Next.js, Node.js,Express.js,java,springboot MongoDB, MySQL, and
                Tailwind CSS while I continuously expand my knowledge in
                automation, cloud platforms, and AI technologies.
              </p>

              {/* FEATURE CARDS */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
                  <div className="mb-3 text-cyan-400">
                    <Server size={22} />
                  </div>

                  <h4 className="text-white font-semibold mb-2">DevOps</h4>

                  <p className="text-sm text-gray-400">
                    Cloud, automation, scalability, and deployment workflows.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
                  <div className="mb-3 text-cyan-400">
                    <BrainCircuit size={22} />
                  </div>

                  <h4 className="text-white font-semibold mb-2">AI / ML</h4>

                  <p className="text-sm text-gray-400">
                    Exploring machine learning and intelligent systems.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
                  <div className="mb-3 text-cyan-400">
                    <Cpu size={22} />
                  </div>

                  <h4 className="text-white font-semibold mb-2">
                    Deep Learning
                  </h4>

                  <p className="text-sm text-gray-400">
                    Interested in neural networks and advanced AI technologies.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
                  <div className="mb-3 text-cyan-400">
                    <Code2 size={22} />
                  </div>

                  <h4 className="text-white font-semibold mb-2">
                    Full Stack Web & Mobile
                  </h4>

                  <p className="text-sm text-gray-400">
                    Building responsive web apps and mobile-ready solutions end
                    to end.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
