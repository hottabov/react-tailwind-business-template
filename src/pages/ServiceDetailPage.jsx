import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import SEO from "@/components/ui/SEO";
import CTA from "@/components/ui/CTA";
import StarRating from "@/components/ui/StarRating";
import { services } from "@/data/services";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service)
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-display text-gray-900 dark:text-white">Service not found</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2 mb-6">The service you are looking for does not exist.</p>
        <Link to="/services" className="px-6 py-3 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors inline-block">
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
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] max-h-[600px] flex items-end overflow-hidden">
        <img
          src={service.heroImage}
          alt={service.title}
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 section-wrapper pb-14 w-full">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 mb-6 text-sm font-medium transition-colors text-white/70 hover:text-white"
          >
            <ArrowLeft size={16} /> All Services
          </Link>
          <h1 className="text-5xl md:text-6xl text-white font-display font-bold leading-tight mb-4 drop-shadow-md">
            {service.title}
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-white/90 font-light drop-shadow-sm">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* Intro Summary */}
      <section className="py-12 bg-gray-50 dark:bg-dark-bg/50 border-b border-gray-100 dark:border-dark-border">
        <div className="max-w-4xl mx-auto section-wrapper text-center">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 font-medium">
            {service.summary}
          </p>
        </div>
      </section>

      {/* Problem & Solution Split Section */}
      <section className="py-20 lg:py-28 bg-white dark:bg-dark-bg overflow-hidden items-stretch">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            {/* Image Side - Stretching to full height of parent */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group w-full h-full min-h-[400px]">
              <div className="absolute inset-0 bg-brand-500/10 group-hover:bg-brand-500/0 transition-colors duration-500 z-10 pointer-events-none" />
              <img loading="lazy"
                src={service.contentImage || service.thumbImage} 
                alt={`${service.title} - The clear solution`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            
            {/* Text Side */}
            <div className="flex flex-col justify-center gap-10">
              {/* Problem */}
              <div>
                <span className="text-sm font-bold tracking-wider uppercase text-red-500 dark:text-red-400 mb-2 block">The Challenge</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  {service.problem?.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.problem?.text}
                </p>
              </div>

              {/* Solution */}
              <div className="p-8 md:p-10 rounded-3xl bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-dark-border shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-3xl -mr-10 -mt-10" />
                <span className="text-sm font-bold tracking-wider uppercase text-brand-500 mb-2 block relative z-10">Our Solution</span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4 relative z-10">
                  {service.solution?.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed relative z-10">
                  {service.solution?.text}
                </p>
                <ul className="space-y-4 relative z-10">
                  {service.solution?.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 bg-brand-100 dark:bg-brand-900/30 p-1 rounded-full text-brand-600 dark:text-brand-400 flex-shrink-0">
                        <CheckCircle size={16} strokeWidth={3} />
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50 dark:bg-dark-bg/40 border-y border-gray-100 dark:border-dark-border">
        <div className="section-wrapper">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="text-brand-500 font-semibold tracking-wider uppercase text-sm mb-3 block">Simple & Transparent</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900 dark:text-white">
              {service.process?.title || "How We Work"}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl">
              A streamlined process from your first call to the final brushstroke, ensuring quality at every step.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
            {/* Horizontal Line for lg screens */}
            <div className="hidden lg:block absolute top-[48px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-gray-200 via-brand-200 to-gray-200 dark:from-dark-border dark:via-brand-900/40 dark:to-dark-border z-0" />
            
            {service.process?.steps.map((step, idx) => (
              <div key={idx} className="relative z-10 group h-full">
                <div className="bg-white dark:bg-dark-card p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-dark-border h-full hover:shadow-xl hover:border-brand-200 dark:hover:border-brand-500/30 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 flex items-center justify-center font-display text-2xl font-bold mb-6 mx-auto lg:mx-0 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-brand-100 dark:border-brand-800/50">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3 text-center lg:text-left text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-center lg:text-left">
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
        <div className="section-wrapper relative">
          <div className="relative max-w-4xl mx-auto rounded-[2rem] p-10 md:p-14 bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border shadow-2xl dark:shadow-2xl shadow-brand-500/5 flex flex-col items-center text-center overflow-hidden">
            <div className="absolute inset-0 rounded-[2rem] border border-brand-500/20 pointer-events-none" />
            <div className="absolute w-[300px] h-[300px] bg-brand-500/10 dark:bg-brand-500/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
            
            <h2 className="text-3xl md:text-4xl font-display leading-tight font-bold text-gray-900 dark:text-white mb-4 relative z-10">
              {service.secondaryCta?.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl relative z-10">
              {service.secondaryCta?.description}
            </p>
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-500 text-white font-bold text-lg rounded-full overflow-hidden transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-0.5 relative z-10"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="relative z-10">{service.secondaryCta?.buttonText}</span>
              <ArrowRight size={20} className="relative z-10 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service-Specific Reviews */}
      <section className="py-20 lg:py-28 bg-gray-50 dark:bg-dark-bg/60 border-t border-gray-100 dark:border-dark-border">
        <div className="section-wrapper">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">
              Trusted by Melbourne
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl">
              Real feedback from our recent {service.title.toLowerCase()} clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {service.reviews?.map((review, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-dark-card rounded-2xl p-7 border border-gray-100 dark:border-dark-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <StarRating count={review.rating} />
                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed italic text-base">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4 mt-6 pt-5 border-t border-gray-200 dark:border-dark-border">
                  <img loading="lazy"
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-500/30"
                  />
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      {review.name}
                    </div>
                    <div className="text-gray-400 text-sm">{review.business}</div>
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
