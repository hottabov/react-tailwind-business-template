import { useMemo } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import SEO from '@/components/ui/SEO';
import CTA from '@/components/ui/CTA';
import SectionHeading from '@/components/ui/SectionHeading';
import BlogPostCard from '@/components/ui/BlogPostCard';
import ArticleShare from '@/components/ui/ArticleShare';
import { siteConfig } from '@/data/site';
import MarkdownContent from '@/components/ui/MarkdownContent';
import { useBlogPost, useBlogPosts } from '@/hooks/useBlogPosts';

export default function BlogPostPage() {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const post = useBlogPost(slug);
  const allPosts = useBlogPosts();

  if (!post) {
    return (
      <div className="pt-32 text-center pb-24">
        <h1 className="font-display text-4xl">Post not found</h1>
        <Link to="/blog" className="text-brand-500 mt-4 inline-block">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const { frontmatter, content } = post;
  const publishedTime = new Date(frontmatter.date).toISOString();
  const articleUrl = `${siteConfig.url}${pathname}`;

  // Останні 8 статей для сайдбару (без поточної)
  const sidebarPosts = allPosts
    .filter(p => p.slug !== slug)
    .slice(0, 8);

  const relatedPosts = useMemo(() => {
    const sameCategory = allPosts.filter(
      (candidate) =>
        candidate.slug !== slug &&
        candidate.frontmatter.category === frontmatter.category
    );

    const fallbackPosts = allPosts.filter((candidate) => candidate.slug !== slug);
    const pool = sameCategory.length >= 3 ? sameCategory : fallbackPosts;

    return [...pool]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  }, [allPosts, frontmatter.category, slug]);

  return (
    <>
      <SEO
        title={`${frontmatter.title} | Melbourne Pro Painters Blog`}
        description={frontmatter.excerpt}
        image={frontmatter.coverImage}
        type="article"
        publishedTime={publishedTime}
        modifiedTime={publishedTime}
        schema={{
          "@type": "BlogPosting",
          headline: frontmatter.title,
          description: frontmatter.excerpt,
          datePublished: publishedTime,
          dateModified: publishedTime,
          articleSection: frontmatter.category,
          author: {
            "@type": "Person",
            name: frontmatter.author,
          },
          image: [frontmatter.coverImage],
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
            to="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4 transition-colors text-sm"
          >
            <ArrowLeft size={15} /> Back to Blog
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
          <div className="flex items-center gap-5 mt-4 text-white/60 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {frontmatter.date}
            </span>
            <span className="flex items-center gap-1.5">
              <User size={14} />
              {frontmatter.author}
            </span>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="section-wrapper grid lg:grid-cols-[minmax(0,2.4fr)_minmax(0,1fr)] gap-12 items-start">
          {/* Основний контент статті */}
          <div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 italic border-l-4 border-brand-500 pl-5 leading-relaxed">
              {frontmatter.excerpt}
            </p>
            <MarkdownContent text={content} />
            <div className="mt-10">
              <ArticleShare url={articleUrl} title={frontmatter.title} />
            </div>
          </div>

          {/* Сайдбар з останніми статтями */}
          <aside className="w-full lg:w-auto">
            <div className="sticky top-28 space-y-6">
              <div className="bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-2xl p-5">
                <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">
                  Latest Articles
                </h3>
                <div className="space-y-3">
                  {sidebarPosts.map(sp => (
                    <Link
                      key={sp.slug}
                      to={`/blog/${sp.slug}`}
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
                          {sp.frontmatter.date}
                        </div>
                        <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100 leading-snug line-clamp-2 group-hover:text-brand-500">
                          {sp.frontmatter.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Опційно: маленький CTA у сайдбарі */}
              <div className="bg-brand-500/10 dark:bg-brand-500/20 border border-brand-500/30 rounded-2xl p-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Need a Painter in Melbourne?
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
                  Get a free, no‑obligation quote for your next painting project.
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

      <section className="py-20 bg-gray-50 dark:bg-dark-card">
        <div className="section-wrapper">
          <SectionHeading
            eyebrow="Related Posts"
            title="Read More On This Topic"
            subtitle="Here are three more articles that explore similar painting questions, decisions and project ideas."
            center
          />

          <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <BlogPostCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </div>
      </section>

      <CTA title="Ready to Transform Your Home?" subtitle="Talk to Melbourne's trusted painting specialists today." />
    </>
  );
}
