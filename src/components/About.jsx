export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-24 scroll-mt-28 bg-[#050505] text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image / Card */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-full max-w-md h-105 rounded-4xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src="https://images.unsplash.com/photo-1521119989659-a83eee488004"
              alt="about"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-cyan-400 tracking-[0.3em] uppercase text-sm mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            A passionate developer building modern digital experiences.
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            I am a software engineering undergraduate focused on creating clean,
            responsive, and aesthetic web applications. I enjoy transforming
            ideas into high-quality digital products with smooth UI and strong
            functionality.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            My main stack includes Next.js, React, Node.js, Tailwind CSS, and
            MongoDB. I like working on projects that solve real problems and
            leave a strong first impression.
          </p>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">
                Clean UI
              </h3>
              <p className="text-sm text-gray-400">
                Minimal, modern, and user-friendly design.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">
                Full Stack
              </h3>
              <p className="text-sm text-gray-400">
                Frontend and backend development experience.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">
                Creative
              </h3>
              <p className="text-sm text-gray-400">
                Focus on unique visuals and strong user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
