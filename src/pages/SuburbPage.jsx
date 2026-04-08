import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Phone,
} from "lucide-react";
import SEO from "@/components/ui/SEO";
import CTA from "@/components/ui/CTA";
import SectionHeading from "@/components/ui/SectionHeading";
import StarRating from "@/components/ui/StarRating";
import BrushStroke from "@/components/ui/BrushStroke";
import PaintingServicesStorySection from "@/components/home/PaintingServicesStorySection";
import RecentWorkSection from "@/components/portfolio/RecentWorkSection";
import NotFoundPage from "@/pages/NotFoundPage";
import { siteConfig } from "@/data/site";
import { getSuburbBySlug } from "@/data/suburbs";
import { usePortfolioItems } from "@/hooks/usePortfolioItems";
import { useReviews } from "@/hooks/useReviews";
import heroFallbackImage from "@/assets/images/hero/hero-blog.avif";
import heroVideo from "@/assets/videos/painters.mp4";
import heroVideoMobile from "@/assets/videos/painters_mob.mp4";

const heroProof = [
  "Quotes Within 24 Hours",
  "15+ Years Experience",
  "Clean & Tidy Crews",
  "Workmanship Warranty Included",
];

function matchesSelectedSuburb(frontmatter, suburbName) {
  return frontmatter.showInSuburb.some(
    (targetSuburb) =>
      targetSuburb.trim().toLowerCase() === suburbName.toLowerCase(),
  );
}

