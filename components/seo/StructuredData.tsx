'use client';

interface StructuredDataProps {
  type: 'organization' | 'service' | 'webpage' | 'breadcrumb';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const generateSchema = () => {
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Dolmetscherdienste Rerri',
          url: 'https://dolmetscherdienste-rerri.de',
          logo: 'https://dolmetscherdienste-rerri.de/logo.png',
          description: 'Professional interpretation services specializing in African, Asian, and Middle Eastern languages including simultaneous, consecutive, whispered interpretation, OPI, and VRI.',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'DE',
            addressLocality: 'Germany'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+49-XXX-XXXXXXX',
            contactType: 'customer service',
            availableLanguage: ['German', 'English', 'Amharic', 'Hausa', 'Igbo', 'Kurdish', 'Arabic', 'Persian', 'Swahili', 'Yoruba']
          },
          sameAs: [
            'https://www.linkedin.com/company/dolmetscherdienste-rerri',
            'https://www.facebook.com/dolmetscherdienste-rerri'
          ],
          serviceArea: {
            '@type': 'Country',
            name: 'Germany'
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Interpretation Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Simultaneous Interpretation',
                  description: 'Real-time interpretation for conferences and meetings'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Consecutive Interpretation',
                  description: 'Sequential interpretation for smaller meetings and interviews'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Over-the-Phone Interpretation (OPI)',
                  description: 'Remote interpretation services via telephone'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Video Remote Interpretation (VRI)',
                  description: 'Remote interpretation services via video call'
                }
              }
            ]
          }
        };

      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: data.name || 'Professional Interpretation Services',
          description: data.description || 'Comprehensive interpretation services in African, Asian, and Middle Eastern languages',
          provider: {
            '@type': 'Organization',
            name: 'Dolmetscherdienste Rerri',
            url: 'https://dolmetscherdienste-rerri.de'
          },
          serviceType: 'Interpretation Services',
          availableLanguage: data.languages || ['German', 'English', 'Amharic', 'Hausa', 'Igbo', 'Kurdish', 'Arabic', 'Persian', 'Swahili', 'Yoruba'],
          serviceArea: {
            '@type': 'Country',
            name: 'Germany'
          }
        };

      case 'webpage':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: data.title,
          description: data.description,
          url: data.url,
          inLanguage: data.language || 'de',
          isPartOf: {
            '@type': 'WebSite',
            name: 'Dolmetscherdienste Rerri',
            url: 'https://dolmetscherdienste-rerri.de'
          },
          about: {
            '@type': 'Organization',
            name: 'Dolmetscherdienste Rerri'
          }
        };

      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data.items.map((item: any, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
          }))
        };

      default:
        return null;
    }
  };

  const schema = generateSchema();

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
