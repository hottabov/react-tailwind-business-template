import {
  normalizeBoolean,
  normalizeStringArray,
  parseMarkdownDocument,
  sortByDateDesc,
} from "@/utils/markdownCollections";

const modules = import.meta.glob('../content/portfolio/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

export function getAllPortfolioItems() {
  const markdownItems = Object.entries(modules).map(([filePath, raw]) => {
      const slug = filePath.split('/').pop().replace(/\.md$/, '');
      const { frontmatter, content } = parseMarkdownDocument(raw);
      return {
        slug,
        frontmatter: {
          ...frontmatter,
          showInSuburb: normalizeStringArray(frontmatter.showInSuburb),
          showOnHomePage: normalizeBoolean(frontmatter.showOnHomePage, false),
        },
        content,
      };
    });

  return markdownItems
    .sort(sortByDateDesc);
}

export function getPortfolioItemBySlug(slug) {
  return getAllPortfolioItems().find(p => p.slug === slug) || null;
}
