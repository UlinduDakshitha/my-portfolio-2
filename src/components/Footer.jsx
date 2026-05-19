export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © 2026 Ulindu. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-sm text-gray-500">
          <a
            href="https://github.com"
            target="_blank"
            className="hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-white"
          >
            LinkedIn
          </a>

          <a href="mailto:yourmail@gmail.com" className="hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
