import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, STUDIO_IMAGES } from '../data/content';
import { TrustBadge } from '../components/TrustBadge';
import { EnquiryCTA } from '../components/EnquiryCTA';
import { MapPin, Flame, Sparkles, Home, Gift, HeartHandshake } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div id="about-page" className="space-y-0">
      {/* Page Header */}
      <section id="about-hero" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#EAE1D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE4D8] border border-[#DDD1C3] text-xs uppercase tracking-widest text-[#7D5A42] font-semibold">
            <Flame className="w-3.5 h-3.5 text-[#B46A3C]" />
            <span>Studio Identity</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2C241E] leading-tight">
            About Bougies Artisanales
          </h1>
          <p className="text-base sm:text-lg text-[#5F4E40] max-w-2xl mx-auto leading-relaxed">
            An artisan candle studio based in Montpellier, dedicated to handmade scented candles and decorative pieces that bring gentle ambiance and tactile beauty into homes.
          </p>
          <div className="pt-2 flex justify-center">
            <TrustBadge />
          </div>
        </div>
      </section>

      {/* Main Studio Overview with 1 Restrained Image */}
      <section id="studio-overview" className="py-16 sm:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#DECFC0] shadow-sm aspect-[4/3] bg-[#EAE0D3]">
                <img
                  src={STUDIO_IMAGES.hero}
                  alt="Bougies Artisanales studio setting in Montpellier"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
              <div className="mt-4 p-4 rounded-xl bg-[#F4EFEA] border border-[#E6DDD2] flex items-center gap-3 text-xs text-[#6B5A4D]">
                <MapPin className="w-4 h-4 text-[#B46A3C] shrink-0" />
                <span>Located in central Montpellier: 21 Rue de l'Université, 34000 Montpellier</span>
              </div>
            </div>

            {/* Substantial About Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#8C6246]">
                The Studio Concept
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2C241E] font-normal leading-tight">
                An Artisan Candle Studio in Montpellier
              </h2>
              <p className="text-base sm:text-lg text-[#5F4E40] leading-relaxed">
                Bougies Artisanales was founded around a straightforward and focused vision: to celebrate the authentic character of handmade candle creation. Located at 21 Rue de l'Université in Montpellier, our studio functions as a dedicated workspace where scented candles and sculptural decorative pieces are made with patience and deliberate care.
              </p>
              <p className="text-base text-[#5F4E40] leading-relaxed">
                Rather than treating candles as generic consumables, we approach them as purposeful decorative objects and atmospheric companions. Each creation is developed to harmonize with domestic interiors, bringing gentle warmth, aesthetic character, and moments of calm reflection to everyday living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Concept Sections */}
      <section id="about-pillars" className="py-16 sm:py-24 bg-[#F5EFE8] border-y border-[#E8DECة]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C6246]">
              Core Focus Areas
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C241E] font-normal">
              The Principles Behind Every Piece
            </h2>
            <p className="text-base text-[#615143] leading-relaxed">
              Our studio activities center around four fundamental commitments to craft, form, ambiance, and community gifting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Pillar 1: Handmade Craftsmanship */}
            <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#DECFC0] space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#EFE6DB] flex items-center justify-center text-[#8C6246]">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#2C241E] font-normal">
                Handmade Craftsmanship
              </h3>
              <p className="text-sm sm:text-base text-[#5F4E40] leading-relaxed">
                Handmade craftsmanship lies at the core of everything produced in our studio. By maintaining small-batch production and direct hands-on execution, we supervise each step of the creation process. This approach avoids industrial uniformity and values the subtle texture, balance, and authenticity that only human craftsmanship can offer.
              </p>
            </div>

            {/* Pillar 2: Attention to Decorative Details */}
            <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#DECFC0] space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#EFE6DB] flex items-center justify-center text-[#8C6246]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#2C241E] font-normal">
                Attention to Decorative Details
              </h3>
              <p className="text-sm sm:text-base text-[#5F4E40] leading-relaxed">
                Visual presentation matters deeply in interior design. We shape our decorative pieces so that they enrich mantels, coffee tables, consoles, and shelves even when left unlit. From structural geometric balance to pleasant tactile finishes, our decorative creations serve as refined sculptural accents for discerning spaces.
              </p>
            </div>

            {/* Pillar 3: Scented Candle Creation */}
            <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#DECFC0] space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#EFE6DB] flex items-center justify-center text-[#8C6246]">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#2C241E] font-normal">
                Scented Candle Creation
              </h3>
              <p className="text-sm sm:text-base text-[#5F4E40] leading-relaxed">
                Fragrance in the home should invite and soothe, not overpower. Our scented candle creation focuses on subtle aromatic balance. Each formulation is conceived to gently diffuse throughout room spaces, complementing the natural atmosphere of your home during quiet evenings or convivial shared dinners.
              </p>
            </div>

            {/* Pillar 4: Candles for Homes & Gifts */}
            <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#DECFC0] space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#EFE6DB] flex items-center justify-center text-[#8C6246]">
                <Gift className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#2C241E] font-normal">
                Candles for Homes & Gifts
              </h3>
              <p className="text-sm sm:text-base text-[#5F4E40] leading-relaxed">
                Every piece leaving our studio serves either to elevate private domestic tranquility or to act as a sincere gift. Because candles symbolize light, warmth, and hospitality, a handmade candle carries heartfelt value when presented for housewarmings, milestones, host appreciation, or personal moments of celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Montpellier Studio Presence Section */}
      <section id="montpellier-context" className="py-16 sm:py-20 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C6246]">
            Rooted in Montpellier
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C241E] font-normal">
            Rooted at 21 Rue de l'Université
          </h2>
          <p className="text-base text-[#5F4E40] leading-relaxed">
            Montpellier's rich heritage of independent artisans and creative culture provides the perfect setting for Bougies Artisanales. We take pride in contributing authentic, handmade work to the local landscape and welcoming patrons who appreciate dedicated craftsmanship.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="about-contact-studio-btn"
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-[#2C241E] text-[#FAF7F2] text-sm font-medium hover:bg-[#43372C] transition-colors"
            >
              Contact the Studio
            </button>
            <button
              id="about-view-creations-btn"
              onClick={() => {
                onNavigate('creations');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-[#F4EFEA] border border-[#D5C7B7] text-[#2C241E] text-sm font-medium hover:bg-[#FFFDFB] transition-colors"
            >
              View Studio Creations
            </button>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <EnquiryCTA
        title="Experience Artisan Candle Making"
        subtitle="Contact Bougies Artisanales directly for enquiries about our Montpellier studio, scented creations, or decorative pieces."
        onNavigate={onNavigate}
      />
    </div>
  );
};
