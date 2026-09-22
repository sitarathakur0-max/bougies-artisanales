import { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CreationsPage } from './pages/CreationsPage';
import { AboutPage } from './pages/AboutPage';
import { CraftsmanshipPage } from './pages/CraftsmanshipPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';

const PAGE_TITLES: Record<PageId, { title: string; desc: string }> = {
  home: {
    title: 'Bougies Artisanales | Handmade Scented Candles & Decorative Pieces in Montpellier',
    desc: 'Artisan candle studio in Montpellier creating handmade scented candles and decorative pieces for beautiful homes and thoughtful gifts.',
  },
  creations: {
    title: 'Products & Creations | Handmade Scented Candles & Sculptural Pieces – Bougies Artisanales',
    desc: 'Explore handmade scented candles, decorative candle pieces, home creations, and gift-oriented works crafted in our Montpellier studio.',
  },
  about: {
    title: 'About Our Studio | Artisan Handmade Candles in Montpellier – Bougies Artisanales',
    desc: 'Learn about Bougies Artisanales, an artisan candle studio at 21 Rue de l\'Université in Montpellier dedicated to handmade craftsmanship.',
  },
  craftsmanship: {
    title: 'Artisan Craftsmanship & Philosophy | Bougies Artisanales Montpellier',
    desc: 'Discover the handmade philosophy, decorative character, and intentional details behind every candle made at Bougies Artisanales.',
  },
  faq: {
    title: 'Frequently Asked Questions | Bougies Artisanales Montpellier',
    desc: 'Helpful answers regarding our handmade candles, decorative pieces, Montpellier studio location, care guidelines, and inquiries.',
  },
  contact: {
    title: 'Contact Bougies Artisanales | 21 Rue de l\'Université, 34000 Montpellier',
    desc: 'Contact Bougies Artisanales in Montpellier by phone (+33 4 67 28 45 19) or submit an enquiry for our handmade candles and decorative pieces.',
  },
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#', '') as PageId;
    if (['home', 'creations', 'about', 'craftsmanship', 'faq', 'contact'].includes(hash)) {
      return hash;
    }
    return 'home';
  });

  // Handle URL Hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'creations', 'about', 'craftsmanship', 'faq', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update Page Title and SEO Meta on Navigation
  useEffect(() => {
    const pageMeta = PAGE_TITLES[currentPage];
    if (pageMeta) {
      document.title = pageMeta.title;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', pageMeta.desc);
      }
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', pageMeta.title);
      }
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', pageMeta.desc);
      }
    }
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'creations':
        return <CreationsPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'craftsmanship':
        return <CraftsmanshipPage onNavigate={handleNavigate} />;
      case 'faq':
        return <FAQPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C241E] selection:bg-[#E8DDCF] selection:text-[#2C241E]">
      {/* Skip to Main Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#2C241E] text-[#FAF7F2] rounded-md text-xs font-semibold uppercase tracking-wider"
      >
        Skip to main content
      </a>

      {/* Primary Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area with Landmark */}
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {renderCurrentPage()}
      </main>

      {/* Primary Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
