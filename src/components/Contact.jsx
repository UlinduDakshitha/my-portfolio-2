export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-cyan-400 tracking-[0.3em] uppercase text-sm mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Let’s build something great
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              I’m currently open to internship opportunities, freelance work,
              and collaborations. Feel free to reach out if you want to build
              something modern and impactful.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:yourmail@gmail.com"
                className="block w-full text-center px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:scale-[1.02] transition"
              >
                Send Email
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="block w-full text-center px-6 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white hover:text-black transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="block w-full text-center px-6 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white hover:text-black transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Available for</h3>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                  Internships
                </span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                  Freelance
                </span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                  Collaborations
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed">
                I like working on clean UI, full-stack applications, and
                creative digital experiences that feel premium and modern.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 text-sm text-gray-500">
              Designed with a dark premium aesthetic for easy recruiter viewing.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}