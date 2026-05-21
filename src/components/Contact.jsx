"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight, Clock3, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const contactLinks = [
    {
      label: "Email",
      title: "Send an email",
      href: "mailto:yourmail@gmail.com",
      icon: Mail,
      accent:
        "border-violet-500/20 bg-[linear-gradient(135deg,rgba(88,28,135,0.85),rgba(23,15,48,0.95))] hover:border-violet-400/40 hover:bg-[linear-gradient(135deg,rgba(88,28,135,0.92),rgba(23,15,48,0.98))]",
    },
    {
      label: "LinkedIn",
      title: "Connect with me",
      href: "https://www.linkedin.com/in/ulindu-dakshitha-bandara-6aa081303/",
      icon: FaLinkedin,
      accent:
        "border-sky-500/20 bg-[linear-gradient(135deg,rgba(8,26,51,0.95),rgba(7,19,35,0.98))] hover:border-sky-400/40 hover:bg-[linear-gradient(135deg,rgba(10,33,63,0.98),rgba(7,19,35,1))]",
    },
    {
      label: "GitHub",
      title: "Check out my code",
      href: "https://github.com/UlinduDakshitha",
      icon: FaGithub,
      accent:
        "border-white/10 bg-[linear-gradient(135deg,rgba(16,16,16,0.98),rgba(8,8,8,0.98))] hover:border-white/20 hover:bg-[linear-gradient(135deg,rgba(24,24,24,1),rgba(10,10,10,1))]",
    },
    {
      label: "X / Twitter",
      title: "Follow me",
      href: "#",
      icon: FaXTwitter,
      accent:
        "border-cyan-500/20 bg-[linear-gradient(135deg,rgba(7,31,38,0.95),rgba(4,19,24,0.98))] hover:border-cyan-400/40 hover:bg-[linear-gradient(135deg,rgba(8,38,47,1),rgba(4,19,24,1))]",
    },
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          title: formData.subject,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email send error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-black px-6 py-24 text-white scroll-mt-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-base text-gray-400 sm:text-lg">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.35fr_0.95fr] lg:items-start">
          <div className="rounded-4xl border border-white/10 bg-[linear-gradient(180deg,rgba(28,28,33,0.96),rgba(16,16,20,0.98))] p-6 shadow-2xl shadow-black/30 sm:p-8">
            <h3 className="text-2xl font-semibold text-white">Send a Message</h3>
            <p className="mt-2 text-gray-400">I typically respond within 24 hours.</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#232329] px-4 py-3.5 text-white outline-none transition placeholder:text-gray-500 focus:border-white/20 focus:ring-2 focus:ring-white/10"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#232329] px-4 py-3.5 text-white outline-none transition placeholder:text-gray-500 focus:border-white/20 focus:ring-2 focus:ring-white/10"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#232329] px-4 py-3.5 text-white outline-none transition placeholder:text-gray-500 focus:border-white/20 focus:ring-2 focus:ring-white/10"
                />
              </div>

              <div>
                <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, idea, or just say hi..."
                  rows={7}
                  required
                  className="w-full resize-none rounded-2xl border border-white/10 bg-[#232329] px-4 py-3.5 text-white outline-none transition placeholder:text-gray-500 focus:border-white/20 focus:ring-2 focus:ring-white/10"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Mail size={18} />
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-sm text-emerald-400">Message sent successfully.</p>
              )}

              {status === "error" && (
                <p className="text-sm text-red-400">Something went wrong. Try again.</p>
              )}
            </form>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-emerald-500/20 bg-[linear-gradient(135deg,rgba(3,29,20,0.98),rgba(4,18,13,0.98))] p-5 shadow-lg shadow-black/20 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.8)]" />
                <div>
                  <h3 className="font-semibold text-emerald-200">Available for opportunities</h3>
                  <p className="text-sm text-emerald-100/70">Open to full-time & freelance roles</p>
                </div>
              </div>
            </div>

            {contactLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className={`group block rounded-3xl border p-5 transition sm:p-6 ${item.accent}`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white/90">
                        <Icon size={22} />
                      </div>

                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
                          {item.label}
                        </p>
                        <h4 className="text-lg font-semibold text-gray-100">
                          {item.title}
                        </h4>
                      </div>
                    </div>

                    <ArrowRight className="text-gray-500 transition group-hover:translate-x-1 group-hover:text-gray-300" />
                  </div>
                </a>
              );
            })}

            <div className="rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(18,18,18,0.98),rgba(10,10,10,0.98))] p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-gray-200">
                  <Clock3 size={18} />
                </div>

                <div>
                  <h4 className="font-medium text-white">Quick Response</h4>
                  <p className="text-sm text-gray-400">
                    I aim to respond to all messages within 24 hours during weekdays.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
