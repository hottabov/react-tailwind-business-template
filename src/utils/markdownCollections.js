export function stripWrappingQuotes(value) {
  if (typeof value !== "string") {
    return value;
  }

  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }

  return value;
}

function parseInlineArray(value) {
  const trimmed = value.trim();
  if (!trimmed.startsWith("[") || !trimmed.endsWith("]")) {
    return null;
  }

  const inner = trimmed.slice(1, -1).trim();
  if (!inner) {
    return [];
  }

  return inner
    .split(",")
    .map((item) => stripWrappingQuotes(item.trim()))
    .filter(Boolean);
}

function parseBoolean(value) {
  const normalized = value.trim().toLowerCase();

  if (normalized === "true") {
    return true;
  }

  if (normalized === "false") {
    return false;
  }

  return null;
}

function parseFrontmatterValue(value) {
  const trimmed = value.trim();
  const inlineArray = parseInlineArray(trimmed);

  if (inlineArray !== null) {
    return inlineArray;
  }

  const booleanValue = parseBoolean(trimmed);
  if (booleanValue !== null) {
    return booleanValue;
  }

  return stripWrappingQuotes(trimmed);
}

export function parseMarkdownDocument(raw) {
  const match = raw.match(/^---\n([\s\S]+?)\n---/);
  if (!match) return { frontmatter: {}, content: raw.trim() };

  const frontmatter = {};
  const lines = match[1].split("\n");

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (!line.trim()) continue;

    const blockListMatch = line.match(/^([A-Za-z0-9_-]+):\s*$/);
    if (blockListMatch) {
      const key = blockListMatch[1];
      const items = [];

      while (index + 1 < lines.length) {
        const nextLine = lines[index + 1];
        const itemMatch = nextLine.match(/^\s*-\s*(.+?)\s*$/);

        if (!itemMatch) break;

        items.push(stripWrappingQuotes(itemMatch[1].trim()));
        index += 1;
      }

      frontmatter[key] = items;
      continue;
    }

    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) continue;

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1);
    frontmatter[key] = parseFrontmatterValue(value);
  }

  return {
    frontmatter,
    content: raw.slice(match[0].length).trim(),
  };
}

export function normalizeStringArray(value) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof value === "string" && value.trim()) {
    return [value.trim()];
  }

  return [];
}

export function normalizeBoolean(value, fallback = false) {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    if (normalized === "true") return true;
    if (normalized === "false") return false;
  }

  return fallback;
}

export function normalizeNumber(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

export function sortByDateDesc(a, b) {
  const aTime = Date.parse(a.frontmatter.date || "") || 0;
  const bTime = Date.parse(b.frontmatter.date || "") || 0;
  return bTime - aTime;
}
