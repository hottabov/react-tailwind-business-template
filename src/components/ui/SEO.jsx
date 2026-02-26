/**
 * SEO — sets per-page <title>, <meta description>, and Open Graph tags.
 * Uses react-helmet-async so it works correctly with React 18.
 */
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, image }) {
  const siteName = 'Melbourne Pro Painters';
  const defaultImage = 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description"  content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title"       content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={image || defaultImage} />
      <meta property="og:type"        content="website" />
      <meta property="og:site_name"   content={siteName} />
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={image || defaultImage} />
    </Helmet>
  );
}
