import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SEO from '@/components/ui/SEO';
import SectionHeading from '@/components/ui/SectionHeading';
import { seoData } from '@/data/seo';

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm();

  const onSubmit = (data) => {
    // In production, POST to Netlify Forms or a backend endpoint
    console.log('Form submitted:', data);
    reset();
  };

  return (
    <>
      <SEO {...seoData.contact} />

      <section className="pt-32 pb-16 bg-gray-900 text-white text-center">
        <div className="section-wrapper">
          <h1 className="font-display text-5xl md:text-6xl mb-4">Get a Free Quote</h1>
          <p className="text-gray-300 text-xl max-w-xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours with a no-obligation quote.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="section-wrapper grid lg:grid-cols-2 gap-14">

          {/* Contact form */}
          <div>
            <SectionHeading eyebrow="Contact Us" title="Send Us a Message" />

            {isSubmitSuccessful && (
              <div className="mb-6 p-4 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300">
                ✅ Thanks! We'll be in touch within 24 hours.
              </div>
            )}

            {/*
              Netlify Forms — add data-netlify="true" and a hidden input with the form name
              so Netlify can detect and handle this form in production.
            */}
            <form onSubmit={handleSubmit(onSubmit)}
              name="contact" data-netlify="true"
              className="space-y-5">
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Full Name *
                  </label>
                  <input {...register('name', { required: 'Name is required' })}
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-border
                      bg-gray-50 dark:bg-dark-card text-gray-900 dark:text-white
                      focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all" />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Phone *
                  </label>
                  <input {...register('phone', { required: 'Phone is required' })}
                    placeholder="0400 123 456" type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-border
                      bg-gray-50 dark:bg-dark-card text-gray-900 dark:text-white
                      focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all" />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Email *
                </label>
                <input {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' }
                })}
                  placeholder="jane@example.com" type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-border
                    bg-gray-50 dark:bg-dark-card text-gray-900 dark:text-white
                    focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all" />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Service Needed
                </label>
                <select {...register('service')}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-border
                    bg-gray-50 dark:bg-dark-card text-gray-900 dark:text-white
                    focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all">
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
                <input {...register('suburb')}
                  placeholder="e.g. Richmond, Toorak, Brighton..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-border
                    bg-gray-50 dark:bg-dark-card text-gray-900 dark:text-white
                    focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Message / Project Details
                </label>
                <textarea {...register('message')} rows={5}
                  placeholder="Tell us about your project — size, current condition, timing, etc."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-dark-border
                    bg-gray-50 dark:bg-dark-card text-gray-900 dark:text-white
                    focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all resize-none" />
              </div>

              <button type="submit"
                className="w-full py-4 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-bold text-lg
                  transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-brand-500/30">
                Send Message & Request Quote
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <SectionHeading eyebrow="Reach Us" title="Contact Information" />

            {[
              {
                icon: Phone, label: 'Phone',
                value: '(03) 9123 4567',
                href: 'tel:0391234567',
                sub: 'Mon–Fri 7am–6pm, Sat 8am–3pm'
              },
              {
                icon: Mail, label: 'Email',
                value: 'hello@melbournepropainters.com.au',
                href: 'mailto:hello@melbournepropainters.com.au',
                sub: 'We reply within a few hours'
              },
              {
                icon: MapPin, label: 'Service Area',
                value: 'All Melbourne Suburbs',
                href: null,
                sub: 'Covering metro and inner suburbs'
              },
              {
                icon: Clock, label: 'Business Hours',
                value: 'Mon–Fri: 7am–6pm',
                href: null,
                sub: 'Saturday: 8am–3pm'
              },
            ].map(({ icon: Icon, label, value, href, sub }) => (
              <div key={label} className="flex items-start gap-5 p-6 rounded-2xl bg-gray-50 dark:bg-dark-card
                border border-gray-100 dark:border-dark-border">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="text-brand-500" size={22} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 font-medium mb-0.5">{label}</div>
                  {href ? (
                    <a href={href} className="text-gray-900 dark:text-white font-semibold text-lg hover:text-brand-500 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <div className="text-gray-900 dark:text-white font-semibold text-lg">{value}</div>
                  )}
                  <p className="text-gray-400 text-sm mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
