import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { NAV_ITEMS, BUSINESS_INFO } from '../data/content';
import { Menu, X, Phone, Flame } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#EAE3D9]'
          : 'bg-[#FAF7F2] border-b border-[#EFE8DF]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Brand */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6246] rounded-sm transition-opacity"
            aria-label="Bougies Artisanales - Return to Home"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-[#F2EAE0] border border-[#E1D4C5] flex items-center justify-center text-[#B46A3C] shadow-xs group-hover:scale-105 transition-transform duration-300">
                <Flame className="w-4 h-4 fill-current" />
              </span>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#2C241E] leading-none">
                  Bougies Artisanales
                </span>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-[#7A6A5D] font-medium mt-1">
                  Artisan Studio • Montpellier
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6246] ${
                    isActive
                      ? 'text-[#2C241E] font-semibold'
                      : 'text-[#615143] hover:text-[#2C241E] hover:bg-[#F2ECE4]/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-[#B46A3C] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Direct CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              id="header-phone-cta"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D8CCBD] text-xs font-semibold uppercase tracking-wider text-[#4A3B30] hover:text-[#2C241E] hover:border-[#B46A3C] hover:bg-[#F6EFE6] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6246]"
              title={`Call ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#B46A3C]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-[#4A3B30] hover:text-[#2C241E] hover:bg-[#F0E9DF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6246] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-b border-[#E3D9CC] bg-[#FAF7F2] px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-4 duration-200"
        >
          <div className="py-2 border-b border-[#EDE4D8] mb-2">
            <p className="text-xs uppercase tracking-wider text-[#8A796C] font-semibold">Studio Navigation</p>
          </div>
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-left text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#EDE4D8] text-[#2C241E] font-semibold'
                    : 'text-[#5A4B3E] hover:bg-[#F4ECE3] hover:text-[#2C241E]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#B46A3C]" />}
              </button>
            );
          })}

          <div className="pt-4 border-t border-[#EDE4D8] space-y-3">
            <a
              id="mobile-phone-link"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-lg bg-[#2C241E] text-[#FAF7F2] text-sm font-medium hover:bg-[#43382F] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E6A87C]" />
              <span>Call Studio: {BUSINESS_INFO.phone}</span>
            </a>
            <p className="text-xs text-center text-[#7F6F62]">
              {BUSINESS_INFO.address}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
