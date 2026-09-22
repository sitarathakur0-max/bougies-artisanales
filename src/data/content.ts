import { BusinessInfo, CreationCategory, FAQItem, NavItem } from '../types';

// Images generated for the studio
import heroImg from '../assets/images/hero_candle_studio_1789836787321.jpg';
import scentedImg from '../assets/images/scented_creations_1789836800432.jpg';
import decorativeImg from '../assets/images/decorative_pieces_1789836813491.jpg';
import giftHomeImg from '../assets/images/gift_home_candles_1789836835254.jpg';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Bougies Artisanales',
  category: 'Handmade Candles',
  address: "21 Rue de l'Université, 34000 Montpellier, France",
  postalCode: '34000',
  city: 'Montpellier',
  country: 'France',
  phone: '+33 4 67 28 45 19',
  phoneRaw: '+33467284519',
  rating: 4.8,
  reviewCount: 21,
  about: 'Artisan candle studio creating handmade scented candles and decorative pieces for homes and gifts.',
};

export const STUDIO_IMAGES = {
  hero: heroImg,
  scented: scentedImg,
  decorative: decorativeImg,
  giftHome: giftHomeImg,
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', description: 'Artisan candle studio in Montpellier' },
  { id: 'creations', label: 'Products & Creations', description: 'Handmade scented candles & decorative pieces' },
  { id: 'about', label: 'About', description: 'Our studio philosophy and focus' },
  { id: 'craftsmanship', label: 'Craftsmanship', description: 'The artisan handmade approach' },
  { id: 'faq', label: 'FAQ', description: 'Questions and direct studio guidance' },
  { id: 'contact', label: 'Contact', description: 'Location, telephone & enquiry form' },
];

