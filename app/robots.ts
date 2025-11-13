import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/admin/',
        '*.pdf',
      ],
    },
    sitemap: 'https://dolmetscherdienste-rerri.de/sitemap.xml',
    host: 'https://dolmetscherdienste-rerri.de',
  };
}
