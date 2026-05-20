"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Link, ArrowRight, Clock3, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24 bg-black text-white scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Contact"
          title="Let's Work Together"
          description="Have a project in mind or just want to say hi? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-8">
          {/* Left form */}
          <Reveal>
            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-black/30">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>
                <p className="text-gray-400">
                  I typically respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, idea, or just say hi..."
                    required
                    rows={6}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-white text-black px-6 py-4 font-semibold hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
                >
                  <Mail size={18} />
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <div className="flex items-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-emerald-300">
                    <CheckCircle2 size={18} />
                    Message sent successfully.
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-300">
                    <CheckCircle2 size={18} />
                    Something went wrong. Try again.
                  </div>
                )}
              </form>
            </div>
          </Reveal>

          {/* Right cards */}
          <div className="space-y-5">
            <Reveal delay={0.05}>
              <div className="rounded-[24px] border border-emerald-500/20 bg-emerald-500/10 p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.8)]" />
                  <div>
                    <h4 className="font-semibold text-emerald-200">
                      Available for opportunities
                    </h4>
                    <p className="text-sm text-emerald-100/70">
                      Open to full-time & freelance roles
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <a
                href="mailto:yourmail@gmail.com"
                className="group block rounded-[24px] border border-violet-500/20 bg-violet-500/10 p-5 hover:border-violet-400/40 hover:bg-violet-500/15 transition"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5">
                      <Mail size={22} />
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.3em] uppercase text-gray-400">
                        Email
                      </p>
                      <h4 className="font-semibold text-lg">Send an email</h4>
                    </div>
                  </div>
                  <ArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.15}>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="group block rounded-[24px] border border-sky-500/20 bg-sky-500/10 p-5 hover:border-sky-400/40 hover:bg-sky-500/15 transition"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5">
                      <FaLinkedin size={22} />
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.3em] uppercase text-gray-400">
                        LinkedIn
                      </p>
                      <h4 className="font-semibold text-lg">Connect with me</h4>
                    </div>
                  </div>
                  <ArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.2}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="group block rounded-[24px] border border-white/10 bg-white/5 p-5 hover:border-white/20 hover:bg-white/10 transition"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5">
                      <FaGithub size={22} />
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.3em] uppercase text-gray-400">
                        GitHub
                      </p>
                      <h4 className="font-semibold text-lg">
                        Check out my code
                      </h4>
                    </div>
                  </div>
                  <ArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="rounded-[24px] border border-cyan-500/20 bg-cyan-500/10 p-5">
                <div className="flex items-start gap-3">
                  <Clock3 size={18} className="mt-1 text-cyan-300" />
                  <div>
                    <h4 className="font-medium text-white">Quick Response</h4>
                    <p className="text-sm text-gray-400">
                      I aim to respond to all messages within 24 hours during
                      weekdays.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