export const CREATION_CATEGORIES: CreationCategory[] = [
  {
    id: 'scented-candles',
    title: 'Handmade Scented Candles',
    subtitle: 'Sensory warmth created for everyday living spaces',
    description:
      'Our handmade scented candles are developed to bring gentle fragrance and ambient warmth into your rooms. Each candle is crafted by hand in our Montpellier studio with close attention paid to balance, burn quality, and a soothing sensory presence that enriches interior atmospheres without overwhelming them.',
    features: [
      'Individually hand-poured in small studio batches',
      'Balanced scented formulations designed for home environments',
      'Consistent flame and warm luminous glow',
      'Suited for quiet personal moments or shared gatherings',
    ],
    purpose: 'Ideal for living rooms, bedrooms, reading corners, and calming evening rituals.',
    image: STUDIO_IMAGES.scented,
    imageAlt: 'Handmade artisanal scented candles in textured vessels crafted by Bougies Artisanales',
  },
  {
    id: 'decorative-pieces',
    title: 'Decorative Pieces',
    subtitle: 'Sculptural forms that celebrate interior aesthetics',
    description:
      'Beyond traditional candle containers, Bougies Artisanales creates sculpted decorative candle pieces designed as freestanding visual accents. These pieces act as tangible decorative objects that enhance mantels, shelving, tables, and curated surfaces whether lit or displayed as sculptural art.',
    features: [
      'Sculptural geometric and organic silhouettes',
      'Artisanal surface textures and refined tactile finishes',
      'Designed to double as decorative interior accents',
      'Hand-finished individually in our Montpellier workshop',
    ],
    purpose: 'Curated for design-conscious homeowners seeking artisanal aesthetic focal points.',
    image: STUDIO_IMAGES.decorative,
    imageAlt: 'Sculptural decorative candle pieces handcrafted in Montpellier',
  },
  {
    id: 'home-creations',
    title: 'Home Candle Creations',
    subtitle: 'Atmospheric pieces curated to complement interior spaces',
    description:
      'Candles designed purposefully for home life. Whether enhancing a dining table setting, bringing gentle comfort to a hallway console, or creating an inviting glow in personal spaces, our home creations celebrate the relationship between light, fragrance, and interior harmony.',
    features: [
      'Harmonious designs that integrate seamlessly with various interior decor styles',
      'Formulated for pleasant everyday enjoyment throughout the home',
      'Thoughtful balance of visual proportion and ambient glow',
      'Crafted to elevate domestic tranquility and hospitality',
    ],
    purpose: 'Designed for daily domestic comfort, tabletop displays, and evening unwind routines.',
    image: STUDIO_IMAGES.hero,
    imageAlt: 'Handmade home candle creations arranged in a calm interior setting',
  },
  {
    id: 'gift-pieces',
    title: 'Gift-Oriented Pieces',
    subtitle: 'Thoughtful handmade gifts for meaningful celebrations',
    description:
      'Artisanal candles carry a distinct sense of care that makes them enduring gifts. Each piece created for gifting at Bougies Artisanales reflects the sincerity of handmade studio work, offering a considerate present for housewarmings, birthdays, celebrations, or genuine gestures of gratitude.',
    features: [
      'The authentic value of artisan craftsmanship in every piece',
      'Universal appeal for hosts, friends, family, and colleagues',
      'Tasteful presentation rooted in studio refinement',
      'A memorable sensory token from an independent Montpellier studio',
    ],
    purpose: 'Perfect for host gifts, personal milestones, festive occasions, and expressions of appreciation.',
    image: STUDIO_IMAGES.giftHome,
    imageAlt: 'Gift-oriented handmade candle piece thoughtfully prepared in Montpellier',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'creations',
    question: 'What types of candles does Bougies Artisanales create?',
    answer:
      'Bougies Artisanales specializes in handmade scented candles and decorative candle pieces. Our creations are thoughtfully crafted for both everyday home living and memorable gift-giving, balancing subtle fragrance with decorative visual character.',
  },
  {
    id: 'faq-2',
    category: 'studio',
    question: 'Where is the Bougies Artisanales studio located?',
    answer:
      "Our studio is located at 21 Rue de l'Université, 34000 Montpellier, France. We are nestled in the historic center of Montpellier, accessible to local residents and visitors looking for authentic artisan creations.",
  },
  {
    id: 'faq-3',
    category: 'studio',
    question: 'How can I contact the studio regarding current creations or studio visits?',
    answer:
      "You can contact Bougies Artisanales directly by telephone at +33 4 67 28 45 19, or by submitting an enquiry through our website's Contact page. Because specific opening hours can vary, we encourage reaching out in advance to confirm current availability.",
  },
  {
    id: 'faq-4',
    category: 'creations',
    question: 'What makes an artisan handmade candle different?',
    answer:
      'Unlike mass-produced candles, each piece at Bougies Artisanales is crafted by hand with careful attention given to every stage of creation. This hands-on approach ensures distinct character, refined tactile quality, and the authentic warmth of an independent maker.',
  },
  {
    id: 'faq-5',
    category: 'gifts',
    question: 'Are Bougies Artisanales creations suitable for gifts?',
    answer:
      'Yes. Gift-oriented pieces form an essential part of our studio collection. Handmade scented candles and sculpted decorative pieces make warm, considerate presents for housewarmings, birthdays, celebrations, and thoughtful personal gestures.',
  },
  {
    id: 'faq-6',
    category: 'care',
    question: 'How should decorative candle pieces be displayed and enjoyed?',
    answer:
      'Our decorative pieces are designed to stand beautifully as sculptural objects in their own right. When displaying them, place them on a flat, heat-resistant decorative tray or surface away from direct drafts. If lit, ensure a suitable plate catches any melting wax as decorative shapes naturally behave differently from container candles.',
  },
  {
    id: 'faq-7',
    category: 'care',
    question: 'Can I enquire about specific or large volume requests for events or homes?',
    answer:
      'Yes, we welcome inquiries for home collections or special occasions. Please reach out to Bougies Artisanales by phone at +33 4 67 28 45 19 or via our enquiry form to discuss your specific requirements directly with our studio.',
  },
];
