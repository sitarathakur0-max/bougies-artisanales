import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, STUDIO_IMAGES } from '../data/content';
import { TrustBadge } from '../components/TrustBadge';
import { EnquiryCTA } from '../components/EnquiryCTA';
import { ArrowRight, Flame, Sparkles, Home, Gift, ShieldCheck, HeartHandshake, Eye } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="home-page" className="space-y-0">
      {/* Hero Section */}
      <section id="hero-section" className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDE4D8] border border-[#DDD1C3] text-xs uppercase tracking-widest text-[#7D5A42] font-semibold">
                  <Flame className="w-3.5 h-3.5 text-[#B46A3C]" />
                  Artisan Studio in Montpellier
                </span>
                <TrustBadge compact={false} />
              </div>

              <div className="space-y-4">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2C241E] leading-[1.12] tracking-tight">
                  Handmade Candles, <br className="hidden sm:inline" />
                  <span className="italic font-light text-[#8C6246]">Crafted with Care</span>
                </h1>
                <p className="text-lg sm:text-xl text-[#5F4E40] max-w-2xl leading-relaxed font-light">
                  Handmade scented candles and decorative pieces created in Montpellier for beautiful homes and thoughtful gifts.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  id="hero-explore-btn"
                  onClick={() => handleNav('creations')}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#2C241E] text-[#FAF7F2] text-sm font-medium hover:bg-[#43372C] transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6246]"
                >
                  <span>Explore Our Creations</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-contact-btn"
                  onClick={() => handleNav('contact')}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#F4EFEA] text-[#2C241E] text-sm font-medium border border-[#D5C7B7] hover:border-[#B46A3C] hover:bg-[#FAF7F2] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6246]"
                >
                  <span>Get in Touch</span>
                </button>
              </div>

              {/* Trust Section Callout */}
              <div className="pt-4 border-t border-[#EAE1D5] flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-[#736254]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B46A3C]" />
                  <span><strong>4.8/5</strong> rating based on <strong>21 Google Reviews</strong></span>
                </div>
                <div className="text-[#8A796B]">
                  21 Rue de l'Université, Montpellier
                </div>
              </div>
            </div>

            {/* Hero Visual: 1 Large, restrained, high-quality photograph */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#E3D7C8] shadow-md aspect-[4/3] lg:aspect-[5/6] bg-[#ECE2D5]">
                <img
                  src={STUDIO_IMAGES.hero}
                  alt="Handmade scented candles glowing with warm soft flame in our Montpellier artisan studio"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241F1B]/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#FAF7F2]/90 backdrop-blur-sm border border-[#E8DECة] text-[#2C241E] shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#8C6246]">Studio Focus</p>
                  <p className="text-sm font-serif font-medium mt-0.5">Scented creations & decorative pieces for homes and gifts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Reputation Banner */}
      <section id="trust-section" className="py-10 bg-[#F4EFEA] border-y border-[#E6DDD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C6246]">
                Verified Local Reputation
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2C241E] font-normal">
                4.8/5 — 21 Google Reviews
              </h2>
            </div>
            <p className="text-sm text-[#615143] max-w-xl text-center md:text-left leading-relaxed">
              Based at 21 Rue de l'Université, Bougies Artisanales is recognized by patrons and visitors in Montpellier for creating handmade scented candles and decorative pieces with consistent care and quiet elegance.
            </p>
            <div className="shrink-0">
              <button
                id="trust-view-creations-btn"
                onClick={() => handleNav('creations')}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2C241E] hover:text-[#B46A3C] transition-colors"
              >
                <span>View studio creations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Homepage Section 1: Handmade Scented Candles */}
      <section id="scented-candles-section" className="py-16 sm:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-[#E3D7C8] shadow-sm aspect-[4/3] bg-[#EFE7DE]">
                <img
                  src={STUDIO_IMAGES.scented}
                  alt="Handmade scented candles in textured ceramic vessels"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8C6246]">
                <Flame className="w-3.5 h-3.5 text-[#B46A3C]" />
                <span>Sensory Ambiance</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2C241E] font-normal leading-tight">
                Handmade Scented Candles
              </h2>
              <p className="text-base sm:text-lg text-[#5F4E40] leading-relaxed">
                Our scented candles are conceived to introduce gentle, layered aromas that complement your daily environment. Hand-poured with precision in our Montpellier workshop, each creation emphasizes steady burning, subtle scent throw, and a serene ambient glow that warms living spaces without becoming overpowering.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F4EFEA] border border-[#E7DECة]">
                  <h3 className="font-serif text-lg font-medium text-[#2C241E]">Quiet Sensory Harmony</h3>
                  <p className="text-sm text-[#665649] mt-1 leading-relaxed">
                    Formulations designed to integrate naturally into home atmospheres during quiet reading hours or pleasant family evenings.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F4EFEA] border border-[#E7DECة]">
                  <h3 className="font-serif text-lg font-medium text-[#2C241E]">Hand-Poured Consistency</h3>
                  <p className="text-sm text-[#665649] mt-1 leading-relaxed">
                    Crafted individually in small studio sessions to ensure clean burning, reliable wick alignment, and refined finishes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Homepage Section 2: Decorative Candle Pieces */}
      <section id="decorative-pieces-section" className="py-16 sm:py-24 bg-[#F5EFE8] border-y border-[#E8DECة]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8C6246]">
                <Sparkles className="w-3.5 h-3.5 text-[#B46A3C]" />
                <span>Sculptural Design</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2C241E] font-normal leading-tight">
                Decorative Candle Pieces
              </h2>
              <p className="text-base sm:text-lg text-[#5F4E40] leading-relaxed">
                Candles possess a sculptural presence that extends far beyond illumination. Bougies Artisanales creates decorative candle pieces that stand as artful decorative objects in their own right. From clean geometric curves to tactile organic profiles, these creations elevate shelving, coffee tables, and mantelpieces even before they are ever lit.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E2D6C7]">
                  <h3 className="font-serif text-lg font-medium text-[#2C241E]">Tactile Sculptural Forms</h3>
                  <p className="text-sm text-[#665649] mt-1 leading-relaxed">
                    Distinctive architectural lines and tactile surfaces that add depth and warmth to contemporary or classic decor.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E2D6C7]">
                  <h3 className="font-serif text-lg font-medium text-[#2C241E]">Versatile Display Accent</h3>
                  <p className="text-sm text-[#665649] mt-1 leading-relaxed">
                    Can be arranged individually as subtle focal points or grouped together on stone or ceramic trays.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#DECFC0] shadow-sm aspect-[4/3] bg-[#EAE0D3]">
                <img
                  src={STUDIO_IMAGES.decorative}
                  alt="Sculptural decorative candle pieces designed as aesthetic interior objects"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Homepage Section 3 & 4: Candles for Homes & Candles for Gifts */}
      <section id="homes-and-gifts-section" className="py-16 sm:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C6246]">
              Purposes & Occasions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C241E] font-normal">
              Candles for Homes and Gifts
            </h2>
            <p className="text-base text-[#615143] leading-relaxed">
              Every creation leaving our Montpellier workshop is designed with two clear purposes in mind: elevating everyday home spaces and offering thoughtful, memorable tokens for the people you value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1: For Homes */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#F5EFE8] border border-[#E5DACD] space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#ECE1D3] border border-[#DDD0C0] flex items-center justify-center text-[#8C6246]">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#2C241E] font-normal">
                  Candles for Homes
                </h3>
                <p className="text-[#5F4E40] leading-relaxed text-sm sm:text-base">
                  A home is defined by the quality of its light and comfort. Our home candle creations are crafted to accompany morning routines, evening unwinding, and intimate dinners with friends. By introducing soft, natural light and subtle scent, each piece helps shape an atmosphere of hospitality and rest.
                </p>
                <ul className="space-y-2 text-sm text-[#665649] pt-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B46A3C]" />
                    <span>Tabletop and mantelpiece centerpieces</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B46A3C]" />
                    <span>Calming companion for living rooms and bedrooms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B46A3C]" />
                    <span>Seamless integration into diverse decorative settings</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#E3D6C7]">
                <button
                  id="home-candles-view-btn"
                  onClick={() => handleNav('creations')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2C241E] hover:text-[#B46A3C] transition-colors"
                >
                  <span>Explore Home Creations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2: For Gifts */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#F5EFE8] border border-[#E5DACD] space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#ECE1D3] border border-[#DDD0C0] flex items-center justify-center text-[#8C6246]">
                  <Gift className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#2C241E] font-normal">
                  Candles for Gifts
                </h3>
                <p className="text-[#5F4E40] leading-relaxed text-sm sm:text-base">
                  Few gestures carry the enduring sincerity of a handmade object. Our gift-oriented pieces provide a considerate and tasteful present for housewarmings, host offerings, birthdays, or quiet tokens of gratitude. Each piece embodies the genuine dedication of independent artisan creation.
                </p>
                <ul className="space-y-2 text-sm text-[#665649] pt-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B46A3C]" />
                    <span>Thoughtful gifts with handmade sincerity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B46A3C]" />
                    <span>Ideal for hosts, celebratory milestones, and personal expressions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B46A3C]" />
                    <span>Authentic artisan pieces originating from Montpellier</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#E3D6C7]">
                <button
                  id="gift-candles-view-btn"
                  onClick={() => handleNav('creations')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2C241E] hover:text-[#B46A3C] transition-colors"
                >
                  <span>Explore Gift Pieces</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Homepage Section 5 & 6: The Artisan Approach & Why Handmade Details Matter */}
      <section id="artisan-approach-section" className="py-16 sm:py-24 bg-[#EFE8DF] border-y border-[#E1D5C6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C6246]">
                Studio Values
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2C241E] font-normal leading-tight">
                The Artisan Approach & Why Handmade Details Matter
              </h2>
              <p className="text-sm sm:text-base text-[#5F4E40] leading-relaxed">
                In an era of industrial repetition, an artisan studio chooses patience, intentionality, and human touch. At Bougies Artisanales, we believe that small nuances are what transform a simple candle into a meaningful object of daily comfort.
              </p>
              <div className="pt-2">
                <button
                  id="learn-craftsmanship-btn"
                  onClick={() => handleNav('craftsmanship')}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#8C6246] hover:text-[#2C241E] transition-colors"
                >
                  <span>Read our craftsmanship philosophy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#DFD3C4] space-y-3">
                <HeartHandshake className="w-5 h-5 text-[#8C6246]" />
                <h3 className="font-serif text-xl font-medium text-[#2C241E]">Human Touch</h3>
                <p className="text-sm text-[#665649] leading-relaxed">
                  Every pour, inspection, and placement is conducted by human hands, instilling each creation with distinct character and genuine warmth.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#DFD3C4] space-y-3">
                <Eye className="w-5 h-5 text-[#8C6246]" />
                <h3 className="font-serif text-xl font-medium text-[#2C241E]">Visual Nuance</h3>
                <p className="text-sm text-[#665649] leading-relaxed">
                  Subtle textural variations and sculptural contours mean that no two pieces are mechanically identical; each retains its singular beauty.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#DFD3C4] space-y-3">
                <Flame className="w-5 h-5 text-[#8C6246]" />
                <h3 className="font-serif text-xl font-medium text-[#2C241E]">Purposeful Burning</h3>
                <p className="text-sm text-[#665649] leading-relaxed">
                  Our artisan approach prioritizes balanced fragrance release and a clean, centered wick for dependable enjoyment in your home.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#DFD3C4] space-y-3">
                <ShieldCheck className="w-5 h-5 text-[#8C6246]" />
                <h3 className="font-serif text-xl font-medium text-[#2C241E]">Local Sincerity</h3>
                <p className="text-sm text-[#665649] leading-relaxed">
                  Grounded in Montpellier at 21 Rue de l'Université, offering approachable local craftsmanship directly to our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strong Closing Enquiry CTA */}
      <EnquiryCTA
        title="Bring Handcrafted Warmth Into Your Home"
        subtitle="Contact Bougies Artisanales to enquire about current creations, decorative collections, or meaningful gift choices directly from our Montpellier studio."
        onNavigate={onNavigate}
      />
    </div>
  );
};
