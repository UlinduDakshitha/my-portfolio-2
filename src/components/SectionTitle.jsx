export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-16 text-center max-w-3xl mx-auto">
      <p className="text-cyan-400 tracking-[0.35em] uppercase text-xs sm:text-sm mb-4">
        {eyebrow}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
        {title}
      </h2>

      {description && (
        <p className="text-gray-400 leading-relaxed text-base md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}