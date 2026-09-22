import React from 'react';
import { PageId } from '../types';
import { CREATION_CATEGORIES, BUSINESS_INFO } from '../data/content';
import { EnquiryCTA } from '../components/EnquiryCTA';
import { Sparkles, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CreationsPageProps {
  onNavigate: (page: PageId) => void;
}

export const CreationsPage: React.FC<CreationsPageProps> = ({ onNavigate }) => {
  return (
    <div id="creations-page" className="space-y-0">
      {/* Page Header */}
      <section id="creations-hero" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#EAE1D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE4D8] border border-[#DDD1C3] text-xs uppercase tracking-widest text-[#7D5A42] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B46A3C]" />
            <span>Studio Catalog</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2C241E] leading-tight">
            Products & Creations
          </h1>
          <p className="text-base sm:text-lg text-[#5F4E40] max-w-2xl mx-auto leading-relaxed">
            A curated presentation of handmade scented candles, sculptural decorative pieces, home creations, and gift-oriented works created by hand in Montpellier.
          </p>
        </div>
      </section>

      {/* Creation Categories Deep Dive */}
      <section id="creations-list" className="py-16 sm:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
          {CREATION_CATEGORIES.map((category, index) => {
            const isEven = index % 2 === 1;
            return (
              <article
                key={category.id}
                id={`creation-category-${category.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Visual Column */}
                {category.image && (
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? 'order-1 lg:order-2' : 'order-1'
                    }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden border border-[#DECFC0] shadow-sm aspect-[4/3] bg-[#EAE0D3]">
                      <img
                        src={category.image}
                        alt={category.imageAlt || category.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center"
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                  </div>
                )}

                {/* Content Column */}
                <div
                  className={`space-y-6 ${
                    category.image
                      ? isEven
                        ? 'lg:col-span-7 order-2 lg:order-1'
                        : 'lg:col-span-7 order-2'
                      : 'lg:col-span-12 max-w-3xl'
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#8C6246]">
                      Studio Collection {index + 1} of {CREATION_CATEGORIES.length}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#2C241E] font-normal leading-tight">
                      {category.title}
                    </h2>
                    <p className="text-sm sm:text-base font-serif italic text-[#736050]">
                      {category.subtitle}
                    </p>
                  </div>

                  <p className="text-base text-[#5F4E40] leading-relaxed">
                    {category.description}
                  </p>

                  {/* Highlights */}
                  <div className="p-5 rounded-xl bg-[#F4EFEA] border border-[#E6DDD2] space-y-3">
                    <h3 className="text-xs uppercase tracking-widest font-semibold text-[#8C6246]">
                      Craft & Character Notes
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {category.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-sm text-[#5C4C3E]">
                          <CheckCircle2 className="w-4 h-4 text-[#B46A3C] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-[#EAE1D5]">
                    <p className="text-xs sm:text-sm text-[#736254]">
                      <strong className="text-[#2C241E]">Intended Purpose:</strong> {category.purpose}
                    </p>

                    <button
                      id={`enquire-btn-${category.id}`}
                      onClick={() => {
                        onNavigate('contact');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D5C7B7] text-xs font-semibold uppercase tracking-wider text-[#2C241E] hover:border-[#B46A3C] hover:bg-[#F6EFE6] transition-colors"
                    >
                      <span>Enquire on this piece</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#B46A3C]" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Advisory Section */}
      <section id="custom-consultation" className="py-14 bg-[#F2EBE2] border-y border-[#DECFC0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#2C241E] font-normal">
            Looking for Guidance or Specific Recommendations?
          </h2>
          <p className="text-sm sm:text-base text-[#5F4E40] leading-relaxed">
            As an artisan studio, we are glad to discuss which handmade scented candles or decorative pieces best suit your living room, dining atmosphere, or gift occasion.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a
              id="creations-call-link"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#2C241E] hover:text-[#8C6246] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B46A3C]" />
              <span>Direct Studio Phone: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <EnquiryCTA
        title="Ready to Enquire About Our Creations?"
        subtitle="Reach out directly to Bougies Artisanales in Montpellier to check current availability, ask questions, or request pieces."
        onNavigate={onNavigate}
      />
    </div>
  );
};
