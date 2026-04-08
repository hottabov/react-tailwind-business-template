import heroImage from "@/assets/images/hero/hero-blog.avif";
import whyUsImage from "@/assets/images/home/before-after-painting.avif";

const suburbProfiles = [
  {
    name: "Toorak",
    setting:
      "prestige homes, tailored renovations and detail-heavy interior spaces",
    styleCue: "high-end living spaces and refined facade presentation",
  },
  {
    name: "South Yarra",
    setting:
      "designer apartments, terrace homes and boutique commercial spaces",
    styleCue: "fast turnarounds, polished interiors and sharp street appeal",
  },
  {
    name: "Brighton",
    setting:
      "bayside family homes, terracotta roofs and weather-exposed exteriors",
    styleCue: "salt air durability, premium finishes and clean colour updates",
  },
  {
    name: "Camberwell",
    setting:
      "period homes, family residences and timber-heavy exterior details",
    styleCue: "careful prep, heritage-sensitive colour choices and tidy crews",
  },
  {
    name: "Canterbury",
    setting:
      "leafy streets, larger homes and detailed trims that reward patient prep",
    styleCue: "quiet site management, fine finish quality and premium coatings",
  },
  {
    name: "Hawthorn",
    setting:
      "Victorian facades, renovated homes and presentation-ready investment properties",
    styleCue: "vendor-ready finishes, neat schedules and sharp visual lift",
  },
  {
    name: "Kew",
    setting:
      "architect-updated family homes and established properties with layered finishes",
    styleCue: "balanced palettes, surface protection and long-lasting exterior work",
  },
  {
    name: "Balwyn",
    setting:
      "family homes, brick veneers and modernised interiors that need durable finishes",
    styleCue: "practical preparation, low-VOC systems and clean handovers",
  },
  {
    name: "Armadale",
    setting:
      "designer apartments, terrace houses and polished mixed-use properties",
    styleCue: "stylish colour work, discreet crews and premium detailing",
  },
  {
    name: "Malvern",
    setting:
      "period family homes, renovated layouts and rooflines that need proper prep",
    styleCue: "consistent sheen levels, careful masking and crisp final presentation",
  },
  {
    name: "Elsternwick",
    setting:
      "Edwardian homes, duplexes and family living zones that need durable paint systems",
    styleCue: "calmer interiors, weather-safe exteriors and flexible scheduling",
  },
  {
    name: "Albert Park",
    setting:
      "compact terraces, coastal winds and streetscapes where neat exterior work stands out",
    styleCue: "tight access planning, strong prep and refined facade updates",
  },
  {
    name: "Middle Park",
    setting:
      "heritage homes, sea exposure and outdoor timber that needs ongoing protection",
    styleCue: "weather-tuned coatings, careful roof prep and tidy daily resets",
  },
  {
    name: "Port Melbourne",
    setting:
      "modern townhouses, warehouse conversions and active mixed-use properties",
    styleCue: "clear scheduling, durable finishes and sharp contemporary colour schemes",
  },
  {
    name: "Beaumaris",
    setting:
      "bayside homes, sun-exposed facades and outdoor living areas with timber features",
    styleCue: "coastal durability, clean lines and materials chosen for long wear",
  },
  {
    name: "Black Rock",
    setting:
      "coastal homes, pool zones and polished exteriors that need clean maintenance cycles",
    styleCue: "salt-air prep, timber care and calm, premium presentation",
  },
  {
    name: "Sandringham",
    setting:
      "beachside homes, rooflines under constant exposure and outdoor spaces used year-round",
    styleCue: "weatherproof systems, outdoor timber care and bright coastal palettes",
  },
  {
    name: "Essendon",
    setting:
      "older weatherboards, brick homes and family properties that benefit from proper preparation",
    styleCue: "heritage-aware prep, stronger durability and cleaner finish consistency",
  },
  {
    name: "Strathmore",
    setting:
      "family homes, updated brick veneers and rooflines that need clear maintenance planning",
    styleCue: "straightforward communication, careful prep and durable exterior systems",
  },
  {
    name: "Ivanhoe",
    setting:
      "leafy streets, architect-designed updates and homes where colour balance matters",
    styleCue: "design-aware palettes, premium workmanship and clean occupied-site processes",
  },
  {
    name: "Williamstown",
    setting:
      "heritage weatherboards, coastal exposure and homes where street appeal matters immediately",
    styleCue: "protective exterior prep, clean interiors and coatings suited to bayside conditions",
  },
];

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function createLocalStoryImages(
  suburb,
  primarySrc,
  secondarySrc,
  primaryLabel,
  secondaryLabel,
) {
  return [
    {
      src: primarySrc,
      alt: `${suburb} painters ${primaryLabel}`,
    },
    {
      src: secondarySrc,
      alt: `${suburb} painters ${secondaryLabel}`,
    },
  ];
}

