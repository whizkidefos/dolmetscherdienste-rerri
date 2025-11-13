import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dolmetscherdienste-rerri.de';
  const locales = ['de', 'en'];
  const pages = ['', 'about', 'services', 'languages', 'contact', 'legal'];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add pages for each locale
  locales.forEach((locale) => {
    pages.forEach((page) => {
      const url = page === '' ? `${baseUrl}/${locale}` : `${baseUrl}/${locale}/${page}`;
      
      sitemap.push({
        url,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            de: page === '' ? `${baseUrl}/de` : `${baseUrl}/de/${page}`,
            en: page === '' ? `${baseUrl}/en` : `${baseUrl}/en/${page}`,
          },
        },
      });
    });
  });

  return sitemap;
}
