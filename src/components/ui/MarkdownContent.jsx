function slugifyHeading(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function renderInlineMarkdown(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2">$1</a>'
    )
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

function Heading({ level, text, className }) {
  const Tag = level;
  const id = slugifyHeading(text);

  return (
    <Tag
      id={id}
      className={className}
      dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(text) }}
    />
  );
}

export default function MarkdownContent({ text }) {
  const lines = text.trim().split('\n');
  const els = [];
  let i = 0;

  while (i < lines.length) {
    const l = lines[i];

    if (l.startsWith('#### ')) {
      els.push(
        <Heading
          key={i}
          level="h4"
          text={l.slice(5)}
          className="font-display text-xl mt-8 mb-3 text-gray-900 dark:text-white"
        />
      );
    } else if (l.startsWith('### ')) {
      els.push(
        <Heading
          key={i}
          level="h3"
          text={l.slice(4)}
          className="font-display text-2xl mt-8 mb-3 text-gray-900 dark:text-white"
        />
      );
    } else if (l.startsWith('## ')) {
      els.push(
        <Heading
          key={i}
          level="h2"
          text={l.slice(3)}
          className="font-display text-3xl mt-10 mb-4 text-gray-900 dark:text-white"
        />
      );
    } else if (l.startsWith('# ')) {
      els.push(
        <Heading
          key={i}
          level="h1"
          text={l.slice(2)}
          className="font-display text-4xl mt-10 mb-4 text-gray-900 dark:text-white"
        />
      );
    } else if (l.startsWith('- ') || l.startsWith('* ')) {
      const items = [];

      while (
        i < lines.length &&
        (lines[i].startsWith('- ') || lines[i].startsWith('* '))
      ) {
        items.push(
          <li
            key={i}
            className="ml-5 list-disc text-gray-600 dark:text-gray-300"
            dangerouslySetInnerHTML={{
              __html: renderInlineMarkdown(lines[i].slice(2)),
            }}
          />
        );
        i++;
      }

      els.push(
        <ul key={`ul${i}`} className="my-4 space-y-1">
          {items}
        </ul>
      );
      continue;
    } else if (/^\d+\./.test(l)) {
      const items = [];

      while (i < lines.length && /^\d+\./.test(lines[i])) {
        items.push(
          <li
            key={i}
            className="text-gray-600 dark:text-gray-300"
            dangerouslySetInnerHTML={{
              __html: renderInlineMarkdown(lines[i].replace(/^\d+\.\s*/, '')),
            }}
          />
        );
        i++;
      }

      els.push(
        <ol key={`ol${i}`} className="list-decimal pl-6 my-4 space-y-1">
          {items}
        </ol>
      );
      continue;
    } else if (l.trim()) {
      els.push(
        <p
          key={i}
          className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(l) }}
        />
      );
    }

    i++;
  }

  return <div className="prose-custom">{els}</div>;
}
