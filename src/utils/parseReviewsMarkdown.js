import {
  normalizeBoolean,
  normalizeNumber,
  normalizeStringArray,
  parseMarkdownDocument,
  sortByDateDesc,
} from "@/utils/markdownCollections";

const modules = import.meta.glob("../content/reviews/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

export function getAllReviews() {
  return Object.entries(modules)
    .map(([filePath, raw]) => {
      const slug = filePath.split("/").pop().replace(/\.md$/, "");
      const { frontmatter, content } = parseMarkdownDocument(raw);

      return {
        slug,
        frontmatter: {
          ...frontmatter,
          rating: normalizeNumber(frontmatter.rating, 5),
          showInSuburb: normalizeStringArray(frontmatter.showInSuburb),
          showOnHomePage: normalizeBoolean(frontmatter.showOnHomePage, false),
        },
        content,
      };
    })
    .sort(sortByDateDesc);
}

export function getReviewBySlug(slug) {
  return getAllReviews().find((review) => review.slug === slug) || null;
}
