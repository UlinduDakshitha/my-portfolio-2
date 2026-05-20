import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedin },
  { label: "X", href: "https://x.com", icon: FaXTwitter },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.12),transparent_35%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.9fr_1fr]">
          <div>
            <a
              href="#home"
              className="text-2xl font-bold tracking-wide text-white"
            >
              Ulindu Dakshitha
            </a>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-300">
              Full-stack engineer, crafting modern applications with a focus on
              clean design, performance, and thoughtful user experiences.
            </p>

            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-5 space-y-4 text-sm text-gray-300">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Get in Touch</h3>
            <div className="mt-5 space-y-3 text-sm text-gray-300">
              <a
                href="mailto:yourmail@gmail.com"
                className="block transition hover:text-white"
              >
                Email: ulindudakshitha001@gmail.com
              </a>
              <p>Location: Colombo,Sri Lanka</p>
              <p>Open to opportunities</p>
            </div>
          </div>
        </div>

        <div className="my-10 h-px w-full bg-white/10" />

        <div className="flex flex-col gap-3 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ulindu. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
