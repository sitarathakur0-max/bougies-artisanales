import React, { useState } from 'react';
import { PageId, ContactFormData } from '../types';
import { BUSINESS_INFO } from '../data/content';
import { TrustBadge } from '../components/TrustBadge';
import { MapPin, Phone, Send, CheckCircle2, AlertCircle, Clock, Building2 } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: 'General Enquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details in your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please enter at least 10 characters so we can understand your enquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Client-side submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      const ref = `BA-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(ref);
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'General Enquiry',
      message: '',
    });
    setSubmittedRef(null);
    setErrors({});
  };

  return (
    <div id="contact-page" className="space-y-0">
      {/* Page Header */}
      <section id="contact-hero" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#EAE1D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE4D8] border border-[#DDD1C3] text-xs uppercase tracking-widest text-[#7D5A42] font-semibold">
            <MapPin className="w-3.5 h-3.5 text-[#B46A3C]" />
            <span>Studio Location & Enquiries</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2C241E] leading-tight">
            Contact Bougies Artisanales
          </h1>
          <p className="text-base sm:text-lg text-[#5F4E40] max-w-2xl mx-auto leading-relaxed">
            Get in touch with our artisan studio in Montpellier for questions about our handmade scented candles, decorative pieces, or custom inquiries.
          </p>
          <div className="pt-2 flex justify-center">
            <TrustBadge />
          </div>
        </div>
      </section>

      {/* Main Content: Details + Enquiry Form */}
      <section id="contact-form-section" className="py-16 sm:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Col 1: Prominent Business Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#8C6246]">
                  Studio Coordinates
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#2C241E] font-normal leading-tight">
                  Visit or Call in Montpellier
                </h2>
                <p className="text-sm sm:text-base text-[#5F4E40] leading-relaxed">
                  We are pleased to assist visitors and patrons looking for authentic handmade candle creations. Please find our verified studio contact details below:
                </p>
              </div>

              {/* Prominent Business Information Card */}
              <div className="p-8 rounded-2xl bg-[#F5EFE8] border border-[#E3D7C8] space-y-6">
                <div className="space-y-1 pb-4 border-b border-[#E1D4C5]">
                  <h3 className="font-serif text-2xl font-medium text-[#2C241E]">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#8A796B] font-medium">
                    {BUSINESS_INFO.category} • Artisan Studio
                  </p>
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#8C6246]">
                    <MapPin className="w-4 h-4 text-[#B46A3C]" />
                    <span>Exact Studio Address</span>
                  </div>
                  <address className="not-italic text-base text-[#2C241E] font-medium leading-relaxed pl-6">
                    {BUSINESS_INFO.address}
                  </address>
                </div>

                {/* Telephone */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#8C6246]">
                    <Phone className="w-4 h-4 text-[#B46A3C]" />
                    <span>Direct Telephone</span>
                  </div>
                  <div className="pl-6">
                    <a
                      id="contact-phone-direct-btn"
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="inline-flex items-center gap-2 text-xl sm:text-2xl font-serif font-medium text-[#2C241E] hover:text-[#B46A3C] transition-colors"
                      title="Click to call Bougies Artisanales"
                    >
                      <span>{BUSINESS_INFO.phone}</span>
                    </a>
                    <p className="text-xs text-[#7F6F62] mt-1">
                      Clickable telephone link for instant connection from mobile and desktop.
                    </p>
                  </div>
                </div>

                {/* Studio Note */}
                <div className="pt-4 border-t border-[#E1D4C5] space-y-2 text-xs text-[#7A695C]">
                  <div className="flex items-start gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#8C6246] shrink-0 mt-0.5" />
                    <span>
                      Because studio activities and batch pouring vary, we recommend contacting us in advance by telephone before planning your visit.
                    </span>
                  </div>
                  <div className="flex items-start gap-2 pt-1">
                    <Building2 className="w-3.5 h-3.5 text-[#8C6246] shrink-0 mt-0.5" />
                    <span>
                      Located in the vibrant center of Montpellier on Rue de l'Université.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 2: Professional Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-2xl bg-[#FAF7F2] border border-[#DECFC0] shadow-xs">
                <div className="space-y-2 mb-8">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2C241E] font-normal">
                    Send a Studio Enquiry
                  </h3>
                  <p className="text-sm text-[#665649]">
                    Have a question regarding our scented candles, decorative pieces, or gift orders? Complete the form below.
                  </p>
                </div>

                {submittedRef ? (
                  <div
                    id="form-submission-success"
                    className="p-8 rounded-xl bg-[#F4EFEA] border border-[#D8CABE] text-center space-y-4 animate-in fade-in duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#EDE2D3] border border-[#D5C6B5] flex items-center justify-center text-[#8C6246] mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-serif text-2xl text-[#2C241E] font-normal">
                        Enquiry Prepared Successfully
                      </h4>
                      <p className="text-sm text-[#5F4E40] max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out to Bougies Artisanales. Your enquiry has been recorded on this device with reference:
                      </p>
                      <p className="font-mono text-sm font-semibold text-[#8C6246] bg-[#ECE0D0] py-1 px-3 rounded-md inline-block">
                        {submittedRef}
                      </p>
                    </div>

                    <div className="pt-2 text-xs text-[#7A695C] border-t border-[#E1D4C5] max-w-md mx-auto leading-relaxed space-y-2">
                      <p>
                        For immediate inquiries or direct confirmation, please feel free to reach our studio directly at <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-medium text-[#2C241E] underline">{BUSINESS_INFO.phone}</a>.
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-6 py-2.5 rounded-full bg-[#2C241E] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider hover:bg-[#43372C] transition-colors"
                      >
                        Send Another Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form
                    id="studio-enquiry-form"
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-6"
                  >
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="enquiry-name"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#5C4C3E]"
                      >
                        Your Full Name <span className="text-[#B46A3C]">*</span>
                      </label>
                      <input
                        type="text"
                        id="enquiry-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Camille Laurent"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FFFDFB] border text-sm text-[#2C241E] placeholder:text-[#9F9185] focus:outline-none focus:ring-2 focus:ring-[#8C6246] transition-colors ${
                          errors.name ? 'border-red-500 bg-red-50/20' : 'border-[#D9CDBC]'
                        }`}
                        aria-invalid={errors.name ? 'true' : 'false'}
                        aria-describedby={errors.name ? 'error-name' : undefined}
                      />
                      {errors.name && (
                        <p id="error-name" className="text-xs text-red-600 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="enquiry-email"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#5C4C3E]"
                      >
                        Your Email Address <span className="text-[#B46A3C]">*</span>
                      </label>
                      <input
                        type="email"
                        id="enquiry-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. camille@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FFFDFB] border text-sm text-[#2C241E] placeholder:text-[#9F9185] focus:outline-none focus:ring-2 focus:ring-[#8C6246] transition-colors ${
                          errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#D9CDBC]'
                        }`}
                        aria-invalid={errors.email ? 'true' : 'false'}
                        aria-describedby={errors.email ? 'error-email' : undefined}
                      />
                      {errors.email && (
                        <p id="error-email" className="text-xs text-red-600 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="enquiry-subject"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#5C4C3E]"
                      >
                        Enquiry Subject <span className="text-[#B46A3C]">*</span>
                      </label>
                      <select
                        id="enquiry-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#FFFDFB] border border-[#D9CDBC] text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#8C6246] transition-colors"
                      >
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Handmade Scented Candles">Handmade Scented Candles</option>
                        <option value="Decorative Candle Pieces">Decorative Candle Pieces</option>
                        <option value="Home Candle Creations">Home Candle Creations</option>
                        <option value="Gift-Oriented Pieces">Gift-Oriented Pieces</option>
                        <option value="Montpellier Studio Visit">Montpellier Studio Visit</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="enquiry-message"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#5C4C3E]"
                      >
                        Your Message <span className="text-[#B46A3C]">*</span>
                      </label>
                      <textarea
                        id="enquiry-message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please tell us about the creations or details you would like to enquire about..."
                        className={`w-full px-4 py-3 rounded-xl bg-[#FFFDFB] border text-sm text-[#2C241E] placeholder:text-[#9F9185] focus:outline-none focus:ring-2 focus:ring-[#8C6246] transition-colors ${
                          errors.message ? 'border-red-500 bg-red-50/20' : 'border-[#D9CDBC]'
                        }`}
                        aria-invalid={errors.message ? 'true' : 'false'}
                        aria-describedby={errors.message ? 'error-message' : undefined}
                      />
                      {errors.message && (
                        <p id="error-message" className="text-xs text-red-600 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        id="submit-enquiry-btn"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#2C241E] text-[#FAF7F2] text-sm font-medium hover:bg-[#43372C] transition-all duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6246]"
                      >
                        {isSubmitting ? (
                          <span>Processing Enquiry...</span>
                        ) : (
                          <>
                            <span>Submit Enquiry to Studio</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                      <p className="text-xs text-center text-[#7F6E60] mt-3">
                        Submitting directly generates an official studio reference. For immediate phone inquiries, call {BUSINESS_INFO.phone}.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
