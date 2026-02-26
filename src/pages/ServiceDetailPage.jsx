import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import SEO from '@/components/ui/SEO';
import CTA from '@/components/ui/CTA';
import { services } from '@/data/services';

// Minimal markdown-to-HTML: bold, headers, bullets, paragraphs
function SimpleMarkdown({ text }) {
  const lines = text.trim().split('\n');
  const elements = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="font-display text-3xl text-gray-900 dark:text-white mt-10 mb-4">{line.slice(3)}</h2>);
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      const items = [];
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
        items.push(<li key={i} className="flex items-start gap-2"><CheckCircle size={16} className="text-brand-500 mt-1 flex-shrink-0" /><span>{lines[i].slice(2)}</span></li>);
        i++;
      }
      elements.push(<ul key={`ul-${i}`} className="space-y-2 my-4">{items}</ul>);
      continue;
    } else if (/^\d+\./.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\./.test(lines[i])) {
        items.push(<li key={i} className="text-gray-600 dark:text-gray-300">{lines[i].replace(/^\d+\.\s*/, '')}</li>);
        i++;
      }
      elements.push(<ol key={`ol-${i}`} className="list-decimal pl-6 space-y-1 my-4">{items}</ol>);
      continue;
    } else if (line.trim() !== '') {
      const html = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      elements.push(<p key={i} className="text-gray-600 dark:text-gray-300 mb-4" dangerouslySetInnerHTML={{ __html: html }} />);
    }
    i++;
  }
  return <div className="prose-custom">{elements}</div>;
}

export default function ServiceDetailPage() {
  const { slug }  = useParams();
  const service   = services.find(s => s.slug === slug);

  if (!service) return (
    <div className="pt-32 pb-24 text-center">
      <h1 className="font-display text-4xl">Service not found</h1>
      <Link to="/services" className="text-brand-500 mt-4 inline-block">← Back to Services</Link>
    </div>
  );

  return (
    <>
      <SEO title={service.seoTitle} description={service.seoDescription} keywords={service.seoKeywords} image={service.heroImage} />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <img src={service.heroImage} alt={service.title}
          className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="section-wrapper relative z-10 pb-14">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4 transition-colors text-sm">
            <ArrowLeft size={15} /> All Services
          </Link>
          <h1 className="font-display text-5xl md:text-6xl text-white">{service.title}</h1>
          <p className="text-white/80 text-xl mt-3 max-w-xl">{service.tagline}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="section-wrapper max-w-3xl">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{service.summary}</p>
          <SimpleMarkdown text={service.body} />
        </div>
      </section>

      <CTA title={`Get a Quote for ${service.title}`} subtitle="Free, no-obligation quote within 24 hours." />
    </>
  );
}
