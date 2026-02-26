/**
 * parseMarkdown — reads all blog markdown files at build time using
 * Vite's import.meta.glob (static analysis, no runtime fs access).
 * Returns an array of { slug, frontmatter, content } objects.
 *
 * Junior note: import.meta.glob is a Vite-specific feature. It bundles
 * every matched file so they are available in the browser as modules.
 */

// Grab all .md files under src/content/blog/
const modules = import.meta.glob('../content/blog/*.md', {
  eager: true,
  as: 'raw',          // import raw string (no transform)
});

/**
 * Parse YAML-style frontmatter from a markdown string.
 * We avoid adding the `gray-matter` dependency at runtime;
 * instead this lightweight parser handles our known fields.
 */
function parseFrontmatter(raw) {
  const fmMatch = raw.match(/^---\n([\s\S]+?)\n---/);
  if (!fmMatch) return { frontmatter: {}, content: raw };

  const fmString = fmMatch[1];
  const content  = raw.slice(fmMatch[0].length).trim();

  const frontmatter = {};
  fmString.split('\n').forEach(line => {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) return;
    const key   = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim().replace(/^"|"$/g, '');
    frontmatter[key] = value;
  });

  return { frontmatter, content };
}

export function getAllPosts() {
  return Object.entries(modules).map(([filePath, raw]) => {
    // Derive slug from filename  e.g. "../content/blog/my-post.md" → "my-post"
    const slug = filePath.split('/').pop().replace(/\.md$/, '');
    const { frontmatter, content } = parseFrontmatter(raw);
    return { slug, frontmatter, content };
  }).sort((a, b) =>
    new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );
}

export function getPostBySlug(slug) {
  return getAllPosts().find(p => p.slug === slug) || null;
}
