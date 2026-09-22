import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/content';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';

interface EnquiryCTAProps {
  title?: string;
  subtitle?: string;
  onNavigate: (page: PageId) => void;
}

export const EnquiryCTA: React.FC<EnquiryCTAProps> = ({
  title = 'Connect with Bougies Artisanales',
  subtitle = 'Whether you are seeking handmade scented candles for your home, sculpted decorative pieces, or thoughtful gifts, our Montpellier studio is here to assist you.',
  onNavigate,
}) => {
  return (
    <section id="enquiry-cta-section" className="py-16 sm:py-20 bg-[#F4EFEA] border-y border-[#E5DCD1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE4D8] border border-[#DDD1C3] text-xs uppercase tracking-widest text-[#7D5A42] font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#B46A3C]" />
          <span>Studio Enquiries • Montpellier</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2C241E] max-w-3xl mx-auto leading-tight">
          {title}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#615143] max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="cta-send-enquiry-btn"
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#2C241E] text-[#FAF7F2] text-sm font-medium hover:bg-[#43372C] transition-all duration-200 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6246]"
          >
            <span>Send a Studio Enquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            id="cta-call-studio-btn"
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FAF7F2] text-[#2C241E] text-sm font-medium border border-[#D5C7B7] hover:border-[#B46A3C] hover:bg-[#FFFDFB] transition-all duration-200 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6246]"
          >
            <Phone className="w-4 h-4 text-[#B46A3C]" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        <div className="mt-6 text-xs text-[#7F6E60]">
          <span>Located at {BUSINESS_INFO.address}</span>
        </div>
      </div>
    </section>
  );
};
