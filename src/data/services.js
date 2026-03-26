/**
 * Services data — used on the Services and ServiceDetail pages.
 * Each service has a unique slug. Extended with landing-page sections.
 */
export const services = [
  {
    slug: 'interior-painting',
    title: 'Interior Painting',
    tagline: 'Refresh Every Room',
    heroImage: 'https://images.unsplash.com/photo-1647996179012-66b87eba3d17?w=1600&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1647996179012-66b87eba3d17?w=800&q=80',
    contentImage: 'https://plus.unsplash.com/premium_photo-1681566678219-46eccfe221bb?w=800&q=80',
    summary:
      'Breathe new life into your living spaces with flawless interior painting. We use premium low-VOC paints and meticulous preparation for lasting results.',

    problem: {
      title: "Tired of dull, marked walls bringing down your home's vibe?",
      text: "Faded paint, visible scuffs, and outdated colours can make even the most beautiful home feel tired and uninviting. Whether you're prepping for sale or simply want a fresh look, living with subpar interiors affects how you enjoy your space every day. DIY painting often leads to frustrating streaks, messy floors, and taking up your weekends for weeks on end."
    },
    solution: {
      title: 'Flawless finishes without the hassle',
      text: 'We take the stress out of interior painting. From meticulous preparation to the final coat, our professional painters deliver a showroom-quality finish while protecting your furniture and floors. We guarantee clean lines and vibrant, even colours.',
      benefits: [
        'Meticulous surface preparation (crack filling & sanding)',
        'Premium, washable low-VOC paints (Dulux/Taubmans)',
        'Full furniture & floor protection',
        'Clean, tidy workspace left every evening',
      ]
    },
    process: {
      title: 'How We Work',
      steps: [
        { title: 'Consultation', description: 'We assess your space, discuss your goals, and provide a fixed-price quote.' },
        { title: 'Thorough Prep', description: 'We fill gaps, sand surfaces smooth, and mask all trims and floors.' },
        { title: 'Expert Painting', description: 'Application of premium primers and two top coats for a rich, durable finish.' },
        { title: 'Final Review', description: 'We clean up completely and walk you through the work to ensure 100% satisfaction.' }
      ]
    },
    reviews: [
      { name: 'Sarah Jenkins', rating: 5, text: 'The guys did an amazing job on our living room and hallway. Barely even knew they were there, and the finish is flawless. Highly recommend!', avatar: 'https://i.pravatar.cc/150?img=47', business: 'Residential Client' },
      { name: 'David T.', rating: 5, text: 'Very professional. Fixed all the plaster cracks before painting, which we really appreciated. Looks like a brand new house.', avatar: 'https://i.pravatar.cc/150?img=12', business: 'Residential Client' },
      { name: 'Mark W.', rating: 5, text: 'Punctual, clean, and delivered a perfect finish. My house feels spectacular.', avatar: 'https://i.pravatar.cc/150?img=33', business: 'Residential Client' }
    ],
    secondaryCta: {
      title: 'Not sure which colours to choose?',
      description: 'Book our interior painting service and get a free colour consultation included.',
      buttonText: 'Claim Your Free Quote'
    },

    seoTitle: 'Interior Painters Melbourne | Melbourne Pro Painters',
    seoDescription:
      'Professional interior painting services across Melbourne. Low-VOC premium paints, crack repairs, 2-year warranty. Free quotes.',
    seoKeywords:
      'interior painters Melbourne, interior house painting Melbourne, room painting Melbourne',
  },
  {
    slug: 'exterior-painting',
    title: 'Exterior Painting',
    tagline: 'Protect & Beautify',
    heroImage: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
    contentImage: 'https://images.unsplash.com/photo-1657346088167-b982455bf29a?q=80&w=987?w=800&q=80',
    summary:
      "Shield your home from Melbourne's harsh weather while boosting kerb appeal. Our exterior specialists prepare, prime, and paint for a finish that lasts.",

    problem: {
      title: "Is your home's exterior looking weathered and neglected?",
      text: "Melbourne's extreme weather—from scorching summer sun to heavy winter rains—mercilessly breaks down exterior paint. Peeling, blistering, and fading paint doesn't just look bad; it leaves your home's timber and masonry exposed to rot, moisture damage, and costly structural repairs. Ignoring it only makes the damage worse over time."
    },
    solution: {
      title: 'Long-lasting weather protection and stunning kerb appeal',
      text: 'Our specialized exterior painting service uses high-performance, weather-resistant coatings designed specifically for the tough Australian climate. We do the hard work of properly preparing the surface so the paint adheres perfectly and protects your home for years.',
      benefits: [
        'High-pressure washing to remove grime and failing paint',
        'Extensive scraping, sanding, and gap caulking',
        'Premium Dulux Weathershield applications',
        '3-year workmanship and peeling warranty',
      ]
    },
    process: {
      title: 'Our Exterior Process',
      steps: [
        { title: 'Site Inspection', description: 'We identify all areas needing rot repair, scraping, or special attention.' },
        { title: 'Deep Cleaning', description: 'High-pressure washing removes dirt, mould, and loose paint.' },
        { title: 'Preparation', description: 'We scrape, sand, caulk gaps, and prime all bare timber and masonry.' },
        { title: 'Weatherproof Coating', description: 'Application of two thick coats of premium exterior paint.' }
      ]
    },
    reviews: [
      { name: 'Michael C.', rating: 5, text: 'Transformed the look of our weatherboard home. The team was incredibly thorough with the prep work before they even opened a paint can.', avatar: 'https://i.pravatar.cc/150?img=11', business: 'Residential Client' },
      { name: 'Emma Wallace', rating: 5, text: 'Fantastic attention to detail. Our house looks modern and fresh, and we feel confident it’s protected against the weather.', avatar: 'https://i.pravatar.cc/150?img=5', business: 'Residential Client' },
      { name: 'John D.', rating: 5, text: 'Highly recommend these guys for exterior painting. They spent days properly preparing the surfaces.', avatar: 'https://i.pravatar.cc/150?img=68', business: 'Residential Client' }
    ],
    secondaryCta: {
      title: 'Protect your biggest investment today',
      description: 'Don\'t wait for the weather to cause permanent damage. Get a professional assessment and quote.',
      buttonText: 'Book an Assessment'
    },

    seoTitle: 'Exterior Painters Melbourne | Melbourne Pro Painters',
    seoDescription:
      'Expert exterior house painters in Melbourne. Weatherproof coatings, full preparation, 3-year weather warranty. Book a free quote.',
    seoKeywords:
      'exterior painters Melbourne, house exterior painting, weatherproof painting Melbourne',
  },
  {
    slug: 'commercial-painting',
    title: 'Commercial Painting',
    tagline: 'Minimal Downtime, Maximum Impact',
    heroImage: 'https://images.unsplash.com/photo-1688372199140-cade7ae820fe?w=1600&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1688372199140-cade7ae820fe?w=800&q=80',
    contentImage: 'https://images.unsplash.com/photo-1765279077848-d7691010f1e0?w=800&q=80',
    summary:
      'We work around your business hours to deliver professional painting for offices, retail spaces, warehouses, and strata buildings — on time, on budget.',

    problem: {
      title: "Does a tired commercial space hurt your brand's image?",
      text: "Customers and clients judge your business the moment they walk through the door. Scuffed office walls, faded retail facades, or poorly maintained strata corridors signal a lack of professionalism. However, business owners often delay painting because they can't afford to close down operations or deal with major disruptions during working hours."
    },
    solution: {
      title: 'Premium commercial painting without the operational downtime',
      text: 'We respect your business operations. Our commercial team is equipped to handle large-scale projects quickly and efficiently. We offer flexible scheduling, including nights and weekends, ensuring your newly painted space is ready for business when you are.',
      benefits: [
        'After-hours and weekend scheduling available',
        'Strict adherence to OH&S, SWMS, and safety standards',
        'Fully insured: $20M Public Liability',
        'Dedicated project manager for seamless communication',
      ]
    },
    process: {
      title: 'Commercial Workflow',
      steps: [
        { title: 'Scope & Quote', description: 'Detailed walkthrough to understand access, timelines, and specialized coating requirements.' },
        { title: 'Safety Planning', description: 'Provision of SWMS, insurance certificates, and site-specific safety plans.' },
        { title: 'Flexible Execution', description: 'Painting is conducted systematically to minimize disruption to staff and customers.' },
        { title: 'Quality Handover', description: 'Final inspection with stakeholders to ensure all branding and quality standards are met.' }
      ]
    },
    reviews: [
      { name: 'Greg H.', rating: 5, text: 'Painted our entire 3-story office over two weekends. Monday morning, the staff walked into a brand new office with zero mess. Brilliant.', avatar: 'https://i.pravatar.cc/150?img=52', business: 'Facilities Manager' },
      { name: 'Retail Partners Pty', rating: 5, text: 'Reliable, fully insured, and they managed the project perfectly. We use them for all our retail fit-outs now.', avatar: 'https://i.pravatar.cc/150?img=3', business: 'Commercial Client' },
      { name: 'Sarah L.', rating: 5, text: 'Extremely professional team, adhered to all OH&S requirements and delivered on time without impacting trading hours.', avatar: 'https://i.pravatar.cc/150?img=20', business: 'Retail Owner' }
    ],
    secondaryCta: {
      title: 'Need it done outside business hours?',
      description: 'Let’s discuss your project scale and scheduling requirements.',
      buttonText: 'Request a Commercial Proposal'
    },

    seoTitle: 'Commercial Painters Melbourne | Office & Retail Painting',
    seoDescription:
      'Professional commercial painting in Melbourne. Offices, retail, strata & warehouses. After-hours available, fully insured.',
    seoKeywords:
      'commercial painters Melbourne, office painting Melbourne, strata painting Melbourne',
  },
  {
    slug: 'roof-painting',
    title: 'Roof Painting',
    tagline: "Extend Your Roof's Life",
    heroImage: 'https://plus.unsplash.com/premium_photo-1683133229999-3c3fd3d4cd36?w=1600&q=80',
    thumbImage: 'https://plus.unsplash.com/premium_photo-1683133229999-3c3fd3d4cd36?w=800&q=80',
    contentImage: 'https://images.unsplash.com/photo-1722876720000-f39b65b7d4a1?w=800&q=80',
    summary:
      "Restore and protect your roof with professional-grade coatings that improve insulation, prevent leaks, and dramatically improve your home's appearance.",

    problem: {
      title: "Is an aging roof putting your home at risk?",
      text: "Over time, concrete tiles lose their protective glaze, Colorbond fades, and pointing cracks. Not only does an old, moss-covered roof drag down your home's curb appeal, but porous tiles absorb water, adding massive weight to your roof structure and increasing the risk of expensive interior leaks."
    },
    solution: {
      title: 'Complete roof restoration and advanced membrane coating',
      text: 'A professional roof restoration is a fraction of the cost of a full roof replacement. We clean, repair, and apply advanced membrane coatings that seal porous tiles, reflect harsh UV rays to reduce cooling costs, and make your home look spectacular from the street.',
      benefits: [
        'Moss and lichen chemical treatment',
        'Repointing of all ridge capping for structural integrity',
        'Thermal-reflective membrane coatings available',
        'Adds up to 15 years to your roof’s lifespan',
      ]
    },
    process: {
      title: 'The Restoration Process',
      steps: [
        { title: 'Inspection & Wash', description: 'We identify broken tiles and use industrial high-pressure cleaning to remove decades of dirt.' },
        { title: 'Repairs & Repointing', description: 'Replacing broken tiles and applying flexible pointing to ridge caps.' },
        { title: 'Sealing & Priming', description: 'Application of a specialized primer that binds to the porous tile surface.' },
        { title: 'Membrane Application', description: 'Two thick coats of highly durable roof membrane for maximum protection and color depth.' }
      ]
    },
    reviews: [
      { name: 'Tom Roberts', rating: 5, text: 'Saved us thousands compared to a roof replacement. The dark charcoal membrane looks incredibly modern. Very happy.', avatar: 'https://i.pravatar.cc/150?img=60', business: 'Residential Client' },
      { name: 'Linda K.', rating: 5, text: 'They fixed all the pointing, washed years of moss off, and the final paint job is just perfect. Great tradesmen.', avatar: 'https://i.pravatar.cc/150?img=42', business: 'Residential Client' },
      { name: 'Paul M.', rating: 5, text: 'No more leaks, and the house looks amazing from the street. Very efficient communication.', avatar: 'https://i.pravatar.cc/150?img=59', business: 'Residential Client' }
    ],
    secondaryCta: {
      title: 'Stop leaks before they start',
      description: 'Get a free drone inspection and roof restoration quote today.',
      buttonText: 'Get My Free Roof Quote'
    },

    seoTitle: 'Roof Painters Melbourne | Tile & Colorbond Roof Painting',
    seoDescription:
      'Professional roof painting and restoration across Melbourne. Tile re-pointing, moss treatment, 5-year warranty. Free quotes.',
    seoKeywords:
      'roof painters Melbourne, roof painting Melbourne, tile roof restoration Melbourne',
  },
  {
    slug: 'fence-deck-painting',
    title: 'Fence & Deck Painting',
    tagline: 'Outdoor Spaces, Perfected',
    heroImage: 'https://images.unsplash.com/photo-1530328881134-8c525cc57036?w=1600&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1530328881134-8c525cc57036?w=800&q=80',
    contentImage: 'https://images.unsplash.com/photo-1697654793340-84c94c4fe49f?w=800&q=80',
    summary:
      'Revive tired timber or Colorbond fences and decks with professional preparation, staining, and sealing for outdoor surfaces that stay beautiful season after season.',

    problem: {
      title: "Are your outdoor areas looking grey, dry, and splintered?",
      text: "Unprotected timber decks and fences degrade incredibly fast under the harsh Australian sun and constant rain. Wood turning grey, splintering, and warping isn't just an eyesore—it means the timber is actively rotting and losing structural integrity, which eventually leads to complete replacement."
    },
    solution: {
      title: 'Rejuvenate and protect your outdoor timber and fencing',
      text: 'We bring dead wood back to life. Whether it’s oiling a faded merbau deck or rapidly spray-painting hundreds of meters of paling fence, we use industrial-grade treatments that nourish timber and seal out moisture. Your outdoor space will be ready for summer entertaining.',
      benefits: [
        'Deep deck cleaning and brightening treatments',
        'Premium penetrating oils and decking stains',
        'Efficient airless spraying for large fence runs',
        'Colorbond fence revitalization',
      ]
    },
    process: {
      title: 'Our Deck & Fence Process',
      steps: [
        { title: 'Assessment', description: 'Checking for rot, loose boards, and determining the appropriate timber treatment.' },
        { title: 'Deep Clean', description: 'Using specialized timber revivers and pressure washing to strip old oil and greying.' },
        { title: 'Sanding', description: 'Light sanding if required to open the timber grain for maximum oil absorption.' },
        { title: 'Oiling & Painting', description: 'Applying premium penetrating oils for decks, or durable exterior paints for fences.' }
      ]
    },
    reviews: [
      { name: 'Jason M.', rating: 5, text: 'They spray-painted our entire perimeter fence in a day. It would have taken me weeks by hand. Looks incredibly sharp.', avatar: 'https://i.pravatar.cc/150?img=30', business: 'Residential Client' },
      { name: 'Chloe Davies', rating: 5, text: 'Our deck was completely grey and we thought it was ruined. They brought the rich timber color right back.', avatar: 'https://i.pravatar.cc/150?img=20', business: 'Residential Client' },
      { name: 'Oliver S.', rating: 5, text: 'Fantastic transformation of our outdoor space. Will absolutely use them again for the interior.', avatar: 'https://i.pravatar.cc/150?img=15', business: 'Residential Client' }
    ],
    secondaryCta: {
      title: 'Get your backyard summer-ready',
      description: 'Book your fence and deck restoration before the busy season hits.',
      buttonText: 'Request an Estimate'
    },

    seoTitle: 'Fence & Deck Painters Melbourne | Melbourne Pro Painters',
    seoDescription:
      'Expert fence and deck painting in Melbourne. Timber staining, deck oiling, and Colorbond repainting. Book a free measure and quote.',
    seoKeywords:
      'fence painters Melbourne, deck painting Melbourne, timber staining Melbourne',
  },
  {
    slug: 'colour-consultation',
    title: 'Colour Consultation',
    tagline: 'Find Your Perfect Palette',
    heroImage: 'https://images.unsplash.com/photo-1581079289103-0544b7dfad66?w=1600&q=80',
    thumbImage: 'https://images.unsplash.com/photo-1581079289103-0544b7dfad66?w=800&q=80',
    contentImage: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&q=80',
    summary:
      'Not sure which colour to choose? Our colour consultants visit your home, assess natural light and furnishings, and create a personalised colour scheme just for you.',

    problem: {
      title: "Overwhelmed by thousands of paint swatches?",
      text: "Choosing the wrong paint color is an expensive, stressful mistake. You might select a beautiful 'warm white' in the store, only to find it looks yellow or pink under the natural lighting of your living room. Paralyzed by the fear of getting it wrong, many homeowners delay their painting projects indefinitely."
    },
    solution: {
      title: 'Expert guidance to guarantee you love your new colors',
      text: 'Take the guesswork out of the most important part of your project. Our professional color consultants work with the unique lighting, architecture, and furnishings of your home to create a harmonious palette. We do test patches and provide a full visual schedule so you can proceed with absolute confidence.',
      benefits: [
        'In-home assessment of your specific lighting conditions',
        'Cohesive flow between rooms and exterior finishes',
        'A4 colour swatches and test patches applied directly to walls',
        'Full schedule document handed to our painting team',
      ]
    },
    process: {
      title: 'How It Works',
      steps: [
        { title: 'In-Home Visit', description: 'A 60-90 minute walkthrough of your property to discuss your vision and style.' },
        { title: 'Lighting Analysis', description: 'We assess how natural and artificial light will affect different undertones in your space.' },
        { title: 'Selection', description: 'Reviewing physical moodboards, large swatches, and applying test patches to verify.' },
        { title: 'Final Schedule', description: 'You receive a formalized document detailing every wall, trim, ceiling, and finish to be painted.' }
      ]
    },
    reviews: [
      { name: 'Rebecca N.', rating: 5, text: 'I was agonizing over whites. The consultant walked in, looked at the floorboards, and narrowed it down to two perfect choices in minutes. Best money spent.', avatar: 'https://i.pravatar.cc/150?img=43', business: 'Residential Client' },
      { name: 'James & Lisa', rating: 5, text: 'We wanted a bold exterior but were scared it would look tacky. The colour scheme they designed looks incredibly premium.', avatar: 'https://i.pravatar.cc/150?img=8', business: 'Residential Client' },
      { name: 'Sophie P.', rating: 5, text: 'Took away all the stress of picking colours for our renovation. The test patches made deciding so easy.', avatar: 'https://i.pravatar.cc/150?img=25', business: 'Residential Client' }
    ],
    secondaryCta: {
      title: 'Ready to transform your home?',
      description: 'Book your in-home consultation today. Fee is fully credited if you proceed with our painting services.',
      buttonText: 'Book a Consultant'
    },

    seoTitle: 'Colour Consultation Melbourne | Paint Colour Advice',
    seoDescription:
      'Professional paint colour consultation in Melbourne. In-home visits, digital renderings, personalised colour schemes. Book your consult today.',
    seoKeywords:
      'colour consultation Melbourne, paint colour advice Melbourne, interior colour scheme Melbourne',
  },
];
