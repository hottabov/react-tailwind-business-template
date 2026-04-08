import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

function getGridClassName(itemCount) {
  if (itemCount === 1) {
    return "mx-auto mt-12 grid max-w-4xl gap-6";
  }

  if (itemCount === 2) {
    return "mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2";
  }

  return "mt-12 grid gap-6 lg:grid-cols-3";
}

export default function RecentWorkSection({
  eyebrow = "Recent Work",
  title,
  subtitle,
  items,
  locationKeyword,
  buttonLabel = "See all our work",
  buttonHref = "/portfolio",
  className = "py-24 border-y border-gray-100 bg-gray-50 dark:border-dark-border dark:bg-dark-card",
}) {
  if (!items?.length) {
    return null;
  }

  const gridClassName = getGridClassName(items.length);

  return (
    <section className={className}>
      <div className="section-wrapper">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          center
        />

        <div className={gridClassName}>
          {items.map((item) => (
            <Link
              key={item.slug}
              to={`/portfolio/${item.slug}`}
              className="group h-full overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-dark-border dark:bg-dark-bg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  loading="lazy"
                  src={item.frontmatter.coverImage}
                  alt={`${locationKeyword} painters ${item.frontmatter.category.toLowerCase()} recent work`}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-5 top-5 rounded-full bg-gray-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                  {item.frontmatter.category}
                </div>
              </div>

              <div className="flex h-full flex-col p-6">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Calendar size={14} />
                  {item.frontmatter.date}
                </div>
                <h3 className="mt-4 text-2xl leading-tight text-gray-900 transition-colors font-display dark:text-white group-hover:text-brand-500">
                  {item.frontmatter.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  {item.frontmatter.excerpt}
                </p>
                <div className="inline-flex items-center gap-2 pt-6 mt-auto text-sm font-semibold transition-all text-brand-600 group-hover:gap-3 dark:text-brand-300">
                  View full case study
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to={buttonHref}
            className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-brand-500/20 transition-all hover:scale-105 hover:bg-brand-600"
          >
            {buttonLabel}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
