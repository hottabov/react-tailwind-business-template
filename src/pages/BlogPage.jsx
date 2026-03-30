import { useEffect, useMemo, useRef, useState } from "react";
import SEO from "@/components/ui/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogPostCard from "@/components/ui/BlogPostCard";
import { seoData } from "@/data/seo";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import blogHero from "@/assets/images/hero/hero-main.avif";

export default function BlogPage() {
  const posts = useBlogPosts();
  const loadMoreRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All topics");
  const [selectedAuthor, setSelectedAuthor] = useState("All authors");
  const [sortOrder, setSortOrder] = useState("newest");
  const [visibleCount, setVisibleCount] = useState(9);

  const categories = useMemo(
    () => ["All topics", ...new Set(posts.map((post) => post.frontmatter.category))],
    [posts]
  );

  const authors = useMemo(
    () => ["All authors", ...new Set(posts.map((post) => post.frontmatter.author))],
    [posts]
  );

  const filteredPosts = useMemo(() => {
    const nextPosts = posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All topics" ||
        post.frontmatter.category === selectedCategory;
      const matchesAuthor =
        selectedAuthor === "All authors" ||
        post.frontmatter.author === selectedAuthor;

      return matchesCategory && matchesAuthor;
    });

    return nextPosts.sort((a, b) => {
      const aDate = new Date(a.frontmatter.date).getTime();
      const bDate = new Date(b.frontmatter.date).getTime();

      return sortOrder === "oldest" ? aDate - bDate : bDate - aDate;
    });
  }, [posts, selectedAuthor, selectedCategory, sortOrder]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < filteredPosts.length;

  useEffect(() => {
    setVisibleCount(9);
  }, [selectedCategory, selectedAuthor, sortOrder]);

  useEffect(() => {
    if (!hasMorePosts || !loadMoreRef.current) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];

        if (firstEntry?.isIntersecting) {
          setVisibleCount((current) =>
            Math.min(current + 6, filteredPosts.length)
          );
        }
      },
      { rootMargin: "300px 0px" }
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [filteredPosts.length, hasMorePosts]);

  return (
    <>
      <SEO {...seoData.blog} />

      <section className="relative pt-64 pb-16 overflow-hidden bg-gray-900 text-white text-center">
        <img
          src={blogHero}
          alt="Freshly painted Melbourne home exterior used for painting advice articles"
          className="absolute inset-0 object-cover w-full h-full opacity-20"
        />
        <div className="section-wrapper">
          <div className="relative text-center section-wrapper">
            <h1 className="font-display text-5xl md:text-6xl mb-4">
              Painting Tips & Advice
            </h1>
            <p className="text-gray-300 text-xl max-w-xl mx-auto">
              Expert painting tips, colour guides, and home improvement advice
              from Melbourne's leading painters.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="section-wrapper">
          <SectionHeading
            eyebrow="Knowledge Hub"
            title="Browse Blog Articles"
            subtitle="Filter by topic or author, keep the default newest-first sorting, and scroll to load more articles as needed."
            center
          />

          <div className="mt-12 rounded-[2rem] border border-gray-100 bg-gray-50 p-6 shadow-sm dark:border-dark-border dark:bg-dark-card md:p-8">
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Topic
                </label>
                <select
                  value={selectedCategory}
                  onChange={(event) => setSelectedCategory(event.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-dark-border dark:bg-dark-bg dark:text-white"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Author
                </label>
                <select
                  value={selectedAuthor}
                  onChange={(event) => setSelectedAuthor(event.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-dark-border dark:bg-dark-bg dark:text-white"
                >
                  {authors.map((author) => (
                    <option key={author} value={author}>
                      {author}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Sort
                </label>
                <select
                  value={sortOrder}
                  onChange={(event) => setSortOrder(event.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-dark-border dark:bg-dark-bg dark:text-white"
                >
                  <option value="newest">Newest to oldest</option>
                  <option value="oldest">Oldest to newest</option>
                </select>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Showing {visiblePosts.length} of {filteredPosts.length} articles.
            </p>
          </div>

          <div className="grid mt-12 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visiblePosts.map((post, i) => (
              <BlogPostCard
                key={post.slug}
                post={post}
                animationDelay={i * 0.05}
                priority={i < 3}
              />
            ))}
          </div>

          {hasMorePosts && (
            <div ref={loadMoreRef} className="flex justify-center pt-10">
              <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-semibold text-gray-500 dark:border-dark-border dark:bg-dark-card dark:text-gray-300">
                Loading more articles as you scroll...
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
