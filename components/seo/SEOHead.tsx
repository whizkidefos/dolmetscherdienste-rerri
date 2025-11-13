import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  locale?: string;
  alternateLocales?: { locale: string; url: string }[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
  structuredData?: any;
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  canonical,
  locale = 'de',
  alternateLocales = [],
  ogImage = '/og-image.jpg',
  ogType = 'website',
  noIndex = false,
}: SEOProps): Metadata {
  const baseUrl = 'https://dolmetscherdienste-rerri.de';
  const fullTitle = title.includes('Dolmetscherdienste Rerri') 
    ? title 
    : `${title} | Dolmetscherdienste Rerri`;

  const defaultKeywords = [
    'Dolmetscher',
    'Übersetzer',
    'Simultandolmetschen',
    'Konsekutivdolmetschen',
    'Flüsterdolmetschen',
    'Telefondolmetschen',
    'Videodolmetschen',
    'OPI',
    'VRI',
    'Afrikanische Sprachen',
    'Asiatische Sprachen',
    'Nahöstliche Sprachen',
    'Amharisch',
    'Hausa',
    'Igbo',
    'Kurdisch',
    'Arabisch',
    'Persisch',
    'Suaheli',
    'Yoruba',
    'Interpretation services',
    'Translation services',
    'Simultaneous interpretation',
    'Consecutive interpretation',
    'Whispered interpretation',
    'Phone interpretation',
    'Video interpretation',
    'African languages',
    'Asian languages',
    'Middle Eastern languages'
  ];

  const allKeywords = Array.from(new Set([...defaultKeywords, ...keywords]));

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: 'Dolmetscherdienste Rerri' }],
    creator: 'Dolmetscherdienste Rerri',
    publisher: 'Dolmetscherdienste Rerri',
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: canonical || baseUrl,
      languages: alternateLocales.reduce((acc, alt) => {
        acc[alt.locale] = alt.url;
        return acc;
      }, {} as Record<string, string>),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical || baseUrl,
      siteName: 'Dolmetscherdienste Rerri',
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale,
      type: ogType,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`],
      creator: '@dolmetscherdienste_rerri',
    },
    verification: {
      google: 'your-google-verification-code',
    },
    other: {
      'application-name': 'Dolmetscherdienste Rerri',
      'apple-mobile-web-app-title': 'Dolmetscherdienste Rerri',
      'theme-color': '#1e40af',
      'msapplication-TileColor': '#1e40af',
    },
  };
}
