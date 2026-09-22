import React, { useState } from 'react';
import { PageId } from '../types';
import { FAQ_ITEMS, BUSINESS_INFO } from '../data/content';
import { EnquiryCTA } from '../components/EnquiryCTA';
import { HelpCircle, ChevronDown, Phone, MessageSquareText } from 'lucide-react';

interface FAQPageProps {
  onNavigate: (page: PageId) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div id="faq-page" className="space-y-0">
      {/* Page Header */}
      <section id="faq-hero" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#EAE1D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE4D8] border border-[#DDD1C3] text-xs uppercase tracking-widest text-[#7D5A42] font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-[#B46A3C]" />
            <span>Questions & Guidance</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2C241E] leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-[#5F4E40] max-w-2xl mx-auto leading-relaxed">
            Helpful answers regarding our handmade creations, studio location in Montpellier, care guidelines, and how to get in touch.
          </p>
        </div>
      </section>

      {/* Main FAQ Accordion */}
      <section id="faq-accordion-section" className="py-16 sm:py-24 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="p-6 rounded-2xl bg-[#F4EFEA] border border-[#E3D9CC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="font-serif text-xl font-normal text-[#2C241E]">
                Have a Specific Question Not Listed Here?
              </h2>
              <p className="text-sm text-[#665649]">
                Where details are not listed, we encourage contacting Bougies Artisanales directly.
              </p>
            </div>
            <a
              id="faq-direct-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#2C241E] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold hover:bg-[#43372C] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E0986B]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>

          <div className="space-y-4" role="region" aria-label="FAQ Accordion">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  id={`faq-item-${item.id}`}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#FAF7F2] border-[#C8B8A6] shadow-xs'
                      : 'bg-[#F9F5EF] border-[#E8DECة] hover:border-[#D5C7B7]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6246]"
                  >
                    <span className="font-serif text-lg sm:text-xl font-medium text-[#2C241E] leading-snug">
                      {item.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                        isOpen
                          ? 'bg-[#2C241E] text-[#FAF7F2] border-[#2C241E] rotate-180'
                          : 'bg-[#EDE4D8] text-[#5C4C3E] border-[#DDD0C0]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${item.id}`}
                      className="px-6 pb-7 sm:px-7 text-[#5F4E40] text-sm sm:text-base leading-relaxed border-t border-[#EAE1D5] pt-4"
                    >
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact prompt callout */}
          <div className="text-center pt-8 border-t border-[#EAE1D5] space-y-3">
            <p className="text-sm text-[#736254]">
              Do you have a question about a particular home setting, gift idea, or studio inquiry?
            </p>
            <button
              id="faq-send-enquiry-btn"
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#8C6246] hover:text-[#2C241E] transition-colors"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>Submit a direct enquiry through our Contact page</span>
            </button>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <EnquiryCTA
        title="We Welcome Your Questions"
        subtitle="Bougies Artisanales is always pleased to assist you with inquiries about our creations or studio in Montpellier."
        onNavigate={onNavigate}
      />
    </div>
  );
};
