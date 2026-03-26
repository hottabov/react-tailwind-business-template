import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/ui/SEO';
import CTA from '@/components/ui/CTA';
import SectionHeading from '@/components/ui/SectionHeading';
import { seoData }  from '@/data/seo';
import { services } from '@/data/services';

export default function ServicesPage() {
  return (
    <>
      <SEO {...seoData.services} />

      {/* Page hero */}
      <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
        <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80"
          alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="section-wrapper relative text-center">
          <h1 className="font-display text-5xl md:text-6xl mb-4">Our Painting Services</h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            From a single room touch-up to a full commercial repaint — we cover it all, backed by our quality guarantee.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 bg-white dark:bg-dark-bg">
        <div className="section-wrapper">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(s => (
              <div key={s.slug} className="group flex flex-col bg-gray-50 dark:bg-dark-card rounded-3xl
                overflow-hidden border border-gray-100 dark:border-dark-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <img loading="lazy" src={s.thumbImage} alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-4 left-4 text-4xl bg-white/20 backdrop-blur-sm
                    rounded-xl p-2">{s.icon}</span>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h2 className="font-display text-2xl text-gray-900 dark:text-white mb-3">{s.title}</h2>
                  <p className="text-gray-500 dark:text-gray-400 text-base mb-6 flex-1">{s.summary}</p>
                  <Link to={`/services/${s.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-500
                      hover:bg-brand-600 text-white font-semibold transition-all hover:gap-3 w-fit">
                    Learn More <ArrowRight size={16} />
                  </Link>
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
