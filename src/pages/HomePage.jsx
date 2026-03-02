import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import SEO from "@/components/ui/SEO";
import CTA from "@/components/ui/CTA";
import SectionHeading from "@/components/ui/SectionHeading";
import StarRating from "@/components/ui/StarRating";
import { seoData } from "@/data/seo";
import { services } from "@/data/services";
import { reviews } from "@/data/reviews";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Assets
import heroImage from "@/assets/images/hero/hero-main.avif";
import whyUsImage from "@/assets/images/home/before-after-painting.avif";

const whyUs = [
  "Licensed & fully insured (VBA registered)",
  "2–5 year workmanship warranty",
  "Premium Dulux & Taubmans paints only",
  "Free colour consultation with every quote",
  "All Melbourne suburbs serviced",
  "Clean & tidy – every single day",
];

export default function HomePage() {
  const featuredReviews = reviews.slice(0, 3);

  // Setup scroll animations for different sections
  const [servicesRef, servicesVisible] = useScrollAnimation();
  const [whyUsTextRef, whyUsTextVisible] = useScrollAnimation();
  const [whyUsImgRef, whyUsImgVisible] = useScrollAnimation();
  const [reviewsRef, reviewsVisible] = useScrollAnimation();

  return (
    <>
      <SEO {...seoData.home} />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional painters working on a Melbourne home"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Hero content */}
        {/* Note: Hero animations use predefined Tailwind keyframes (animate-fade-up) since they load immediately */}
        <div className="relative z-10 pb-20 text-center text-white section-wrapper pt-28">
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-brand-500/20 border border-brand-500/40
            text-brand-300 text-sm font-semibold tracking-wider uppercase mb-6 animate-fade-in"
          >
            ⭐ Melbourne's #1 Rated Painters
          </span>

          <h1 className="mb-6 text-5xl leading-tight font-display md:text-6xl lg:text-7xl animate-fade-up">
            Transform Your Home
            <br />
            <span className="gradient-text">Inside & Out</span>
          </h1>

          <p
            className="max-w-2xl mx-auto mb-10 text-xl md:text-2xl text-white/80 animate-fade-up"
            style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}
          >
            Premium interior and exterior painting for Melbourne homes and
            businesses. Free quotes, guaranteed quality.
          </p>

          <div
            className="flex flex-col justify-center gap-4 sm:flex-row animate-fade-up"
            style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
          >
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
          <div
            className="flex flex-wrap justify-center gap-6 text-sm mt-14 text-white/60 animate-fade-in"
            style={{ animationDelay: "0.4s", animationFillMode: "backwards" }}
          >
            {[
              "500+ Projects Completed",
              "15+ Years Experience",
              "5-Star Google Rating",
              "Same-Day Quotes",
            ].map((b) => (
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
      <section className="py-24 bg-gray-50 dark:bg-dark-card" ref={servicesRef}>
        <div className="section-wrapper">
          <div
            className={`transition-all duration-700 transform ${
              servicesVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <SectionHeading
              eyebrow="What We Do"
              title="Our Painting Services"
              subtitle="From a single room to a full commercial building — we handle every painting project with the same precision and care."
              center
            />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className={`group bg-white dark:bg-dark-bg rounded-2xl overflow-hidden shadow-sm
                  hover:shadow-xl transition-all duration-700 hover:-translate-y-1 border border-gray-100 dark:border-dark-border
                  transform ${servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${i * 100}ms` }} // Staggered delay based on index
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={s.thumbImage}
                    alt={s.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl text-gray-900 font-display dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                    {s.summary}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold transition-all duration-200 text-brand-500 group-hover:gap-2">
                    Continue reading <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
              {whyUs.map((item, index) => (
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

          <div className="grid gap-6 mb-10 md:grid-cols-3">
            {featuredReviews.map((r, i) => (
              <div
                key={r.id}
                className={`bg-white dark:bg-dark-bg rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-dark-border
                  transition-all duration-700 transform ${
                    reviewsVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-16"
                  }`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                <StarRating />
                <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300 line-clamp-4">
                  "{r.text}"
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="object-cover w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {r.name}
                    </div>
                    <div className="text-xs text-gray-400">{r.business}</div>
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
              Read All 12 Reviews <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <CTA />
    </>
  );
}
