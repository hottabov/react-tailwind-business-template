import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
} from "lucide-react";
import SEO from "@/components/ui/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import { seoData } from "@/data/seo";
import contactHero from "@/assets/images/about/painting-outside.avif";
import contactProcessImage from "@/assets/images/about/painting-the-room.avif";
import contactFaqImage from "@/assets/images/about/about-pro-painters.avif";

const nextSteps = [
  {
    title: "We review your request",
    description:
      "We look at the scope, suburb and timing so we can reply with the right next step.",
  },
  {
    title: "We confirm the details",
    description:
      "You get a quick call or email to confirm surfaces, access and the best way to quote accurately.",
  },
  {
    title: "You receive a clear quote",
    description:
      "We send a written quote or arrange a site visit so you know exactly what is included before you book.",
  },
];

const contactFaqs = [
  {
    question: "What should I include for a faster quote?",
    answer:
      "The fastest quote requests mention the suburb, the type of property, what needs painting, and whether the surfaces are in good condition or need repairs.",
  },
  {
    question: "Can I start with a phone call instead?",
    answer:
      "Yes. Some clients prefer to call first, especially for urgent commercial work or time-sensitive repaint jobs.",
  },
  {
    question: "Will you pressure me after I enquire?",
    answer:
      "No. The goal is a clear conversation, useful advice and a quote that helps you decide with confidence.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();
  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: contactFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const onSubmit = (data) => {
    // In production, POST to Netlify Forms or a backend endpoint
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <>
      <SEO {...seoData.contact} type="contact" schema={faqSchema} />

      <section className="relative pt-64 pb-16 overflow-hidden text-center text-white bg-gray-900">
        <img
          src={contactHero}
          alt="Painter working on an exterior project in Melbourne"
          className="absolute inset-0 object-cover w-full h-full opacity-20"
        />
        <div className="section-wrapper">
          <div className="relative text-center section-wrapper">
            <h1 className="mb-4 text-5xl font-display md:text-6xl">
              Get a Free Quote
            </h1>
            <p className="max-w-xl mx-auto text-xl text-gray-300">
              Tell us what needs painting and we will come back with clear next
              steps, honest advice and a no-obligation quote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="grid section-wrapper lg:grid-cols-2 gap-14">
          {/* Contact form */}
          <div id="quote-form">
            <SectionHeading eyebrow="Contact Us" title="Send Us a Message" />

            {isSubmitSuccessful && (
              <div className="p-4 mb-6 text-green-700 border border-green-200 rounded-2xl bg-green-50 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300">
                ✅ Thanks! We'll be in touch within 24 hours.
              </div>
            )}

            {/*
              Netlify Forms — add data-netlify="true" and a hidden input with the form name
              so Netlify can detect and handle this form in production.
            */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              name="contact"
              data-netlify="true"
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 text-gray-900 transition-all border border-gray-200 rounded-xl dark:border-dark-border bg-gray-50 dark:bg-dark-card dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Phone *
                  </label>
                  <input
                    {...register("phone", { required: "Phone is required" })}
                    placeholder="0400 123 456"
                    type="tel"
                    className="w-full px-4 py-3 text-gray-900 transition-all border border-gray-200 rounded-xl dark:border-dark-border bg-gray-50 dark:bg-dark-card dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Email *
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Invalid email",
                    },
                  })}
                  placeholder="jane@example.com"
                  type="email"
                  className="w-full px-4 py-3 text-gray-900 transition-all border border-gray-200 rounded-xl dark:border-dark-border bg-gray-50 dark:bg-dark-card dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Service Needed
                </label>
                <select
                  {...register("service")}
                  className="w-full px-4 py-3 text-gray-900 transition-all border border-gray-200 rounded-xl dark:border-dark-border bg-gray-50 dark:bg-dark-card dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <option value="">Select a service...</option>
                  <option>Interior Painting</option>
                  <option>Exterior Painting</option>
                  <option>Commercial Painting</option>
                  <option>Roof Painting</option>
                  <option>Fence & Deck Painting</option>
                  <option>Colour Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Suburb / Area
                </label>
                <input
                  {...register("suburb")}
                  placeholder="e.g. Richmond, Toorak, Brighton..."
                  className="w-full px-4 py-3 text-gray-900 transition-all border border-gray-200 rounded-xl dark:border-dark-border bg-gray-50 dark:bg-dark-card dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Message / Project Details
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Tell us about your project — size, current condition, timing, etc."
                  className="w-full px-4 py-3 text-gray-900 transition-all border border-gray-200 resize-none rounded-xl dark:border-dark-border bg-gray-50 dark:bg-dark-card dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-bold text-lg
                  transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-brand-500/30"
              >
                Send Message & Request Quote
              </button>
              <p className="text-sm text-center text-gray-400 dark:text-gray-500">
                No spam, no pushy follow-up, just a clear next step and quote
                advice.
              </p>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <SectionHeading eyebrow="Reach Us" title="Contact Information" />

            {[
              {
                icon: Phone,
                label: "Phone",
                value: "(03) 9123 4567",
                href: "tel:0391234567",
                sub: "Mon–Fri 7am–6pm, Sat 8am–3pm",
              },
              {
                icon: Mail,
                label: "Email",
                value: "hello@propainterscompany.com.au",
                href: "mailto:hello@propainterscompany.com.au",
                sub: "We reply within a few hours",
              },
              {
                icon: MapPin,
                label: "Service Area",
                value: "All Melbourne Suburbs",
                href: null,
                sub: "Covering metro and inner suburbs",
              },
              {
                icon: Clock,
                label: "Business Hours",
                value: "Mon–Fri: 7am–6pm",
                href: null,
                sub: "Saturday: 8am–3pm",
              },
            ].map(({ icon: Icon, label, value, href, sub }) => (
              <div
                key={label}
                className="flex items-start gap-5 p-6 border border-gray-100 rounded-2xl bg-gray-50 dark:bg-dark-card dark:border-dark-border"
              >
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-xl bg-brand-500/10">
                  <Icon className="text-brand-500" size={22} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 font-medium mb-0.5">
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-lg font-semibold text-gray-900 transition-colors dark:text-white hover:text-brand-500"
                    >
                      {value}
                    </a>
                  ) : (
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {value}
                    </div>
                  )}
                  <p className="text-gray-400 text-sm mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-dark-card">
        <div className="grid items-stretch gap-10 section-wrapper lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] min-h-[520px] shadow-xl">
            <img
              src={contactProcessImage}
              alt="Painter preparing an interior room before quoting and repainting"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-brand-500/20 bg-brand-50 p-7 text-gray-900 shadow-xl shadow-brand-500/5 dark:border-brand-500/15 dark:bg-brand-500/10 dark:text-white md:p-8">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/70 via-white/10 to-brand-500/10 dark:from-white/5 dark:via-transparent dark:to-brand-500/5" />

            <div className="relative z-10">
              <SectionHeading
                eyebrow="What Happens Next"
                title="Fast, Clear Next Steps"
              />

              <div className="space-y-5 mt-8">
                {nextSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex items-center justify-center w-10 h-10 font-bold text-white rounded-2xl bg-brand-500 font-display shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-dark-bg">
        <div className="grid items-start gap-10 section-wrapper lg:grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)]">
          <div>
            <SectionHeading
              eyebrow="Before You Enquire"
              title="Questions We Hear All The Time"
              subtitle="Quick answers that make it easier to send your quote request with confidence."
            />

            <div className="mt-10 space-y-4">
              {contactFaqs.map((faq, index) => {
                const panelId = `contact-faq-panel-${index}`;
                const buttonId = `contact-faq-button-${index}`;
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden bg-gray-50 border border-gray-100 shadow-sm rounded-3xl dark:bg-dark-card dark:border-dark-border"
                  >
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                        className="flex items-center justify-between w-full gap-4 px-6 py-5 text-left transition-colors md:px-7 md:py-6 hover:bg-brand-50/60 dark:hover:bg-dark-bg"
                      >
                        <span className="text-lg font-semibold text-gray-900 font-display dark:text-white">
                          {faq.question}
                        </span>
                        <ChevronDown
                          size={20}
                          className={`shrink-0 text-brand-500 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </h3>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 leading-relaxed text-gray-600 md:px-7 dark:text-gray-300">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-xl">
            <img
              src={contactFaqImage}
              alt="Melbourne Pro Painters team on site during a completed project"
              className="w-full h-[520px] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
