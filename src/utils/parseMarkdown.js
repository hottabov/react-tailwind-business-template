import {
  parseMarkdownDocument,
  sortByDateDesc,
} from "@/utils/markdownCollections";

const modules = import.meta.glob('../content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

export function getAllPosts() {
  return Object.entries(modules).map(([filePath, raw]) => {
    const slug = filePath.split('/').pop().replace(/\.md$/, '');
    const { frontmatter, content } = parseMarkdownDocument(raw);
    return { slug, frontmatter, content };
  }).sort(sortByDateDesc);
}

export function getPostBySlug(slug) {
  return getAllPosts().find(p => p.slug === slug) || null;
}
