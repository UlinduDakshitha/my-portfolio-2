export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-6">
        <div className="flex items-center justify-between bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-5 sm:px-6 py-4">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold tracking-widest text-white"
          >
            U.
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a
              href="#home"
              className="hover:text-white transition duration-300"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-white transition duration-300"
            >
              About
            </a>

            <a
              href="#skills"
              className="hover:text-white transition duration-300"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-white transition duration-300"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-white transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
