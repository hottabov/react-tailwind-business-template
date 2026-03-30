import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import SEO from "@/components/ui/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import CTA from "@/components/ui/CTA";
import { seoData } from "@/data/seo";
import { usePortfolioItems } from "@/hooks/usePortfolioItems";
import portfolioHero from "@/assets/images/home/before-after-painting.avif";

const categories = [
  "All",
  "Interior",
  "Exterior",
  "Roof",
  "Deck",
  "Fence",
  "Commercial",
];

const portfolioFaqs = [
  {
    question: "What types of painting projects are shown in this portfolio?",
    answer:
      "This portfolio includes residential interior repaints, exterior house painting, roof restoration, deck refinishing, fence painting and commercial painting projects. Current examples cover apartments, family homes, heritage facades, roof and gutter refreshes, timber restoration and business interiors across Melbourne.",
  },
  {
    question: "Are these portfolio projects based in real Melbourne suburbs?",
    answer:
      "Yes. Each project is tied to a real Melbourne suburb or area shown on the card and project page. Current locations include Richmond, Toorak, Doncaster, Fitzroy, Williamstown, Brighton, Bayside, Prahran, Collingwood, Southbank and Glen Waverley.",
  },
  {
    question: "What information can I compare on each portfolio project?",
    answer:
      "Each portfolio item shows the project title, category and location in the gallery. When you open a project, you can also review the summary, project fit, written scope and result notes. Some projects include before-and-after images where they help explain the transformation.",
  },
  {
    question: "How should I use the filters on the portfolio page?",
    answer:
      "Use the category filters to narrow the gallery by project type first, such as Interior, Exterior, Roof, Deck, Fence or Commercial. Then compare the suburb, property style and finish shown in the cards to find projects that are closest to your own scope before requesting a quote.",
  },
  {
    question: "Can I request a quote based on a similar project in the portfolio?",
    answer:
      "Yes. The fastest approach is to open the closest project and then contact us with the suburb, surfaces, approximate size and the portfolio example you want to reference. That gives us a clear starting point for recommending a similar scope, preparation plan and coating system.",
  },
  {
    question: "Does the portfolio include both residential and commercial painting examples?",
    answer:
      "Yes. The gallery includes home painting projects such as interior rooms, exteriors, roofs, decks and fences, as well as commercial interior projects for workplaces and hospitality venues. That helps homeowners and business clients compare examples relevant to their property type.",
  },
  {
    question: "Can you match the colours or finish shown in a portfolio project?",
    answer:
      "We can usually recommend a similar colour direction and sheen level, but we confirm the final paint system based on your surfaces, lighting, exposure and condition. When you enquire, tell us which portfolio project you like and whether you want a similar colour palette, finish level or overall feel.",
  },
  {
    question: "What details should I send if I want a similar result?",
    answer:
      "Send your property type, suburb, the areas to be painted, current surface condition, any access constraints and the portfolio project closest to your goal. Photos are also helpful. With that information, we can advise whether your project is closer to an interior repaint, exterior restoration, roof coating, deck refresh, fence refinish or commercial scope.",
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const [openFaq, setOpenFaq] = useState(0);
  const items = usePortfolioItems();

  const filtered =
    active === "All"
      ? items
      : items.filter((p) => p.frontmatter.category === active);

  const collectionSchema = {
    "@type": "CollectionPage",
    name: "Melbourne Pro Painters Portfolio",
    description: seoData.portfolio.description,
  };

  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: portfolioFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <SEO
        {...seoData.portfolio}
        type="collection"
        schema={[collectionSchema, faqSchema]}
      />

      {/* Hero */}
      <section className="relative pt-64 pb-20 overflow-hidden text-white bg-gray-900">
        <img
          src={portfolioHero}
          alt="Recent Melbourne painting projects showing interior and exterior finishes"
          className="absolute inset-0 object-cover w-full h-full opacity-20"
        />
        <div className="section-wrapper">
          <div className="relative text-center section-wrapper">
            <h1 className="mb-4 text-5xl font-display md:text-6xl animate-fade-up">
              Painting Projects Across Melbourne
            </h1>
            <p
              className="max-w-3xl mx-auto text-xl text-gray-300 animate-fade-up"
              style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}
            >
              Browse real interior, exterior, roof, deck, fence and commercial
              work, then open any case study to compare suburb, scope and
              finish.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="section-wrapper">
          <SectionHeading
            eyebrow="Portfolio"
            title="Browse Recent Projects"
            subtitle="Filter the gallery by project type, then open any case study to review the suburb, category and final result."
            center
          />

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

      <section className="pb-24 bg-white dark:bg-dark-bg">
        <div className="section-wrapper">
          <div className="rounded-[2rem] bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-dark-border p-6 md:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
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
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-dark-card">
        <div className="section-wrapper">
          <SectionHeading
            eyebrow="Portfolio FAQ"
            title="Questions People Ask When Reviewing Our Past Work"
            subtitle="These answers are designed to help you compare the portfolio properly, understand what each case study shows and prepare a more accurate quote request."
            center
          />

          <div className="max-w-4xl mx-auto mt-12 space-y-4">
            {portfolioFaqs.map((faq, index) => {
              const panelId = `portfolio-faq-panel-${index}`;
              const buttonId = `portfolio-faq-button-${index}`;
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden border border-gray-100 shadow-sm rounded-3xl bg-white dark:bg-dark-bg dark:border-dark-border"
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="flex items-center justify-between w-full gap-4 px-6 py-5 text-left transition-colors md:px-7 md:py-6 hover:bg-brand-50/60 dark:hover:bg-dark-card"
                    >
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-brand-500 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 leading-relaxed text-gray-600 md:px-7 dark:text-gray-300">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
