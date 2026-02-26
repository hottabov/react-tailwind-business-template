import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import SEO from "@/components/ui/SEO";
import CTA from "@/components/ui/CTA";
import SectionHeading from "@/components/ui/SectionHeading";
import StarRating from "@/components/ui/StarRating";
import { seoData } from "@/data/seo";
import { services } from "@/data/services";
import { reviews } from "@/data/reviews";

// Assets
import heroImage from "@/assets/images/hero/hero-main.avif";

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

  return (
    <>
      <SEO {...seoData.home} />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional painters working on a Melbourne home"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Hero content */}
        <div className="section-wrapper relative z-10 text-center text-white pt-28 pb-20">
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-brand-500/20 border border-brand-500/40
            text-brand-300 text-sm font-semibold tracking-wider uppercase mb-6 animate-fade-in"
          >
            ⭐ Melbourne's #1 Rated Painters
          </span>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-up">
            Transform Your Home
            <br />
            <span className="gradient-text">Inside & Out</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Premium interior and exterior painting for Melbourne homes and
            businesses. Free quotes, guaranteed quality.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-500
                hover:bg-brand-600 text-white font-bold text-lg transition-all duration-300
                hover:scale-105 shadow-2xl shadow-brand-500/40"
            >
              Get a Free Quote
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:0391234567"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/60
                hover:border-white text-white font-bold text-lg transition-all duration-300 hover:bg-white/10"
            >
              <Phone size={20} />
              (03) 9123 4567
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="flex flex-wrap justify-center gap-6 mt-14 text-white/60 text-sm animate-fade-in"
            style={{ animationDelay: "0.4s" }}
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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ─────────────────────────────────────── */}
      <section className="py-24 bg-gray-50 dark:bg-dark-card">
        <div className="section-wrapper">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Painting Services"
            subtitle="From a single room to a full commercial building — we handle every painting project with the same precision and care."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group bg-white dark:bg-dark-bg rounded-2xl overflow-hidden shadow-sm
                  hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-dark-border"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={s.thumbImage}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-gray-900 dark:text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-4">
                    {s.summary}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-brand-500 font-semibold text-sm
                    group-hover:gap-2 transition-all duration-200"
                  >
                    Continue reading <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-dark-bg">
        <div className="section-wrapper grid lg:grid-cols-2 gap-16 items-center">
          <div>
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
                    className="text-brand-500 flex-shrink-0"
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
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1745092707630-c00ef0a006c4?w=900&q=80"
              alt="Professional painter at work"
              className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -left-6 bg-brand-500 text-white rounded-2xl p-5 shadow-xl">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm font-medium text-brand-100">
                Years in Business
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white dark:bg-dark-card rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-dark-border">
              <StarRating />
              <div className="font-semibold text-gray-800 dark:text-white mt-1">
                5.0 Google Rating
              </div>
              <div className="text-sm text-gray-400">Based on 200+ reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECENT REVIEWS TEASER ─────────────────────────────────── */}
      <section className="py-24 bg-gray-50 dark:bg-dark-card">
        <div className="section-wrapper">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
            center
          />
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {featuredReviews.map((r) => (
              <div
                key={r.id}
                className="bg-white dark:bg-dark-bg rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-dark-border"
              >
                <StarRating />
                <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-4">
                  "{r.text}"
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">
                      {r.name}
                    </div>
                    <div className="text-gray-400 text-xs">{r.business}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-brand-500 font-semibold hover:gap-3 transition-all"
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
