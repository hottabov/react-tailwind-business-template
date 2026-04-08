import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Phone, Calendar } from "lucide-react";
import SEO from "@/components/ui/SEO";
import CTA from "@/components/ui/CTA";
import SectionHeading from "@/components/ui/SectionHeading";
import StarRating from "@/components/ui/StarRating";
import BrushStroke from "@/components/ui/BrushStroke";
import AreasWeServeSection from "@/components/home/AreasWeServeSection";
import PaintingServicesStorySection from "@/components/home/PaintingServicesStorySection";
import RecentWorkSection from "@/components/portfolio/RecentWorkSection";
import { seoData } from "@/data/seo";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { usePortfolioItems } from "@/hooks/usePortfolioItems";
import { useReviews } from "@/hooks/useReviews";

// Assets
import heroImage from "@/assets/images/hero/hero-blog.avif";
import whyUsImage from "@/assets/images/home/before-after-painting.avif";
import heroVideo from "@/assets/videos/painters.mp4";
import heroVideoMobile from "@/assets/videos/painters_mob.mp4";

const whyUs = [
  "Licensed & fully insured (VBA registered)",
  "2–5 year workmanship warranty",
  "Premium Dulux & Taubmans paints only",
  "Free colour consultation with every quote",
  "All Melbourne suburbs serviced",
  "Clean & tidy – every single day",
];

const heroProof = [
  "Quotes Within 24 Hours",
  "15+ Years Experience",
  "Clean & Tidy Crews",
  "Workmanship Warranty Included",
];

function getFeaturedGridClassName(itemCount) {
  if (itemCount === 1) {
    return "mx-auto grid max-w-4xl gap-6";
  }

  if (itemCount === 2) {
    return "mx-auto grid max-w-6xl gap-6 md:grid-cols-2";
  }

  return "grid gap-6 md:grid-cols-3";
}