const localStoryImagePairs = {
  Toorak: createLocalStoryImages(
    "Toorak",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
    "premium living room repaint",
    "refined exterior painting finish",
  ),
  "South Yarra": createLocalStoryImages(
    "South Yarra",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80",
    "apartment interior repaint",
    "boutique commercial fit-out finish",
  ),
  Brighton: createLocalStoryImages(
    "Brighton",
    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1200&q=80",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80",
    "terracotta roof restoration",
    "coastal exterior repaint",
  ),
  Camberwell: createLocalStoryImages(
    "Camberwell",
    "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=1200&q=80",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
    "heritage facade painting",
    "family home interior refresh",
  ),
  Canterbury: createLocalStoryImages(
    "Canterbury",
    "https://images.unsplash.com/photo-1512914890250-353c97c9e7e2?w=1200&q=80",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80",
    "weatherboard exterior repaint",
    "elegant bedroom repaint",
  ),
  Hawthorn: createLocalStoryImages(
    "Hawthorn",
    "https://images.unsplash.com/photo-1647996179012-66b87eba3d17?w=1600&q=80",
    "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&q=80",
    "interior wall and trim refresh",
    "designer colour consultation finish",
  ),
  Kew: createLocalStoryImages(
    "Kew",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
    "rendered exterior repaint",
    "open-plan interior repaint",
  ),
  Balwyn: createLocalStoryImages(
    "Balwyn",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
    "https://images.unsplash.com/photo-1581079289103-0544b7dfad66?w=1600&q=80",
    "apartment repaint detail",
    "colour consultation palette styling",
  ),
  Armadale: createLocalStoryImages(
    "Armadale",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
    "boutique commercial repaint",
    "high-end interior repaint",
  ),
  Malvern: createLocalStoryImages(
    "Malvern",
    "https://plus.unsplash.com/premium_photo-1683133229999-3c3fd3d4cd36?w=1600&q=80",
    "https://images.unsplash.com/photo-1722876720000-f39b65b7d4a1?w=800&q=80",
    "roof restoration project",
    "roof protection coating detail",
  ),
  Elsternwick: createLocalStoryImages(
    "Elsternwick",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80",
    "https://images.unsplash.com/photo-1647996179012-66b87eba3d17?w=1600&q=80",
    "street-facing exterior repaint",
    "fresh interior room repaint",
  ),
  "Albert Park": createLocalStoryImages(
    "Albert Park",
    "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1200&q=80",
    "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=1200&q=80",
    "fence and gate repaint",
    "terrace facade painting finish",
  ),
  "Middle Park": createLocalStoryImages(
    "Middle Park",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=1200&q=80",
    "timber deck restoration",
    "roof and gutter refresh detail",
  ),
  "Port Melbourne": createLocalStoryImages(
    "Port Melbourne",
    "https://images.unsplash.com/photo-1688372199140-cade7ae820fe?w=1600&q=80",
    "https://images.unsplash.com/photo-1765279077848-d7691010f1e0?w=800&q=80",
    "office repaint project",
    "commercial interior finish",
  ),
  Beaumaris: createLocalStoryImages(
    "Beaumaris",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
    "https://images.unsplash.com/photo-1530328881134-8c525cc57036?w=1600&q=80",
    "coastal exterior painting",
    "outdoor timber and deck restoration",
  ),
  "Black Rock": createLocalStoryImages(
    "Black Rock",
    "https://images.unsplash.com/photo-1697654793340-84c94c4fe49f?w=800&q=80",
    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1200&q=80",
    "deck oiling detail",
    "roof cleaning and coating finish",
  ),
  Sandringham: createLocalStoryImages(
    "Sandringham",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80",
    "https://images.unsplash.com/photo-1523419409543-3e4f83b9b4c9?w=1200&q=80",
    "beachside house repaint",
    "deck restoration preparation",
  ),
  Essendon: createLocalStoryImages(
    "Essendon",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
    "https://images.unsplash.com/photo-1512914890250-353c97c9e7e2?w=1200&q=80",
    "family home interior repaint",
    "heritage exterior preparation",
  ),
  Strathmore: createLocalStoryImages(
    "Strathmore",
    "https://images.unsplash.com/photo-1722876720000-f39b65b7d4a1?w=800&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
    "roof coating detail",
    "double-storey exterior repaint",
  ),
  Ivanhoe: createLocalStoryImages(
    "Ivanhoe",
    "https://images.unsplash.com/photo-1581079289103-0544b7dfad66?w=1600&q=80",
    "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&q=80",
    "colour consultation palette selection",
    "premium interior styling finish",
  ),
  Williamstown: createLocalStoryImages(
    "Williamstown",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    "heritage weatherboard repaint",
    "coastal outdoor timber detail",
  ),
};

