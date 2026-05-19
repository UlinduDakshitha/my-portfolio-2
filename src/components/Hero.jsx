export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center
      bg-black text-white px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          <p className="text-gray-400 mb-4 tracking-widest">
            SOFTWARE ENGINEER
          </p>

          <h1
            className="text-5xl md:text-7xl
            font-bold leading-tight mb-6"
          >
            Hi, I’m <span className="text-cyan-400">Ulindu</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-8">
            I build modern, aesthetic and high-performance web
            experiences using React, Next.js and Node.js.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">

            <a
              href="#projects"
              className="bg-cyan-400 text-black
              px-6 py-3 rounded-full
              font-semibold hover:scale-105
              transition duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-white/20
              px-6 py-3 rounded-full
              hover:bg-white hover:text-black
              transition duration-300"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">

          <div
            className="relative w-[320px] h-[420px]
            rounded-[40px] overflow-hidden
            border border-white/10"
          >

            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt="profile"
              className="w-full h-full object-cover"
            />

            {/* Glow */}
            <div
              className="absolute inset-0
              bg-gradient-to-t
              from-cyan-500/20 to-transparent"
            />

          </div>

        </div>

      </div>
    </section>
  );
}