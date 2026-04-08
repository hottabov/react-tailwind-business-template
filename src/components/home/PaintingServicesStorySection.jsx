import { startTransition, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const serviceStoryConfigBySlug = {
  "interior-painting": {
    label: "Interior spaces",
    palette: {
      light: "#efd8cc",
      lightSecondary: "#f7ebe3",
      dark: "#332720",
      darkSecondary: "#403129",
    },
  },
  "exterior-painting": {
    label: "Street appeal",
    palette: {
      light: "#dbe5d5",
      lightSecondary: "#eef4e8",
      dark: "#243025",
      darkSecondary: "#314035",
    },
  },
  "commercial-painting": {
    label: "Business environments",
    palette: {
      light: "#d8e7f0",
      lightSecondary: "#edf5f8",
      dark: "#1f2a31",
      darkSecondary: "#2a3842",
    },
  },
  "roof-painting": {
    label: "Roof protection",
    palette: {
      light: "#ddd9d1",
      lightSecondary: "#efebe4",
      dark: "#2a2928",
      darkSecondary: "#363534",
    },
  },
  "fence-deck-painting": {
    label: "Outdoor living",
    palette: {
      light: "#e6d7bf",
      lightSecondary: "#f4ecde",
      dark: "#30261c",
      darkSecondary: "#3d3124",
    },
  },
  "colour-consultation": {
    label: "Palette guidance",
    palette: {
      light: "#eadff1",
      lightSecondary: "#f4edf8",
      dark: "#2d2435",
      darkSecondary: "#382d42",
    },
  },
};

const fallbackPalettes = [
  {
    light: "#efd8cc",
    lightSecondary: "#f7ebe3",
    dark: "#332720",
    darkSecondary: "#403129",
  },
  {
    light: "#dbe5d5",
    lightSecondary: "#eef4e8",
    dark: "#243025",
    darkSecondary: "#314035",
  },
  {
    light: "#d8e7f0",
    lightSecondary: "#edf5f8",
    dark: "#1f2a31",
    darkSecondary: "#2a3842",
  },
  {
    light: "#ddd9d1",
    lightSecondary: "#efebe4",
    dark: "#2a2928",
    darkSecondary: "#363534",
  },
  {
    light: "#e6d7bf",
    lightSecondary: "#f4ecde",
    dark: "#30261c",
    darkSecondary: "#3d3124",
  },
  {
    light: "#eadff1",
    lightSecondary: "#f4edf8",
    dark: "#2d2435",
    darkSecondary: "#382d42",
  },
];

const serviceStoryChapters = services.map((service, index) => {
  const config = serviceStoryConfigBySlug[service.slug] ?? {};

  return {
    ...service,
    label: config.label ?? service.tagline ?? service.title,
    palette:
      config.palette ?? fallbackPalettes[index % fallbackPalettes.length],
  };
});

export default function PaintingServicesStorySection({
  title,
  subtitle,
}) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activeServiceChapter, setActiveServiceChapter] = useState(0);
  const serviceStepRefs = useRef([]);
  const activeStoryChapter =
    serviceStoryChapters[activeServiceChapter] ?? serviceStoryChapters[0];
  const serviceStoryVars = activeStoryChapter
    ? {
        "--story-bg": activeStoryChapter.palette.light,
        "--story-bg-secondary": activeStoryChapter.palette.lightSecondary,
        "--story-bg-dark": activeStoryChapter.palette.dark,
        "--story-bg-dark-secondary": activeStoryChapter.palette.darkSecondary,
        "--story-transition-duration": prefersReducedMotion ? "180ms" : "700ms",
      }
    : undefined;

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncMotionPreference = () => {
      setPrefersReducedMotion(motionQuery.matches);
    };

    syncMotionPreference();

    if (motionQuery.addEventListener) {
      motionQuery.addEventListener("change", syncMotionPreference);
    } else {
      motionQuery.addListener(syncMotionPreference);
    }

    return () => {
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener("change", syncMotionPreference);
      } else {
        motionQuery.removeListener(syncMotionPreference);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    if (!desktopQuery.matches) return undefined;

    const steps = serviceStepRefs.current.filter(Boolean);
    if (!steps.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const nextIndex = Number(entry.target.dataset.chapterIndex);
          if (Number.isNaN(nextIndex)) return;

          startTransition(() => {
            setActiveServiceChapter((currentIndex) =>
              currentIndex === nextIndex ? currentIndex : nextIndex,
            );
          });
        });
      },
      {
        rootMargin: "-42% 0px -42% 0px",
        threshold: 0,
      },
    );

    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-10 services-story-section md:py-14 lg:py-0"
      style={serviceStoryVars}
    >
      <div className="relative section-wrapper">
        <div className="lg:grid lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
          <div className="mb-10 lg:mb-0">
            <div className="lg:sticky lg:top-24 lg:flex lg:h-[calc(100svh-8rem)] lg:flex-col lg:justify-center lg:py-14">
              <div className="max-w-md">
                <span className="inline-block mb-4 text-sm font-semibold tracking-[0.32em] uppercase text-brand-600 dark:text-brand-300">
                  What We Do
                </span>
                <h2 className="text-4xl leading-tight text-gray-900 font-display dark:text-white md:text-5xl">
                  {title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  {subtitle}
                </p>
                <div className="hidden mt-8 lg:block">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-gray-500 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                    <span>{String(activeServiceChapter + 1).padStart(2, "0")}</span>
                    <span aria-hidden="true" className="w-4 h-px bg-current/30" />
                    <span>{activeStoryChapter?.label}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5 mt-8 text-sm text-gray-600 dark:text-gray-300 lg:mt-10">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 font-semibold transition-colors text-brand-600 hover:text-brand-700 dark:text-brand-300 dark:hover:text-brand-200"
                >
                  View All Services <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="hidden lg:block">
              <div className="relative services-story-scroll-track">
                <div className="sticky top-24 flex h-[calc(100svh-6rem)] items-center justify-end">
                  <div className="services-story-stage relative w-full max-w-[42rem]">
                    {serviceStoryChapters.map((chapter, index) => {
                      const isActive = activeServiceChapter === index;

                      return (
                        <article
                          key={chapter.slug}
                          aria-hidden={!isActive}
                          className={`services-story-card ${
                            isActive ? "is-active" : "is-inactive"
                          }`}
                        >
                          <div className="services-story-image">
                            <img
                              loading="lazy"
                              src={chapter.thumbImage}
                              alt={chapter.title}
                              className="absolute inset-0 object-cover w-full h-full"
                            />
                          </div>

                          <div className="p-7 sm:p-8">
                            <div>
                              <div className="flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-gray-500 dark:text-gray-300">
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                <span
                                  aria-hidden="true"
                                  className="w-5 h-px bg-current/30"
                                />
                                <span>{chapter.label}</span>
                              </div>

                              <h3 className="mt-4 text-3xl leading-tight text-gray-900 font-display dark:text-white md:text-4xl">
                                {chapter.title}
                              </h3>
                              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.28em] text-brand-600 dark:text-brand-300">
                                {chapter.tagline}
                              </p>
                              <p className="max-w-lg mt-5 text-base leading-relaxed text-gray-600 dark:text-gray-300 md:text-lg">
                                {chapter.summary}
                              </p>
                              <div className="flex flex-wrap items-center gap-3 mt-6">
                                <Link
                                  to={`/services/${chapter.slug}`}
                                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors text-brand-600 hover:text-brand-700 dark:text-brand-300 dark:hover:text-brand-200"
                                >
                                  Learn More <ArrowRight size={16} />
                                </Link>
                                <Link
                                  to="/contact"
                                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-full bg-brand-500 hover:bg-brand-600 dark:bg-brand-500 dark:hover:bg-brand-400"
                                >
                                  Book Now
                                </Link>
                              </div>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>

                <div aria-hidden="true" className="services-story-scroll-steps">
                  {serviceStoryChapters.map((chapter, index) => (
                    <div
                      key={chapter.slug}
                      data-chapter-index={index}
                      ref={(node) => {
                        serviceStepRefs.current[index] = node;
                      }}
                      className="h-[82svh]"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:hidden">
              {serviceStoryChapters.map((chapter, index) => (
                <article
                  key={chapter.slug}
                  className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm dark:border-white/10 dark:bg-[#10161c]/80 dark:shadow-[0_20px_60px_rgba(0,0,0,0.22)]"
                >
                  <div className="services-story-image min-h-[220px]">
                    <img
                      loading="lazy"
                      src={chapter.thumbImage}
                      alt={chapter.title}
                      className="absolute inset-0 object-cover w-full h-full"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-gray-500 dark:text-gray-300">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span aria-hidden="true" className="w-5 h-px bg-current/30" />
                      <span>{chapter.label}</span>
                    </div>
                    <h3 className="mt-4 text-2xl leading-tight text-gray-900 font-display dark:text-white">
                      {chapter.title}
                    </h3>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.28em] text-brand-600 dark:text-brand-300">
                      {chapter.tagline}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                      {chapter.summary}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 mt-6">
                      <Link
                        to={`/services/${chapter.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-colors text-brand-600 hover:text-brand-700 dark:text-brand-300 dark:hover:text-brand-200"
                      >
                        Learn More <ArrowRight size={16} />
                      </Link>
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-full bg-brand-500 hover:bg-brand-600 dark:bg-brand-500 dark:hover:bg-brand-400"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
