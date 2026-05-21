import { ArrowDownRight } from "lucide-react";

export default function DownloadCV() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 shadow-xl shadow-black/20">
      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
        Download my CV
      </h3>

      <p className="text-gray-400 mb-6 max-w-md">
        A concise snapshot of my skills, experience, and projects.
      </p>

      <a
        href="/cv/Ulindu_Dakshitha_Software%20Engineer_.pdf"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-black transition hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-500/20"
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-black/10">
          <ArrowDownRight size={18} />
        </span>
        View CV
      </a>
    </div>
  );
}
