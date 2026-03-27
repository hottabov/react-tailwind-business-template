import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { siteConfig } from "@/data/site";

function toAbsoluteUrl(value) {
  return new URL(value || "/", siteConfig.url).toString();
}

export default function SEO({
  title,
  description,
  keywords,
  image,
  canonicalPath,
  type = "website",
  noIndex = false,
  schema,
  publishedTime,
  modifiedTime,
}) {
  const { pathname } = useLocation();

  const pageTitle = title || siteConfig.defaultTitle;
  const pageDescription = description || siteConfig.defaultDescription;
  const pageImage = toAbsoluteUrl(image || siteConfig.defaultImage);
  const canonicalUrl = toAbsoluteUrl(canonicalPath || pathname || "/");
  const pageType = type === "article" ? "article" : "website";
  const robots = noIndex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  const organizationId = `${siteConfig.url}#organization`;
  const websiteId = `${siteConfig.url}#website`;
  const webpageId = `${canonicalUrl}#webpage`;

  const organizationSchema = {
    "@type": "HousePainter",
    "@id": organizationId,
    name: siteConfig.name,
    url: siteConfig.url,
    image: siteConfig.defaultImage,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: siteConfig.priceRange,
    areaServed: siteConfig.areaServed.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
  };

  const websiteSchema = {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: siteConfig.language,
    publisher: {
      "@id": organizationId,
    },
  };

  const webpageSchema = {
    "@type":
      type === "article"
        ? "Article"
        : type === "contact"
          ? "ContactPage"
          : type === "collection"
            ? "CollectionPage"
            : "WebPage",
    "@id": webpageId,
    url: canonicalUrl,
    name: pageTitle,
    description: pageDescription,
    isPartOf: {
      "@id": websiteId,
    },
    about: {
      "@id": organizationId,
    },
    inLanguage: siteConfig.language,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: pageImage,
    },
  };

  const customSchema = Array.isArray(schema)
    ? schema
    : schema
      ? [schema]
      : [];

  const articleSchema =
    type === "article"
      ? [
          {
            "@type": "Article",
            headline: pageTitle,
            description: pageDescription,
            image: [pageImage],
            datePublished: publishedTime,
            dateModified: modifiedTime || publishedTime,
            mainEntityOfPage: {
              "@id": webpageId,
            },
            author: {
              "@type": "Organization",
              name: siteConfig.name,
            },
            publisher: {
              "@id": organizationId,
            },
          },
        ]
      : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      webpageSchema,
      ...articleSchema,
      ...customSchema,
    ],
  };

  return (
    <Helmet prioritizeSeoTags>
      <html lang={siteConfig.language} />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={keywords || ""} />
      <meta name="author" content={siteConfig.name} />
      <meta name="robots" content={robots} />
      <meta name="theme-color" content="#f97316" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:locale" content={siteConfig.locale} />
      <meta property="og:type" content={pageType} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={pageImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
