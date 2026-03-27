import { useForm } from "react-hook-form";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import SEO from "@/components/ui/SEO";
import SectionHeading from "@/components/ui/SectionHeading";
import { seoData } from "@/data/seo";

const contactTrustPoints = [
  "Response within 24 hours",
  "Fixed written quotes",
  "No-obligation site visits",
  "Warranty on all work",
];

const quoteChecklist = [
  "Property type or business type",
  "Suburb and access details",
  "What needs painting",
  "Rough timing or deadline",
];

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

      <section className="pt-32 pb-16 text-center text-white bg-gray-900">
        <div className="section-wrapper">
          <h1 className="mb-4 text-5xl font-display md:text-6xl">
            Get a Free Quote
          </h1>
          <p className="max-w-xl mx-auto text-xl text-gray-300">
            Tell us what needs painting and we will come back with clear next
            steps, honest advice and a no-obligation quote.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="grid section-wrapper lg:grid-cols-2 gap-14">
          {/* Contact form */}
          <div id="quote-form">
            <SectionHeading eyebrow="Contact Us" title="Send Us a Message" />
            <div className="flex flex-wrap gap-3 mb-8">
              {contactTrustPoints.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-full bg-gray-50 dark:bg-dark-card dark:border-dark-border dark:text-gray-200"
                >
                  <CheckCircle size={16} className="text-brand-500" />
                  {item}
                </div>
              ))}
            </div>

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

              <div className="p-5 border border-gray-100 rounded-3xl bg-gray-50 dark:bg-dark-card dark:border-dark-border">
                <div className="flex items-center gap-2 mb-3">
                  <ArrowRight size={16} className="text-brand-500" />
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">
                    Fastest way to get quoted
                  </h3>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {quoteChecklist.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                    >
                      <CheckCircle
                        size={15}
                        className="text-brand-500 shrink-0"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
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
            <SectionHeading
              eyebrow="What Happens Next"
              title="Fast, Clear Next Steps"
            />

            <div className="rounded-[2rem] bg-gray-900 text-white p-7 md:p-8 shadow-xl">
              <div className="space-y-5">
                {nextSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex items-center justify-center w-10 h-10 font-bold text-white rounded-2xl bg-brand-500 font-display shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-semibold">
                        {step.title}
                      </h3>
                      <p className="leading-relaxed text-white/70">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
                value: "hello@melbournepropainters.com.au",
                href: "mailto:hello@melbournepropainters.com.au",
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

      <section className="py-20 bg-gray-50 dark:bg-dark-card">
        <div className="section-wrapper">
          <SectionHeading
            eyebrow="Before You Enquire"
            title="Questions We Hear All The Time"
            subtitle="Quick answers that make it easier to send your quote request with confidence."
            center
          />

          <div className="grid gap-6 md:grid-cols-3">
            {contactFaqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white border border-gray-100 shadow-sm rounded-3xl dark:bg-dark-bg dark:border-dark-border p-7"
              >
                <h3 className="mb-4 text-xl text-gray-900 font-display dark:text-white">
                  {faq.question}
                </h3>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
