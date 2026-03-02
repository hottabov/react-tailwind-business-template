import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import SEO from "@/components/ui/SEO";
import CTA from "@/components/ui/CTA";
import { services } from "@/data/services";

// Minimal markdown-to-HTML: bold, headers, bullets, paragraphs
function SimpleMarkdown({ text }) {
  const lines = text.trim().split("\n");
  const elements = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="mt-10 mb-4 text-3xl text-gray-900 font-display dark:text-white"
        >
          {line.slice(3)}
        </h2>,
      );
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      const items = [];
      while (
        i < lines.length &&
        (lines[i].startsWith("- ") || lines[i].startsWith("* "))
      ) {
        items.push(
          <li key={i} className="flex items-start gap-2">
            <CheckCircle
              size={16}
              className="flex-shrink-0 mt-1 text-brand-500"
            />
            <span>{lines[i].slice(2)}</span>
          </li>,
        );
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-4 space-y-2">
          {items}
        </ul>,
      );
      continue;
    } else if (/^\d+\./.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\./.test(lines[i])) {
        items.push(
          <li key={i} className="text-gray-600 dark:text-gray-300">
            {lines[i].replace(/^\d+\.\s*/, "")}
          </li>,
        );
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="pl-6 my-4 space-y-1 list-decimal">
          {items}
        </ol>,
      );
      continue;
    } else if (line.trim() !== "") {
      const html = line.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      elements.push(
        <p
          key={i}
          className="mb-4 text-gray-600 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: html }}
        />,
      );
    }
    i++;
  }
  return <div className="prose-custom">{elements}</div>;
}

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service)
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-4xl font-display">Service not found</h1>
        <Link to="/services" className="inline-block mt-4 text-brand-500">
          ← Back to Services
        </Link>
      </div>
    );

  return (
    <>
      <SEO
        title={service.seoTitle}
        description={service.seoDescription}
        keywords={service.seoKeywords}
        image={service.heroImage}
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <img
          src={service.heroImage}
          alt={service.title}
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 section-wrapper pb-14">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 mb-4 text-sm transition-colors text-white/70 hover:text-white"
          >
            <ArrowLeft size={15} /> All Services
          </Link>
          <h1 className="text-5xl text-white font-display md:text-6xl">
            {service.title}
          </h1>
          <p className="max-w-xl mt-3 text-xl text-white/80">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="max-w-3xl section-wrapper">
          <p className="mb-8 text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            {service.summary}
          </p>
          <SimpleMarkdown text={service.body} />
        </div>
      </section>

      <CTA
        title={`Get a Quote for ${service.title}`}
        subtitle="Free, no-obligation quote within 24 hours."
      />
    </>
  );
}
