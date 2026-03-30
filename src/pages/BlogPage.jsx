import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import SEO from "@/components/ui/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogPostCard from "@/components/ui/BlogPostCard";
import { seoData } from "@/data/seo";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import blogHero from "@/assets/images/hero/hero-blog.avif";

export default function BlogPage() {
  const posts = useBlogPosts();
  const loadMoreRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All topics");
  const [selectedAuthor, setSelectedAuthor] = useState("All authors");
  const [sortOrder, setSortOrder] = useState("newest");
  const [visibleCount, setVisibleCount] = useState(9);

  const categories = useMemo(
    () => [
      "All topics",
      ...new Set(posts.map((post) => post.frontmatter.category)),
    ],
    [posts],
  );

  const authors = useMemo(
    () => [
      "All authors",
      ...new Set(posts.map((post) => post.frontmatter.author)),
    ],
    [posts],
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
            Math.min(current + 6, filteredPosts.length),
          );
        }
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [filteredPosts.length, hasMorePosts]);

  return (
    <>
      <SEO {...seoData.blog} />

      <section className="relative pt-64 pb-16 overflow-hidden text-center text-white bg-gray-900">
        <img
          src={blogHero}
          alt="Freshly painted Melbourne home exterior used for painting advice articles"
          className="absolute inset-0 object-cover w-full h-full opacity-20"
        />
        <div className="section-wrapper">
          <div className="relative text-center section-wrapper">
            <h1 className="mb-4 text-5xl font-display md:text-6xl">
              Painting Tips & Advice
            </h1>
            <p className="max-w-xl mx-auto text-xl text-gray-300">
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

          <div className="mt-12 rounded-[2rem] border border-gray-100 bg-gray-50 p-4 shadow-sm dark:border-dark-border dark:bg-dark-card md:p-5">
            <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.9fr)]">
              <div className="grid items-center gap-2 min-w-0 sm:grid-cols-[auto_minmax(0,1fr)]">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  Topic
                </label>
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(event) =>
                      setSelectedCategory(event.target.value)
                    }
                    className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-2.5 pr-12 text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-dark-border dark:bg-dark-bg dark:text-white"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-4 top-1/2"
                  />
                </div>
              </div>

              <div className="grid items-center gap-2 min-w-0 sm:grid-cols-[auto_minmax(0,1fr)]">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  Author
                </label>
                <div className="relative">
                  <select
                    value={selectedAuthor}
                    onChange={(event) => setSelectedAuthor(event.target.value)}
                    className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-2.5 pr-12 text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-dark-border dark:bg-dark-bg dark:text-white"
                  >
                    {authors.map((author) => (
                      <option key={author} value={author}>
                        {author}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-4 top-1/2"
                  />
                </div>
              </div>

              <div className="grid items-center gap-2 min-w-0 sm:grid-cols-[auto_minmax(0,1fr)]">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  Sort
                </label>
                <div className="relative">
                  <select
                    value={sortOrder}
                    onChange={(event) => setSortOrder(event.target.value)}
                    className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-2.5 pr-12 text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-dark-border dark:bg-dark-bg dark:text-white"
                  >
                    <option value="newest">Newest to oldest</option>
                    <option value="oldest">Oldest to newest</option>
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-4 top-1/2"
                  />
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400 md:text-left">
              Showing {visiblePosts.length} of {filteredPosts.length} articles.
            </p>
          </div>

          <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
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
              <div className="inline-flex items-center px-5 py-3 text-sm font-semibold text-gray-500 border border-gray-200 rounded-full bg-gray-50 dark:border-dark-border dark:bg-dark-card dark:text-gray-300">
                Loading more articles as you scroll...
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
