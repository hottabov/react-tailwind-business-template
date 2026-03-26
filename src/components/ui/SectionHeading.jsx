import BrushStroke from "@/components/ui/BrushStroke";

/**
 * SectionHeading — reusable decorated section title.
 * Shows an amber accent line above the heading.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-block text-brand-500 font-semibold tracking-widest uppercase text-sm mb-3">
          {eyebrow}
        </span>
      )}
      <div className="flex flex-col items-start mb-4" style={{ alignItems: center ? 'center' : 'flex-start' }}>
        <div className="relative inline-block">
          <h2 className="relative z-10 font-display text-4xl md:text-5xl text-gray-900 dark:text-white leading-tight">
            {title}
          </h2>
          <BrushStroke variant={3} className="text-brand-500/30 -bottom-3 -rotate-1 scale-105" />
        </div>
      </div>
      {subtitle && (
        <p
          className={`text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed ${
            center ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
