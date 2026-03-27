import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/ui/SEO';
import CTA from '@/components/ui/CTA';
import { usePortfolioItem, usePortfolioItems } from '@/hooks/usePortfolioItems';

const projectFit = {
  Interior: 'Feature rooms, full-home refreshes and pre-sale interiors',
  Exterior: 'Weatherboards, facades and full exterior repaints',
  Roof: 'Tile and Colorbond roof restoration projects',
  Deck: 'Outdoor timber restoration and oiling',
  Fence: 'Fence repainting and outdoor refresh work',
  Commercial: 'Offices, retail spaces and business repaint projects',
};

function Markdown({ text }) {
  const lines = text.trim().split('\n');
  const els = [];
  let i = 0;

  while (i < lines.length) {
    const l = lines[i];

    if (l.startsWith('## ')) {
      els.push(
        <h2
          key={i}
          className="font-display text-3xl mt-10 mb-4 text-gray-900 dark:text-white"
        >
          {l.slice(3)}
        </h2>
      );
    } else if (l.startsWith('- ') || l.startsWith('* ')) {
      const items = [];
      while (
        i < lines.length &&
        (lines[i].startsWith('- ') || lines[i].startsWith('* '))
      ) {
        items.push(
          <li
            key={i}
            className="ml-5 list-disc text-gray-600 dark:text-gray-300"
          >
            {lines[i].slice(2)}
          </li>
        );
        i++;
      }
      els.push(
        <ul key={`ul${i}`} className="my-4 space-y-1">
          {items}
        </ul>
      );
      continue;
    } else if (/^\d+\./.test(l)) {
      const items = [];
      while (i < lines.length && /^\d+\./.test(lines[i])) {
        items.push(
          <li
            key={i}
            className="text-gray-600 dark:text-gray-300"
          >
            {lines[i].replace(/^\d+\.\s*/, '')}
          </li>
        );
        i++;
      }
      els.push(
        <ol key={`ol${i}`} className="list-decimal pl-6 my-4 space-y-1">
          {items}
        </ol>
      );
      continue;
    } else if (l.trim()) {
      const html = l.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      els.push(
        <p
          key={i}
          className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    }

    i++;
  }

  return <div className="prose-custom">{els}</div>;
}

export default function PortfolioItemPage() {
  const { slug } = useParams();
  const item = usePortfolioItem(slug);
  const all = usePortfolioItems();

  if (!item) {
    return (
      <div className="pt-32 text-center pb-24">
        <h1 className="font-display text-4xl">Project not found</h1>
        <Link to="/portfolio" className="text-brand-500 mt-4 inline-block">
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  const { frontmatter, content } = item;

  const sidebarItems = all
    .filter(p => p.slug !== slug)
    .slice(0, 8);

  return (
    <>
      <SEO
        title={`${frontmatter.title} | Painting Portfolio | Melbourne Pro Painters`}
        description={frontmatter.excerpt}
        image={frontmatter.coverImage}
        schema={{
          "@type": "CreativeWork",
          name: frontmatter.title,
          description: frontmatter.excerpt,
          image: [frontmatter.coverImage],
          genre: frontmatter.category,
          contentLocation: {
            "@type": "Place",
            name: frontmatter.location,
          },
        }}
      />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden">
        <img
          src={frontmatter.coverImage}
          alt={frontmatter.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="section-wrapper relative z-10 pb-12 max-w-3xl">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4 transition-colors text-sm"
          >
            <ArrowLeft size={15} /> Back to Portfolio
          </Link>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-semibold">
              <Tag size={10} className="inline mr-1" />
              {frontmatter.category}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-white leading-tight">
            {frontmatter.title}
          </h1>
          <div className="flex items-center gap-5 mt-4 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {frontmatter.date}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} />
              {frontmatter.location}
            </span>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="section-wrapper grid lg:grid-cols-[minmax(0,2.4fr)_minmax(0,1fr)] gap-12 items-start">
          {/* Основний контент */}
          <div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 italic border-l-4 border-brand-500 pl-5 leading-relaxed">
              {frontmatter.excerpt}
            </p>

            <div className="grid gap-4 mb-8 md:grid-cols-[minmax(0,1.35fr)_minmax(0,0.95fr)]">
              <div className="rounded-[2rem] bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-dark-border p-6 md:p-7">
                <h2 className="text-2xl font-display text-gray-900 dark:text-white mb-5">
                  Project Snapshot
                </h2>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 mb-2">
                      Category
                    </div>
                    <div className="text-base font-semibold text-gray-900 dark:text-white">
                      {frontmatter.category}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 mb-2">
                      Location
                    </div>
                    <div className="text-base font-semibold text-gray-900 dark:text-white">
                      {frontmatter.location}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 mb-2">
                      Best Fit
                    </div>
                    <div className="text-base font-semibold text-gray-900 dark:text-white">
                      {projectFit[frontmatter.category] || 'Homes and businesses needing a high-quality repaint'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] bg-gray-900 text-white p-6 md:p-7">
                <h2 className="text-2xl font-display mb-3">
                  Want a Similar Result?
                </h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  Tell us what you are painting and we will help you map the right scope, finish and next-step quote.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full px-5 py-3 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold transition-colors"
                >
                  Request a Similar Quote
                </Link>
              </div>
            </div>

            {/* Before / After якщо є */}
            {(frontmatter.beforeImage || frontmatter.afterImage) && (
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {frontmatter.beforeImage && (
                  <div>
                    <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                      Before
                    </div>
                    <img loading="lazy"
                      src={frontmatter.beforeImage}
                      alt="Before painting"
                      className="w-full rounded-2xl object-cover shadow-md"
                    />
                  </div>
                )}
                {frontmatter.afterImage && (
                  <div>
                    <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                      After
                    </div>
                    <img loading="lazy"
                      src={frontmatter.afterImage}
                      alt="After painting"
                      className="w-full rounded-2xl object-cover shadow-md"
                    />
                  </div>
                )}
              </div>
            )}

            <Markdown text={content} />
          </div>

          {/* Сайдбар з останніми роботами */}
          <aside className="w-full lg:w-auto">
            <div className="sticky top-28 space-y-6">
              <div className="bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-2xl p-5">
                <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">
                  Latest Projects
                </h3>
                <div className="space-y-3">
                  {sidebarItems.map(sp => (
                    <Link
                      key={sp.slug}
                      to={`/portfolio/${sp.slug}`}
                      className="flex items-center gap-3 rounded-xl p-2 hover:bg-brand-50 dark:hover:bg-dark-bg transition-colors group"
                    >
                      <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-200 dark:bg-gray-700">
                        <img loading="lazy"
                          src={sp.frontmatter.coverImage}
                          alt={sp.frontmatter.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-0.5">
                          {sp.frontmatter.location}
                        </div>
                        <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100 leading-snug line-clamp-2 group-hover:text-brand-500">
                          {sp.frontmatter.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-brand-500/10 dark:bg-brand-500/20 border border-brand-500/30 rounded-2xl p-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Like This Result?
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
                  Talk to us about getting a similar transformation for your home or business.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full px-3 py-2 rounded-full bg-brand-500 hover:bg-brand-600 text-white text-xs font-semibold transition-colors"
                >
                  Request a Free Quote
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTA
        title="Ready for a Transformation Like This?"
        subtitle="Book a free inspection and quote anywhere in Melbourne."
        supportingText="Fast response and clear next steps"
      />
    </>
  );
}
