import {generateSEOMetadata} from '@/components/seo/SEOHead';
import StructuredData from '@/components/seo/StructuredData';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Contact from '@/components/home/contact';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  
  return generateSEOMetadata({
    title: locale === 'de' 
      ? 'Professionelle Dolmetscherdienste - Dolmetscherdienste Rerri'
      : 'Professional Interpretation Services - Dolmetscherdienste Rerri',
    description: locale === 'de'
      ? 'Professionelle Dolmetscherdienste für afrikanische, asiatische und nahöstliche Sprachen. Simultandolmetschen, Konsekutivdolmetschen, Telefon- und Videodolmetschen (OPI/VRI). Spezialisiert auf seltene Sprachen wie Amharisch, Hausa, Igbo, Kurdisch, Arabisch, Persisch, Suaheli, Yoruba.'
      : 'Professional interpretation services for African, Asian, and Middle Eastern languages. Simultaneous, consecutive, phone and video interpretation (OPI/VRI). Specializing in rare languages including Amharic, Hausa, Igbo, Kurdish, Arabic, Persian, Swahili, Yoruba.',
    keywords: locale === 'de' 
      ? ['Dolmetscherdienste', 'Simultandolmetschen', 'Konsekutivdolmetschen', 'Telefondolmetschen', 'Videodolmetschen', 'Afrikanische Sprachen', 'Asiatische Sprachen', 'Nahöstliche Sprachen']
      : ['interpretation services', 'simultaneous interpretation', 'consecutive interpretation', 'phone interpretation', 'video interpretation', 'African languages', 'Asian languages', 'Middle Eastern languages'],
    canonical: `https://dolmetscherdienste-rerri.de/${locale}`,
    locale,
    alternateLocales: [
      { locale: 'de', url: 'https://dolmetscherdienste-rerri.de/de' },
      { locale: 'en', url: 'https://dolmetscherdienste-rerri.de/en' }
    ],
    ogType: 'website'
  });
}

export default function Home({ params }: { params: { locale: string } }) {
  return (
    <>
      <StructuredData type="organization" data={{}} />
      <StructuredData 
        type="service" 
        data={{
          name: "Professional Interpretation Services",
          description: "Comprehensive interpretation services in African, Asian, and Middle Eastern languages",
          languages: ['German', 'English', 'Amharic', 'Hausa', 'Igbo', 'Kurdish', 'Arabic', 'Persian', 'Swahili', 'Yoruba']
        }} 
      />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
    </>
  );
}