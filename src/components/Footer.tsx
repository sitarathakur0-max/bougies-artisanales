import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, NAV_ITEMS } from '../data/content';
import { TrustBadge } from './TrustBadge';
import { MapPin, Phone, Flame, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (pageId: PageId) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#241F1B] text-[#E5DCD3] border-t border-[#38312B] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#3B332C]">
          {/* Col 1: Studio identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-[#352D26] border border-[#4C4036] flex items-center justify-center text-[#E0986B]">
                <Flame className="w-4 h-4 fill-current" />
              </span>
              <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#FAF7F2]">
                {BUSINESS_INFO.name}
              </span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#BDB0A3] max-w-md">
              {BUSINESS_INFO.about}
            </p>
            <div className="pt-2">
              <TrustBadge className="bg-[#2E2722] border-[#443B33] text-[#FAF7F2]" />
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#D49F7D]">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    id={`footer-nav-${item.id}`}
                    onClick={() => handleNav(item.id)}
                    className="text-sm text-[#BDB0A3] hover:text-[#FAF7F2] transition-colors focus:outline-none focus-visible:underline"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Studio Location & Phone */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#D49F7D]">
              Montpellier Studio
            </h4>
            <div className="space-y-3.5 text-sm text-[#BDB0A3]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D49F7D] shrink-0 mt-1" aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  <strong className="block text-[#FAF7F2] font-medium">{BUSINESS_INFO.name}</strong>
                  {BUSINESS_INFO.address}
                </address>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Phone className="w-4 h-4 text-[#D49F7D] shrink-0" aria-hidden="true" />
                <div>
                  <span className="block text-xs text-[#9E9084]">Telephone Direct</span>
                  <a
                    id="footer-phone-link"
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-base text-[#FAF7F2] hover:text-[#E0986B] font-medium transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <p className="text-xs text-[#9E9084] pt-2 leading-relaxed">
                For current creations, studio visits, or specific enquiries, please call or submit an enquiry through our Contact page.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E9084]">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Artisan handmade candles in Montpellier, France.
          </p>

          <button
            id="footer-scroll-top"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 hover:text-[#FAF7F2] transition-colors focus:outline-none focus-visible:underline"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
