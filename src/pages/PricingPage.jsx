import { CheckCircle, Info, Home, Ruler, Clock, Droplet } from "lucide-react";
import SEO from "@/components/ui/SEO";
import CTA from "@/components/ui/CTA";
import SectionHeading from "@/components/ui/SectionHeading";
import { seoData } from "@/data/seo";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pricingPackages = [
  {
    title: "Single Room",
    price: "From $450",
    description:
      "Perfect for a quick refresh of a bedroom, study, or living space.",
    features: [
      "Walls & ceiling (2 coats)",
      "1 door, frame & skirting boards",
      "Minor plaster patching & sanding",
      "Premium Dulux low-VOC paint",
      "Floor and furniture protection",
    ],
  },
  {
    title: "Interior (3-Bed House)",
    price: "From $4,500",
    isPopular: true,
    description:
      "Full interior repaint for a standard single-storey Melbourne home.",
    features: [
      "3 bedrooms, 1 living, kitchen & bath",
      "All ceilings, walls, doors & trims",
      "Comprehensive surface preparation",
      "Stain blocking where required",
      "Post-painting professional clean",
    ],
  },
  {
    title: "Exterior (Single Storey)",
    price: "From $5,000",
    description:
      "Boost kerb appeal and protect your home from Melbourne's weather.",
    features: [
      "Full high-pressure chemical wash",
      "Scraping & sanding flaking paint",
      "Gap sealing & minor timber repairs",
      "Premium Weather-shield coatings",
      "Gutters, fascias & eaves included",
    ],
  },
];

const pricingFactors = [
  {
    icon: <Ruler size={24} />,
    title: "Size & Ceiling Height",
    description:
      "Larger rooms take more paint and time. Ceilings over 2.7m or hard-to-reach stairwells may require scaffolding or specialized ladders.",
  },
  {
    icon: <Droplet size={24} />,
    title: "Condition of Surfaces",
    description:
      "If your walls have heavy damage, water stains, peeling paint, or old wallpaper, the preparation time (and cost) will increase significantly.",
  },
  {
    icon: <Home size={24} />,
    title: "Furnished vs. Empty",
    description:
      "Painting an empty house is faster and cheaper. Moving heavy furniture and working around belongings adds to the overall labour time.",
  },
  {
    icon: <Clock size={24} />,
    title: "Colour Changes",
    description:
      "Painting dark walls to a light colour usually requires a primer and 2-3 topcoats, whereas refreshing the same colour often needs less material.",
  },
];

export default function PricingPage() {
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1 });
  const [factorsRef, factorsVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <>
      <SEO {...seoData.pricing} />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 text-center text-white bg-gray-900">
        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/20 border border-brand-500/40 text-brand-300 text-sm font-semibold tracking-wider uppercase mb-6 animate-fade-in">
          Transparent Pricing
        </span>
        <h1 className="mb-6 text-5xl font-display md:text-6xl animate-fade-up">
          How Much Does It Cost <br />
          <span className="text-brand-500">To Paint a House?</span>
        </h1>
        <p
          className="max-w-2xl mx-auto text-xl text-gray-300 animate-fade-up"
          style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}
        >
          Every home is unique, but we believe in being upfront about costs.
          Here is a guide to average painting prices in Melbourne.
        </p>
      </section>

      {/* ── PRICING PACKAGES ──────────────────────────────────────── */}
      <section className="py-24 bg-gray-50 dark:bg-dark-bg" ref={cardsRef}>
        <div className="section-wrapper">
          <SectionHeading
            eyebrow="Average Estimates"
            title="Typical Painting Costs"
            subtitle="These are baseline estimates based on standard Melbourne homes. Final quotes depend on exact measurements and preparation required."
            center
          />

          <div className="grid gap-8 mt-12 md:grid-cols-3">
            {pricingPackages.map((pkg, i) => (
              <div
                key={pkg.title}
                className={`relative bg-white dark:bg-dark-card rounded-3xl p-8 border 
                  ${pkg.isPopular ? "border-brand-500 shadow-xl shadow-brand-500/10" : "border-gray-200 dark:border-dark-border shadow-md"}
                  transition-all duration-700 transform ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 px-4 py-1 text-sm font-bold tracking-wide text-white -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 bg-brand-500">
                    Most Common
                  </div>
                )}

                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  {pkg.title}
                </h3>
                <p className="h-10 mb-6 text-sm text-gray-500 dark:text-gray-400">
                  {pkg.description}
                </p>

                <div className="pb-6 mb-6 border-b border-gray-100 dark:border-dark-border">
                  <span className="text-4xl text-gray-900 font-display dark:text-white">
                    {pkg.price}
                  </span>
                  <span className="block mt-1 text-sm text-gray-500 dark:text-gray-400">
                    + GST (approx.)
                  </span>
                </div>

                <ul className="mb-8 space-y-4">
                  {pkg.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <CheckCircle
                        className="text-brand-500 shrink-0 mt-0.5"
                        size={18}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className={`mt-12 text-center bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-center gap-3 max-w-3xl mx-auto
              transition-all duration-1000 delay-500 ${cardsVisible ? "opacity-100" : "opacity-0"}`}
          >
            <Info size={20} className="shrink-0" />
            <p className="text-sm font-medium">
              <strong>Need a per-square-metre rate?</strong> In Melbourne,
              professional painters generally charge between $15 to $30 per sqm
              of wall space, depending on prep work and paint quality.
            </p>
          </div>
        </div>
      </section>

      {/* ── FACTORS AFFECTING PRICE ───────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-dark-card" ref={factorsRef}>
        <div className="section-wrapper">
          <SectionHeading
            eyebrow="The Details"
            title="What Affects The Final Price?"
            subtitle="Why do quotes vary? 80% of a great paint job is in the preparation. Here is what we look at when quoting your home."
            center
          />

          <div className="grid gap-8 mt-12 sm:grid-cols-2">
            {pricingFactors.map((factor, i) => (
              <div
                key={factor.title}
                className={`flex gap-5 p-6 rounded-2xl bg-gray-50 dark:bg-dark-bg border border-gray-100 dark:border-dark-border
                  transition-all duration-700 transform ${factorsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400 shrink-0">
                  {factor.icon}
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    {factor.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {factor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (Same-Day Quote specific) ─────────────────────────── */}
      <CTA
        title="Get Your Exact Price Today"
        subtitle="No guessing. We'll visit your property, assess the required preparation, and provide a fixed, itemised quote on the same day."
        buttonText="Request Same-Day Quote"
      />
    </>
  );
}
