import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CTA({
  title = "Ready to Transform Your Space?",
  subtitle = "Join hundreds of happy Melbourne homeowners. Get your free, no-obligation quote today.",
  buttonText = "Get a Free Quote",
  buttonLink = "/contact",
}) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-16 overflow-hidden lg:py-24 bg-gray-50 dark:bg-dark-bg"
    >
      {/* ── BACKGROUND EFFECTS ──────────────────────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-brand-500/50 dark:bg-brand-500/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/4 animate-pulse duration-10000" />
        <div className="absolute w-[400px] h-[400px] bg-amber-400/15 dark:bg-amber-600/10 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 section-wrapper">
        {/* ── CARD CONTAINER ────────────────────────────────────────── */}
        <div
          className={`relative max-w-5xl mx-auto rounded-[2rem] p-8 md:p-10 lg:p-12 
            bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border
            shadow-xl dark:shadow-2xl shadow-brand-500/5
            transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95"
            }`}
        >
          <div className="absolute inset-0 rounded-[2rem] border border-brand-500/10 pointer-events-none" />

          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left side: Text Content */}
            <div className="text-center lg:col-span-7 lg:text-left">
              <h2 className="mb-4 text-3xl leading-tight text-gray-900 font-display md:text-4xl lg:text-5xl dark:text-white">
                {title}
              </h2>
              <p className="max-w-xl mx-auto mb-8 text-base leading-relaxed text-gray-600 md:text-lg dark:text-gray-300 lg:mx-0">
                {subtitle}
              </p>

              <div className="flex flex-col items-center justify-center gap-5 sm:flex-row lg:justify-start">
                <Link
                  to={buttonLink}
                  className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 
                    bg-brand-500 text-white font-bold text-base md:text-lg rounded-full overflow-hidden transition-all
                    shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-0.5"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <span className="relative z-10">{buttonText}</span>
                  <ArrowRight
                    className="relative z-10 transition-transform group-hover:translate-x-1"
                    size={18}
                  />
                </Link>

                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Takes less than 2 mins
                </span>
              </div>
            </div>

            {/* Right side: Social Proof / Visuals */}
            <div className="flex flex-col items-center justify-center pt-8 border-t border-gray-100 lg:col-span-5 lg:border-t-0 lg:border-l dark:border-dark-border lg:pt-0 lg:pl-8">
              <div className="flex mb-4 -space-x-3">
                {[47, 12, 45, 15, 49].map((imgId, i) => (
                  <img loading="lazy"
                    key={imgId}
                    src={`https://i.pravatar.cc/150?img=${imgId}`}
                    alt="Customer avatar"
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border-[3px] border-white dark:border-dark-card object-cover shadow-sm"
                    style={{ zIndex: 10 - i }}
                  />
                ))}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-[3px] border-white dark:border-dark-card bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold flex items-center justify-center text-xs md:text-sm z-0 shadow-sm">
                  +200
                </div>
              </div>

              <div className="flex items-center gap-1 mb-2 text-brand-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm font-semibold text-center text-gray-900 dark:text-white md:text-base">
                Rated 5.0 by Melbourne locals
              </p>

              <a
                href="https://customerreviews.google.com/"
                target="_blank"
                className="text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                See Google Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
