// Аналог parseMarkdown, але для портфоліо

const modules = import.meta.glob('../content/portfolio/*.md', {
  eager: true,
  as: 'raw',
});

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]+?)\n---/);
  if (!match) return { frontmatter: {}, content: raw };

  const fm = {};
  const fmBlock = match[1];
  fmBlock.split('\n').forEach(line => {
    const idx = line.indexOf(':');
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim().replace(/^"|"$/g, '');
    fm[key] = value;
  });

  const content = raw.slice(match[0].length).trim();
  return { frontmatter: fm, content };
}

export function getAllPortfolioItems() {
  return Object.entries(modules)
    .map(([filePath, raw]) => {
      const slug = filePath.split('/').pop().replace(/\.md$/, '');
      const { frontmatter, content } = parseFrontmatter(raw);
      return { slug, frontmatter, content };
    })
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
}

export function getPortfolioItemBySlug(slug) {
  return getAllPortfolioItems().find(p => p.slug === slug) || null;
}
