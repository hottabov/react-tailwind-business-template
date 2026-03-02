import { CheckCircle, Users, Shield, Clock } from "lucide-react";
import SEO from "@/components/ui/SEO";
import CTA from "@/components/ui/CTA";
import SectionHeading from "@/components/ui/SectionHeading";
import { seoData } from "@/data/seo";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import pic1 from "@/assets/images/about/painting-the-room.avif";
import pic2 from "@/assets/images/about/about-pro-painters.avif";
import pic3 from "@/assets/images/about/painting-outside.avif";

const values = [
  {
    icon: <Users size={24} />,
    title: "Respect for Your Home",
    desc: "We treat your property as if it were our own. That means thorough protection, clean workspaces, and polite communication every day.",
  },
  {
    icon: <Shield size={24} />,
    title: "Uncompromising Quality",
    desc: "We never water down paint or skip preparation steps. We use premium products and proper techniques so your paint job lasts for years.",
  },
  {
    icon: <Clock size={24} />,
    title: "Reliable & On Time",
    desc: "If we say we'll be there at 7:30 AM, we are there at 7:30 AM. We respect your schedule and work efficiently to meet deadlines.",
  },
];

export default function AboutPage() {
  const [storyRef1, storyVisible1] = useScrollAnimation({ threshold: 0.2 });
  const [storyRef2, storyVisible2] = useScrollAnimation({ threshold: 0.2 });
  const [valuesRef, valuesVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <>
      <SEO {...seoData.about} />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative pt-64 pb-20 overflow-hidden text-white bg-gray-900">
        <img
          src={pic1}
          alt="Melbourne Pro Painters are painting a living room wall"
          className="absolute inset-0 object-cover w-full h-full opacity-20"
        />
        <div className="section-wrapper">
          <div className="relative text-center section-wrapper">
            <h1 className="mb-4 text-5xl font-display md:text-6xl animate-fade-up">
              Our Story
            </h1>
            <p
              className="max-w-2xl mx-auto text-xl text-gray-300 animate-fade-up"
              style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}
            >
              From a small crew in Windsor to one of Melbourne's most trusted
              painting companies. This is how we got here.
            </p>
          </div>
        </div>
      </section>

      {/* ── STORY BLOCK 1 (Text Left, Image Right) ────────────────── */}
      <section className="py-24 bg-white dark:bg-dark-bg" ref={storyRef1}>
        <div className="grid items-center gap-12 section-wrapper lg:grid-cols-2">
          <div
            className={`transition-all duration-1000 transform ${
              storyVisible1
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <span className="inline-block mb-3 text-sm font-semibold tracking-widest uppercase text-brand-500">
              The Beginning
            </span>
            <h2 className="mb-6 text-4xl leading-tight text-gray-900 font-display md:text-5xl dark:text-white">
              Humble Beginnings in Windsor
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              <p>
                Every great business starts with a simple idea. For Melbourne
                Pro Painters, it began over 15 years ago in a small garage in
                Windsor. We noticed a gap in the market: too many painters were
                either cheap and unreliable, or professional but completely
                unaffordable.
              </p>
              <p>
                We started with a single van, two ladders, and a commitment to
                bridge that gap. We focused on local heritage homes, learning
                exactly what it takes to protect period timber and delicate
                plaster from Melbourne's notorious four-seasons-in-one-day
                weather.
              </p>
              <p>
                Word of mouth spread fast. A single living room in Prahran
                turned into an exterior repaint in St Kilda, and before we knew
                it, our little Windsor-based crew was in high demand.
              </p>
            </div>
          </div>
          <div
            className={`relative transition-all duration-1000 delay-300 transform ${
              storyVisible1
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <img
              src={pic2}
              alt="Painter standing in front of a freshly painted wall, representing the early days of Melbourne Pro Painters in Windsor"
              className="object-cover w-full shadow-2xl rounded-3xl aspect-square"
            />
            <div className="absolute inset-0 translate-x-4 translate-y-4 border-2 rounded-3xl border-brand-500/20 -z-10" />
          </div>
        </div>
      </section>

      {/* ── STORY BLOCK 2 (Image Left, Text Right) ────────────────── */}
      <section className="py-24 bg-gray-50 dark:bg-dark-card" ref={storyRef2}>
        <div className="grid items-center gap-12 section-wrapper lg:grid-cols-2">
          {/* Mobile reordering: image always shows below text on small screens, so we use order classes */}
          <div
            className={`relative order-2 lg:order-1 transition-all duration-1000 transform ${
              storyVisible2
                ? "opacity-100 -translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <img
              src={pic3}
              alt="Commercial painting project"
              className="object-cover w-full shadow-2xl rounded-3xl aspect-[4/3]"
            />
            <div className="absolute inset-0 -translate-x-4 translate-y-4 border-2 rounded-3xl border-brand-500/20 -z-10" />
          </div>

          <div
            className={`order-1 lg:order-2 transition-all duration-1000 delay-300 transform ${
              storyVisible2
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <span className="inline-block mb-3 text-sm font-semibold tracking-widest uppercase text-brand-500">
              Growth & Expansion
            </span>
            <h2 className="mb-6 text-4xl leading-tight text-gray-900 font-display md:text-5xl dark:text-white">
              Expanding Across Melbourne
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              <p>
                As our reputation grew, so did our territory. We scaled up our
                team, ensuring every new painter shared our obsessive attention
                to detail. By 2012, we were servicing the entire Bayside area
                and the Eastern Suburbs.
              </p>
              <p>
                A major milestone came in 2014 when we were contracted for a
                large-scale residential development project down in Geelong. For
                six months, our crews traveled down the Princes Freeway,
                delivering flawless finishes on dozens of new builds under
                strict deadlines.
              </p>
              <p>
                Today, Melbourne Pro Painters covers all of Greater Melbourne.
                Whether it's a sleek modern apartment in the CBD or a sprawling
                family home in Doncaster, our scale has changed, but our Windsor
                roots—and our dedication to the craft—remain the same.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES & CLIENT BENEFITS ──────────────────────────── */}
      <section className="py-24 bg-white dark:bg-dark-bg" ref={valuesRef}>
        <div className="section-wrapper">
          <div
            className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform ${
              valuesVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <SectionHeading
              eyebrow="Why Trust Us"
              title="Our Core Values"
              subtitle="We believe that a great painting experience is about more than just the final colour. It's about how we treat you and your home along the way."
              center
            />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((val, i) => (
              <div
                key={val.title}
                className={`p-8 bg-gray-50 dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm
                  transition-all duration-700 transform ${
                    valuesVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex items-center justify-center mb-6 text-white rounded-full shadow-md w-14 h-14 bg-brand-500 shadow-brand-500/30">
                  {val.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                  {val.title}
                </h3>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Benefits List */}
          <div
            className={`mt-16 p-8 bg-brand-50 dark:bg-brand-500/10 rounded-3xl border border-brand-500/20 max-w-4xl mx-auto
              transition-all duration-1000 delay-500 ${valuesVisible ? "opacity-100" : "opacity-0"}`}
          >
            <h3 className="mb-6 text-2xl font-bold text-center text-gray-900 font-display dark:text-white">
              What You Get With Us:
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Fully licensed and insured team",
                "Detailed, itemised written quotes",
                "Color consultation available",
                "Top-tier paints (Dulux, Taubmans)",
                "Full clean-up upon completion",
                "Workmanship warranty included",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="text-brand-500 shrink-0" size={20} />
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <CTA
        title="Ready to Start Your Next Chapter?"
        subtitle="Let our experienced team bring your vision to life. Contact us today to arrange a free site visit."
      />
    </>
  );
}
