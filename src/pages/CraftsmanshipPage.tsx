import React from 'react';
import { PageId } from '../types';
import { STUDIO_IMAGES } from '../data/content';
import { EnquiryCTA } from '../components/EnquiryCTA';
import { Sparkles, Flame, Home, Gift, Check, ShieldCheck } from 'lucide-react';

interface CraftsmanshipPageProps {
  onNavigate: (page: PageId) => void;
}

export const CraftsmanshipPage: React.FC<CraftsmanshipPageProps> = ({ onNavigate }) => {
  return (
    <div id="craftsmanship-page" className="space-y-0">
      {/* Page Header */}
      <section id="craftsmanship-hero" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#EAE1D5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE4D8] border border-[#DDD1C3] text-xs uppercase tracking-widest text-[#7D5A42] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B46A3C]" />
            <span>Philosophy & Aesthetics</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2C241E] leading-tight">
            Artisan Craftsmanship
          </h1>
          <p className="text-base sm:text-lg text-[#5F4E40] max-w-2xl mx-auto leading-relaxed">
            Exploring the handmade philosophy, decorative character, and intentional details that define every candle created at Bougies Artisanales.
          </p>
        </div>
      </section>

      {/* Section 1: Handmade by an Artisan Approach */}
      <section id="artisan-approach" className="py-16 sm:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#DECFC0] shadow-sm aspect-[4/3] bg-[#EAE0D3]">
                <img
                  src={STUDIO_IMAGES.decorative}
                  alt="Artisanal decorative candle handcrafted with tactile precision"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
            </div>

            {/* Copy Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#8C6246]">
                Artisanal Tenet 01
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2C241E] font-normal leading-tight">
                Handmade by an Artisan Approach
              </h2>
              <p className="text-base sm:text-lg text-[#5F4E40] leading-relaxed">
                The artisan approach begins with deliberate pacing. Unlike automated factories where speed and uniform repetition are paramount, our studio prioritizes precision, observation, and direct tactile engagement at every juncture.
              </p>
              <p className="text-base text-[#5F4E40] leading-relaxed">
                By maintaining a direct human presence throughout the crafting process, each piece is shaped with intentional attention to detail. This deliberate methodology ensures that every candle possesses singular character—a subtle reminder of the real hands that brought it into existence.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#5C4C3E]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B46A3C] shrink-0" />
                  <span>Small-batch manual focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B46A3C] shrink-0" />
                  <span>Close visual inspection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B46A3C] shrink-0" />
                  <span>Refined edge and surface finishing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B46A3C] shrink-0" />
                  <span>Respect for organic tactile nuances</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Creating Pieces for the Home */}
      <section id="creating-for-home" className="py-16 sm:py-24 bg-[#F5EFE8] border-y border-[#E8DECة]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#8C6246]">
              Artisanal Tenet 02
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C241E] font-normal leading-tight">
              Creating Pieces for the Home
            </h2>
            <p className="text-base sm:text-lg text-[#5F4E40] leading-relaxed">
              A candle is not simply an accessory; it is a source of atmosphere that interacts intimately with residential life. When crafting pieces for the home, we consider how light, shadow, and presence transform living spaces throughout the day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#E2D5C6] space-y-3">
              <Home className="w-5 h-5 text-[#8C6246]" />
              <h3 className="font-serif text-xl font-medium text-[#2C241E]">Domestic Harmony</h3>
              <p className="text-sm text-[#665649] leading-relaxed">
                Designed to fit naturally into lived-in spaces—from sunny living rooms and reading alcoves to tranquil bedroom nightstands.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#E2D5C6] space-y-3">
              <Flame className="w-5 h-5 text-[#8C6246]" />
              <h3 className="font-serif text-xl font-medium text-[#2C241E]">Gentle Illumination</h3>
              <p className="text-sm text-[#665649] leading-relaxed">
                A warm, steady flame that softens the sharp angles of interior spaces and fosters an environment of warmth and relaxation.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#E2D5C6] space-y-3">
              <ShieldCheck className="w-5 h-5 text-[#8C6246]" />
              <h3 className="font-serif text-xl font-medium text-[#2C241E]">Enduring Presence</h3>
              <p className="text-sm text-[#665649] leading-relaxed">
                Even when unlit, our home candle creations serve as serene visual accents that complement diverse decor aesthetics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Combining Scent and Decoration */}
      <section id="scent-and-decoration" className="py-16 sm:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Copy Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#8C6246]">
                Artisanal Tenet 03
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2C241E] font-normal leading-tight">
                Combining Scent and Decoration
              </h2>
              <p className="text-base sm:text-lg text-[#5F4E40] leading-relaxed">
                At Bougies Artisanales, olfactory subtlety and aesthetic form exist in complete harmony. We reject the idea that a scented candle must look generic, or that a decorative piece must lack aromatic presence.
              </p>
              <p className="text-base text-[#5F4E40] leading-relaxed">
                Our design ethos unites the visual pleasure of sculptural shapes and textured finishes with balanced scents tailored for indoor environments. This intersection creates objects that please the eye when glanced upon and soothe the senses when ignited.
              </p>
            </div>

            {/* Feature Box */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-[#F5EFE8] border border-[#E3D6C7] space-y-6">
              <h3 className="font-serif text-2xl text-[#2C241E] font-normal">
                The Dual Nature of Our Work
              </h3>
              <div className="space-y-4 text-sm text-[#5C4C3E]">
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EAE1D5]">
                  <h4 className="font-medium text-[#2C241E]">Visual Character</h4>
                  <p className="mt-1 text-[#665649] leading-relaxed">
                    Sculptural silhouettes, pleasant proportions, and textured tactile surfaces that act as artful decorative objects.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EAE1D5]">
                  <h4 className="font-medium text-[#2C241E]">Aromatic Character</h4>
                  <p className="mt-1 text-[#665649] leading-relaxed">
                    Carefully balanced scent profiles that gently diffuse without causing sensory fatigue, enriching interior ambiance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Thoughtful Pieces for Gifting */}
      <section id="thoughtful-gifting" className="py-16 sm:py-24 bg-[#EFE8DF] border-y border-[#E1D5C6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#8C6246]">
            Artisanal Tenet 04
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C241E] font-normal leading-tight">
            Thoughtful Pieces for Gifting
          </h2>
          <p className="text-base sm:text-lg text-[#5F4E40] leading-relaxed">
            Giving a candle is an enduring tradition of hospitality, warmth, and heartfelt connection. An artisanal piece from Bougies Artisanales carries the quiet sincerity of independent Montpellier studio craftsmanship, transforming a simple present into a memorable token of appreciation.
          </p>
          <div className="pt-2 inline-flex items-center gap-2 text-sm text-[#8C6246] font-medium">
            <Gift className="w-4 h-4 text-[#B46A3C]" />
            <span>Honoring celebrations, milestones, and personal moments</span>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <EnquiryCTA
        title="Discuss Custom or Studio Pieces"
        subtitle="Contact Bougies Artisanales in Montpellier to enquire about our artisan craftsmanship, home creations, or gift selections."
        onNavigate={onNavigate}
      />
    </div>
  );
};
