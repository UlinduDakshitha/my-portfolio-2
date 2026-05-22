import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-6">
        <div className="flex items-center justify-between bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-5 sm:px-6 py-4">
          {/* Logo */}

          <a href="#home" className="flex items-center gap-3">
            <div className="relative">
              <div className="rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-[0_6px_24px_rgba(6,182,212,0.12)]">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-black/20 border border-white/8">
                  <Image
                    src="/images/profile.jpg"
                    alt="Ulindu logo"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
              </div>
               
            </div>
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
