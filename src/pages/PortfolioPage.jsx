import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import SEO from "@/components/ui/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import CTA from "@/components/ui/CTA";
import { seoData } from "@/data/seo";
import { usePortfolioItems } from "@/hooks/usePortfolioItems";

const categories = [
  "All",
  "Interior",
  "Exterior",
  "Roof",
  "Deck",
  "Fence",
  "Commercial",
];
const portfolioHighlights = [
  "Before and after style transformations",
  "Projects grouped by suburb and job type",
  "Interior, exterior, roof and commercial examples",
  "Easy next step into a similar quote request",
];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const items = usePortfolioItems();

  const filtered =
    active === "All"
      ? items
      : items.filter((p) => p.frontmatter.category === active);

  return (
    <>
      <SEO
        {...seoData.portfolio}
        type="collection"
        schema={{
          "@type": "CollectionPage",
          name: "Melbourne Pro Painters Portfolio",
          description: seoData.portfolio.description,
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden text-white bg-gray-900">
        <div className="relative text-center section-wrapper">
          <h1 className="mb-4 text-5xl font-display md:text-6xl">
            See The Standard We Deliver
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            Browse recent painting projects across Melbourne, compare styles and
            scopes, then request a quote for a similar result.
          </p>
        </div>
      </section>

      <section className="py-10 bg-white border-b border-gray-100 dark:bg-dark-bg dark:border-dark-border">
        <div className="grid gap-4 section-wrapper md:grid-cols-2 xl:grid-cols-4">
          {portfolioHighlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 px-5 py-4 border border-gray-100 rounded-2xl bg-gray-50 dark:bg-dark-card dark:border-dark-border"
            >
              <CheckCircle size={18} className="text-brand-500 shrink-0" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="section-wrapper">
          <SectionHeading
            eyebrow="Portfolio"
            title="Recent Painting Projects"
            subtitle="Browse interiors, exteriors, roofs and commercial jobs completed across Melbourne, with location and category visible at a glance."
            center
          />

          <div className="mb-12 rounded-[2rem] bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-dark-border p-6 md:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div className="max-w-3xl">
              <h2 className="mb-3 text-2xl text-gray-900 md:text-3xl font-display dark:text-white">
                Find a Project Close to Your Own Scope
              </h2>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                Use the filters to compare interiors, exteriors, roofs and
                commercial jobs. When you find something close to your project,
                talk to us about quoting a similar scope.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/20 lg:mt-0"
            >
              Request a Similar Quote
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-200 text-sm
                  ${
                    active === cat
                      ? "bg-brand-500 text-white shadow-md shadow-brand-500/30"
                      : "bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-gray-300 hover:bg-brand-50 hover:text-brand-500"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <Link
                key={item.slug}
                to={`/portfolio/${item.slug}`}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  loading="lazy"
                  src={item.frontmatter.coverImage}
                  alt={item.frontmatter.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-300 translate-y-0 opacity-100">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-white rounded-full bg-brand-500">
                    {item.frontmatter.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {item.frontmatter.title}
                  </h3>
                  <p className="text-sm text-white/70">
                    {item.frontmatter.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Want a Similar Result for Your Property?"
        subtitle="Tell us what you are painting and we will guide you on the right scope, finish and next-step quote."
        supportingText="Same-day response"
      />
    </>
  );
}
