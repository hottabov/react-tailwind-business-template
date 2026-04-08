import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { suburbs } from "@/data/suburbs";

export default function AreasWeServeSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white border-gray-100 border-y dark:border-dark-border dark:bg-dark-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-64 h-64 rounded-full -left-20 top-12 bg-brand-500/8 blur-3xl dark:bg-brand-500/12" />
        <div className="absolute bottom-0 right-0 rounded-full h-72 w-72 bg-amber-400/10 blur-3xl dark:bg-amber-400/5" />
      </div>

      <div className="relative section-wrapper">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-20">
          <div className="max-w-xl">
            <span className="inline-block mb-4 text-sm font-semibold tracking-[0.32em] uppercase text-brand-600 dark:text-brand-300">
              Areas We Serve
            </span>
            <h2 className="text-4xl leading-tight text-gray-900 font-display dark:text-white md:text-5xl">
              Premium House Painting Services Across Melbourne’s Most
              Prestigious Suburbs
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              We deliver high-quality interior and exterior painting services
              for homeowners across Melbourne’s most sought-after suburbs,
              ensuring flawless finishes and long-lasting results.
            </p>
          </div>

          <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2 xl:grid-cols-3">
            {suburbs.map((suburb) => (
              <Link
                key={suburb.slug}
                to={suburb.href}
                aria-label={`View ${suburb.name} painters page`}
                className="group flex items-center justify-between gap-4 rounded-[1.75rem] border border-gray-200/80 bg-gray-50/80 px-6 py-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:bg-brand-50/80 hover:shadow-xl hover:shadow-brand-500/10 dark:border-dark-border dark:bg-dark-card/70 dark:hover:border-brand-500/40 dark:hover:bg-dark-card"
              >
                <span className="leading-none text-gray-900 text-1xl dark:text-white">
                  {suburb.name}
                </span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 shrink-0 text-brand-500 group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
