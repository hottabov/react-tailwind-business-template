import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/ui/SEO';
import SectionHeading from '@/components/ui/SectionHeading';
import CTA from '@/components/ui/CTA';
import { seoData } from '@/data/seo';
import { usePortfolioItems } from '@/hooks/usePortfolioItems';

const categories = ['All', 'Interior', 'Exterior', 'Roof', 'Deck', 'Fence', 'Commercial'];

export default function PortfolioPage() {
  const [active, setActive] = useState('All');
  const items = usePortfolioItems();

  const filtered =
    active === 'All'
      ? items
      : items.filter(p => p.frontmatter.category === active);

  return (
    <>
      <SEO {...seoData.portfolio} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">

        <div className="section-wrapper relative text-center">
          <h1 className="font-display text-5xl md:text-6xl mb-4">
            Our Work
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Browse our recent projects across Melbourne. 
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="section-wrapper">
          <SectionHeading
            eyebrow="Portfolio"
            title="Recent Painting Projects"
            subtitle="Interior, exterior, roof and commercial projects completed for homeowners and businesses all over Melbourne."
            center
          />

          {/* Category filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-200 text-sm
                  ${
                    active === cat
                      ? 'bg-brand-500 text-white shadow-md shadow-brand-500/30'
                      : 'bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-gray-300 hover:bg-brand-50 hover:text-brand-500'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(item => (
              <Link
                key={item.slug}
                to={`/portfolio/${item.slug}`}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <img loading="lazy"
                  src={item.frontmatter.coverImage}
                  alt={item.frontmatter.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-5
                  translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-semibold mb-2">
                    {item.frontmatter.category}
                  </span>
                  <h3 className="text-white font-semibold text-lg">
                    {item.frontmatter.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {item.frontmatter.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
