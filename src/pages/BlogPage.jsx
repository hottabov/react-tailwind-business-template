import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import SEO from '@/components/ui/SEO';
import SectionHeading from '@/components/ui/SectionHeading';
import { seoData } from '@/data/seo';
import { useBlogPosts } from '@/hooks/useBlogPosts';

export default function BlogPage() {
  const posts = useBlogPosts();

  return (
    <>
      <SEO {...seoData.blog} />

      <section className="pt-32 pb-16 bg-gray-900 text-white text-center">
        <div className="section-wrapper">
          <h1 className="font-display text-5xl md:text-6xl mb-4">Painting Tips & Advice</h1>
          <p className="text-gray-300 text-xl max-w-xl mx-auto">
            Expert painting tips, colour guides, and home improvement advice from Melbourne's leading painters.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="section-wrapper">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <Link key={post.slug} to={`/blog/${post.slug}`}
                className="group flex flex-col bg-gray-50 dark:bg-dark-card rounded-3xl overflow-hidden
                  border border-gray-100 dark:border-dark-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-52 overflow-hidden">
                  <img src={post.frontmatter.coverImage} alt={post.frontmatter.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-semibold">
                    {post.frontmatter.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1.5"><Calendar size={12} />{post.frontmatter.date}</span>
                    <span className="flex items-center gap-1.5"><User size={12} />{post.frontmatter.author}</span>
                  </div>
                  <h2 className="font-display text-xl text-gray-900 dark:text-white mb-3 group-hover:text-brand-500 transition-colors leading-tight">
                    {post.frontmatter.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm flex-1 line-clamp-3 mb-5">
                    {post.frontmatter.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-brand-500 font-semibold text-sm
                    group-hover:gap-2 transition-all duration-200">
                    Read Article <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