function buildFaqs(profile) {
  return [
    {
      question: `How quickly can you quote painting work in ${profile.name}?`,
      answer: `Most ${profile.name} painting quotes can be turned around within 24 hours after the site visit or once we have enough detail on the scope. The key is making the quote specific to the surfaces, preparation and access, not just giving a vague square-metre estimate.`,
    },
    {
      question: `What types of properties do you usually paint in ${profile.name}?`,
      answer: `We regularly price and deliver work for ${profile.setting} in ${profile.name}. That includes interior repainting, street-facing exteriors, roof work, outdoor timber and selected commercial scopes depending on the property.`,
    },
    {
      question: `Do you help with colour choices for ${profile.name} homes?`,
      answer: `Yes. We guide clients toward colours and sheen levels that suit the light, architecture and finish level they want. For many ${profile.name} projects, that means balancing presentation with practicality so the result still works once the home is fully lived in again.`,
    },
    {
      question: `How do you keep occupied painting jobs tidy in ${profile.name}?`,
      answer: `Clean site management is part of the process. We protect floors and furnishings, isolate work zones properly, pack down at the end of each day and keep communication clear so homeowners know exactly what is happening next.`,
    },
    {
      question: `Why do people searching for ${profile.name} painters choose you?`,
      answer: `Usually because they want more than a fast quote and a rushed finish. Our jobs are scoped around the real preparation required, premium paint systems and a cleaner delivery process that holds up well on the kinds of homes found across ${profile.name}.`,
    },
  ];
}

function buildWhyUsPoints(profile) {
  return [
    `Detailed preparation for ${profile.setting}`,
    `Premium paint systems chosen for ${profile.styleCue}`,
    `Daily tidy-ups that suit occupied ${profile.name} properties`,
    `Clear written quotes and practical scheduling from day one`,
    `Colour guidance that works with the light and finish quality of ${profile.name}`,
    `Warranty-backed workmanship from painters who understand ${profile.name}`,
  ];
}

function buildLocalStory(profile) {
  return `Clients looking for ${profile.name} painters usually want more than a quick colour change. Properties here often combine ${profile.setting}, so the standard needs to be higher from the first walkthrough onward. We plan each job around the actual surfaces, lighting, access and daily use of the home, then match the preparation and coating system to that reality instead of forcing a generic scope onto every project. That is why homeowners who compare ${profile.name} painters often end up choosing clear communication, premium products and a site process that stays calm and tidy while the work is underway. The result is not just a fresher finish. It is a better-protected home, a cleaner handover and painting work that feels right for ${profile.name}.`;
}

