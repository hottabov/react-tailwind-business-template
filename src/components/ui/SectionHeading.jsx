/**
 * SectionHeading — reusable decorated section title.
 * Shows an amber accent line above the heading.
 */
export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="inline-block text-brand-500 font-semibold tracking-widest uppercase text-sm mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl text-gray-900 dark:text-white leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed
          {center ? 'mx-auto' : ''}">
          {subtitle}
        </p>
      )}
    </div>
  );
}
