import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { siteConfig } from "../src/data/site.js";
import { services } from "../src/data/services.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const blogDir = path.join(projectRoot, "src", "content", "blog");
const portfolioDir = path.join(projectRoot, "src", "content", "portfolio");

const staticRoutes = [
  "/",
  "/services",
  "/portfolio",
  "/reviews",
  "/blog",
  "/pricing",
  "/about",
  "/contact",
];

function normaliseSiteUrl(url) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function extractFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]+?)\n---/);
  if (!match) return {};

  return match[1].split("\n").reduce((acc, line) => {
    const index = line.indexOf(":");
    if (index === -1) return acc;

    const key = line.slice(0, index).trim();
    const value = line.slice(index + 1).trim().replace(/^"|"$/g, "");
    acc[key] = value;
    return acc;
  }, {});
}

async function getMarkdownEntries(directory, basePath) {
  const files = await fs.readdir(directory);

  const entries = await Promise.all(
    files
      .filter((file) => file.endsWith(".md"))
      .map(async (file) => {
        const absolutePath = path.join(directory, file);
        const raw = await fs.readFile(absolutePath, "utf8");
        const frontmatter = extractFrontmatter(raw);
        const stats = await fs.stat(absolutePath);
        const slug = file.replace(/\.md$/, "");
        const lastmod = frontmatter.date
          ? new Date(frontmatter.date).toISOString()
          : stats.mtime.toISOString();

        return {
          path: `${basePath}/${slug}`,
          lastmod,
        };
      }),
  );

  return entries.sort((a, b) => new Date(b.lastmod) - new Date(a.lastmod));
}

async function generateSitemap() {
  const siteUrl = normaliseSiteUrl(siteConfig.url);
  const now = new Date().toISOString();

  const serviceEntries = services.map((service) => ({
    path: `/services/${service.slug}`,
    lastmod: now,
  }));

  const [blogEntries, portfolioEntries] = await Promise.all([
    getMarkdownEntries(blogDir, "/blog"),
    getMarkdownEntries(portfolioDir, "/portfolio"),
  ]);

  const allEntries = [
    ...staticRoutes.map((route) => ({ path: route, lastmod: now })),
    ...serviceEntries,
    ...blogEntries,
    ...portfolioEntries,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(`${siteUrl}${entry.path}`)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  await fs.mkdir(distDir, { recursive: true });
  await fs.writeFile(path.join(distDir, "sitemap.xml"), xml, "utf8");

  const robots = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /admin/

Sitemap: ${siteUrl}/sitemap.xml
Host: ${siteUrl}
`;

  await fs.writeFile(path.join(distDir, "robots.txt"), robots, "utf8");
}

generateSitemap().catch((error) => {
  console.error("Failed to generate sitemap.xml");
  console.error(error);
  process.exitCode = 1;
});
