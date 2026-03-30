import SEO from "@/components/ui/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import StarRating from "@/components/ui/StarRating";
import CTA from "@/components/ui/CTA";
import { seoData } from "@/data/seo";
import { reviews } from "@/data/reviews";
import reviewsHero from "@/assets/images/about/about-pro-painters.avif";

export default function ReviewsPage() {
  return (
    <>
      <SEO {...seoData.reviews} />

      <section className="relative pt-64 pb-16 overflow-hidden bg-gray-900 text-white text-center">
        <img
          src={reviewsHero}
          alt="Melbourne Pro Painters team with a completed painting project"
          className="absolute inset-0 object-cover w-full h-full opacity-20"
        />
        <div className="section-wrapper">
          <div className="relative text-center section-wrapper">
            <div className="flex justify-center mb-4">
              <StarRating />
            </div>
            <h1 className="font-display text-5xl md:text-6xl mb-4">
              Customer Reviews
            </h1>
            <p className="text-gray-300 text-xl max-w-xl mx-auto">
              Don't take our word for it — hear from the hundreds of Melbourne
              homeowners and businesses we've transformed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="section-wrapper">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div
                key={r.id}
                className="bg-gray-50 dark:bg-dark-card rounded-2xl p-7 border border-gray-100 dark:border-dark-border
                  hover:shadow-lg transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <StarRating count={r.rating} />
                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed italic text-base">
                  "{r.text}"
                </p>
                <div className="flex items-center gap-4 mt-6 pt-5 border-t border-gray-200 dark:border-dark-border">
                  <img loading="lazy"
                    src={r.avatar}
                    alt={r.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-500/30"
                  />
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      {r.name}
                    </div>
                    <div className="text-gray-400 text-sm">{r.business}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
