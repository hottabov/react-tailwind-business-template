import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import SEO from "@/components/ui/SEO";
import CTA from "@/components/ui/CTA";
import StarRating from "@/components/ui/StarRating";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service)
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl text-gray-900 font-display dark:text-white">
          Service not found
        </h1>
        <p className="mt-2 mb-6 text-gray-600 dark:text-gray-400">
          The service you are looking for does not exist.
        </p>
        <Link
          to="/services"
          className="inline-block px-6 py-3 text-white transition-colors rounded-lg bg-brand-500 hover:bg-brand-600"
        >
          View All Services
        </Link>
      </div>
    );

  return (
    <>
      <SEO
        title={service.seoTitle}
        description={service.seoDescription}
        keywords={service.seoKeywords}
        image={service.heroImage}
        schema={{
          "@type": "Service",
          name: `${service.title} Melbourne`,
          serviceType: service.title,
          description: service.seoDescription,
          areaServed: {
            "@type": "City",
            name: "Melbourne",
          },
          provider: {
            "@type": "HousePainter",
            name: siteConfig.name,
            telephone: siteConfig.phone,
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "AUD",
            availability: "https://schema.org/InStock",
          },
        }}
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] max-h-[600px] flex items-end overflow-hidden">
        <img
          src={service.heroImage}
          alt={service.title}
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 w-full section-wrapper pb-14">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 mb-6 text-sm font-medium transition-colors text-white/70 hover:text-white"
          >
            <ArrowLeft size={16} /> All Services
          </Link>
          <h1 className="mb-4 text-5xl font-bold leading-tight text-white md:text-6xl font-display drop-shadow-md">
            {service.title}
          </h1>
          <p className="max-w-2xl text-xl font-light md:text-2xl text-white/90 drop-shadow-sm">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* Intro Summary */}
      <section className="py-12 border-b border-gray-100 bg-gray-50 dark:bg-dark-bg/50 dark:border-dark-border">
        <div className="max-w-4xl mx-auto text-center section-wrapper">
          <p className="text-xl font-medium leading-relaxed text-gray-700 md:text-2xl dark:text-gray-300">
            {service.summary}
          </p>
        </div>
      </section>

      {/* Problem & Solution Split Section */}
      <section className="items-stretch py-20 overflow-hidden bg-white lg:py-28 dark:bg-dark-bg">
        <div className="section-wrapper">
          <div className="grid items-stretch grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Image Side - Stretching to full height of parent */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group w-full h-full min-h-[400px]">
              <div className="absolute inset-0 z-10 transition-colors duration-500 pointer-events-none bg-brand-500/10 group-hover:bg-brand-500/0" />
              <img
                loading="lazy"
                src={service.contentImage || service.thumbImage}
                alt={`${service.title} - The clear solution`}
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            {/* Text Side */}
            <div className="flex flex-col justify-center gap-10">
              {/* Problem */}
              <div>
                <span className="block mb-2 text-sm font-bold tracking-wider text-red-500 uppercase dark:text-red-400">
                  The Challenge
                </span>
                <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl font-display dark:text-white">
                  {service.problem?.title}
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  {service.problem?.text}
                </p>
              </div>

              {/* Solution */}
              <div className="relative p-8 overflow-hidden border border-gray-100 shadow-sm md:p-10 rounded-3xl bg-gray-50 dark:bg-dark-card dark:border-dark-border">
                <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 rounded-full bg-brand-500/5 blur-3xl" />
                <span className="relative z-10 block mb-2 text-sm font-bold tracking-wider uppercase text-brand-500">
                  Our Solution
                </span>
                <h3 className="relative z-10 mb-4 text-2xl font-bold text-gray-900 md:text-3xl font-display dark:text-white">
                  {service.solution?.title}
                </h3>
                <p className="relative z-10 mb-8 leading-relaxed text-gray-600 dark:text-gray-400">
                  {service.solution?.text}
                </p>
                <ul className="relative z-10 space-y-4">
                  {service.solution?.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-1 mt-1 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400">
                        <CheckCircle size={16} strokeWidth={3} />
                      </div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 border-gray-100 bg-gray-50 dark:bg-dark-bg/40 border-y dark:border-dark-border">
        <div className="section-wrapper">
          <div className="max-w-3xl mx-auto mb-16 text-center md:mb-20">
            <span className="block mb-3 text-sm font-semibold tracking-wider uppercase text-brand-500">
              Simple & Transparent
            </span>
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl font-display dark:text-white">
              {service.process?.title || "How We Work"}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 md:text-xl">
              A streamlined process from your first call to the final
              brushstroke, ensuring quality at every step.
            </p>
          </div>

          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* Horizontal Line for lg screens */}
            <div className="hidden lg:block absolute top-[48px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-gray-200 via-brand-200 to-gray-200 dark:from-dark-border dark:via-brand-900/40 dark:to-dark-border z-0" />

            {service.process?.steps.map((step, idx) => (
              <div key={idx} className="relative z-10 h-full group">
                <div className="h-full p-8 transition-all duration-300 bg-white border border-gray-100 shadow-sm dark:bg-dark-card rounded-3xl dark:border-dark-border hover:shadow-xl hover:border-brand-200 dark:hover:border-brand-500/30">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-2xl font-bold transition-transform duration-300 border shadow-sm rounded-2xl bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 font-display lg:mx-0 group-hover:scale-110 border-brand-100 dark:border-brand-800/50">
                    {idx + 1}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-center text-gray-900 font-display lg:text-left dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-center text-gray-600 dark:text-gray-400 lg:text-left">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page Secondary CTA */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="relative section-wrapper">
          <div className="relative max-w-4xl mx-auto rounded-[2rem] p-10 md:p-14 bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border shadow-2xl dark:shadow-2xl shadow-brand-500/5 flex flex-col items-center text-center overflow-hidden">
            <div className="absolute inset-0 rounded-[2rem] border border-brand-500/20 pointer-events-none" />
            <div className="absolute w-[300px] h-[300px] bg-brand-500/10 dark:bg-brand-500/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />

            <h2 className="relative z-10 mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl font-display dark:text-white">
              {service.secondaryCta?.title}
            </h2>
            <p className="relative z-10 max-w-xl mb-8 text-lg text-gray-600 dark:text-gray-300">
              {service.secondaryCta?.description}
            </p>
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-500 text-white font-bold text-lg rounded-full overflow-hidden transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-0.5 relative z-10"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="relative z-10">
                {service.secondaryCta?.buttonText}
              </span>
              <ArrowRight
                size={20}
                className="relative z-10 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Service-Specific Reviews */}
      <section className="py-20 border-t border-gray-100 lg:py-28 bg-gray-50 dark:bg-dark-bg/60 dark:border-dark-border">
        <div className="section-wrapper">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl font-display dark:text-white">
              Trusted by Melbourne
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 md:text-xl">
              Some feedback from our recent {service.title.toLowerCase()}{" "}
              clients.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {service.reviews?.map((review, idx) => (
              <div
                key={idx}
                className="transition-all duration-300 bg-white border border-gray-100 shadow-sm dark:bg-dark-card rounded-2xl p-7 dark:border-dark-border hover:shadow-lg hover:-translate-y-1"
              >
                <StarRating count={review.rating} />
                <p className="mt-4 text-base italic leading-relaxed text-gray-600 dark:text-gray-300">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4 pt-5 mt-6 border-t border-gray-200 dark:border-dark-border">
                  <img
                    loading="lazy"
                    src={review.avatar}
                    alt={review.name}
                    className="object-cover w-12 h-12 rounded-full ring-2 ring-brand-500/30"
                  />
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      {review.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {review.business}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Global CTA */}
      <CTA
        title={`Ready for your ${service.title} project?`}
        subtitle="Fill out our form for a free, no-obligation quote and we will get back to you within 24 hours."
      />
    </>
  );
}
