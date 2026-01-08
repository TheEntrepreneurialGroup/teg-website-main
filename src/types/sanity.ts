/**
 * TypeScript types for Sanity CMS content
 * These types mirror the Sanity schema definitions
 */

// Base Sanity types
export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface SanitySlug {
  _type: "slug";
  current: string;
}

// Localized content type
export interface LocaleString {
  de?: string;
  en?: string;
}

// Section types
export interface HeroButton {
  _key: string;
  text: LocaleString;
  link: string;
}

export interface HeroSection {
  title: LocaleString;
  since?: LocaleString;
  subtitle?: LocaleString;
  backgroundImage?: SanityImage;
  buttons?: HeroButton[];
}

export interface Stat {
  _key: string;
  value: LocaleString;
  label: LocaleString;
}

export interface StatsSection {
  title?: LocaleString;
  stats?: Stat[];
}

export interface Feature {
  _key: string;
  title: LocaleString;
  description: LocaleString;
  icon?: string;
}

export interface ImageCard {
  _key: string;
  image?: SanityImage;
  altText?: string;
  caption?: LocaleString;
}

export interface FeatureSection {
  title?: LocaleString;
  subtitle?: LocaleString;
  features?: Feature[];
  images?: ImageCard[];
}

export interface CtaItem {
  _key: string;
  title: LocaleString;
  description: LocaleString;
  buttonText: LocaleString;
  buttonLink: string;
}

export interface CtaSection {
  items?: CtaItem[];
}

export interface Testimonial {
  _key: string;
  quote: LocaleString;
  author: string;
  role?: LocaleString;
  image?: SanityImage;
}

export interface TestimonialSection {
  title?: LocaleString;
  testimonials?: Testimonial[];
}

export interface Contact {
  _key: string;
  name: string;
  role?: LocaleString;
  email?: string;
  linkedin?: string;
  image?: SanityImage;
}

export interface ContactSection {
  title?: LocaleString;
  greeting?: LocaleString;
  contacts?: Contact[];
}

export interface SeoData {
  metaTitle?: LocaleString;
  metaDescription?: LocaleString;
}

// Main page type
export interface PageData {
  title: string;
  slug: SanitySlug;
  seo?: SeoData;
  hero?: HeroSection;
  stats?: StatsSection;
  features?: FeatureSection;
  cta?: CtaSection;
  testimonials?: TestimonialSection;
  contact?: ContactSection;
}