export default function HomePage() {
  const blogPosts = useBlogPosts();
  const portfolioItems = usePortfolioItems();
  const reviews = useReviews();
  const featuredPortfolioItems = useMemo(
    () =>
      portfolioItems
        .filter((item) => item.frontmatter.showOnHomePage)
        .slice(0, 3),
    [portfolioItems],
  );
  const featuredReviews = useMemo(
    () =>
      reviews.filter((review) => review.frontmatter.showOnHomePage).slice(0, 3),
    [reviews],
  );
  const featuredReviewsGridClassName = useMemo(
    () => getFeaturedGridClassName(featuredReviews.length),
    [featuredReviews.length],
  );
  const recentPosts = useMemo(() => blogPosts.slice(0, 3), [blogPosts]);
  const [isMobileHero, setIsMobileHero] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Setup scroll animations for different sections
  const [whyUsTextRef, whyUsTextVisible] = useScrollAnimation();
  const [whyUsImgRef, whyUsImgVisible] = useScrollAnimation();
  const [reviewsRef, reviewsVisible] = useScrollAnimation();
  const [blogRef, blogVisible] = useScrollAnimation();

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

  return (
    <>
      <SEO {...seoData.home} preloadImage={heroImage} />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        {/* Background video */}
        <div className="absolute inset-0">
          {prefersReducedMotion ? (
            <img
              src={heroImage}
              alt=""
              aria-hidden="true"
              className="object-cover w-full h-full"
              fetchPriority="high"
            />
          ) : (
            <video
              key={isMobileHero ? "mobile-hero-video" : "desktop-hero-video"}
              className="object-cover w-full h-full"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={heroImage}
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

        {/* Hero content */}
        {/* Note: Hero animations use predefined Tailwind keyframes (animate-fade-up) since they load immediately */}
        <div className="relative z-10 pb-20 text-center text-white section-wrapper pt-28">
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-brand-500/20 border border-brand-500/40
            text-brand-300 text-sm font-semibold tracking-wider uppercase mb-6 animate-fade-in"
          >
            Licensed, Insured & Warranty-Backed
          </span>

          <h1 className="mb-6 text-5xl leading-tight font-display md:text-6xl lg:text-7xl animate-fade-up">
            Melbourne Painters
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-500">
                Quick, Clean Results
              </span>
              <BrushStroke
                variant={1}
                className="text-brand-500/80 -bottom-8 -rotate-2"
              />
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mb-10 text-xl md:text-2xl text-white/80 animate-fade-up [animation-delay:100ms] [animation-fill-mode:backwards]">
            Interior, exterior and commercial painting for Melbourne homes and
            businesses. Fixed written quotes within 24 hours, careful
            preparation, and clean workmanship backed by a written warranty.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-start animate-fade-up [animation-delay:200ms] [animation-fill-mode:backwards]">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-full shadow-2xl bg-brand-500 hover:bg-brand-600 hover:scale-105 shadow-brand-500/40"
            >
              Get a Free Quote
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:0391234567"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-white transition-all duration-300 border-2 rounded-full border-white/60 hover:border-white hover:bg-white/10"
            >
              <Phone size={20} />
              (03) 9123 4567
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm mt-14 text-white/60 animate-fade-in [animation-delay:400ms] [animation-fill-mode:backwards]">
            {heroProof.map((b) => (
              <span key={b} className="flex items-center gap-2">
                <CheckCircle size={15} className="text-brand-400" /> {b}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ─────────────────────────────────────── */}
      <PaintingServicesStorySection
        title="Melbourne Painting Services"
        subtitle="From a single room to a full commercial building — we handle every painting project with the same precision and care."
      />

      <RecentWorkSection
        title="Melbourne Recent Work"
        subtitle="A quick look at recent interior, exterior and roof transformations across Melbourne."
        items={featuredPortfolioItems}
        locationKeyword="Melbourne"
      />

      {/* ── WHY CHOOSE US ─────────────────────────────────────────── */}
      <section className="py-24 overflow-hidden bg-white dark:bg-dark-bg">
        <div className="grid items-center gap-16 section-wrapper lg:grid-cols-2">
          {/* Text Side - Slides in from left */}
          <div
            ref={whyUsTextRef}
            className={`transition-all duration-1000 transform ${
              whyUsTextVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <SectionHeading
              eyebrow="Why Us"
              title="The Melbourne Pro Painters Difference"
              subtitle="We don't just paint walls. We transform spaces — and we back every project with our workmanship guarantee."
            />
            <ul className="space-y-4">
              {whyUs.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle
                    className="flex-shrink-0 text-brand-500"
                    size={20}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full
              bg-brand-500 hover:bg-brand-600 text-white font-bold transition-all hover:scale-105 shadow-lg shadow-brand-500/20"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>

          {/* Image Side - Slides in from right */}
          <div
            ref={whyUsImgRef}
            className={`relative transition-all duration-1000 delay-300 transform ${
              whyUsImgVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <img
              loading="lazy"
              src={whyUsImage}
              alt="The results of a professional house painting job in Melbourne, showing a before and after comparison"
              className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute p-5 text-white shadow-xl -bottom-6 -left-6 bg-brand-500 rounded-2xl">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm font-medium text-brand-100">
                Years in Business
              </div>
            </div>
            <div className="absolute p-4 bg-white border border-gray-100 shadow-xl -top-6 -right-6 dark:bg-dark-card rounded-2xl dark:border-dark-border">
              <StarRating />
              <div className="mt-1 font-semibold text-gray-800 dark:text-white">
                5.0 Google Rating
              </div>
              <div className="text-sm text-gray-400">Based on 200+ reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECENT REVIEWS TEASER ─────────────────────────────────── */}
      {featuredReviews.length > 0 ? (
        <section className="py-24 bg-gray-50 dark:bg-dark-card" ref={reviewsRef}>
          <div className="section-wrapper">
            <div
              className={`transition-all duration-700 transform ${
                reviewsVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }`}
            >
              <SectionHeading
                eyebrow="Testimonials"
                title="What Our Clients Say"
                center
              />
            </div>

            <div className={`${featuredReviewsGridClassName} mb-10`}>
              {featuredReviews.map((review, i) => (
                <div
                  key={review.slug}
                  className={`bg-white dark:bg-dark-bg rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-dark-border
                    transition-all duration-700 transform ${
                      reviewsVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-16"
                    }`}
                  style={{ transitionDelay: `${200 + i * 150}ms` }}
                >
                  <StarRating count={review.frontmatter.rating} />
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300 line-clamp-4">
                    "{review.content}"
                  </p>
                  <div className="flex items-center gap-3 mt-5">
                    <img
                      loading="lazy"
                      src={review.frontmatter.avatar}
                      alt={review.frontmatter.name}
                      className="object-cover w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {review.frontmatter.name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {review.frontmatter.business}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className={`text-center transition-all duration-1000 delay-700 ${
                reviewsVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <Link
                to="/reviews"
                className="inline-flex items-center gap-2 font-semibold transition-all text-brand-500 hover:gap-3"
              >
                Read All {reviews.length} Reviews <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <AreasWeServeSection />

      {/* ── LATEST FROM THE BLOG ──────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-dark-bg" ref={blogRef}>
        <div className="section-wrapper">
          <div
            className={`transition-all duration-700 transform ${
              blogVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <SectionHeading
              eyebrow="Expert Advice"
              title="Latest From Our Blog"
              subtitle="Tips, trends, and guides from Melbourne's painting professionals to help you plan your next project."
              center
            />
          </div>

          <div className="grid gap-8 mb-12 md:grid-cols-3">
            {recentPosts.map((post, i) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className={`group flex flex-col bg-white dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-100 dark:border-dark-border shadow-sm hover:shadow-xl transition-all duration-500
                  transform ${blogVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    loading="lazy"
                    src={post.frontmatter.coverImage}
                    alt={post.frontmatter.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-bold text-white rounded-full shadow-md bg-brand-500">
                      {post.frontmatter.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-grow p-6">
                  <div className="flex items-center gap-2 mb-3 text-xs text-gray-400">
                    <Calendar size={14} />
                    {post.frontmatter.date}
                  </div>

                  <h3 className="mb-3 text-xl leading-tight text-gray-900 transition-colors font-display dark:text-white group-hover:text-brand-500">
                    {post.frontmatter.title}
                  </h3>

                  <p className="flex-grow mb-5 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                    {post.frontmatter.excerpt}
                  </p>

                  <div className="mt-auto inline-flex items-center gap-1.5 text-brand-500 font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Continue reading <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div
            className={`text-center transition-all duration-1000 delay-700 ${
              blogVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link
              to="/blog"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full
              bg-brand-500 hover:bg-brand-600 text-white font-bold transition-all hover:scale-105 shadow-lg shadow-brand-500/20"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <CTA />
    </>
  );
}
