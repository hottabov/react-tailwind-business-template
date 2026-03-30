import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  ArrowLeft,
  Tag,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';
import SEO from '@/components/ui/SEO';
import CTA from '@/components/ui/CTA';
import MarkdownContent from '@/components/ui/MarkdownContent';
import { usePortfolioItem, usePortfolioItems } from '@/hooks/usePortfolioItems';

export default function PortfolioItemPage() {
  const { slug } = useParams();
  const item = usePortfolioItem(slug);
  const all = usePortfolioItems();
  const [lightboxIndex, setLightboxIndex] = useState(null);

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

  const galleryImages = [
    frontmatter.beforeImage
      ? {
          src: frontmatter.beforeImage,
          alt: `${frontmatter.title} before painting`,
          label: 'Before',
        }
      : null,
    frontmatter.afterImage
      ? {
          src: frontmatter.afterImage,
          alt: `${frontmatter.title} after painting`,
          label: 'After',
        }
      : null,
  ].filter(Boolean);

  const hasGallery = galleryImages.length > 0;
  const activeImage = lightboxIndex !== null ? galleryImages[lightboxIndex] : null;

  useEffect(() => {
    if (lightboxIndex === null) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setLightboxIndex(null);
      } else if (event.key === 'ArrowRight' && galleryImages.length > 1) {
        setLightboxIndex((current) => (current + 1) % galleryImages.length);
      } else if (event.key === 'ArrowLeft' && galleryImages.length > 1) {
        setLightboxIndex(
          (current) => (current - 1 + galleryImages.length) % galleryImages.length
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [galleryImages.length, lightboxIndex]);

  return (
    <>
      <SEO
        title={`${frontmatter.title} | Painting Portfolio | Melbourne Pro Painters`}
        description={frontmatter.excerpt}
        image={frontmatter.afterImage || frontmatter.coverImage}
        schema={{
          "@type": "CreativeWork",
          name: frontmatter.title,
          description: frontmatter.excerpt,
          image: [frontmatter.afterImage || frontmatter.coverImage],
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

            {/* Before / After якщо є */}
            {hasGallery && (
              <div className="mb-10">
                <div className="flex items-end justify-between gap-4 mb-5">
                  <div>
                    <h2 className="text-2xl font-display text-gray-900 dark:text-white">
                      Before and After
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                      Click either image to open the full-size comparison and move
                      between slides.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {galleryImages.map((image, index) => (
                    <button
                      key={image.label}
                      type="button"
                      onClick={() => setLightboxIndex(index)}
                      className="group relative isolate overflow-hidden text-left rounded-[1.75rem] border border-gray-100 bg-gray-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-dark-border dark:bg-dark-card"
                    >
                      <div className="absolute left-4 top-4 z-10 rounded-full bg-gray-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                        {image.label}
                      </div>
                      <div className="aspect-[3/4] overflow-hidden rounded-[inherit]">
                        <img
                          loading="lazy"
                          src={image.src}
                          alt={image.alt}
                          className="h-full w-full rounded-[inherit] object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <MarkdownContent text={content} />
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

      {activeImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/95 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeImage.label} image lightbox`}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>

          {galleryImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setLightboxIndex(
                    (current) => (current - 1 + galleryImages.length) % galleryImages.length
                  );
                }}
                className="absolute left-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Show previous image"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setLightboxIndex(
                    (current) => (current + 1) % galleryImages.length
                  );
                }}
                className="absolute right-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Show next image"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          <div
            className="relative flex max-h-full max-w-full flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              {activeImage.label}
            </div>
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="block max-h-[78vh] max-w-full h-auto w-auto object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
