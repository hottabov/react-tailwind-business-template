import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/ui/SEO";
import CTA from "@/components/ui/CTA";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogPostCard from "@/components/ui/BlogPostCard";
import { seoData } from "@/data/seo";
import { usePortfolioItems } from "@/hooks/usePortfolioItems";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import notFoundHero from "@/assets/images/home/before-after-painting.avif";

export default function NotFoundPage() {
  const recentPortfolio = usePortfolioItems().slice(0, 6);
  const recentPosts = useBlogPosts().slice(0, 6);

  return (
    <>
      <SEO
        title="Page Not Found | Melbourne Pro Painters"
        description="The page you were looking for is not available, but you can still explore recent painting projects, fresh blog articles and request a quote."
        noIndex
      />

      <section className="relative pt-64 pb-20 overflow-hidden text-center text-white bg-gray-900">
        <img
          src={notFoundHero}
          alt="Completed painting project from Melbourne Pro Painters"
          className="absolute inset-0 object-cover w-full h-full opacity-20"
        />
        <div className="section-wrapper">
          <div className="relative text-center section-wrapper">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/20 border border-brand-500/40 text-brand-300 text-sm font-semibold tracking-wider uppercase mb-6">
              404 Page
            </span>
            <h1 className="mb-5 text-5xl font-display md:text-6xl">
              Oops, That Page Was Not Found
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-300">
              But we still have plenty for you to explore, including recent
              portfolio projects, practical painting advice and an easy next
              step if you need a quote.
            </p>
            <div className="flex flex-col justify-center gap-4 mt-10 sm:flex-row">
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white transition-all duration-300 rounded-full bg-brand-500 hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/30"
              >
                Browse Recent Projects
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white transition-all duration-300 border rounded-full border-white/30 hover:bg-white/10"
              >
                Read Latest Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-dark-bg">
        <div className="section-wrapper">
          <SectionHeading
            eyebrow="Portfolio"
            title="Latest Painting Projects"
            subtitle="Take a look at six of our most recent portfolio jobs across Melbourne."
            center
          />

          <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {recentPortfolio.map((item) => (
              <Link
                key={item.slug}
                to={`/portfolio/${item.slug}`}
                className="group relative overflow-hidden transition-all duration-300 shadow-md rounded-2xl aspect-[4/3] hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  loading="lazy"
                  src={item.frontmatter.coverImage}
                  alt={item.frontmatter.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-white rounded-full bg-brand-500">
                    {item.frontmatter.category}
                  </span>
                  <h2 className="text-lg font-semibold text-white">
                    {item.frontmatter.title}
                  </h2>
                  <p className="text-sm text-white/70">
                    {item.frontmatter.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-dark-card">
        <div className="section-wrapper">
          <SectionHeading
            eyebrow="Blog"
            title="Latest Painting Articles"
            subtitle="Here are six recent articles with tips, planning advice and colour ideas."
            center
          />

          <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Still Need Help Finding The Right Page?"
        subtitle="Tell us what you need and we will point you to the right service, article or next-step quote."
        supportingText="Fast response and clear advice"
      />
    </>
  );
}