function SuburbWhyUsSection({ suburb }) {
  return (
    <section className="py-24 overflow-hidden bg-white dark:bg-dark-bg">
      <div className="grid items-center gap-16 section-wrapper lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Why Us"
            title={suburb.whyUs.title}
            subtitle={suburb.whyUs.subtitle}
          />

          <ul className="space-y-4">
            {suburb.whyUs.points.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
              >
                <CheckCircle className="shrink-0 text-brand-500" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-brand-500/20 transition-all hover:scale-105 hover:bg-brand-600"
          >
            Book a Quote
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="relative">
          <img
            loading="lazy"
            src={suburb.whyUs.image}
            alt={suburb.whyUs.imageAlt}
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
          />
          <div className="absolute p-5 text-white shadow-xl -bottom-6 -left-6 rounded-2xl bg-brand-500">
            <div className="text-4xl font-bold">15+</div>
            <div className="text-sm font-medium text-brand-100">
              Years in Business
            </div>
          </div>
          <div className="absolute p-4 bg-white border border-gray-100 shadow-xl -right-6 -top-6 rounded-2xl dark:border-dark-border dark:bg-dark-card">
            <StarRating />
            <div className="mt-1 font-semibold text-gray-800 dark:text-white">
              5.0 Google Rating
            </div>
            <div className="text-sm text-gray-400">Based on 200+ reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SuburbTestimonialsSection({ suburb, reviews }) {
  const itemCount = reviews.length;
  const gridClassName =
    itemCount === 1
      ? "mx-auto mt-12 grid max-w-4xl gap-6"
      : itemCount === 2
        ? "mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2"
        : "mt-12 grid gap-6 md:grid-cols-3";

  return (
    <section className="py-24 bg-gray-50 dark:bg-dark-card">
      <div className="section-wrapper">
        <SectionHeading
          eyebrow="Testimonials"
          title={suburb.testimonials.title}
          subtitle={suburb.testimonials.subtitle}
          center
        />

        <div className={gridClassName}>
          {reviews.map((review) => (
            <div
              key={review.slug}
              className="bg-white border border-gray-100 shadow-sm rounded-2xl p-7 dark:border-dark-border dark:bg-dark-bg"
            >
              <StarRating count={review.frontmatter.rating} />
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                "{review.content}"
              </p>
              <div className="flex items-center gap-4 pt-5 mt-6 border-t border-gray-200 dark:border-dark-border">
                <img
                  loading="lazy"
                  src={review.frontmatter.avatar}
                  alt={review.frontmatter.name}
                  className="object-cover w-12 h-12 rounded-full ring-2 ring-brand-500/20"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {review.frontmatter.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {review.frontmatter.business}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SecondaryCtaSection({ suburb }) {
  return (
    <section className="py-20 bg-white dark:bg-dark-bg">
      <div className="section-wrapper">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-10 text-center shadow-2xl shadow-brand-500/5 dark:border-dark-border dark:bg-dark-card md:p-14">
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-brand-500/20" />
          <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-[90px] dark:bg-brand-500/5" />

          <h2 className="relative z-10 text-3xl leading-tight text-gray-900 font-display dark:text-white md:text-4xl">
            {suburb.secondaryCta.title}
          </h2>
          <p className="relative z-10 max-w-2xl mx-auto mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            {suburb.secondaryCta.description}
          </p>
          <Link
            to="/contact"
            className="group relative z-10 mt-8 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:-translate-y-0.5 hover:shadow-brand-500/50"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative z-10">
              {suburb.secondaryCta.buttonText}
            </span>
            <ArrowRight
              size={20}
              className="relative z-10 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

function LocalStorySection({ suburb }) {
  return (
    <section className="py-24 border-gray-100 border-y bg-gray-50 dark:border-dark-border dark:bg-dark-card/80">
      <div className="section-wrapper">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="relative mx-auto w-full max-w-[40rem] min-h-[430px] sm:min-h-[520px] lg:min-h-[600px]">
            <div className="absolute inset-x-[6%] top-0 h-[72%] overflow-hidden rounded-[2rem] border-[8px] border-white/60 shadow-[0_30px_80px_rgba(15,23,42,0.18)] dark:border-white/10">
              <div className="aspect-[4/5]">
                <img
                  loading="lazy"
                  src={suburb.localStory.images[0].src}
                  alt={suburb.localStory.images[0].alt}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="absolute bottom-10 right-0 z-10 w-[56%] overflow-hidden rounded-[2rem] border-[8px] border-gray-50 shadow-[0_26px_70px_rgba(15,23,42,0.22)] dark:border-dark-card/90 sm:w-[55%]">
              <div className="aspect-[4/5]">
                <img
                  loading="lazy"
                  src={suburb.localStory.images[1].src}
                  alt={suburb.localStory.images[1].alt}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="max-w-2xl">
            <span className="inline-block mb-4 text-sm font-semibold tracking-[0.32em] uppercase text-brand-600 dark:text-brand-300">
              You Local Painters
            </span>
            <h2 className="text-4xl leading-tight text-gray-900 font-display dark:text-white md:text-5xl">
              {suburb.localStory.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              {suburb.localStory.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SuburbFaqSection({ suburb, openFaq, setOpenFaq }) {
  return (
    <section className="py-24 bg-white dark:bg-dark-bg">
      <div className="grid items-start gap-10 section-wrapper lg:grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)]">
        <div>
          <SectionHeading
            eyebrow={suburb.faq.eyebrow}
            title={suburb.faq.title}
            subtitle={suburb.faq.subtitle}
          />

          <div className="mt-10 space-y-4">
            {suburb.faq.items.map((faq, index) => {
              const panelId = `${suburb.slug}-faq-panel-${index}`;
              const buttonId = `${suburb.slug}-faq-button-${index}`;
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden border border-gray-100 shadow-sm rounded-3xl bg-gray-50 dark:border-dark-border dark:bg-dark-card"
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="flex items-center justify-between w-full gap-4 px-6 py-5 text-left transition-colors hover:bg-brand-50/60 dark:hover:bg-dark-bg md:px-7 md:py-6"
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

        <div className="overflow-hidden rounded-[2rem] shadow-xl">
          <img
            src={suburb.localStory.images[0].src}
            alt={`${suburb.keyword} FAQ and quote guidance`}
            className="h-[520px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default function SuburbPage() {
  const { suburbSlug } = useParams();
  const suburb = getSuburbBySlug(suburbSlug);
  const [isMobileHero, setIsMobileHero] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const portfolioItems = usePortfolioItems();
  const reviews = useReviews();

  const recentWorkItems = useMemo(() => {
    if (!suburb) return [];

    return portfolioItems
      .filter((item) => matchesSelectedSuburb(item.frontmatter, suburb.name))
      .slice(0, 3);
  }, [portfolioItems, suburb]);

  const suburbReviews = useMemo(() => {
    if (!suburb) return [];

    return reviews.filter((review) =>
      matchesSelectedSuburb(review.frontmatter, suburb.name),
    );
  }, [reviews, suburb]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPreferences = () => {
      setIsMobileHero(mobileQuery.matches);
      setPrefersReducedMotion(motionQuery.matches);
    };

    syncPreferences();

    if (mobileQuery.addEventListener && motionQuery.addEventListener) {
      mobileQuery.addEventListener("change", syncPreferences);
      motionQuery.addEventListener("change", syncPreferences);
    } else {
      mobileQuery.addListener(syncPreferences);
      motionQuery.addListener(syncPreferences);
    }

    return () => {
      if (mobileQuery.removeEventListener && motionQuery.removeEventListener) {
        mobileQuery.removeEventListener("change", syncPreferences);
        motionQuery.removeEventListener("change", syncPreferences);
      } else {
        mobileQuery.removeListener(syncPreferences);
        motionQuery.removeListener(syncPreferences);
      }
    };
  }, []);

  if (!suburb) {
    return <NotFoundPage />;
  }

  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: suburb.faq.items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@type": "Service",
    name: `${suburb.name} Painting Services`,
    serviceType: "House Painting",
    description: suburb.seo.description,
    areaServed: {
      "@type": "Place",
      name: suburb.name,
    },
    provider: {
      "@type": "HousePainter",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <SEO
        title={suburb.seo.title}
        description={suburb.seo.description}
        keywords={suburb.seo.keywords}
        image={suburb.seo.image}
        imageAlt={suburb.seo.imageAlt}
        preloadImage={heroFallbackImage}
        canonicalPath={suburb.seo.canonicalPath}
        schema={[serviceSchema, faqSchema]}
      />

      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          {prefersReducedMotion ? (
            <img
              src={heroFallbackImage}
              alt={`${suburb.keyword} hero background`}
              className="object-cover w-full h-full"
              fetchPriority="high"
            />
          ) : (
            <video
              key={
                isMobileHero
                  ? "suburb-mobile-hero-video"
                  : "suburb-desktop-hero-video"
              }
              className="object-cover w-full h-full"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={heroFallbackImage}
              aria-hidden="true"
            >
              <source
                src={isMobileHero ? heroVideoMobile : heroVideo}
                type="video/mp4"
              />
            </video>
          )}
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative z-10 pb-20 text-center text-white pt-28 section-wrapper">
          <span className="mb-6 inline-block rounded-full border border-brand-500/40 bg-brand-500/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-brand-300 animate-fade-in">
            {suburb.hero.eyebrow}
          </span>

          <h1 className="mb-6 text-5xl leading-tight font-display md:text-6xl lg:text-7xl animate-fade-up">
            {suburb.hero.title}
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-500">
                {suburb.hero.highlight}
              </span>
              <BrushStroke
                variant={1}
                className="text-brand-500/80 -bottom-8 -rotate-2"
              />
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-xl text-white/80 animate-fade-up [animation-delay:100ms] [animation-fill-mode:backwards] md:text-2xl">
            {suburb.hero.description}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 animate-fade-up [animation-delay:200ms] [animation-fill-mode:backwards] sm:flex-row sm:items-start">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-full shadow-2xl bg-brand-500 shadow-brand-500/40 hover:scale-105 hover:bg-brand-600"
            >
              {suburb.hero.primaryButtonText}
              <ArrowRight size={20} />
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white transition-all duration-300 border-2 rounded-full border-white/60 hover:border-white hover:bg-white/10"
            >
              <Phone size={20} />
              {siteConfig.displayPhone}
            </a>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-6 text-sm text-white/60 animate-fade-in [animation-delay:400ms] [animation-fill-mode:backwards]">
            {heroProof.map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle size={15} className="text-brand-400" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
            <div className="w-1 h-2 rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      <PaintingServicesStorySection
        title={suburb.servicesIntro.title}
        subtitle={suburb.servicesIntro.subtitle}
      />
      <RecentWorkSection
        title={suburb.recentWork.title}
        subtitle={suburb.recentWork.subtitle}
        items={recentWorkItems}
        locationKeyword={suburb.name}
      />
      <SuburbWhyUsSection suburb={suburb} />
      {suburbReviews.length > 0 ? (
        <SuburbTestimonialsSection suburb={suburb} reviews={suburbReviews} />
      ) : null}
      <SecondaryCtaSection suburb={suburb} />
      <LocalStorySection suburb={suburb} />
      <SuburbFaqSection
        suburb={suburb}
        openFaq={openFaq}
        setOpenFaq={setOpenFaq}
      />

      <CTA
        title={suburb.finalCta.title}
        subtitle={suburb.finalCta.subtitle}
        buttonText={suburb.finalCta.buttonText}
        supportingText={suburb.finalCta.supportingText}
      />
    </>
  );
}