export const suburbs = suburbProfiles.map((profile) => {
  const slug = `${slugify(profile.name)}-painters`;
  const storyImages =
    localStoryImagePairs[profile.name] ??
    createLocalStoryImages(
      profile.name,
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
      "interior repaint result",
      "exterior repaint result",
    );

  return {
    ...profile,
    slug,
    href: `/${slug}`,
    keyword: `${profile.name} painters`,
    seo: {
      title: `${profile.name} Painters | House Painters ${profile.name} | Melbourne Pro Painters`,
      description: `Interior, exterior and commercial painters in ${profile.name}. Fixed written quotes within 24 hours, careful preparation and warranty-backed workmanship for ${profile.name} homes and businesses.`,
      keywords: `${profile.name} painters, house painters ${profile.name}, interior painters ${profile.name}, exterior painters ${profile.name}, painting services ${profile.name}`,
      image: heroImage,
      imageAlt: `${profile.name} painters for homes and businesses`,
      canonicalPath: `/${slug}`,
    },
    hero: {
      eyebrow: "Licensed, Insured & Warranty-Backed",
      title: `${profile.name} Painters`,
      highlight: "Quick, Clean Results",
      description: `Interior, exterior and commercial painting for ${profile.name} homes and businesses. Fixed written quotes within 24 hours, careful preparation and clean workmanship backed by a written warranty.`,
      primaryButtonText: `Get a ${profile.name} Quote`,
    },
    servicesIntro: {
      eyebrow: "What We Do",
      title: `${profile.name} Painting Services`,
      subtitle: `Interior, exterior, roof, deck and commercial painting tailored to ${profile.setting}. We keep scopes clear, prep thorough and the finished result aligned with the way ${profile.name} properties are actually used.`,
    },
    whyUs: {
      title: `Why ${profile.name} Clients Choose Us`,
      subtitle: `Our approach is built around ${profile.styleCue}, not rushed quotes or one-size-fits-all prep.`,
      points: buildWhyUsPoints(profile),
      image: whyUsImage,
      imageAlt: `${profile.name} painters before and after painting result`,
    },
    recentWork: {
      title: `${profile.name} Recent Work`,
      subtitle: `A quick look at the kinds of projects local clients ask ${profile.name} painters to handle, from interiors to exteriors and specialist prep-heavy work.`,
    },
    testimonials: {
      title: `What ${profile.name} Clients Say`,
      subtitle: `Feedback from homeowners and property owners who wanted reliable ${profile.name} painters and a cleaner process from start to finish.`,
    },
    secondaryCta: {
      title: `Need a clearer plan for your ${profile.name} painting project?`,
      description: `We provide fixed written quotes, realistic preparation notes and practical scheduling for homes and businesses across ${profile.name}.`,
      buttonText: `Plan My ${profile.name} Quote`,
    },
    localStory: {
      title: `${profile.name} painters who understand the local brief`,
      body: buildLocalStory(profile),
      images: storyImages,
    },
    faq: {
      eyebrow: "Before You Enquire",
      title: `${profile.name} Painting FAQ`,
      subtitle: `Quick answers for people comparing ${profile.name} painters and wanting a clearer idea of timing, process and what to expect.`,
      items: buildFaqs(profile),
    },
    finalCta: {
      title: `Need ${profile.name} painters you can rely on?`,
      subtitle: `Tell us about your interior, exterior or roof project in ${profile.name} and we will come back with a clear next step and a fast quote.`,
      buttonText: `Request a ${profile.name} Quote`,
      supportingText: "within 24 hrs",
    },
  };
});

export function getSuburbBySlug(slug) {
  return suburbs.find((suburb) => suburb.slug === slug) || null;
}
